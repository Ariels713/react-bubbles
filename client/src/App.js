import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import Login from "./components/Login";
import Header from './components/Header'
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import WelcomePage from "./components/WelcomePage";
import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Route exact path="/" component={WelcomePage} />
        <PrivateRoute exact path="/bubblePage" component={BubblePage}/>
        {/* <Route exact path="/bubblepage" component={BubblePage} /> */}
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Route exact path="/login" component={Login}/>
      </div>
    </Router>
  );
}

export default App;
