import React from "react";
import axios from "axios";
import PlzBasicPresenter from "./BasicPresenter";

export default class extends React.Component {
  state = {
    type: "",
    file: null,
    plz_name: "",
    plz_email: "",
    plz_password: "",
    plz_phonenumber: "",
    plz_address_big: "",
    plz_address_small: "",
    plz_start_day: [],
    plz_talentshare: "",
    plz_continu_month: "",
    plz_start_time: "",
    plz_end_time: "",
    plz_fields: [],
  };

  componentDidMount() {
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    this.setState({
      type: user_id,
    });
    if (user_id !== "plz") {
      localStorage.clear();
    }

    const getMypage = async () => {
      try {
        const gets = await axios.get("/mypage/getMypage", {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
        });
        console.log(gets.data.user_name);
        this.setState({
          plz_fields: gets.data.user_class,
          plz_name: gets.data.user_name,
          plz_phonenumber: gets.data.user_phone,
          plz_address_big: gets.data.user_address_big,
          plz_address_small: gets.data.user_address_small,
          plz_email: gets.data.user_email,
        });
      } catch (err) {
        console.log(err.name);
        console.log(err.message);
        console.log("Infromation error!");
      }
    };
    getMypage();
  }

  postBoard = async (e) => {
    e.preventDefault();
    const {
      plz_start_day,
      plz_talentshare,
      plz_continu_month,
      plz_start_time,
      plz_end_time,
      plz_fields,
      file,
    } = this.state;
    // const data = new FormData();
    // data.append("photo", file[0]);
    try {
      const post = await axios.post("/mypage/updateMypage/", {
        plz_start_day,
        plz_talentshare,
        plz_continu_month,
        plz_start_time,
        plz_end_time,
        plz_fields,
        file,
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
    if (name === "plz_talentshare") {
      this.setState({
        plz_talentshare: e.target.value,
      });
    }
    if (name === "plz_continu_month") {
      if (e.target.value >= 1) {
        this.setState({
          plz_continu_month: e.target.value,
        });
      }
    }
    if (name === "plz_start_time") {
      this.setState({
        plz_start_time: e.target.value,
      });
    }
    if (name === "plz_end_time") {
      this.setState({
        plz_end_time: e.target.value,
      });
    }
  };

  handleWhen = (e) => {
    const { name } = e.target;
    // 배열에 값이 있으면
    if (this.state.plz_start_day.findIndex((i) => i === name) !== -1) {
      const newHash = this.state.plz_start_day.filter(
        (value) => value !== name
      );
      this.setState({
        ...this.state,
        plz_start_day: newHash,
      });
    }
    // 배열에 값이 없으면
    else {
      this.setState({
        ...this.state,
        plz_start_day: [...this.state.plz_start_day, name],
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
      plz_name,
      plz_email,
      plz_phonenumber,
      plz_address_big,
      plz_address_small,
      plz_start_day,
      plz_talentshare,
      plz_continu_month,
      plz_start_time,
      plz_end_time,
      plz_fields,
    } = this.state;
    return (
      <PlzBasicPresenter
        plz_name={plz_name}
        plz_fields={plz_fields}
        plz_phonenumber={plz_phonenumber}
        plz_email={plz_email}
        plz_address_big={plz_address_big}
        plz_address_small={plz_address_small}
        plz_continu_month={plz_continu_month}
        plz_start_time={plz_start_time}
        plz_end_time={plz_end_time}
        plz_talentshare={plz_talentshare}
        plz_start_day={plz_start_day}
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
