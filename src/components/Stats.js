import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { media } from '../utils';

const Info = styled.div`
    font-size: 32px;
    display: flex;
    margin-bottom: 15px;
    color: #fff;
    ${media.tablet`font-size: 24px;`}

    svg {
        margin: 0 10px 0 0;
    }
    p {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 15px;
        font-weight: 600;
        flex: 1;

        &:first-of-type {
            margin-left: 0;
        }
    }

    span {
        font-weight: 400;
        font-size: 14px;
        color: #ddddddb0;
        margin: 0 0 0 15px;
    }
`;

const Stats = props => {
    const popularity = Math.round(props.popularity * 10) / 10;
    return (
        <Info>
            <p>
                <Icon icon="star" /> {props.voteAverage} <span>Vote average</span>
            </p>
            <p>
                <Icon icon="fire" /> {popularity} <span>Popularity</span>
            </p>
        </Info>
    );
};

export default Stats;
