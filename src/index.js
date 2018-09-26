import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { checkIfInCache } from './utils';
import { config } from './config';

const configUrl = `${config.apiUrl}configuration?api_key=${config.apiKey}`;
const genreUrl = `${config.apiUrl}genre/movie/list?api_key=${config.apiKey}`;

async function getMovieApiConfig() {
    await checkIfInCache(configUrl).then(data => (config.movieApiConfig = data));
    await checkIfInCache(genreUrl).then(data => (config.movieGenres = data.genres));
}

getMovieApiConfig().then(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
});
