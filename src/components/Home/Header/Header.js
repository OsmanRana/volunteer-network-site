import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="mt-3 container">

            <Navbar collapseOnSelect expand="lg" bg="" variant="light">
                <Container>
                    <Navbar.Brand ><Link to='/home'><img className="w-25" src="/Group 1329.png" alt="" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="ms-5 fw-bold">
                            <Nav.Link className="ms-5" as={Link} to ="/home">Home</Nav.Link>
                            <Nav.Link className="ms-5" as={Link} to ="/donation">Donation</Nav.Link>
                            <Nav.Link className="ms-5" as={Link} to ="/Events">Events</Nav.Link>
                            <Nav.Link className="mx-5" as={Link} to ="/blog">Blog</Nav.Link>
                            <Link to='/register'><Button className="me-3">Register</Button></Link>
                            <Button variant="secondary">Admin</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           
        </div>
    );
};

export default Header;