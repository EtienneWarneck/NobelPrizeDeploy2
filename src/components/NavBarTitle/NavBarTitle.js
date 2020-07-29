import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import classes from './NavBarTitle.module.css';

class NavBarTitle extends Component {

    render() {
        return (
            <div>
                <Navbar bg="" expand="lg" className="navbar d-flex justify-content-center" >
                    <div className={classes.style} >
                        <Nav.Link className={classes.styleText} href='/'>Nobel Prize Laureates</Nav.Link>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default NavBarTitle;

