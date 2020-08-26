import React, { Component } from 'react';
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
// import classes from './NavBarTitle.module.css';
// import { Link, Nav } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'


class Footer extends Component {
    render() {
        // const styleHomeButton = {
        //     border: '1px solid red',
        //     color: 'black',
        //     fontSize: '1.2em',
        //     marginLeft: '40%',
        //     marginRight: '10px',
        //     top: '70%',
        //     width: '100px',
        //     outline: 'none !important',
        //     boxShadow: 'none !important',
        // }
        // const styleHomeButton2 = {
        //     border: '1px solid red',
        //     color: 'black',
        //     fontSize: '1.2em',
        //     top: '70%',
        //     width: '100px',
        //     outline: 'none !important',
        //     boxShadow: 'none !important',
        // }
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
        
        const styleGithub = {
            border: '1px solid orange',
            display: 'inline-block',
            position: 'relative',
            color: 'black',
            fontSize: '1.2em',
            // marginLeft: '50%',
            top: '70%',
            width: '100%',
            margin:'auto',
            outline: 'none !important',
            boxShadow: 'none !important',
        }

        return (
            <div style={{ display: 'block', width: '100%' }}>
                {/* <Navbar className={classes.style} bg="" expand="lg" color=" #DDC59D"> */}
                {/* <Nav.Link className={classes.styleText} href='/'>Nobel Prize App</Nav.Link> */}

                <div style={{ display: 'block', width: '100%' }}>
                    {/* <Nav.Link style={styleHome} href="/">Home</Nav.Link> */}
                    <Nav.Link style={styleGithub} href="https://github.com/EtienneWarneck/NobelPrizeDeploy2">GitHub</Nav.Link>
                </div>
            </div>
        )
    }
}

export default Footer;

