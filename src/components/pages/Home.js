import React, { Component } from 'react';
import { checkIfInCache } from '../../utils';
import { config } from '../../config';
import Loading from '../Loading';
import styled from 'styled-components';

const MovieFullScreen = styled.div`
    /* background-image: url(${p => `${config.movieApiConfig.images.base_url}w1280${p.bg}`}); */
    background-repeat: no-repeat;
    background-size: cover;
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

const Wrapper = styled.section`
    display: flex;
    justify-content: centeR;
    align-items: center;
    height: 100vh;
`;

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nowPlaying: null
        };
    }

    componentDidMount() {
        const nowPlayingUrl = `${config.apiUrl}movie/now_playing?api_key=${config.apiKey}`;
        checkIfInCache(nowPlayingUrl).then(data => this.setState({ nowPlaying: data.results }));
    }

    render() {        
        if (!this.state.nowPlaying) return <Loading />;
        const randomTitle = Math.floor(Math.random() * 10);

        return (
            <Wrapper>
                <MovieFullScreen bg={this.state.nowPlaying[randomTitle].backdrop_path} />
            </Wrapper>
        );
    }
}
