import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PlusMypageNav from "../../PlusMypagenav";
import Container from "@material-ui/core/Container";
import {
  PlzId,
  Title,
  ButtonsApply,
  ButtonsDelelte,
  Explain,
} from "../../../DetailStyle";

const Detail = ({ match }) => {
  // console.log(match.params.profileId);
  const [plz_id, setplz_id] = useState("");
  const [plz_email, setplz_email] = useState("");
  const [plz_fields, setplz_fields] = useState([]);
  const [plz_address_big, setplz_address_big] = useState("");
  const [plz_address_small, setplz_address_small] = useState("");

  const apply = async (e) => {
    const overap = await axios.post(
      `/mypage/accept/${match.params.profileId}/`,
      {},
      {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      }
    );
    if (overap.data.isoverap === true) alert("이미 수락하셨습니다.");
    else alert("수락되었습니다. 즐겁게 재능을 배우세요!");
  };

  const postDelete = async (e) => {
    await axios.delete(`/mypage/reject/${match.params.profileId}`);
    alert("거절되었습니다.");
  };

  useEffect(() => {
    async function getApply() {
      try {
        //프로필의 내용
        const reads = await axios.get(
          `/mypage/applied_detail/${match.params.profileId}`,
          {
            headers: {
              Authorization: JSON.parse(localStorage.getItem("token")),
            },
          }
        );
        setplz_id(reads.data.user_name);
        setplz_email(reads.data.user_email);
        setplz_fields(reads.data.user_class);
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
          <ButtonsApply onClick={apply}>
            <Link to="/plusactivitying">수락하기</Link>
          </ButtonsApply>
          <ButtonsDelelte onClick={postDelete}>
            <Link to="/plzapplied">거절하기</Link>
          </ButtonsDelelte>
          <Explain>이메일 : {plz_email}</Explain>
          <Explain>분야 : {plz_fields}</Explain>
          <Explain>{/* 시간 : {plz_start_time} ~ {plz_end_time} */}</Explain>
          <Explain>지역 : {plz_address_big}</Explain>
          <Explain>장소 : {plz_address_small}</Explain>
        </PlzId>
      </Container>
    </>
  );
};
export default Detail;
