import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './containers/Routing'


class App extends Component {
  render() {
    return (
      <div >
        <React.StrictMode>
          <BrowserRouter>
            <Routing />
          </BrowserRouter>
        </React.StrictMode>
      </div>
    );
  }
}

export default App;
