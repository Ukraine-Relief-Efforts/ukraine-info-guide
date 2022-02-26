import React from "react";
import { render } from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import "./i18n/i18n";
import App from "./App";
import { store } from "./globalState/store";
import { Provider } from "react-redux";

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
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    app
  );
}

