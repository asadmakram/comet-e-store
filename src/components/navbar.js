import { React } from 'react';
import { Navbar, Container, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './navbar.css'

const NavBar = () => {
    return (
        // <nav className="navbar">
        //     <h1 className="logo">Comet E Store</h1>
        //     <input type="text" placeholder="Search" className="search" />
        //     <ul className="nav-links">
        //         <li><a href="/" >Home</a></li>
        //         <li><a href="/products">Products</a></li>
        //         <li><a href="/AboutUs">About us</a></li>
        //     </ul>
        // </nav>




        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
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


        // <Navbar  bg="dark" variant="dark">
        //     <Container fluid>
        //         <Navbar.Brand href="/">Comet E Store</Navbar.Brand>
        //         {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}

        //         <Form className="d-flex">
        //             <FormControl
        //                 type="search"
        //                 placeholder="Search"
        //                 className="me-2"
        //                 aria-label="Search"
        //             />
        //             {/* <Button variant="outline-success">Search</Button> */}
        //         </Form>
        //         <Navbar.Collapse>
        //             <Nav
        //                 className="me-auto my-2 my-lg-0"
        //                 // style={{ maxHeight: '100px' }}
        //                 navbarScroll
        //             >
        //                 <Nav.Link href="/">Home</Nav.Link>
        //                 <Nav.Link href="/products">Products</Nav.Link>
        //                 <Nav.Link href="/aboutus">About</Nav.Link>
        //             </Nav>

        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    );
}


export default NavBar;