import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "../routes/Home"

export default () => (
    <Switch>
        <Route path="/" exact component={Home} />
    </Switch>
);