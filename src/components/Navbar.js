
import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';

class Navbaar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">WikiCountries</Navbar.Brand>  
                </Navbar>
            </div>
        )
    }
}

export default Navbaar