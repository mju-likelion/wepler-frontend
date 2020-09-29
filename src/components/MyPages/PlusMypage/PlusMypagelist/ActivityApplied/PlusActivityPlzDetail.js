import React, { useState, useEffect } from "react";
// import axios from "axios";
import PlusMypageNav from "../../PlusMypagenav";
import Grid from "@material-ui/core/Grid";
import { Plus, Container } from "../Basic/BasicStyle";

const Detail = ({ match }) => {
  console.log(match.params.profileId);
  const [plz_id, setplz_id] = useState("");
  const [plz_email, setplz_email] = useState("");
  const [plz_oneself, setplz_oneself] = useState("");
  const [plz_fields, setplz_fields] = useState([]);
  const [plz_start_day, setplz_start_day] = useState([]);
  const [plz_start_time, setplz_start_time] = useState("");
  const [plz_end_time, setplz_end_time] = useState("");
  const [plz_address_big, setplz_address_big] = useState("");
  const [plz_address_small, setplz_address_small] = useState("");

  useEffect(() => {
    async function getApply() {
      //   try {
      //     //프로필의 내용
      //     const reads = await axios.get(`/apply_detail/${match.params.profileId}`, {
      //       headers: {
      //         Authorization: JSON.parse(localStorage.getItem("token")),
      //       },
      //     });
      //   } catch {
      //     console.log("profile error!");
      //   }
      setplz_id("아이디1");
      setplz_email("1234@naver.com");
      setplz_oneself("나는야 플리즈회원");
      setplz_fields(["council", "trip"]);
      setplz_start_day("mon");
      setplz_start_time("8:00");
      setplz_end_time("17:00");
      setplz_address_big("seoul");
      setplz_address_small("용인시 처인구 명지대학교");
    }
    getApply();
  }, []);

  return (
    <>
      <PlusMypageNav />
      <Container maxWidth="xs">
        <Grid>
            <Plus>플리즈 회원 아이디 : {plz_id}</Plus>
            <Plus>플리즈 회원 한 줄 소개 : {plz_oneself}</Plus>
            <Plus>원하는 활동 분야 : {plz_fields}</Plus>
            <Plus>활동 시작 날짜 : {plz_start_day}</Plus>
            <Plus>활동 시작 시간 : {plz_start_time}</Plus>
            <Plus>활동 마감 날짜 : {plz_end_time}</Plus>
            <Plus>플리즈 회원 이메일 주소 : {plz_email}</Plus>
            <Plus>플리즈 회원 활동 장소 : {plz_address_big}</Plus>
            <Plus>플리즈 회원 자세한 활동 장소 : {plz_address_small}</Plus>
        </Grid>
      </Container>
    </>
  );
};
export default Detail;
