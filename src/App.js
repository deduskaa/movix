import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import PopularPage from './components/pages/PopularPage';
import Nav from './components/Nav';
import TopRatedPage from './components/pages/TopRatedPage';
import { checkIfInCache } from './utils';
import { config } from './config';
import MoviePage from './components/pages/MoviePage';
import SearchResults from './components/pages/SearchResults';
import MyFavorites from './components/pages/MyFavorites';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
library.add(fas);

const popularUrl = `${config.apiUrl}movie/popular?api_key=${config.apiKey}`;
const topRatedUrl = `${config.apiUrl}movie/top_rated?api_key=${config.apiKey}`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: {
                popular: [],
                topRated: []
            },
            onTop: true
        };
    }

    componentDidMount() {
        let moviesObject = {};
        checkIfInCache(popularUrl)
            .then(data => {
                moviesObject.popular = data.results;
            })
            .then(() => checkIfInCache(topRatedUrl))
            .then(data => {
                moviesObject.topRated = data.results;
                this.setState({ movies: moviesObject });
            });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Nav />
                    <Route
                        path={process.env.PUBLIC_URL + '/popular'}
                        render={() => <PopularPage movies={this.state.movies} />}
                    />
                    <Route
                        path={process.env.PUBLIC_URL + '/top-rated'}
                        render={() => <TopRatedPage movies={this.state.movies} />}
                    />
                    <Route path={process.env.PUBLIC_URL + '/contact-us'} component={Contact} />
                    <Route path={process.env.PUBLIC_URL + '/favorites'} component={MyFavorites} />
                    <Route
                        path={process.env.PUBLIC_URL + '/movie/:movie/:id'}
                        render={props => <MoviePage key={props.match.params.id} {...props} />}
                    />
                    <Route
                        path={process.env.PUBLIC_URL + '/search/:query/'}
                        render={props => (
                            <SearchResults key={props.match.params.query} {...props} />
                        )}
                    />
                    <Route
                        exact
                        path={process.env.PUBLIC_URL + '/'}
                        render={() => <PopularPage movies={this.state.movies} />}
                    />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
