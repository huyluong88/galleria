import React, { Component } from 'react'
import cars from './data'

class Porsche extends Component{
  render(){
    return (
      <div>
        <h1>Look its a Porsche</h1>
        <img className="img-page" src={cars[12].url}/>
        <img className="img-page" src={cars[13].url}/>
        <img className="img-page" src={cars[14].url}/>
      </div>
    )
  }
}

export default Porsche
