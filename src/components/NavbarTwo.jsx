import React, { useState } from 'react'
import { Button, Nav, Navbar, Container, Form, NavDropdown, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavbarTwo.css'


const Navb = () => {

    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    return (
        <>
            <Navbar id="navbar" className="ml-auto" variant="dark" expand={'sm'}>
                <Navbar.Brand id="logohead" href="/">Breaking Bad</Navbar.Brand>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Categories" id="basic-nav-dropdown" show={show} onMouseEnter={showDropdown}
                            onMouseLeave={hideDropdown}>
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Clothes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Food</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Check Cart</NavDropdown.Item>
                            <NavDropdown.Item href="/data"> Add Product</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Form inline>
                            <Form.Control style={{ width: "125px" }} id="selectform" as="select">
                                <option>Catagory</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                            <FormControl id="inputform" tyle={{ width: "350px" }} type="text" placeholder="Search" className="mr-sm-2" />
                            <Button id="btn-nav" variant="dark">Search</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
                <NavDropdown title="Login" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                </NavDropdown>

            </Navbar>

        </>
    )
}

export default Navb
