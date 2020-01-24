import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home'
import View from './pages/view'
import Add from './pages/add'

function App() {
  
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/view/:id">
          <View />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}


export default App;
