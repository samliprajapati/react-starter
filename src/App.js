import React, { Component } from 'react';
import Login from './component/Login';
import Table from './component/Table';
import Table1 from './component/Table1';
import Reg from './component/Reg';
import Responsive from './component/Responsive';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Login />
        <Table />
        <Table1 />
        <Reg /> */
        <Responsive />
        }
      </div>
    );
  }
}

export default App;
