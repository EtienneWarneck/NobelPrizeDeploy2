import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import classes from './NavBarTitle.module.css';
import { Link } from "react-router-dom";

class NavBarTitle extends Component {



    render() {

        return (
            <div>
                <Navbar className={classes.style} bg="" expand="lg" color=" #DDC59D">
                    <Nav.Link className={classes.styleText} href='/'>Nobel Prize Laureates</Nav.Link>
                </Navbar>
                <Link style={classes.styleHomeButton} href="/">Home</Link>
                <Link style={classes.styleHomeButton2} href="https://github.com/EtienneWarneck/NobelPrizeAPI/tree/master/my-app">GitHub</Link>
            </div >
        )
    }
}

export default NavBarTitle;

