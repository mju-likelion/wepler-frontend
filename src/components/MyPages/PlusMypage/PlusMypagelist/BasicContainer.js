import React from "react";
import axios from "axios";
import BasicPresenter from "./BasicPresenter";

export default class extends React.Component {
  state = {
    ismodify: false,
    type: "",
    file: null,
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
  };

  // useEffect = () => {
  //   const user_id = JSON.parse(localStorage.getItem("user_id"));
  //   setType(user_id);
  //   if (type !== "plus") {
  //     localStorage.clear();
  //   }

  //   async function getMypage() {
  //     var test = await axios.get("/mypage/getMypage", {
  //       headers: {
  //         Authorization: JSON.parse(localStorage.getItem("token")),
  //       },
  //     });
  //     setBoard(test.data.user_class);
  //     setName(test.data.user_name);
  //     setPhone(test.data.user_phone);
  //     setEmail(test.data.user_email);
  //     setBig(test.data.user_address_big);
  //     setSmall(test.data.user_address_small);
  //     setContinu(test.data.user_continu_month);
  //     setStart(test.data.user_start_time);
  //     setEnd(test.data.user_end_time);
  //     setShare(test.data.user_talentshare);
  //     setDay(test.data.user_start_day);
  //   }
  //   getMypage();
  // };

  postBoard = async (e) => {
    e.preventDefault();
    console.log("sdafas");
    const {
      plus_start_day,
      plus_talentshare,
      plus_continu_month,
      plus_start_time,
      plus_end_time,
      plus_fields,
    } = this.state;
    // const data = new FormData();
    // data.append("photo", file[0]);
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

  handleChangeFile = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        base64.toString(); // 파일 base64 상태 업데이트
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      this.setState({
        ...this.state,
        file: URL.createObjectURL(event.target.files[0]),
      }); // 파일 상태 업데이트
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
        console.log(e.target.value);
      }
    }
    if (name === "plus_start_time") {
      this.setState({
        plus_start_time: e.target.value,
      });
      console.log(e.target.value);
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

  handleModify = (e) => {
    const { name } = e.target;
    if (name === "ismodify") {
      this.setState({
        ismodify: e.target.value,
      });
    }
    console.log("sdfs");
  };
  render() {
    const {
      ismodify,
      type,
      file,
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
      <BasicPresenter
        plus_name={plus_name}
        plus_fields={plus_fields}
        plus_phonenumber={plus_phonenumber}
        plus_email={plus_email}
        plus_address_big={plus_address_big}
        plus_address_small={plus_address_small}
        plus_continu_month={plus_continu_month}
        plus_start_time={plus_start_time}
        plus_end_time={plus_end_time}
        plus_talentshare={plus_talentshare}
        plus_start_day={plus_start_day}
        file={file}
        postBoard={this.postBoard}
        handleChange={this.handleChange}
        handleWhen={this.handleWhen}
        handleActivity={this.handleActivity}
        handleChangeFile={this.handleChangeFile}
        handleModify={this.handleModify}
      />
    );
  }
}
