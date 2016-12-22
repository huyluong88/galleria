import React, { Component } from 'react'
import cars from './data'


class Honda extends Component{
  render(){
    return (
      <div>
        <h1>Look its a honda</h1>
        <img className="img-page" src={cars[3].url}/>
        <img className="img-page" src={cars[4].url}/>
        <img className="img-page" src={cars[5].url}/>

      </div>
    )
  }
}

export default Honda
