import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import classes from './Navbar.module.css';

// import Radium from 'radium';

class NavBar extends Component {

    render() {
        return (
            <div className={classes.style} >
                <Navbar bg="" expand="lg" className="navbar d-flex justify-content-center" >
                    <Nav.Link className={classes.styleText} href='/'>Nobel Prize Laureates</Nav.Link>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;

