import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'
import cars from './data'



class App extends Component {
  render() {
    return (
      <div className="App">

      <ul>
        <li><Link activeStyle={{ color: 'red' }} to="/ferrari">Ferrari
        <img className="home" src={cars[0].url}/></Link></li>
        <li><Link activeStyle={{ color: 'red' }} to="/honda">Honda
        <img className="home" src={cars[3].url}/></Link></li>
        <li><Link activeStyle={{ color: 'red' }} to="/acura">Acura
        <img className="home" src={cars[6].url}/></Link></li>
        <li><Link activeStyle={{ color: 'red' }} to="/pagani">Pagani
        <img className="home" src={cars[9].url}/></Link></li>
        <li><Link activeStyle={{ color: 'red' }} to="/porsche">Porsche
        <img className="home" src={cars[12].url}/></Link></li>
        <li><Link activeStyle={{ color: 'red' }} to="/audi">Audi
        <img className="home" src={cars[15].url}/></Link></li>
      </ul>
      {this.props.children}

      </div>
    );
  }
}

export default App;
