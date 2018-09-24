import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { config } from '../config';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { getGenres, media, addToList, removeFromList, isSaved } from '../utils';
import { GenreButton, GenericButton, PrimaryButton } from './Button';
import Stats from './Stats';

const Wrapper = styled.section`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    margin-bottom: 30px;
    position: relative;
`;

const Content = styled.div`
    color: #fff;
    position: absolute;
    text-align: left;
    max-width: 600px;
    margin: 0 15px;
`;

const MovieFullScreen = styled.div`
    background-image: url(${p => `${config.movieApiConfig.images.base_url}w1280${p.bg}`});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    height: 100vh;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -10;

    &:before {
        background-color: #000;
        content: '';
        height: 100%;
        left: 0;
        opacity: 0.4;
        position: absolute;
        width: 100%;
    }
`;

const Title = styled.h1`
    font-family: Arial, sans-serif;
    font-size: 60px;
    margin-bottom: 10px;
    ${media.tablet`font-size: 40px;`};
`;

const Description = styled.p`
    color: #ddddddb0;
    font-size: 18px;
    letter-spacing: 0.25px;
    line-height: 30px;
    ${media.tablet`font-size: 16px;`};
`;

const Genres = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0;
    ${media.tablet`display:none;`};
`;

export class Jumbotron extends Component {
    constructor(props) {
        super(props);
        this.state = { isSaved: isSaved(props.movieData) };
    }

    add = movie => {
        addToList(movie);
        this.setState({ isSaved: true });
    };

    remove = movie => {
        removeFromList(movie);
        this.setState({ isSaved: false });
    };

    render() {
        const { movieData } = this.props;
        const genres = getGenres(movieData.genre_ids).slice(0, 3);
        const urlTitle = movieData.title
            .toLowerCase()
            .split(' ')
            .join('-');

        return (
            <section>
                <Wrapper>
                    <Content>
                        <Title>{movieData.title}</Title>
                        <Genres>
                            {genres.map(genre => (
                                <GenreButton title={genre[0].name} key={genre[0].id} />
                            ))}
                        </Genres>
                        <Description>{movieData.overview}</Description>
                        <Stats
                            voteAverage={movieData.vote_average}
                            popularity={movieData.popularity}
                        />
                        {this.state.isSaved ? (
                            <GenericButton
                                title="Favorite"
                                icon={<Icon icon="star" />}
                                onClick={() => this.remove(movieData)}
                            />
                        ) : (
                            <GenericButton
                                title="Favorite"
                                icon={<Icon icon={faStar} />}
                                onClick={() => this.add(movieData)}
                            />
                        )}
                        <Link to={`/movie/${encodeURIComponent(urlTitle)}/${movieData.id}`}>
                            <PrimaryButton title="View" icon={<Icon icon="eye" />} />
                        </Link>
                    </Content>
                    <MovieFullScreen bg={movieData.backdrop_path} />
                </Wrapper>
            </section>
        );
    }
}

export default Jumbotron;
