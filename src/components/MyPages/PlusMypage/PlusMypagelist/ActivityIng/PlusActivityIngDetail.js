import React, { useState, useEffect } from "react";
// import axios from "axios";
import PlusMypageNav from "../../PlusMypagenav";
import Grid from "@material-ui/core/Grid";
import { Plus, Container } from "../Basic/BasicStyle";
import styled from "styled-components";

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
  const [plz_id, setPlz_id] = useState("");
  const [plz_email, setPlz_email] = useState("");
  const [plz_fields, setPlz_fields] = useState([]);
  const [plz_start_time, setPlz_start_time] = useState("");
  const [plz_end_time, setPlz_end_time] = useState("");
  const [plz_address_big, setPlz_address_big] = useState("");
  const [plz_address_small, setPlz_address_small] = useState("");

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
      setPlz_id("플리즈1");
      setPlz_email("1234@naver.com");
      setPlz_fields(["council", "trip"]);
      setPlz_start_time("8:00");
      setPlz_end_time("17:00");
      setPlz_address_big("seoul");
      setPlz_address_small("용인시 처인구 명지대학교");
    }
    getApply();
  }, []);

  return (
    <>
      <PlusMypageNav />
      <Container maxWidth="xs">
        <Grid>
          <PlusId>{plz_id}</PlusId>
          <PlusMail>이메일 : {plz_email}</PlusMail>
          <Plus>분야 : {plz_fields}</Plus>
          <Plus>
            시간 : {plz_start_time} ~ {plz_end_time}
          </Plus>
          <Plus>지역 : {plz_address_big}</Plus>
          <Plus>장소 : {plz_address_small}</Plus>
        </Grid>
      </Container>
    </>
  );
};
export default Detail;
