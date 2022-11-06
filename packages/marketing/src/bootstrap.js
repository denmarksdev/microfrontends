import React from "react";
import ReactDOM from "react-dom";
import MyApp from "./MyApp";

// Mount function to start up the app

const mount = (el) => {
  ReactDOM.render(<MyApp />, el);
};

// IF are in development and in isolation
// call mount immediately

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-dev-root");
  if (el) {
    mount(el);
  }
}

// We are running through container
// and we should export the mount function

export { mount };
