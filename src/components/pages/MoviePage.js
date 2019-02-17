import React, { Component } from 'react';
import styled from 'styled-components';
import { config } from '../../config';
import { GenreButton } from '../Button';
import MovieList from '../MovieList';
import Stats from '../Stats';
import CreditsList from '../CreditsList';
import { media } from '../../utils';
import Loading from '../Loading';

const Background = styled.div`
    background-image: url(${p => `${config.movieApiConfig.images.secure_base_url}w1280${p.bg}`});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 85vh;
    position: relative;
    top: 0;
    width: 100%;
    z-index: -10;

    &:before {
        background: linear-gradient(to bottom, rgba(57, 73, 171, 0.1) 0%, rgba(17, 17, 17, 1) 77%);
        content: '';
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: -1;
    }
`;

const Wrapper = styled.main`
    align-items: center;
    color: #fff;
    display: flex;
    flex-direction: column;
`;

const MovieWrapper = styled.section`
    padding: 20px 40px;
    margin-top: -35%;
    flex-wrap: wrap;
    display: flex;
`;

const Info = styled.div`
    padding: 0 20px;
    max-width: 750px;
    margin: 0 10px;
    flex: 1;
    flex-direction: column;
    display: flex;
`;

const Poster = styled.div`
    background-image: url(${p => `${config.movieApiConfig.images.secure_base_url}w342${p.bg}`});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    margin: 0 20px;
    width: 300px;

    ${media.tablet`height: 300px; width: 200px;`};
`;

const Title = styled.h1`
    color: #fff;
    font-size: 56px;
    margin: 0 0 10px 0;
`;

const Description = styled.p`
    color: #fff;
    font-size: 16px;
    letter-spacing: 0.25px;
    line-height: 30px;
    margin-top: 30px;
    max-width: 600px;
`;

const Credits = styled.section`
    display: flex;
    max-width: 1150px;
    padding: 0 30px;
    width: 100%;
`;

export default class MoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = { movieData: null, similar: null };
    }

    componentDidMount() {
        const movieId = this.props.match.params.id;
        console.log(this.props.match.params.id);

        let movies = {};

        fetch(`${config.apiUrl}movie/${movieId}?api_key=${config.apiKey}`)
            .then(response => response.json())
            .then(movieData => (movies.movieData = movieData))
            .then(() => fetch(`${config.apiUrl}movie/${movieId}/similar?api_key=${config.apiKey}`))
            .then(response => response.json())
            .then(similarMovies => (movies.similar = similarMovies.results))
            .then(() => fetch(`${config.apiUrl}movie/${movieId}/credits?api_key=${config.apiKey}`))
            .then(response => response.json())
            .then(credits =>
                this.setState({ movieData: movies.movieData, similar: movies.similar, credits })
            );
    }

    render() {
        const { movieData, similar, credits } = this.state;
        if (!movieData) return <Loading />;
        return (
            <Wrapper>
                <Background bg={movieData.backdrop_path} />
                <MovieWrapper>
                    <Poster bg={movieData.poster_path} />
                    <Info>
                        <Title>{movieData.title}</Title>
                        <p>
                            {movieData.release_date.slice(0, 4)} - {movieData.runtime} min
                        </p>
                        <div>
                            {movieData.genres.slice(0, 3).map(genre => (
                                <GenreButton title={genre.name} key={genre.name} />
                            ))}
                        </div>
                        <Description>{movieData.overview}</Description>
                        <Stats
                            voteAverage={movieData.vote_average}
                            popularity={movieData.popularity}
                        />
                    </Info>
                </MovieWrapper>
                <Credits>
                    <CreditsList credits={credits.cast} title="Cast" />
                    <CreditsList credits={credits.crew} title="Crew" />
                </Credits>
                {similar.length > 0 && <MovieList title="Similar movies" movies={similar} />}
            </Wrapper>
        );
    }
}