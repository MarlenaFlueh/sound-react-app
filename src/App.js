import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";

const App = () => (
    <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
    </Switch>
);

export default App;