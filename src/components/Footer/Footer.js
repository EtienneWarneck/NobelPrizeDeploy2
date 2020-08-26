import React, { Component } from 'react';
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
// import classes from './NavBarTitle.module.css';
// import { Link, Nav } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'


class Footer extends Component {
    render() {
        const styleGithub = {
            // border: '1px solid orange',
            display: 'inline-block',
            position: 'relative',
            color: 'black',
            fontSize: '1.2em',
            textAlign: 'center',
            top: '70%',
            width: '100%',
            margin: 'auto',
            outline: 'none !important',
            boxShadow: 'none !important',
        }

        return (
            <div style={{ display: 'block', width: '100%' }}>
                <div style={{ display: 'block', width: '100%' }}>
                    <Nav.Link style={styleGithub} href="https://github.com/EtienneWarneck/NobelPrizeDeploy2">GitHub</Nav.Link>
                </div>
            </div>
        )
    }
}

export default Footer;

