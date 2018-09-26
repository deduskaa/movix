import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Div = styled.div`
    height: 100vh;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
`;

const Loading = () => {
    return (
        <Div>
            <FontAwesomeIcon icon="spinner" spin />
        </Div>
    );
};

export default Loading;
