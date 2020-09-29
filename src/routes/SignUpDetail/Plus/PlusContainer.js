import React from "react";
import axios from "axios";
import PlusPresenter from "./PlusPresenter";

export default class extends React.Component {
  state = {
    plus_name: "",
    plus_email: "",
    plus_password: "",
    plus_phonenumber: "",
    plus_address_big: "",
    plus_address_small: "",
    plus_start_day: [],
    plus_talentshare: "",
    plus_continu_month: "",
    plus_start_time: "",
    plus_end_time: "",
    plus_fields: [],
    agreePrivate: false,
    agreeWepler: false,
  };
  postBoard = async (e) => {
    e.preventDefault();
    const {
      plus_name,
      plus_email,
      plus_password,
      plus_phonenumber,
      plus_address_big,
      plus_address_small,
      plus_start_day,
      plus_talentshare,
      plus_continu_month,
      plus_start_time,
      plus_end_time,
      plus_fields,
    } = this.state;
    try {
      const post = await axios.post("/plus_signup/", {
        plus_name,
        plus_email,
        plus_password,
        plus_phonenumber,
        plus_address_big,
        plus_address_small,
        plus_start_day,
        plus_talentshare,
        plus_continu_month,
        plus_start_time,
        plus_end_time,
        plus_fields,
      });
      console.log(post);
      alert("회원가입 되었습니다");
    } catch {
      console.log("Theres was an error!");
    }
  };

  handelinfoChange = (e) => {
    const { name } = e.target;
    if (name === "plus_name") {
      this.setState({
        ...this.state,
        plus_name: e.target.value,
      });
    }
    if (name === "plus_password") {
      this.setState({
        ...this.state,
        plus_password: e.target.value,
      });
    }
    if (name === "plus_email") {
      this.setState({
        ...this.state,
        plus_email: e.target.value,
      });
    }
    if (name === "plus_phonenumber") {
      this.setState({
        ...this.state,
        plus_phonenumber: e.target.value,
      });
    }
    if (name === "plus_address_small") {
      this.setState({
        ...this.state,
        plus_address_small: e.target.value,
      });
    }
    if (name === "plus_address_big") {
      this.setState({
        ...this.state,
        plus_address_big: e.target.value,
      });
      console.log(e.target.value);
    }
  };

  handleChange = (e) => {
    const { name } = e.target;
    if (name === "plus_talentshare") {
      this.setState({
        plus_talentshare: e.target.value,
      });
    }
    if (name === "plus_continu_month") {
      if (e.target.value >= 1) {
        this.setState({
          plus_continu_month: e.target.value,
        });
      }
    }
    if (name === "plus_start_time") {
      this.setState({
        plus_start_time: e.target.value,
      });
    }
    if (name === "plus_end_time") {
      this.setState({
        plus_end_time: e.target.value,
      });
    }
  };

  handleWhen = (e) => {
    const { name } = e.target;
    // 배열에 값이 있으면
    if (this.state.plus_start_day.findIndex((i) => i === name) !== -1) {
      const newHash = this.state.plus_start_day.filter(
        (value) => value !== name
      );
      this.setState({
        ...this.state,
        plus_start_day: newHash,
      });
    }
    // 배열에 값이 없으면
    else {
      this.setState({
        ...this.state,
        plus_start_day: [...this.state.plus_start_day, name],
      });
    }
  };

  handleActivity = (e) => {
    const { name } = e.target;
    // 배열에 값이 있으면
    if (this.state.plus_fields.findIndex((i) => i === name) !== -1) {
      const newHash = this.state.plus_fields.filter((value) => value !== name);
      this.setState({
        ...this.state,
        plus_fields: newHash,
      });
    }
    // 배열에 값이 없으면
    else {
      this.setState({
        ...this.state,
        plus_fields: [...this.state.plus_fields, name],
      });
    }
  };

  handleTerms = (event) => {
    const { name } = event.target;
    if (name === "agreePrivate") {
      this.setState({ agreePrivate: event.target.checked });
      console.log(event.target.checked);
    }
    if (name === "agreeWepler") {
      this.setState({ agreeWepler: event.target.checked });
      console.log(event.target.checked);
    }
  };

  render() {
    const {
      plus_name,
      plus_email,
      plus_password,
      plus_phonenumber,
      plus_address_big,
      plus_address_small,
      plus_start_day,
      plus_talentshare,
      plus_continu_month,
      plus_start_time,
      plus_end_time,
      plus_fields,
    } = this.state;
    return (
      <PlusPresenter
        plus_name={plus_name}
        plus_email={plus_email}
        plus_phonenumber={plus_phonenumber}
        plus_password={plus_password}
        plus_address_big={plus_address_big}
        plus_address_small={plus_address_small}
        plus_start_day={plus_start_day}
        plus_talentshare={plus_talentshare}
        plus_continu_month={plus_continu_month}
        plus_start_time={plus_start_time}
        plus_end_time={plus_end_time}
        plus_fields={plus_fields}
        postBoard={this.postBoard}
        handleChange={this.handleChange}
        handelinfoChange={this.handelinfoChange}
        handleWhen={this.handleWhen}
        handleActivity={this.handleActivity}
        handleTerms={this.handleTerms}
      />
    );
  }
}
