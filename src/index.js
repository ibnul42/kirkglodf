import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import { login } from "./Components/api";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/store";

(async () => {
  // try to login with cookie
  let { user, requireMfa } = await login();

  // initiate the app
  const domContainer = document.createElement("div");
  document.body.appendChild(domContainer);
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App user={user} requireMfa={requireMfa} />
      </BrowserRouter>
    </Provider>,
    domContainer
  );
})();
