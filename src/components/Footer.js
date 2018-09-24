import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import styled from 'styled-components';
import { theme } from '../config';

const Wrapper = styled.footer`
    padding: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    padding: 40px 15px;
`;

const IconWrapper = styled.button`
    border-radius: 50%;
    padding: 10px 15px;
    min-width: 50px;
    font-size: 20px;
    background-color: rgba(255, 255, 255, 0.15);
    margin: 0 20px;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.4s;
    border: none;

    &:hover {
        background-color: ${theme.colors.main};
    }
`;

const Footer = () => {
    return (
        <Wrapper>
            <IconWrapper>
                <FontAwesomeIcon icon={faFacebookF} />
            </IconWrapper>
            <IconWrapper>
                <FontAwesomeIcon icon={faLinkedinIn} />
            </IconWrapper>
            <IconWrapper>
                <FontAwesomeIcon icon={faGithub} />
            </IconWrapper>
        </Wrapper>
    );
};

export default Footer;
