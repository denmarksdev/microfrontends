import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./componentes/MarketingApp";
import Header from "./componentes/Header";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default function App() {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}
