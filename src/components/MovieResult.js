import React from 'react';
import styled from 'styled-components';

import Movie from './Movie';

const Wrapper = styled.div`
    border: 2px solid white;
`

const MovieResult = props => (
    <Wrapper>
        <Movie {...props} />
        
    </Wrapper>
);

export default MovieResult;
