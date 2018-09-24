import React, { Component } from 'react';
import Jumbotron from '../Jumbotron';
import MovieList from '../MovieList';

class TopRatedPage extends Component {
    render() {
        const { topRated, popular } = this.props.movies;
        if (!this.props.movies) return null;
        const mostRated = topRated[0];

        return (
            <div>
                {mostRated && <Jumbotron movieData={mostRated} />}
                <MovieList title="Top Rated Movies" movies={topRated} />
                <MovieList title="Most Popular Movies" movies={popular} />
            </div>
        );
    }
}

export default TopRatedPage;
