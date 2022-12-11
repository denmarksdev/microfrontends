import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./componentes/Header";
import Progress from "./componentes/Progress";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { createBrowserHistory } from "history";

const MarketingLazy = lazy(() => import("./componentes/MarketingApp"));
const AuthLazy = lazy(() => import("./componentes/AuthApp"));
const DashboardLazy = lazy(() => import("./componentes/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
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
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/">
                <MarketingLazy onSignedIn={() => setIsSignedIn(false)} />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
}
