import React, { Component } from 'react'
import cars from './data'

class Pagani extends Component{
  render(){
    return (
      <div>
        <h1>Look its a Million dollar car</h1>
        <img className="img-page" src={cars[9].url}/>
        <img className="img-page" src={cars[10].url}/>
        <img className="img-page" src={cars[11].url}/>
      </div>
    )
  }
}

export default Pagani
