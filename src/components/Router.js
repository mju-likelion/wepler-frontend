import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
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
import PlzSignup from "routes/SignUpDetail/Plz";
import PlusSignup from "routes/SignUpDetail/Plus";
import HireBoard from "components/Bord/HirePlz/List/ListBoard";
import HirePlzWrite from "components/Bord/HirePlz/Write";
import HirePlzRead from "components/Bord/HirePlz/Read";
import PlusProflie from "components/Areas/PlusProflie";
import PlusProflieDetail from "components/Areas/PlusDetail";import ReviewViewPlz from "components/Reviews/Plz/List/ListBoard";
import ReviewViewPlzDetail from "components/Reviews/Plz/Read/Read";
import ReviewViewPlzWrite from "components/Reviews/Plz/Write/Write";
import ReviewViewPlus from "components/Reviews/Plus/List/ListBoard";
import ReviewViewPlusDetail from "components/Reviews/Plus/Read/Read";
import ReviewViewPlusWrite from "components/Reviews/Plus/Write/Write";

import PlusActivityApplyContainer from "components/MyPages/PlusMypage/PlusMypagelist/ActivityApply/PlusActivityApplyContainer";
import PlusActivityAppliedContainer from "components/MyPages/PlusMypage/PlusMypagelist/ActivityApplied/PlusActivityAppliedContainer";
import PlusActivityIngContainer from "components/MyPages/PlusMypage/PlusMypagelist/ActivityIng/PlusActivityIngContainer";
import PlusActivityDoneContainer from "components/MyPages/PlusMypage/PlusMypagelist/ActivityDone/PlusActivityDoneContainer";

import PlzActivityDoneContainer from "components/MyPages/PlzMypage/PlzMypagelist/ActivityDone/PlzActivityDoneContainer";
import PlzActivityIngContainer from "components/MyPages/PlzMypage/PlzMypagelist/ActivityIng/PlzActivityIngContainer";
import PlzActivityApplyContainer from "components/MyPages/PlzMypage/PlzMypagelist/ActivityApply/PlzActivityApplyContainer";
import PlzActivityAppliedContainer from "components/MyPages/PlzMypage/PlzMypagelist/ActivityApplied/PlzActivityAppliedContainer";

import PlusInfoactivity from "components/MyPages/PlusMypage/PlusMypagelist/PlusInfoactivity";
import PlusBasicContainer from "components/MyPages/PlusMypage/PlusMypagelist/Basic/BasicContainer";
import Plusactivityhistory from "components/MyPages/PlusMypage/PlusMypagelist/Plusactivityhistory";
import PlzInfoactivity from "components/MyPages/PlzMypage/PlzMypagelist/PlzInfoactivity";
import PlzBasicContainer from "components/MyPages/PlzMypage/PlzMypagelist/Basic/BasicContainer";
import Plzactivityhistory from "components/MyPages/PlzMypage/PlzMypagelist/Plzactivityhistory";

import PlzactivityPlusDetail from "components/MyPages/PlzMypage/PlzMypagelist/ActivityApplied/PlzActivityPlusDetail";
import PlusActivityPlzDetail from "components/MyPages/PlusMypage/PlusMypagelist/ActivityApplied/PlusActivityPlzDetail";
import PlusActivityIngDetail from "components/MyPages/PlusMypage/PlusMypagelist/ActivityIng/PlusActivityIngDetail";
import PlzActivityIngDetail from "components/MyPages/PlzMypage/PlzMypagelist/ActivityIng/PlzActivityIngDetail";


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

        {/* 활동후기 */}
        <Route path={["/reviewplz", "/"]} exact component={ReviewViewPlz} />
        {/* 목록*/}
        <Route path="/reviewplz/:postId" component={ReviewViewPlzDetail} />
        {/* 읽기*/}
        <Route path="/reviewplzwrite" exact component={ReviewViewPlzWrite} />
        {/* 글쓰기*/}
        <Route path={["/reviewplus", "/"]} exact component={ReviewViewPlus} />
        {/* 목록*/}
        <Route
          path="/reviewplus/:postId"
          component={ReviewViewPlusDetail}
        />{" "}
        {/* 읽기*/}
        <Route path="/reviewpluswrite" exact component={ReviewViewPlusWrite} />
        {/* 글쓰기*/}
        <Route path="/reviewplzlist" exact component={ReviewViewPlz} />
        <Route path="/reviewpluslist" exact component={ReviewViewPlus} />
        <Route path="/signuplz" exact component={PlzSignup} />
        <Route path="/signuplus" exact component={PlusSignup} />
        {/* 플러스 회원 프로필 */}
        <Route path="/plusseoul" exact component={PlusProflie} />
        <Route path="/plusseoulde" exact component={PlusProflieDetail} />
        {/* 플러스 회원 마이페이지 */}
        <Route path="/plusactivityDone" exact component={PlusActivityDoneContainer} />



        <Route
          path={["/plusapplied", "/"]}
          exact
          component={PlusActivityAppliedContainer}
        />
        {/* 플러스가 신청 받은 플리즈 회원 리스트 */}

        <Route
          path={["/plusapply", "/"]}
          exact
          component={PlusActivityApplyContainer}
        />
        {/* 플러스가 신청한 플리즈 회원 리스트 */}

        <Route
          path={["/plzapply", "/"]}
          exact
          component={PlzActivityApplyContainer}
        />
        {/* 플리즈가 신청한 플러스 회원 리스트 */}

        <Route
          path={["/plzapplied", "/"]}
          exact
          component={PlzActivityAppliedContainer}
        />
        {/* 플리즈가 신청 받은 플러스 회원 리스트 */}



        <Route path="/plusIng/:profileId" component={PlusActivityIngDetail} />
        <Route path="/plusapplied/:profileId" component={PlusActivityPlzDetail} />
        {/* 플러스회원디테일*/}

        <Route path="/plzIng/:profileId" component={PlzActivityIngDetail} />
        <Route path="/plzapplied/:profileId" component={PlzactivityPlusDetail} />
        {/* 플리즈회원디테일*/}

        <Route
          path="/Plusactivityhistory"
          exact
          component={Plusactivityhistory}
        />
        <Route
          path="/plusactivityIng"
          exact
          component={PlusActivityIngContainer}
        />
        <Route path="/plusinfoactivity" exact component={PlusInfoactivity} />
        <Route path="/plusinfobasic" exact component={PlusBasicContainer} />
        {/* 플리즈 회원 마이페이지 */}

        <Route path="/plzactivityDone" exact component={PlzActivityDoneContainer} />
        <Route
          path="/Plzactivityhistory"
          exact
          component={Plzactivityhistory}
        />

        <Route
          path="/plzactivityIng"
          exact
          component={PlzActivityIngContainer}
        />
        <Route path="/plzinfoactivity" exact component={PlzInfoactivity} />
        <Route path="/plzinfobasic" exact component={PlzBasicContainer} />
        {/* 게시판 */}
        <Route path="/plzboard/:postId" component={HirePlzRead} /> {/* 읽기*/}
        <Route path="/plzwrite" exact component={HirePlzWrite} /> {/* 글쓰기*/}
        <Route path={["/plzboard", "/"]} exact component={HireBoard} />
        {/* 목록*/}
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
