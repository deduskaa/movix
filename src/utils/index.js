import { css } from 'styled-components';
import { config } from '../config';

export function getGenres(genreIds) {
    return genreIds.map(id => config.movieGenres.filter(genre => genre.id === id));
}

export function urlTitle(title) {
    return title
        .toLowerCase()
        .split(' ')
        .join('-');
}

// Check if stuff cached, if not, cache
// TODO: Get new ones every week?
export function checkIfInCache(url) {
    return caches
        .match(url)
        .then(response => {
            return (
                response ||
                fetch(url).then(function(r) {
                    caches.open('v1').then(function(cache) {
                        cache.put(url, r);
                    });
                    return r.clone();
                })
            );
        })
        .then(r => r.json())
        .catch(e => console.log(e));
}

export function addToList(movie) {
    if (!localStorage.getItem('savedMovies')) {
        const savedMovies = { [movie.id]: movie };
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    } else {
        const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
        savedMovies[movie.id] = movie;
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    }
}

export function removeFromList(movie) {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    delete savedMovies[movie.id];
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
}

export function isSaved(movie) {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    if (savedMovies) {
        const savedMovieIds = Object.keys(savedMovies);
        return savedMovieIds.includes(movie.id.toString());
    } else {
        return false;
    }
}

/*STYLED COMPONENTS MEDIA QUERYS */

const sizes = {
    giant: 1170,
    desktop: 992,
    tablet: 768,
    phone: 376
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args) => css`
        @media (max-width: ${emSize}em) {
            ${css(...args)};
        }
    `;
    return accumulator;
}, {});
