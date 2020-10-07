import React from "react";
import axios from "axios";
import PlusBasicPresenter from "./BasicPresenter";

export default class extends React.Component {
  state = {
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
    plus_oneself: "",
  };

  componentDidMount = () => {
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    this.setState({
      type: user_id,
    });
    if (user_id !== "plus") {
      localStorage.clear();
    }
    const getMypage = async () =>  {
      try {
        const gets = await axios.get("/mypage/getMypage", {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
        });
        this.setState({
          plus_fields: gets.data.user_class,
          plus_name: gets.data.user_name,
          plus_phonenumber: gets.data.user_phone,
          plus_address_big: gets.data.user_address_big,
          plus_address_small: gets.data.user_address_small,
          plus_start_day: gets.data.user_start_day,
          plus_talentshare: gets.data.user_talentshare,
          plus_continu_month: gets.data.user_continu_month,
          plus_start_time: gets.data.user_start_time,
          plus_end_time: gets.data.user_end_time,
          plus_email: gets.data.user_email,
          plus_oneself: gets.data.user_info,
        });
      } catch {
        console.log("Infromation error!");
      }
    }
    getMypage();
  };

  postBoard = async (e) => {
    e.preventDefault();
    const {
      plus_start_day,
      plus_talentshare,
      plus_continu_month,
      plus_start_time,
      plus_end_time,
      plus_fields,
      file,
      plus_oneself,
    } = this.state;
    // const data = new FormData();
    // data.append("photo", file[0]);
    try {
      const post = await axios.post("/mypage/updateMypage/", {
        plus_start_day,
        plus_talentshare,
        plus_continu_month,
        plus_start_time,
        plus_end_time,
        plus_fields,
        file,
        plus_oneself,
      }, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
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
    if (name === "plus_oneself") {
      this.setState({
        plus_oneself: e.target.value,
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

  handleModify = (e) => {
    const { name } = e.target;
    if (name === "ismodify") {
      this.setState({
        ismodify: e.target.value,
      });
    }
  };

  render() {
    const {
      file,
      plus_name,
      plus_email,
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
      <PlusBasicPresenter
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
        plus_oneself={plus_oneself}
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
