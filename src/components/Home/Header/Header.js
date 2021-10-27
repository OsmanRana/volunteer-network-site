import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        <div className="mt-3 container">

            <Navbar collapseOnSelect expand="lg" bg="" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img className="w-25" src="/Group 1329.png" alt="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="ms-5 fw-bold">
                            <Nav.Link className="ms-5" href="#features">Home</Nav.Link>
                            <Nav.Link className="ms-5" href="#pricing">Donation</Nav.Link>
                            <Nav.Link className="ms-5" href="#pricing">Events</Nav.Link>
                            <Nav.Link className="mx-5" href="#pricing">Blog</Nav.Link>
                            <Button className="me-3">Register</Button>
                            <Button variant="secondary">Admin</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="text-center my-5">
                <h1 className=" fw-bolder">I GROW BY HELPING PEOPLE IN NEED</h1>
            </div>
            <div className="w-50 container my-5">
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="primary">Search</Button>
                </Form>
            </div>
        </div>
    );
};

export default Header;