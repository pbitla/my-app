import React, { Component } from "react";
import App from "./components/App";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <App />
        <Footer />
      </div>
    );
  }
}
