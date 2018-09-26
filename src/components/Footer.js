import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import styled from 'styled-components';
import { theme } from '../config';

const Wrapper = styled.footer`
    color: #fff;
    display: flex;
    justify-content: center;
    padding: 20px;
    padding: 40px 15px;
`;

const IconWrapper = styled.button`
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    margin: 0 20px;
    min-width: 50px;
    padding: 10px 15px;
    transition: background-color 0.4s;

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
