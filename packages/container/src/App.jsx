import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./componentes/Header";
import Progress from "./componentes/Progress";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const MarketingLazy = lazy(() => import("./componentes/MarketingApp"));
const AuthLazy = lazy(() => import("./componentes/AuthApp"));
const DashboardLazy = lazy(() => import("./componentes/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy
                  onSignIn={() => {
                    setIsSignedIn(true);
                  }}
                  isSignedIn={isSignedIn}
                />
              </Route>
              <Route path="/dashboard" component={DashboardLazy} />
              <Route path="/">
                <MarketingLazy onSignedIn={() => setIsSignedIn(false)} />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}
