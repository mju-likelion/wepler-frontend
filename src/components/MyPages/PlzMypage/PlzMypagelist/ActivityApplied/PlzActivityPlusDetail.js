import React, { useState, useEffect } from "react";
// import axios from "axios";
import PlzMypageNav from "../../PlzMypagenav";
import Grid from "@material-ui/core/Grid";
import { Plus, Container } from "../Basic/PlzBasicStyle";
import styled from "styled-components";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const PlusId = styled.div`
  padding-right: 380px;
  padding-bottom: 30px;
  padding-top: 30px;
  text-align: center;
`;

const Detail = ({ match }) => {
  console.log(match.params.profileId);
  const [plz_id, setplz_id] = useState("");
  const [plz_rating, setplz_rating] = useState("");
  const [plz_oneself, setplz_oneself] = useState("");
  const [plz_email, setplz_email] = useState("");
  const [plz_fields, setplz_fields] = useState([]);
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
      setplz_oneself("이건 저의 한 줄 소개입니다.");
      setplz_rating("7점");
      setplz_email("1234@naver.com");
      setplz_fields(["council", "trip"]);
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
          <PlusId><FaQuoteLeft size="18" color="#404A41" /> {plz_oneself} <FaQuoteRight size="18" color="#404A41" /></PlusId>          
          <Plus>평균 평점 : {plz_rating}</Plus>
          <Plus>이메일 : {plz_email}</Plus>
          <Plus>분야 : {plz_fields}</Plus>
          <Plus>시간 : {plz_start_time} ~ {plz_end_time}</Plus>
          <Plus>지역 : {plz_address_big}</Plus>
          <Plus>장소 : {plz_address_small}</Plus>
        </Grid>
      </Container>
    </>
  );
};
export default Detail;
