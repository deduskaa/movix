import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { media } from '../utils';

const Form = styled.form`
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    margin: 0 40px;

    ${media.tablet`display: none;`};
`;

const Button = styled.button`
    color: #fff;
    border: none;
    background-color: ${theme.colors.main};
    height: 37px;
    width: 45px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    font-size: 18px;
`;

const Input = styled.input`
    min-width: 300px;
    padding: 10px 15px;
    border: none;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    outline: none;
    font-size: 14px;
`;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleSubmit = e => {
        e.preventDefault();
        const { value } = this.state;
        console.log(this.props);
        this.props.history.push(`${process.env.PUBLIC_URL}/search/${value}`);
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input
                    type="search"
                    placeholder="Search for a movie"
                    onChange={e => this.setState({ value: e.currentTarget.value })}
                />
                <Button>
                    <FontAwesomeIcon icon="search" />
                </Button>
            </Form>
        );
    }
}

export default withRouter(Search);
