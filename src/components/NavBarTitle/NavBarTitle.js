import React, { Component } from 'react';
import classes from './NavBarTitle.module.css';
// import { Link, Nav } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

class NavBarTitle extends Component {
    render() {
        return (
            <div style={{ display: 'block', width: '100%' }}>
                <Nav.Link
                    className={classes.styleText}
                    href='/'
                >Nobel Prize App
                </Nav.Link>
            </div>
        )
    }
}

export default NavBarTitle;

