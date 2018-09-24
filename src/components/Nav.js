import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Search from './Search';
import { media } from '../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from '../config';

const Wrapper = styled.nav`
    background-color: ${p => (p.onTop ? 'transparent' : 'rgba(0,0,0, .9)')};
    color: #fff;
    display: flex;
    height: ${p => (p.onTop ? 'auto' : '100px')};
    justify-content: space-between;
    position: fixed;
    top: 0;
    transition: background-color 0.4s;
    width: 100%;
    z-index: 100;

    ul {
        display: flex;
        margin: 0;
        padding: 40px 30px;

        ${media.tablet`display: none;`};
    }
`;

const NavItem = styled.li`
    border-bottom: 3px solid transparent;
    list-style-type: none;
    margin: 0 20px;
    transition: border 0.3s;

    &:hover {
        border-bottom: 3px solid ${theme.colors.main};
    }

    a {
        color: #fff;
        letter-spacing: 1px;
        text-decoration: none;
        text-transform: uppercase;
    }
`;

const LogoWrapper = styled.a`
    align-items: center;
    color: #fff;
    display: flex;
    font-size: 24px;
    text-decoration: none;

    svg {
        height: 64px;
        margin: 20px 15px;
        width: 64px;
    }
`;

const Icon = styled.button`
    padding: 0 30px;
    display: none;
    font-size: 34px;
    color: #fff;
    ${media.tablet`display: inline-block;`};
`;

const Menu = styled.div`
    align-items: flex-end;
    display: none;
    flex-direction: column;
    position: fixed;
    right: 0;
    height: 100%;
    background-color: #000;
    transform: ${p => (p.isOpen ? 'translate3d(0px, 0px, 0px)' : 'translate3d(100%, 0px, 0px)')};
    transition: transform 0.8s;
    ${media.tablet`display: flex;`};

    ${Icon} {
        padding: 15px;
    }

    ${NavItem} {
        font-size: 20px;
        margin: 20px 50px;
    }
`;

const Logo = () => (
    <LogoWrapper href="/">
        <svg>
            <circle cx="32" cy="32" fill="#9067c6" r="32" />
            <path
                d="M32,16c9.925,0,18,8.075,18,18s-8.075,18-18,18s-18-8.075-18-18S22.075,16,32,16 M32,12  c-12.15,0-22,9.85-22,22s9.85,22,22,22s22-9.85,22-22S44.15,12,32,12L32,12z"
                fill="#231F20"
                opacity="0.2"
            />
            <g opacity="0.2">
                <path
                    d="M28,44.619c-0.345,0-0.69-0.089-1-0.268c-0.619-0.357-1-1.018-1-1.732V25.381c0-0.714,0.381-1.375,1-1.732   c0.619-0.357,1.381-0.357,2,0l12,8.619c0.619,0.357,1,1.017,1,1.732s-0.381,1.375-1,1.732l-12,8.619   C28.69,44.529,28.345,44.619,28,44.619z"
                    fill="#231F20"
                />
            </g>
            <path
                d="M32,14c9.925,0,18,8.075,18,18s-8.075,18-18,18s-18-8.075-18-18S22.075,14,32,14 M32,10  c-12.15,0-22,9.85-22,22s9.85,22,22,22s22-9.85,22-22S44.15,10,32,10L32,10z"
                fill="#E0E0D1"
            />
            <g>
                <path
                    d="M28,42.619c-0.345,0-0.69-0.089-1-0.268c-0.619-0.357-1-1.018-1-1.732V23.381c0-0.714,0.381-1.375,1-1.732   c0.619-0.357,1.381-0.357,2,0l12,8.619c0.619,0.357,1,1.017,1,1.732c0,0.714-0.381,1.375-1,1.732l-12,8.619   C28.69,42.529,28.345,42.619,28,42.619z"
                    fill="#fbd25e"
                />
            </g>
        </svg>
        MoviX
    </LogoWrapper>
);

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { onTop: true, isOpen: false };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidUnMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        window.scrollY === 0 ? this.setState({ onTop: true }) : this.setState({ onTop: false });
    };

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        const routes = [
            { path: './popular', title: 'Popular' },
            { path: './top-rated', title: 'Top Rated' },
            { path: './favorites', title: 'My Favorites' },
            { path: './contact-us', title: 'Contact' }
        ];
        return (
            <Wrapper onTop={this.state.onTop}>
                <Logo />
                <Search />
                <Icon onClick={this.toggleMenu}>
                    <FontAwesomeIcon icon="bars" />
                </Icon>
                <Menu isOpen={this.state.isOpen}>
                    <Icon onClick={this.toggleMenu}>
                        <FontAwesomeIcon icon="times" />
                    </Icon>
                    {routes.map(route => (
                        <NavItem key={route.path}>
                            <NavLink to={route.path}>{route.title}</NavLink>
                        </NavItem>
                    ))}
                </Menu>
                <ul>
                    {routes.map(route => (
                        <NavItem key={route.path}>
                            <NavLink to={route.path}>{route.title}</NavLink>
                        </NavItem>
                    ))}
                </ul>
            </Wrapper>
        );
    }
}

export default Nav;
