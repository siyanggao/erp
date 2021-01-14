import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './index.css';
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import routes from './routes'


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

