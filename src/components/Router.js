import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Nav from "components/nav";
import PlusMypagenav from "components/PlusMypage/PlusMypagenav";
import Home from "routes/Home";
import Weplers from "routes/Weplers";
import HirePlus from "routes/Hire/HirePlus";
import HirePlz from "routes/Hire/HirePlz";
import Review from "routes/Review";
import Education from "routes/Education";
import HireMember from "routes/Hire/HireMember";
import Signup from "routes/Signup";
import Signin from "routes/Signin";
import HirePlzList from "components/Bord/HirePlz/List";
import HirePlzWrite from "components/Bord/HirePlz/Write";
import HirePlzRead from "components/Bord/HirePlz/Read";
import SeoulMem from "components/Areas/Plus/Seoul/SeoulMem";
import SeoulDetail from "components/Areas/Plus/Seoul/SeoulDetail";
import GyeonggiMem from "components/Areas/Plus/Gyeonggi/GyenggiMem";
import IncheonMem from "components/Areas/Plus/Incheon/IncheonMem";
import ReviewViewPlz from "components/Reviews/Plz/view";
import ReviewViewPlus from "components/Reviews/Plus/view";
import PlzSignupDetail from "components/Sign/Plz/Signup";
import PlusSignupDetail from "components/Sign/Plus/Signup";

import PlusActivityapply from "components/PlusMypage/PlusMypagelist/PlusActivityapply";
import PlusActivityend from "components/PlusMypage/PlusMypagelist/PlusActivityend";
import PlusActivityprogress from "components/PlusMypage/PlusMypagelist/PlusActivityprogress";
import PlusInfoactivity from "components/PlusMypage/PlusMypagelist/PlusInfoactivity";
import PlusInfobasic from "components/PlusMypage/PlusMypagelist/PlusInfobasic";


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
        <Route path="/plzlist" exact component={HirePlzList} />
        <Route path="/plzread" exact component={HirePlzRead} />
        <Route path="/plzwrite" exact component={HirePlzWrite} />
        <Route path="/reviewplzlist" exact component={ReviewViewPlz} />
        <Route path="/reviewpluslist" exact component={ReviewViewPlus} />
        <Route path="/signuplz" exact component={PlzSignupDetail} />
        <Route path="/signuplus" exact component={PlusSignupDetail} />
        {/* 플러스 회원 */}
        <Route path="/plusseoul" exact component={SeoulMem} />
        <Route path="/plusseoulde" exact component={SeoulDetail} />
        <Route path="/plusgyeong" exact component={GyeonggiMem} />
        <Route path="/plusinch" exact component={IncheonMem} />
        {/* 플리즈 회원 마이페이지 */}
        <Route path="/PlzMypagenav" exact component={PlzMypagenav} />
        <Route path="/PlzActivityapply" exact component={PlzActivityapply} />
        <Route path="/PlzActivityend" exact component={PlzActivityend} />
        <Route path="/PlzActivityprogress" exact component={PlzActivityprogress} />
        <Route path="/PlzInfoactivity" exact component={PlzInfoactivity} />
        <Route path="/PlzInfobasic" exact component={PlzInfobasic} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>


);
