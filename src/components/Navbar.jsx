import React from 'react'
import { Button, Nav, Navbar, Form, NavDropdown, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'


const Navb = () => {
    return (
        <>
            <Navbar id="navbar" className="pt-4" variant="dark" expand={'sm'}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                
                    <Nav className="mr-auto">
                    <NavDropdown title="EPISODES" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Home" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Autions" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Vendors" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Shortcodes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Blog" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Media" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="About" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Contact" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Button variant="outline-light">Contact us</Button>
                    </Nav>
                
                    </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navb
