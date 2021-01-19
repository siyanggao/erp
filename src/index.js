import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './index.css';
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import routes from './routes'
import { Provider } from 'mobx-react'
import stores from './store/index'


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider {...stores}>
      <HashRouter>
          {renderRoutes(routes)}
      </HashRouter>
  </Provider>,
  document.getElementById('root')
);

