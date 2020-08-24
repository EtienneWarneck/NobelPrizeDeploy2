import React, { Component } from 'react';
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import './Navbar.css';
import Nav from 'react-bootstrap/Nav'
import Radium from 'radium';

// const toolbar = props => {

class NavTestRadium extends Component {
    render() {

        const styleTitle = {
            border: '5px solid green',
            // color: '#BB8A35',
            height: '8em',
            position: 'relative',
            borderBottom: '1px solid lightgrey',
            outline: 'none !important',
            boxShadow: 'none !important',
        }

        const styleText = {
            border: '3px solid purple',
            color: '#DDC59D',
            fontSize: '3em',
            textAlign: 'center',
            margin: '0',
            position: 'absolute',
            top: '20%',
            width: '100%',
            outline: 'none !important',
            boxShadow: 'none !important',
        }

        const styleHome = {
            border: '1px solid green',
            display: 'inline-block',
            position: 'absolute',
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
            position: 'absolute',
            color: 'black',
            fontSize: '1.2em',
            marginLeft: '50%',
            top: '70%',
            width: '100px',
            outline: 'none !important',
            boxShadow: 'none !important',
        }

        return (
            <div>
                <div style={styleTitle}>
                    <Nav.Link style={styleText} href='/'>Nobel Prize Laureates</Nav.Link>
                </div>
                <div>
                    <Nav.Link style={styleHome} href="/">Home</Nav.Link>
                    <Nav.Link style={styleGithub} href="https://github.com/EtienneWarneck/NobelPrizeAPI/tree/master/my-app">GitHub</Nav.Link>
                </div>
            </div >
        )
    }
}

export default Radium(NavTestRadium);

