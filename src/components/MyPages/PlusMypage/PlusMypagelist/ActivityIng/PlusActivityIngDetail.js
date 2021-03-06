import React, { useState, useEffect } from "react";
import axios from "axios";
import PlusMypageNav from "../../PlusMypagenav";
import Container from "@material-ui/core/Container";
import { PlzId, Title, Explain } from "../../../DetailStyle";

const Detail = ({ match }) => {
  console.log(match.params.profileId);
  const [plz_id, setplz_id] = useState("");
  const [plz_email, setplz_email] = useState("");
  const [plz_fields, setplz_fields] = useState([]);
  const [plz_start_time, setplz_start_time] = useState("");
  const [plz_end_time, setplz_end_time] = useState("");
  const [plz_address_big, setplz_address_big] = useState("");
  const [plz_address_small, setplz_address_small] = useState("");

  useEffect(() => {
    async function getApply() {
      try {
        //프로필의 내용
        const reads = await axios.get(
          `/mypage/match_detail/${match.params.profileId}`,
          {
            headers: {
              Authorization: JSON.parse(localStorage.getItem("token")),
            },
          }
        );
        setplz_id(reads.data.user_name);
        setplz_email(reads.data.user_email);
        setplz_fields(reads.data.user_class);
        setplz_start_time(reads.data.user_start);
        setplz_end_time(reads.data.user_end);
        setplz_address_big(reads.data.user_address_big);
        setplz_address_small(reads.data.user_address_small);
      } catch {
        console.log("profile error!");
      }
    }
    getApply();
  }, [match.params.profileId]);

  return (
    <>
      <PlusMypageNav />
      <Container component="main" maxWidth="md">
        <PlzId>
          <Title>{plz_id}</Title>

          <Explain>이메일 : {plz_email}</Explain>
          <Explain>분야 : {plz_fields}</Explain>
          <Explain>
            시간 : {plz_start_time} ~ {plz_end_time}
          </Explain>
          <Explain>지역 : {plz_address_big}</Explain>
          <Explain>장소 : {plz_address_small}</Explain>
        </PlzId>
      </Container>
    </>
  );
};
export default Detail;
