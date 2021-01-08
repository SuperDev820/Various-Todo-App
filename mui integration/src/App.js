import React from "react";
import { Route, Switch } from "react-router-dom";
import TodoApp from "./TodoApp";
import SignIn from "./templates/sign-in/SignIn";
import Dashboard from "./templates/dashboard/Dashboard";
import Album from "./templates/album/Album";
import Checkout from "./templates/checkout/Checkout";
import Pricing from "./templates/pricing/Pricing";
import SignInSide from "./templates/sign-in-side/SignInSide";

function App() {
    return (
        <Switch>    
            <Route path="/" component={TodoApp} exact />
            <Route path="/signin" component={SignIn} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/album" component={Album} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/sign-in-side" component={SignInSide} />
            <Route path="/pricing" component={Pricing} />
        </Switch>
    )
}

export default App;