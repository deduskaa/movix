import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 30px;
    border: 0;
    color: #fff;
    ${p => p.onClick && 'cursor: pointer;' }
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1.2px;
    margin: 5px 8px 5px 0;
    min-width: 135px;
    padding: 15px 25px;
    position: relative;
    text-transform: uppercase;
    transition: background-color 0.7s;

    &:before {
        opacity: 0;
        background: #9067c6;
        border-radius: 30px;
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transform: scale3d(0.7, 1, 1);
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        transition: transform 0.4s, opacity 0.4s;
        width: 100%;
        z-index: -1;
    }

    &:hover {
        background-color: #9067c6;

        &:before {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
`;

const Primary = styled(Button)`
    background-color: #9067c6;
`;

export const GenreButton = props => {
    return <Button>{props.title}</Button>;
};

export const GenericButton = props => {
    return (
        <Button onClick={props.onClick}>
            {props.icon} {props.title}
        </Button>
    );
};

export const PrimaryButton = props => {
    return (
        <Primary>
            {props.icon} {props.title}
        </Primary>
    );
};
