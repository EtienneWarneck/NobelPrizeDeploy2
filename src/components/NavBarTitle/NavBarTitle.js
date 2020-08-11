import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import classes from './NavBarTitle.module.css';

class NavBarTitle extends Component {

    

    render() {

        const styleHomeButton = {
            // border: '1px solid red',
            color: 'black',
            fontSize: '1.2em',
            // textAlign: 'left',
            marginLeft: '40%',
            marginRight: '10px',
            // position: 'absolute',
            top: '70%',
            // width: '100%',
            outline: 'none !important',
            boxShadow: 'none !important',
        }
        const styleHomeButton2 = {
            // border: '1px solid red',
                    // display: 'block',
    
            color: 'black',
            fontSize: '1.2em',
            // textAlign: 'left',
            marginLeft: '50%',
            // position: 'absolute',
            top: '70%',
            // width: '100%',
            outline: 'none !important',
            boxShadow: 'none !important',
        }

        return (
            <div>
                <Navbar className={classes.style} bg="" expand="lg" color=" #DDC59D">
                    <Nav.Link className={classes.styleText} href='/'>Nobel Prize Laureates</Nav.Link>
                </Navbar>
                <div >
                    <Nav.Link style={styleHomeButton} href="/">Home</Nav.Link>
                </div>
                <div>
                    <Nav.Link style={styleHomeButton2} href="https://github.com/EtienneWarneck/NobelPrizeAPI/tree/master/my-app">GitHub</Nav.Link>
                </div>
            </div>
        )
    }
}

export default NavBarTitle;

