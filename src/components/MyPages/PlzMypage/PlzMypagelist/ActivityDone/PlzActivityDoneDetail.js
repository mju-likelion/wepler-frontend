import React, { useState, useEffect } from "react";
// import axios from "axios";
import PlzMypageNav from "../../PlzMypagenav";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const Plz = styled.div`
  padding-bottom: 10px;
  padding-top: 30px;
`;

const Box = styled.div`
  padding-bottom: 30px;
  padding-top: 30px;
  padding-left: 30px;
`;

const Detail = ({ match }) => {
  console.log(match.params.profileId);
  const [plus_id, setPlus_id] = useState("");
  const [plus_email, setPlus_email] = useState("");
  const [plus_oneself, setPlus_oneself] = useState("");
  const [plus_rating, setPlus_rating] = useState(5); //평점은 기본 5
  const [plus_fields, setPlus_fields] = useState([]);
  const [plus_start_day, setPlus_start_day] = useState([]);
  const [plus_start_time, setPlus_start_time] = useState("");
  const [plus_end_time, setPlus_end_time] = useState("");
  const [plus_address_big, setplus_address_big] = useState("");
  const [plus_address_small, setplus_address_small] = useState("");

  useEffect(() => {
    async function getApply() {
        try {
          //프로필의 내용
          const reads = await axios.get(`//mypage/complete_detail/${match.params.profileId}`, {
            headers: {
              Authorization: JSON.parse(localStorage.getItem("token")),
            },
          });
          setPlus_id(reads.data.user_name);
          setPlus_email(reads.data.user_id);
          setPlus_oneself(reads.data.user_info);
          setPlus_rating(reads.data.user_point);
          setPlus_fields(reads.data.user_class);
          setPlus_start_day(reads.data.user_day);
          setPlus_start_time(reads.data.user_start);
          setPlus_end_time(reads.data.user_end);
          setplus_address_big(reads.data.user_address_big);
          setplus_address_small(reads.data.user_address_small);
        } catch {
          console.log("profile error!");
        }
    }
    getApply();
  }, []);

  return (
    <>
      <PlzMypageNav />
      <Container maxWidth="xs">
        <Grid>
          <Box>
            <Plz>플리즈 회원 아이디 : {plus_id}</Plz>
            <Plz>플리즈 회원 한 줄 소개 : {plus_oneself}</Plz>
            <Plz>플리즈 회원 평점 : {plus_rating}</Plz>
            <Plz>활동 분야 : {plus_fields}</Plz>
            <Plz>활동 시작 날짜 : {plus_start_day}</Plz>
            <Plz>활동 시작 시간 : {plus_start_time}</Plz>
            <Plz>활동 마감 날짜 : {plus_end_time}</Plz>
            <Plz>플리즈 회원 이메일 주소 : {plus_email}</Plz>
            <Plz>플리즈 회원 활동 장소 : {plus_address_big}</Plz>
            <Plz>플리즈 회원 자세한 활동 장소 : {plus_address_small}</Plz>
          </Box>
        </Grid>
      </Container>
    </>
  );
};
export default Detail;
