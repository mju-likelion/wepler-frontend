import React from "react";
import axios from "axios";
import PlzPresenter from "./PlzPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plz_name: "",
      plz_email: "",
      plz_password: "",
      plz_phonenumber: "",
      plz_address_big: "",
      plz_address_small: "",
      plz_fields: [],
      plz_when_learn: {
        regularly: false,
        specific: false,
        thinking: false,
      },
      plz_belong: {
        individual: false,
        group: false,
      },
      agreePrivate: false,
      agreeWepler: false,
    };
  }

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
      agreePrivate,
      agreeWepler,
    } = this.state;

    if (agreePrivate === false || agreeWepler === false) {
      alert("이용 약관에 동의해 주세요");
    }
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
      // console.log(post);
      if (post.data.len === false) {
        alert("비밀번호 길이가 8자리 이상이어야 합니다.");
      } else if (post.data.hasnumber === false) {
        alert("비밀번호에 숫자가 포함되어야 합니다.");
      } else if (post.data.hascharacter === false) {
        alert("비밀번호에 영문이 포함되어야 합니다.");
      } else if (post.data.hasspecial === false) {
        alert("비밀번호에 특수문자가 포함되어야 합니다.");
      } else {
        alert("회원가입 되었습니다");
      }
      this.props.history.push("/signin");
    } catch {
      alert("회원가입에 실패 하였습니다.");
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
    if (name === "plz_phonenumber") {
      this.setState({
        ...this.state,
        plz_phonenumber: e.target.value,
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

  handleWhenRadio = (event) => {
    let obj = {};
    obj[event.target.value] = event.target.checked; // true
    this.setState({ plz_when_learn: obj });
  };

  handleBelongRadio = (event) => {
    let obj = {};
    obj[event.target.value] = event.target.checked; // true
    this.setState({ plz_belong: obj });
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
      plz_name,
      plz_email,
      plz_password,
      plz_phonenumber,
      plz_address_big,
      plz_address_small,
      plz_when_learn,
      plz_belong,
      plz_fields,
      agreePrivate,
      agreeWepler,
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
        agreePrivate={agreePrivate}
        agreeWepler={agreeWepler}
        postBoard={this.postBoard}
        handelinfoChange={this.handelinfoChange}
        handleActivity={this.handleActivity}
        handleWhenRadio={this.handleWhenRadio}
        handleBelongRadio={this.handleBelongRadio}
        handleTerms={this.handleTerms}
      />
    );
  }
}
