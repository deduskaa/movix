import React from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const List = styled.section`
    padding: 25px 10px 25px 35px;
    flex-direction: column;
    display: flex;
`;

const MoviesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    transform: ${p => `translate3d(${p.offset}px, 0px, 0px)`};
    transition: transform 0.6s;
    width: 97.5vw;
`;

const Title = styled.h2`
    color: #fff;
    text-align: left;
`;

const ButtonContainer = styled.div`
    align-self: flex-end;
    position: absolute;
`;

const NavButton = styled.button`
    background-color: #222;
    border-radius: 50%;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    margin: 5px;
    padding: 15px 20px;
`;

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { listOffset: 0 };
    }

    handleClick = direction => {
        console.log(direction);
        let listOffset;
        if (direction === 'right') {
            listOffset = this.state.listOffset > -4020 ? this.state.listOffset - 268 : 0;
        } else {
            listOffset = this.state.listOffset < 0 ? this.state.listOffset + 268 : -4020;
        }

        this.setState({ listOffset });
    };
    render() {
        return (
            <List>
                <Title>{this.props.title}</Title>
                <ButtonContainer>
                    <NavButton onClick={() => this.handleClick('left')}>
                        <Icon icon="chevron-left" />
                    </NavButton>
                    <NavButton onClick={() => this.handleClick('right')}>
                        <Icon icon="chevron-right" />
                    </NavButton>
                </ButtonContainer>
                <div style={{ overflow: 'hidden' }}>
                    <MoviesWrapper offset={this.state.listOffset}>
                        {this.props.movies.map(movie => (
                            <Movie {...movie} key={movie.id} />
                        ))}
                    </MoviesWrapper>
                </div>
            </List>
        );
    }
}

export default MovieList;
