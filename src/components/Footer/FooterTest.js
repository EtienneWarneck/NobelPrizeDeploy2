import React, { Component } from 'react';
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
// import { Link, Nav } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'


class FooterTest extends Component {
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
                <Nav.Link
                    style={styleGithub}
                    href="https://github.com/EtienneWarneck/NobelPrizeDeploy2"
                >GitHub
                </Nav.Link>
            </div>
        )
    }
}

export default FooterTest;

