import React, { Component } from 'react';
import Movie from '../Movie';
import styled from 'styled-components';

const Wrapper = styled.main`
    margin-top: 120px;
    padding: 0 40px;
    color: #fff;
`;

const Favorites = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default class MyFavorites extends Component {
    savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    constructor(props) {
        super(props);

        const movieIds = Object.keys(this.savedMovies);
        this.state = {
            favoriteIds: movieIds || []
        };
    }

    removeFromFavorites = movieId => {
        const updatedFavorites = this.state.favoriteIds.filter(id => id !== movieId.toString());
        this.setState({ favoriteIds: updatedFavorites });
    };

    render() {
        return (
            <Wrapper>
                <h1>My Favorites</h1>
                {this.state.favoriteIds.length > 0 ? (
                    <Favorites>
                        {this.state.favoriteIds.map(id => (
                            <Movie
                                {...this.savedMovies[id]}
                                key={id}
                                removeFromFavorites={this.removeFromFavorites}
                            />
                        ))}
                    </Favorites>
                ) : (
                    <h3>You have no favorites, go get some!</h3>
                )}
            </Wrapper>
        );
    }
}
