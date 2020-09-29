import React, { useState, useEffect } from "react";
// import axios from "axios";
import PlzMypageNav from "../../PlzMypagenav";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { Plus, Container } from "../Basic/PlzBasicStyle";

const PlusId = styled.div`
    padding-right: 380px;
    padding-bottom: 30px;
    padding-top: 30px;
    text-align: center;
`;

const PlusMail = styled.div`
    padding-left: 330px;
    padding-bottom: 10px;
`;

const Detail = ({ match }) => {
  console.log(match.params.profileId);
  const [plz_id, setplz_id] = useState("");
  const [plz_email, setplz_email] = useState("");
  const [plz_oneself, setplz_oneself] = useState("");
  const [plz_rating, setplz_rating] = useState(5); //평점은 기본 5
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
      setplz_oneself("나는야 플러스회원");
      setplz_rating(5);
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
      <PlzMypageNav />
      <Container maxWidth="xs">
        <Grid>
            <PlusId>{plz_id}</PlusId>
            <PlusMail>이메일 : {plz_email}</PlusMail>
            <Plus>평균 평점 : {plz_rating}</Plus>
            <Plus>분야 : {plz_fields}</Plus>
            <Plus>시간 : {plz_start_time}</Plus>
            <Plus>지역 : {plz_address_big}</Plus>
            <Plus>장소 : {plz_address_small}</Plus>
        </Grid>
      </Container>
    </>
  );
};
export default Detail;
