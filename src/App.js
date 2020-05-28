import React, { Component } from "react";
import Login from "./component/Login";
import Table from "./component/Table";
import Table1 from "./component/Table1";
import Reg from "./component/Reg";
import Responsive from "./component/Responsive";
import Modal from "./component/Modal";
import "./App.css";
import "antd/dist/antd.css";
import Navmenu from "./component/Hooks/Navmenu";
import MainPage from "./component/Hooks/MainPage";

class App extends Component {
  render() {
    return (
      <div>
        {
          <MainPage />
          // <Navmenu />
          // <Login />
          // <Table />
          // <Table1 />
          // <Reg />
          // <Responsive />
          //  <Modal />
        }
      </div>
    );
  }
}

export default App;
