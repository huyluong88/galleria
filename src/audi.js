import React, { Component } from 'react'
import cars from './data'


class Audi extends Component{
  render(){
    return (
      <div>
        <h1>Look its a Audi</h1>
        <img className="img-page" src={cars[15].url}/>
        <img className="img-page" src={cars[16].url}/>
        <img className="img-page" src={cars[17].url}/>
      </div>
        )
  }
}

export default Audi
