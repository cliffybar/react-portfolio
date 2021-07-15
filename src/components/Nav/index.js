import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

<Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand href="#home">Big Red developer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>

export default Nav;