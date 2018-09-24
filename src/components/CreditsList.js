import React from 'react';
import CrewItem from './CrewItem';
import styled from 'styled-components';

const Wrapper = styled.section`
    color: #fff;
    display: inline-block;
    width: 50%;
    
    ul {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
    }
`

const CreditsList = props => {
    return (
        <Wrapper>
            <h2>{props.title}</h2>
            <ul>
                {props.credits.slice(0, 10).map(crew => (
                    <CrewItem crew={crew} />
                ))}
            </ul>
        </Wrapper>
    );
};

export default CreditsList;
