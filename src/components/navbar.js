import { React } from 'react';
import { Navbar, Container, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './navbar.css'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Comet E Store</Navbar.Brand>
                <Form className="justify-content-center">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </Form>
                <Nav className="justify-content-end">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/products">Products</Nav.Link>
                    <Nav.Link href="/aboutus">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}


export default NavBar;