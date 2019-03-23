import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import TrabajosList from './components/Trabajos/TrabajosList';
import TrabajosDetails from './components/Trabajos/TrabajosDetails'
import {Switch, Route} from 'react-router-dom'
import Signup from './components/auth/Signup';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/signup' component = {Signup}/>
          <Route exact path="/trabajos" component={TrabajosList}/>
          <Route exact path="/trabajos/:id" component={TrabajosDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
