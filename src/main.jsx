import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

 
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="skincancer.us.auth0.com"
  clientId="YqKwsDA5jtHTcQ6rDMswzN42qS67e9tP"
  authorizationParams={{
    redirect_uri: window.location.origin
    
  }}
  // onRedirectCallback={onRedirectCallback}
>
  <App />
</Auth0Provider>,
)

// .............

// ReactDOM.render(
//   <Auth0Provider
//     domain={auth0Config.domain}
//     clientId={auth0Config.clientId}
//     redirectUri={window.location.origin}
//     // onRedirectCallback={onRedirectCallback}
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById('root')
// );