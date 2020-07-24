import React from 'react';
import './App.css';
import Nav from './Nav.js';
import Login from './Login.js';
import SignUp from './SignUp.js';
import Adaptation from './Adaptation.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />  
        <Switch>
          
          <Route path="/signin" component={Login}/>
          <Route path="/signup" component={SignUp}/>
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
