import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";
import MyApp from "./MyApp";

// Mount function to start up the app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();

  if (onNavigate){
    history.listen(onNavigate);
  }

  ReactDOM.render(<MyApp history={history} />, el);
};

// If are in development and in isolation
// call mount immediately

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-dev-root");
  if (el) {
    mount(el, {});
  }
}

// We are running through container
// and we should export the mount function

export { mount };
