import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, HashRouter, Switch} from 'react-router-dom'
import Home from './components/home/home'
import Login from './components/login/login'
import { renderRoutes } from 'react-router-config';
import routes from './routes'
import { Button } from 'antd';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <HashRouter>
    {/* <Switch>
    <Route exact path="/login" component={Login}/>
      <Route  path="/" component={Home}/>
      
    </Switch> */}
    {renderRoutes(routes)}
  </HashRouter>,
  document.getElementById('root')
);

