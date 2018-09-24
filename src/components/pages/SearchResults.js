import React, { Component } from 'react';
import { config, theme } from '../../config';
import Loading from '../Loading';
import styled from 'styled-components';
import Movie from '../Movie';

const Wrapper = styled.main`
    margin: 150px 0;
    padding: 0 50px;
`;

const Title = styled.h1`
    color: #fff;
    span {
        color: ${theme.colors.main};
    }
`;

const Results = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = { results: [] };
    }

    componentDidMount() {
        const url = `${config.apiUrl}search/movie?api_key=${config.apiKey}&query=${
            this.props.match.params.query
        }`;
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ results: data.results }));
    }
    render() {
        if (!this.state.results) return <Loading />;
        return (
            <Wrapper>
                <Title>
                    Search results for <span>{this.props.match.params.query}</span>
                </Title>
                <Results>
                    {this.state.results.map(movie => (
                        // <MovieResult {...movie} />
                        <Movie {...movie} />
                    ))}
                </Results>
            </Wrapper>
        );
    }
}
