import React from 'react';
import { config } from '../config';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Li = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 5px 10px 5px 0;
    width: 250px;
    padding: 5px;
    transition: background-color 0.3s;
    border-radius: 5px;

    &:hover {
        background-color: #333;
    }

    img {
        height: 90px;
        margin: 0 10px 0 0;
    }
`;

const Character = styled.p`
    color: rgba(255, 255, 255, 0.5);
    margin: 5px 0;
`;

const Person = styled.div`
    width: 140px;
`;

const Icon = styled(FontAwesomeIcon)`
    margin: auto;
`;

const PlaceholderImg = styled.div`
    align-content: center;
    border: 1px solid #fff;
    display: flex;
    flex-direction: column;
    height: 90px;
    justify-content: center;
    margin: 0 10px 0 0;
    position: relative;
    width: 60px;

    p {
        text-align: center;
        margin: 0 3px 10px;
        font-size: 10px;
    }
`;

const CrewItem = ({ crew }) => (
    <Li>
        {crew.profile_path ? (
            <img
                src={`${config.movieApiConfig.images.base_url}w185${crew.profile_path}`}
                alt={crew.name}
            />
        ) : (
            <PlaceholderImg>
                <Icon icon="user-alt" size="3x" />
                <p>No picture</p>
            </PlaceholderImg>
        )}
        <Person>
            {crew.name}
            {crew.character && <Character>as {crew.character}</Character>}
            {crew.job && <Character>{crew.job}</Character>}
        </Person>
    </Li>
);

export default CrewItem;
