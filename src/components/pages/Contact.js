import React, { Component } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../Button';
import { theme } from '../../config';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #fff;
`;

const Card = styled.section`
    background: #111;
    box-shadow: 0px 4px 20px 1px #000;
    padding: 50px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 2px solid #2d2d2d;
    label {
        text-transform: uppercase;
        font-weight: 300;
        margin-bottom: 5px;
        letter-spacing: 1px;
    }
    input[type='textarea'] {
        height: 100px;
    }
`;

const Input = styled.input`
    background: transparent;
    border: 0;
    border-bottom: 3px solid ${theme.colors.main};
    color: #fff;
    flex: 1;
    font-weight: 300;
    font-size: 16px;
    outline: none;
    padding: 10px 0 3px;
    margin: 0 0 40px;
    width: 300px;
`;

const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
    margin: 0 0 40px;
`;

export default class Contact extends Component {
    render() {
        return (
            <Wrapper>
                <Card>
                    <Title>Contact Us</Title>
                    <label>First name</label>
                    <Input type="text" />
                    <label>Last name</label>
                    <Input type="text" />
                    <label>Your message</label>
                    <Input type="textarea" />
                    <PrimaryButton title="Send" />
                </Card>
            </Wrapper>
        );
    }
}
