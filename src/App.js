import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
  
      <div>
        <html>
          <head>
            
          </head>
          <body>
        <h1>Login Here</h1>
        <label for="uname"><b>Username : </b></label><br/>
    <input type="text" placeholder="Enter Username" name="uname" required /><br/>
    
    <label for="psw"><b>Password : </b></label><br/>
    <input type="password" placeholder="Enter Password" name="psw" required /><br/>
        
    <button className="btn btn-primary"type="submit">Login</button>&nbsp;
    <button type="cancel">Cancel</button>
    
    </body>
  </html>
      </div>
              );
            }
          }
          
          export default App;
