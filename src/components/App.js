import React, { Component } from "react";
import Sidebar from "./SideBar";

export default class App extends Component {
  render() {
    const side_bar = {
      height: "100% !important",
      display: "flex",
      flexDirection: "column",
      border: "1px solid",
      borderRadius: "0",
      borderColor: "rgba(64, 194, 133, 0.693)",
      background: "aqua",
      transition: "0.8s ease",
      bgColor: "aqua",
    };

    return (
      <div>
        <div style={(side_bar, { float: "left" })}>
          <Sidebar width={300} height={"100vh"} class="col-3">
            <h1>Nav Item</h1>
            <h1>Nav Item</h1>
            <h1>Nav Item</h1>
            <h1>Nav Item</h1>
            <h1>Nav Item</h1>
          </Sidebar>
        </div>
        <div style={{ width: "70%", float: "right", height: "100px" }}>
          <p> Test</p>
        </div>
      </div>
    );
  }
}
