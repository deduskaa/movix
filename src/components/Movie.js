import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

import { urlTitle, addToList, isSaved, removeFromList } from '../utils';
import { config } from '../config';
import { GenericButton, PrimaryButton, Button } from './Button';

const Poster = styled.div`
    background-color: #fff;
    background-image: url(${p => `${p.bg}`});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: absolute;
    transition: filter 0.4s;
    width: 100%;
    z-index: -2;
`;

const Content = styled.div`
    align-items: center;
    display: none;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 10px;
    position: absolute;
    text-align: center;
    width: 100%;

    ${Button} {
        margin: 5px 0;
    }
`;

const Wrapper = styled.article`
    border: 2px solid transparent;
    color: #ddd;
    flex-shrink: 0;
    height: 400px;
    margin: 5px;
    overflow: hidden;
    position: relative;
    transition: border 0.2s;
    width: 250px;
    transition: all 0.6s;

    &:hover {
        border: 2px solid #ddd;

        ${Poster} {
            filter: blur(10px);
        }

        ${Content} {
            display: flex;
        }

        &:before {
            background-color: #000;
            content: '';
            height: 100%;
            left: 0;
            opacity: 0.5;
            position: absolute;
            top: 0;
            width: 100%;
            z-index: -1;
        }
    }
`;

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = { isSaved: isSaved(props), style: { opacity: 1, transform: 'rotateY(0)' } };
    }

    add = movie => {
        addToList(movie);
        this.setState({ isSaved: true });
    };

    remove = movie => {
        removeFromList(movie);
        this.setState(
            { style: { opacity: 0, transform: 'rotateY(70deg)' }, isSaved: false },
            () => {
                setTimeout(() => {
                    this.props.removeFromFavorites(movie.id);
                }, 500);
            }
        );
    };

    render() {
        const { title, vote_average, id, poster_path } = this.props;
        return (
            <Wrapper style={this.state.style}>
                <Content>
                    <h3>{title}</h3>
                    <p>
                        <FontAwesomeIcon icon="star" /> {vote_average}
                    </p>
                    <Link to={`/movie/${encodeURIComponent(urlTitle(title))}/${id}`}>
                        <PrimaryButton title="View" icon={<FontAwesomeIcon icon="eye" />} />
                    </Link>
                    {this.state.isSaved ? (
                        <GenericButton
                            title="Favorite"
                            icon={<FontAwesomeIcon icon="star" />}
                            onClick={() => this.remove(this.props)}
                        />
                    ) : (
                        <GenericButton
                            title="Favorite"
                            icon={<FontAwesomeIcon icon={faStar} />}
                            onClick={() => this.add(this.props)}
                        />
                    )}
                </Content>
                <Poster bg={`${config.movieApiConfig.images.base_url}w342${poster_path}`} />
            </Wrapper>
        );
    }
}
