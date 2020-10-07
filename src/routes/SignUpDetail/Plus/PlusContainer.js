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
    plus_oneself: "",
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
      plus_oneself,
      agreePrivate,
      agreeWepler,
    } = this.state;

    if (
      plus_name &&
      plus_email &&
      plus_password &&
      plus_phonenumber &&
      plus_address_big &&
      plus_address_small &&
      plus_start_day &&
      plus_talentshare &&
      plus_continu_month &&
      plus_start_time &&
      plus_end_time &&
      plus_fields
    ) {
      if (agreePrivate === false || agreeWepler === false) {
        alert("이용 약관에 동의해 주세요");
      }
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
          plus_oneself,
        });
        // console.log(post);
        if(post.data.len === false){
          alert("비밀번호 길이가 8자리 이상이어야 합니다.");
        }
        else if(post.data.hasnumber === false){
          alert("비밀번호에 숫자가 포함되어야 합니다.");
        }
        else if(post.data.hascharacter === false){
          alert("비밀번호에 영문이 포함되어야 합니다.");
        }
        else if(post.data.hasspecial === false){
          alert("비밀번호에 특수문자가 포함되어야 합니다.");
        }
        else{
        alert("회원가입 되었습니다");
        this.props.history.push("/signin");
        }
      } catch {
        alert("회원가입에 실패 했습니다. 다시 시도해 주세요.");
      }
    } else {
      alert("전부 입력해 주세요.");
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
    }
    if (name === "plus_oneself") {
      this.setState({
        ...this.state,
        plus_oneself: e.target.value,
      });
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
      this.setState({ agreePrivate: event.target.checked }); //true
      if (event.target.checked === false) {
        alert("개인정보 수집 및 이용 약관에 동의해 주세요");
      }
    }
    if (name === "agreeWepler") {
      this.setState({ agreeWepler: event.target.checked }); //true
      if (event.target.checked === false) {
        alert("위플러 이용 약관에 동의해 주세요");
      }
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
      plus_oneself,
    } = this.state;
    return (
      <>
        {/* {console.log(this.props)} */}
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
          plus_oneself={plus_oneself}
          postBoard={this.postBoard}
          handleChange={this.handleChange}
          handelinfoChange={this.handelinfoChange}
          handleWhen={this.handleWhen}
          handleActivity={this.handleActivity}
          handleTerms={this.handleTerms}
        />
      </>
    );
  }
}
