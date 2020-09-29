import React, { useState, useEffect } from "react";
// import axios from "axios";
import PlzMypageNav from "../../PlzMypagenav";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { TextTitle } from "./PlzBasicStyle";

const Plus = styled.div`
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
  const [plus_id, setplus_id] = useState("");
  const [plus_email, setplus_email] = useState("");
  const [plus_oneself, setplus_oneself] = useState("");
  const [plus_rating, setplus_rating] = useState(5); //평점은 기본 5
  const [plus_fields, setplus_fields] = useState([]);
  const [plus_start_day, setplus_start_day] = useState([]);
  const [plus_start_time, setplus_start_time] = useState("");
  const [plus_end_time, setplus_end_time] = useState("");
  const [plus_address_big, setplus_address_big] = useState("");
  const [plus_address_small, setplus_address_small] = useState("");

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
      setplus_id("아이디1");
      setplus_email("1234@naver.com");
      setplus_oneself("나는야 플러스회원");
      setplus_rating(5);
      setplus_fields(["council", "trip"]);
      setplus_start_day("mon");
      setplus_start_time("8:00");
      setplus_end_time("17:00");
      setplus_address_big("seoul");
      setplus_address_small("용인시 처인구 명지대학교");
    }
    getApply();
  }, []);

  return (
    <>
      <PlzMypageNav />
      <Container maxWidth="xs">
       <Grid>
         <Box>
          <Plus>
          플러스 회원 아이디 : {plus_id}
          </Plus>
          <Plus>
          플러스 회원 한 줄 소개 : {plus_oneself}
          </Plus>
          <Plus>
          플러스 회원 평점 : {plus_rating}
          </Plus>
          <Plus>
          활동 분야 : {plus_fields}
          </Plus>
          <Plus>
          활동 시작 날짜 : {plus_start_day}
          </Plus>
          <Plus>
          활동 시작 시간 : {plus_start_time}
          </Plus>
          <Plus>
          활동 마감 날짜 : {plus_end_time}
          </Plus>
          <Plus>
          플러스 회원 이메일 주소 : {plus_email}
          </Plus>
          <Plus>
          플러스 회원 활동 장소  : {plus_address_big}
          </Plus>
          <Plus>
          플러스 회원 자세한 활동 장소 : {plus_address_small}
          </Plus>
          </Box>          
        </Grid>
      </Container>
    </>
  );
};
export default Detail;
