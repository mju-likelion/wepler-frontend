import React from "react";
import axios from "axios";
import SigninPresenter from "./SigninPresenter";
// import { makeStyles } from "@material-ui/core/styles";

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
    console.log(this.state);
    const { email, password } = this.state;
    try {
      const tokenGet = await axios.post("/tokentest/", {
        email,
        password,
      });
      console.log(tokenGet);
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
