import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div>
        <tr>
          <td colspan="2"></td>
          <th scope="col">First-Name</th>
          <th scope="col">Middle-Name</th>
          <th scope="col">Last-Name</th>
          <th scope="col">Present Address</th>
          <th scope="col">Permanent Address</th>
          <th scope="col">Telephone Number</th>
          <th scope="col">Mobile Number</th>
          <th scope="col">Email Address</th>
          <th scope="col">Office Address</th>
          <th scope="col">Notes</th>
        </tr>
       
      </div>
    );
  }
}

export default Table;