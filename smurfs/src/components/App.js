import React, { Component } from "react";
import "./App.css";
import Smurfs from "./Smurfs";



class App extends Component {
  render() {
    return (
      <div className="App">
        <img src = "https://cdn1.ftimg.com/images/logos/big/en_US/smurfs-logo.png" />
       
        <Smurfs/>
       
      </div>
    );
  }
}

export default App;
