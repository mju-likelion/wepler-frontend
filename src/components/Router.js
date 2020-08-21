import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Nav from "components/nav";
import Home from "routes/Home";
import Weplers from "routes/Weplers";
import HirePlus from "routes/Hire/HirePlus";
import HirePlz from "routes/Hire/HirePlz";
import Review from "routes/Review";
import Education from "routes/Education";
import HireMember from "routes/Hire/HireMember";
import Signup from "routes/Signup";
import Signin from "routes/Signin";
import SeoulMem from "./Areas/Plz/Seoul/SeoulMem";
import SeoulDetail from "./Areas/Plz/Seoul/SeoulDetail";
import GyeonggiMem from "./Areas/Plz/Gyeonggi/GyenggiMem";
import IncheonMem from "./Areas/Plz/Incheon/IncheonMem";

import ReviewView from "./Reviews/Plz/view";
import PlzSignupDetail from "./Sign/Plz/Signup";


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
                <Route path="/areaplus" exact component={HirePlus} />
                <Route path="/areaplz" exact component={HirePlz} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
             
                <Route path="/plzreviewview" exact component={ReviewView} />

                <Route path="/plzsignupdetail" exact component={PlzSignupDetail} />

                <Route path="/plzseoul" exact component={SeoulMem} />
                <Route path="/plzseoulde" exact component={SeoulDetail} />
                <Route path="/plzgyeong" exact component={GyeonggiMem} />
                <Route path="/plzinch" exact component={IncheonMem} />
                

                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);
