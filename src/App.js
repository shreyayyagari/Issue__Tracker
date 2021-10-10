import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from'./Landing';
import Header from './Header';
import Register from './Register';
import Contact from './Contact';
import Login from './Login';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/Login">
          <Login />
          </Route>
          <Route path="/Register">
          <Register />
          </Route>
          <Route path="/Contact">
            <Header />
          <Contact />
          </Route>
        <Route path="/">
          <Header />
          <LandingPage />
        </Route>
      </Switch>
      </div>
    </Router>
    
    
  );
}

export default App;
