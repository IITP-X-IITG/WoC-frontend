import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import style_nav from './Navigation.css'

export default function Navigation() {
    return (
        <div style={style_nav}>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}
