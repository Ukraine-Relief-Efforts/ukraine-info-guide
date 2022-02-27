import React from "react";
import { render } from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import "./i18n/i18n";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const app = document.getElementById("root");
if (app) {
  const history = createBrowserHistory();

  // eslint-disable-next-line no-restricted-globals
  const path = (/#!(.*)$/.exec(location.hash) || [])[1];
  // eslint-disable-next-line no-restricted-globals
  if (path) history.replace(path);

  render(
    <React.StrictMode>
      <BrowserRouter>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          redirectUri={window.location.origin}>
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </React.StrictMode>,
    app
  );
}
