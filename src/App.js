import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from './logo.svg';
import Navbar from './Screen/Navbar'
import Body from './Screen/Body'
// import Detailbook from './Screen/Detailbook'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <Body />
      </div>
    );
  }
}

export default App;
