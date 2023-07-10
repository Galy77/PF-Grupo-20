import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store.js';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

//const domain = process.env.REACT_AUTH0_DOMAIN;
//const clientId = process.env.REACT_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Auth0Provider 
      domain="dev-0hzckmmv4nhoalbu.us.auth0.com"
      clientId="JilS9JHWgjtYdfxJNbgNGLnzrZID9bD3"
      authorizationParams={{
      redirect_uri: window.location.origin
    }}>

      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
)
