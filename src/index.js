import React from 'react';
import { Router, Route, hashHistory } from 'react-router'
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Ferrari from './ferrari'
import Honda from './honda'
import Acura from './acura'
import Pagani from './pagani'
import Porsche from './porsche'
import Audi from './audi'

ReactDOM.render((
  <Router history={hashHistory}>
     <Route path ="/" component={App}>
     <Route path="/ferrari" component={Ferrari}/>
     <Route path="/honda" component={Honda}/>
     <Route path="/acura" component={Acura}/>
     <Route path="/pagani" component={Pagani}/>
     <Route path="/porsche" component={Porsche}/>
     <Route path="/audi" component={Audi}/>
   </Route>
   </Router>

),document.getElementById('root'))
