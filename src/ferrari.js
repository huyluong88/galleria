import React, { Component } from 'react'
import cars from './data'
class Ferrari extends Component{
  render(){
    return (
      <div>
          <h1>Look its a ferrari</h1>
          <img className="img-page" src={cars[0].url}/>
          <img className="img-page" src={cars[1].url}/>
          <img className="img-page" src={cars[2].url}/>

      </div>
    )
  }
}

export default Ferrari
{/*<img src="http://media.caranddriver.com/images/14q2/584476/2014-ferrari-laferrari-first-drive-review-car-and-driver-photo-584762-s-original.jpg"/>
<img src="https://thecarsreport.com/wp-content/uploads/2015/06/488-speciale-front-watermark.jpg"/>
<img src="https://i.ytimg.com/vi/uJ6_TFgQPHA/maxresdefault.jpg"/>*/}
{/*<img className="img-page" src={cars[0].url}/>*/}
