import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./componentes/MarketingApp";
import Header from "./componentes/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
}
