import React, { Component } from 'react';
// import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import classes from './NavBarTitle.module.css';
import { Link } from "react-router-dom";

class NavBarTitle extends Component {
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
        const styleHome = {
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
        }
        const styleGithub = {
            border: '1px solid orange',
            display: 'inline-block',
            position: 'relative',
            color: 'black',
            fontSize: '1.2em',
            marginLeft: '50%',
            top: '70%',
            width: '100px',
            outline: 'none !important',
            boxShadow: 'none !important',
        }

        return (
            <div style={{ display: 'block', width:'100%'}}>
                <Navbar className={classes.style} bg="" expand="lg" color=" #DDC59D">
                    <Link className={classes.styleText} href='/'>Nobel Prize Laureates</Link>
                </Navbar>
                <div style={{ display: 'block', width:'100%' }}>
                    <Link style={styleHome} href="/">Home</Link>
                    <Link style={styleGithub} href="https://github.com/EtienneWarneck/NobelPrizeAPI/tree/master/my-app">GitHub</Link>
                </div>
            </div>
        )
    }
}

export default NavBarTitle;

