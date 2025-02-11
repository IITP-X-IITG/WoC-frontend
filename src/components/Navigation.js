import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import style_nav from './Navigation.css';
import { NavLink } from 'react-router-dom';
import { NavbarBrand } from 'react-bootstrap';
import ProfileImage from '../pages/Images/Default_pfp.jpg';

import CustomLink from './CustomLink';
import CustomProfileLink from './CustomProfileLink';

export default function Navigation(props) {
    return (
        <div style={style_nav}>
            <Navbar bg="light" expand="xl" className={props.hasShadow ? 'shadow' : ''}>
                <Container>
                    <NavbarBrand>
                        <NavLink exact to="/">
                            CODEPEAK
                        </NavLink>
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto nav-list">
                            <CustomProfileLink className="profile-button-collapse" to="/login">Profile</CustomProfileLink>
                            <CustomLink to="/">Home</CustomLink>
                            <CustomLink to="/leaderboard">Leaderboard</CustomLink>
                            <CustomLink to="/register">Register</CustomLink>
                            <CustomLink to="/project">Projects</CustomLink>
                            <CustomLink to="/reward" style={{ display: 'none' }}>Rewards</CustomLink>
                            <CustomLink to="/team">Team</CustomLink>
                            <CustomLink to="/events">Events</CustomLink>
                        </Nav>

                        <NavLink
                            className="profile-button"
                            to="/login"
                            // activeStyle={{
                            //     border: '2px solid #589ba2',
                            // }}
                        >
                            <img src={ProfileImage} alt="Profile" />
                        </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
