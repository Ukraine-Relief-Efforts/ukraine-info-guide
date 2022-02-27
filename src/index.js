import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { createBrowserHistory } from "history";
import "./styles/index.css";
import "./i18n/i18n";
import App from "./App";
import store from "./store/configureStore";
import { clientId, domain } from "./configs/constants";

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
        <Provider store={store}>
          <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
          >
            <App />
          </Auth0Provider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    app
  );
}
