import React from "react";
import axios from "axios";
import PlusPresenter from "./PlusInfobasic";

export default class extends React.Component {
  postBoard = async (e) => {
    e.preventDefault();
    const {
      plus_start_day,
      plus_talentshare,
      plus_continu_month,
      plus_start_time,
      plus_end_time,
      plus_fields,
    } = this.state;
    try {
      const post = await axios.post("/plus_signup/", {
        plus_start_day,
        plus_talentshare,
        plus_continu_month,
        plus_start_time,
        plus_end_time,
        plus_fields,
      });
      console.log(post);
      alert("수정 되었습니다");
    } catch {
      alert("수정 실패하였습니다.");
    }
  };

  handleChange = (e) => {
    const { name } = e.target;
    if (name === "plus_talentshare") {
      this.setState({
        plus_talentshare: e.target.value,
      });
      console.log(e.target.value);
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
      console.log("T!");
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
      console.log(e.target.value);
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
    return (
      <PlusPresenter
        ismodify={ismodify}
        postBoard={this.postBoard}
        handleChange={this.handleChange}
        handleWhen={this.handleWhen}
        handleActivity={this.handleActivity}
      />
    );
  }
}
