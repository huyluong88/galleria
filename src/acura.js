import React, { Component } from 'react'
import cars from './data'


class Acura extends Component{
  render(){
    return (
      <div>
        <h1>Look its a Acura</h1>
        <img className="img-page" src={cars[6].url}/>
        <img className="img-page" src={cars[7].url}/>
        <img className="img-page" src={cars[8].url}/>
      </div>
    )
  }
}

export default Acura
