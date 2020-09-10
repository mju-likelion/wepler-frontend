import React from "react";
import axios from "axios";
import PlzPresenter from "./PlzPresenter";

export default class extends React.Component {
  state = {
    plz_name: "",
    plz_email: "",
    plz_password: "",
    plz_phonenumber: "",
    plz_address_big: "",
    plz_address_small: "",
    plz_fields: [],
    plz_when_learn: "",
    plz_belong: "",
  };
  postBoard = async (e) => {
    e.preventDefault();
    const {
      plz_name,
      plz_email,
      plz_password,
      plz_phonenumber,
      plz_address_big,
      plz_address_small,
      plz_fields,
      plz_when_learn,
      plz_belong,
    } = this.state;
    try {
      const post = await axios.post("/plz_signup/", {
        plz_name,
        plz_email,
        plz_password,
        plz_phonenumber,
        plz_address_big,
        plz_address_small,
        plz_when_learn,
        plz_belong,
        plz_fields,
      });
      console.log(post);
      alert("회원가입 되었습니다");
    } catch {
      console.log("There was an error!");
    }
  };

  handelinfoChange = (e) => {
    const { name } = e.target;
    if (name === "plz_name") {
      this.setState({
        ...this.state,
        plz_name: e.target.value,
      });
    }
    if (name === "plz_password") {
      this.setState({
        ...this.state,
        plz_password: e.target.value,
      });
    }
    if (name === "plz_email") {
      this.setState({
        ...this.state,
        plz_email: e.target.value,
      });
    }
    if (name === "plz_number") {
      this.setState({
        ...this.state,
        plz_number: e.target.value,
      });
    }
    if (name === "plz_address_small") {
      this.setState({
        ...this.state,
        plz_address_small: e.target.value,
      });
    }
    if (name === "plz_address_big") {
      this.setState({
        ...this.state,
        plz_address_big: e.target.value,
      });
    }
  };

  handleWhenRadio(event) {
    let obj = {};
    obj[event.target.value] = event.target.checked; // true
    this.setState({ when_learn: obj });
  }

  handleBelongRadio(event) {
    let obj2 = {};
    obj2[event.target.value] = event.target.checked; // true
    this.setState({ belong: obj2 });
  }

  handleActivity = (e) => {
    const { name } = e.target;
    // 배열에 값이 있으면
    if (this.state.plz_fields.findIndex((i) => i === name) !== -1) {
      const newHash = this.state.plz_fields.filter((value) => value !== name);
      this.setState({
        ...this.state,
        plz_fields: newHash,
      });
    }
    // 배열에 값이 없으면
    else {
      this.setState({
        ...this.state,
        plz_fields: [...this.state.plz_fields, name],
      });
    }
  };
  render() {
    const {
      plz_name,
      plz_email,
      plz_password,
      plz_phonenumber,
      plz_address_big,
      plz_address_small,
      plz_when_learn,
      plz_belong,
      plz_fields,
    } = this.state;
    return (
      <PlzPresenter
        plz_name={plz_name}
        plz_email={plz_email}
        plz_password={plz_password}
        plz_phonenumber={plz_phonenumber}
        plz_address_big={plz_address_big}
        plz_address_small={plz_address_small}
        plz_fields={plz_fields}
        plz_when_learn={plz_when_learn}
        plz_belong={plz_belong}
        postBoard={this.postBoard}
        handelinfoChange={this.handelinfoChange}
        handleActivity={this.handleActivity}
        handleWhenRadio={this.handleWhenRadio}
        handleBelongRadio={this.handleBelongRadio}
      />
    );
  }
}
