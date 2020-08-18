import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Nav from "components/nav";
import Home from "routes/Home";
import Weplers from "routes/Weplers";
import Hire from "routes/Hire";
import Review from "routes/Review";
import Education from "routes/Education";
import HireMember from "routes/HireMember";

export default () => (
    <Router>
        <>
            <Nav />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/weplers" exact component={Weplers} />
                <Route path="/hire" exact component={HireMember} />
                <Route path="/review" exact component={Review} />
                <Route path="/education" exact component={Education} />
                <Route path="/area" exact component={Hire} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);
