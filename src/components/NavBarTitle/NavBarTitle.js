import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import classes from './NavBarTitle.module.css';

class NavBarTitle extends Component {

    render() {
        return (
            <div>
                <Navbar className={classes.style} bg="" expand="lg" color=" #DDC59D">
                        <Nav.Link className={classes.styleText} href='/'>Nobel Prize Laureates</Nav.Link>
                </Navbar>
            </div>
        )
    }
}

export default NavBarTitle;

