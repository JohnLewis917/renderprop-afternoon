import React, { Component } from "react";
import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";
import CurrencyDisplay from './components/CurrencyDisplay'

class App extends Component {
  render() {
    return (
      <>
        <h2>Render props</h2>
        <CurrencyConverter/>
        <CurrencyDisplay/>
      </>
    );
  }
}

export default App;
