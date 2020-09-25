import React, { useState, useEffect } from "react";
// import axios from "axios";
import PlzMypageNav from "../../PlzMypagenav";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

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
        <h2>플러스 회원 아이디 : {plz_id}</h2>
        <Grid item xs={12} sm={12}>
          {plz_oneself}
          {plz_rating}
          {plz_fields}
          {plz_start_day}
          {plz_start_time}
          {plz_end_time}
          {plz_email}
          {plz_address_big}
          {plz_address_small}
        </Grid>
      </Container>
    </>
  );
};
export default Detail;
