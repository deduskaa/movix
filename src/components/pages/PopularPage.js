import React from 'react';
import Jumbotron from '../Jumbotron';
import MovieList from '../MovieList';
import Loading from '../Loading';

const PopularPage = props => {
    const { popular, topRated } = props.movies;
    if (popular.length === 0) return <Loading />;
    const mostPopular = popular[0];

    return (
        <main>
            {mostPopular && <Jumbotron movieData={mostPopular} />}
            <MovieList title="Most Popular Movies" movies={popular} />
            <MovieList title="Top Rated Movies" movies={topRated} />
        </main>
    );
};

export default PopularPage;
