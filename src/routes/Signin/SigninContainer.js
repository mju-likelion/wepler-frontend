import React from "react";
import axios from "axios";
import SigninPresenter from "./SigninPresenter";

export default class extends React.Component {
  state = {
    email: "",
    password: "",
  };

  oninfoChange = (e) => {
    const { name } = e.target;
    if (name === "email") {
      this.setState({
        ...this.state,
        email: e.target.value,
      });
    }
    if (name === "password") {
      this.setState({
        ...this.state,
        password: e.target.value,
      });
    }
  };

  postBoard = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      const tokenGet = await axios.post("/tokentest/", {
        ///login/
        email,
        password,
      });
      var token = tokenGet.data.token;
      var user_id = tokenGet.data.user_id;
      if (token !== null) {
        // 서버로 부터 받은 JSON형태의 데이터를 로컬스토리지에 우선 저장한다.
        window.localStorage.setItem("token", JSON.stringify(token));
        window.localStorage.setItem("user_id", JSON.stringify(user_id));
        //스테이트에 유저정보를 저장한다.
        this.setState({
          email: token.email,
          isLogin: token.success,
        });
        this.props.history.push("/"); //Home으로 돌아감
      }
      console.log(tokenGet);
      alert("로그인되었습니다");
    } catch {
      console.log("Theres was an error!");
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <SigninPresenter
        email={email}
        password={password}
        oninfoChange={this.oninfoChange}
        postBoard={this.postBoard}
      />
    );
  }
}
