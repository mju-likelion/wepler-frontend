import React, { useState, useEffect } from "react";
// import axios from "axios";
import PlusMypageNav from "../../PlusMypagenav";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

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
          const reads = await axios.get(`/mypage/complete_detail/${match.params.profileId}`, {
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
      <PlusMypageNav />
      <Container maxWidth="xs">
        <h2>플러스 회원 아이디 : {plus_id}</h2>
        <Grid item xs={12} sm={12}>
          {plus_oneself}
          {plus_rating}
          {plus_fields}
          {plus_start_day}
          {plus_start_time}
          {plus_end_time}
          {plus_email}
          {plus_address_big}
          {plus_address_small}
        </Grid>
      </Container>
    </>
  );
};
export default Detail;
