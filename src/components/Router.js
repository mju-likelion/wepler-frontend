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
import PlusProflieDetail from "components/Areas/PlusDetail";
import ReviewViewPlz from "components/Reviews/Plz/view";
import ReviewViewPlus from "components/Reviews/Plus/view";
import PlusActivityApplyContainer from "components/MyPages/PlusMypage/PlusMypagelist/ActivityApply/PlusActivityApplyContainer";
import PlusActivityend from "components/MyPages/PlusMypage/PlusMypagelist/ActivityDone/PlusActivityend";
import PlusActivityprogress from "components/MyPages/PlusMypage/PlusMypagelist/ActivityIng/PlusActivityprogress";
import PlusInfoactivity from "components/MyPages/PlusMypage/PlusMypagelist/PlusInfoactivity";
import PlusBasicContainer from "components/MyPages/PlusMypage/PlusMypagelist/Basic/BasicContainer";
import Plusactivityhistory from "components/MyPages/PlusMypage/PlusMypagelist/Plusactivityhistory";
import PlzActivityApplyContainer from "components/MyPages/PlzMypage/PlzMypagelist/ActivityApply/PlzActivityApplyContainer";
import PlzActivityend from "components/MyPages/PlzMypage/PlzMypagelist/ActivityDone/PlzActivityend";
import PlzActivityprogress from "components/MyPages/PlzMypage/PlzMypagelist/ActivityIng/PlzActivityprogress";
import PlzInfoactivity from "components/MyPages/PlzMypage/PlzMypagelist/PlzInfoactivity";
import PlzBasicContainer from "components/MyPages/PlzMypage/PlzMypagelist/Basic/BasicContainer";
import Plzactivityhistory from "components/MyPages/PlzMypage/PlzMypagelist/Plzactivityhistory";
import PlzactivityPlzDetail from "components/MyPages/PlzMypage/PlzMypagelist/ActivityApply/PlzActivityPlzDetail";
import PlusactivityPlusDetail from "components/MyPages/PlusMypage/PlusMypagelist/ActivityApply/PlusActivityPlusDetail";

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
        <Route path="/reviewplzlist" exact component={ReviewViewPlz} />
        <Route path="/reviewpluslist" exact component={ReviewViewPlus} />
        <Route path="/signuplz" exact component={PlzSignup} />
        <Route path="/signuplus" exact component={PlusSignup} />
        {/* 플러스 회원 프로필 */}
        <Route path="/plusseoul" exact component={PlusProflie} />
        <Route path="/plusseoulde" exact component={PlusProflieDetail} />
        {/* 플러스 회원 마이페이지 */}
        <Route path="/plusactivityend" exact component={PlusActivityend} />
        <Route
          path={["/plusapply", "/"]}
          exact
          component={PlusActivityApplyContainer}
        />
        {/* 신청 받은 플리즈회원 리스트 */}

        <Route path="/plusapply/:profileId" component={PlusactivityPlusDetail} />
        {/* 플러스회원디테일*/}

        <Route
          path="/Plusactivityhistory"
          exact
          component={Plusactivityhistory}
        />
        <Route
          path="/plusactivityprogress"
          exact
          component={PlusActivityprogress}
        />
        <Route path="/plusinfoactivity" exact component={PlusInfoactivity} />
        <Route path="/plusinfobasic" exact component={PlusBasicContainer} />
        {/* 플리즈 회원 마이페이지 */}
        <Route
          path={["/plzapply", "/"]}
          exact
          component={PlzActivityApplyContainer}
        />
        {/* 신청한 플리즈회원 리스트 */}
        <Route path="/plzactivityend" exact component={PlzActivityend} />
        <Route
          path="/Plzactivityhistory"
          exact
          component={Plzactivityhistory}
        />
        <Route path="/plzapply/:profileId" component={PlzactivityPlzDetail} />
        {/* 플리즈회원디테일*/}
        <Route
          path="/plzactivityprogress"
          exact
          component={PlzActivityprogress}
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
