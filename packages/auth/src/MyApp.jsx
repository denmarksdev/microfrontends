import React from "react";
import { Switch, Route, Router  } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

 import Signin from "./components/Signin";
 import Signup from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: 'au'
})

export default function MyApp({ history }) {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName} >
        <Router history={history}>
          <Switch>
            <Route exact path='/auth/signin' component={Signin}/>
            <Route exact path='/auth/signup' component={Signup}/>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}
