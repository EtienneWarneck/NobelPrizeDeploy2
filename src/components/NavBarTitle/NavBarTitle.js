import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import classes from './Navbar.module.css';

// import Radium from 'radium';

class NavBarTitle extends Component {

    render() {
        return (
            <div className={classes.style} >
                <Navbar bg="" expand="lg" className="navbar d-flex justify-content-center" >
                    <Nav className={classes.styleText} href='/'>Nobel Prize Laureates</Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavBarTitle;

