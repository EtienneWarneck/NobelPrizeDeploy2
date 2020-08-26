import React, { Component } from 'react';
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
import classes from './NavBarTitle.module.css';
// import { Link, Nav } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'


class NavBarTitle extends Component {
    render() {
       
       /*  const styleHome = {
            border: '1px solid green',
            display: 'inline-block',
            position: 'relative',
            color: 'black',
            fontSize: '1.2em',
            marginLeft: '40%',
            marginRight: '10px',
            top: '70%',
            width: '100px',
            outline: 'none !important',
            boxShadow: 'none !important',
        } */
        
        return (
            <div style={{ display: 'block', width: '100%' }}>
                {/* <Navbar className={classes.style} bg="" expand="lg" color=" #DDC59D"> */}
                <Nav.Link className={classes.styleText} href='/'>Nobel Prize App</Nav.Link>
            </div>
        )
    }
}

export default NavBarTitle;

