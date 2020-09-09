import React from "react";
import axios from "axios";
import PlusPresenter from "./PlusePresenter";

export default class extends React.Component {
  state = {
    plus_name: "",
    email: "",
    password: "",
    plus_address_big: "",
    plus_address_small: "",
    plus_start_day: [],
    plus_talentshare: "",
    plus_continu_month: "",
    plus_start_time: "",
    plus_end_time: "",
    plus_fields: [],
  };
  postBoard = async () => {
    const {
      plus_name,
      email,
      password,
      plus_address_big,
      plus_address_small,
      plus_address,
      plus_start_day,
      plus_talentshare,
      plus_continu_month,
      plus_start_time,
      plus_end_time,
      plus_fields,
    } = this.state;
    const post = await axios.post("http://localhost:4000/plus_signup", {
      plus_name,
      email,
      password,
      plus_address_big,
      plus_address_small,
      plus_address,
      plus_start_day,
      plus_talentshare,
      plus_continu_month,
      plus_start_time,
      plus_end_time,
      plus_fields,
    });
    this.setState({
      ...this.state,
    });
    console.log(post);
  };

  handleChange = (e) => {
    const { name } = e.target;
    if (name === "plus_talentshare") {
      this.setState({
        plus_talentshare: e.target.value,
      });
    }
    if (name === "plus_continu_month") {
      this.setState({
        plus_continu_month: e.target.value,
      });
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
    if (name === "plus_address_big") {
      this.setState({
        plus_end_time: e.target.value,
      });
    }
    console.log(e.target);
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
  render() {
    const {
      plus_name,
      email,
      password,
      plus_address_big,
      plus_address_small,
      plus_address,
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
        email={email}
        password={password}
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
        handleWhen={this.handleWhen}
        handleActivity={this.handleActivity}
      />
    );
  }
}
