import React, { Component } from 'react';

class Reg extends Component {
  render() {
    return (
        <div>
           <h1>Registration Here</h1>
                <label for="fname"><b>First Name : </b></label><br />
                <input type="text" placeholder="Enter Firstname" name="fname" required /><br />
                <label for="lname"><b>Last Name: </b></label><br />
                <input type="text" placeholder="Enter Lastname" name="lname" required /><br />
                <label for="uname"><b>Username : </b></label><br />
                <input type="text" placeholder="Enter Username" name="uname" required /><br />
                <label for="email"><b>Email : </b></label><br />
                <input type="text" placeholder="XXXX@gmai.com" name="email" required /><br />

                <label for="psw"><b>Password : </b></label><br />
                <input type="password" placeholder="Enter Password" name="psw" required /><br />
                <label for="psw"><b>Cinfirm-Password : </b></label><br />
                <input type="password" placeholder="Enter Cinfirm-Password" name="psw" required /><br />

                <button className="btn btn-success" type="submit">Login</button>&nbsp;
    <button className="btn btn-dark" type="cancel">Cancel</button>
        </div>
     
  
    );
  }
}

export default Reg;
