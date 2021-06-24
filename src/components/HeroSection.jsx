import React from 'react'
import { Button, Carousel, CarouselItem, Nav, Alert, Card, Navbar, Form, NavDropdown, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className="w-100" id="heroDiv">
            <Card style={{width:"90%"}} className="card_hero">
                <img src="walter2.jpg"  fluid/>
            </Card>

        </div>
    )
}

export default HeroSection
