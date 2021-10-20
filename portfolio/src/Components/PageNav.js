import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class PageNav extends Component {
    constructor(props) {
        super(props)
        this.state ={}
    }

    render() {
        return (
            <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Adam Dera</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About Me</Nav.Link>
                        <Nav.Link href="#projects">My Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact Me</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            </div>
        )
    }
}

export default PageNav;