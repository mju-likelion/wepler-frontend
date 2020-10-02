import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import PlzMypageNav from "../../PlzMypagenav";
import Container from "@material-ui/core/Container";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { PlzId, Title, Buttons, Explain } from "../../../DetailStyle";

const Detail = ({ match }) => {
  console.log(match.params.profileId);
  const [plus_id, setplus_id] = useState("");
  const [plus_rating, setplus_rating] = useState("");
  const [plus_oneself, setplus_oneself] = useState("");
  const [plus_email, setplus_email] = useState("");
  const [plus_fields, setplus_fields] = useState([]);
  const [plus_start_time, setplus_start_time] = useState("");
  const [plus_end_time, setplus_end_time] = useState("");
  const [plus_address_big, setplus_address_big] = useState("");
  const [plus_address_small, setplus_address_small] = useState("");

  const apply = async (e) => {
    try {
      await axios.post(`/board/hire_apply/${match.params.postId}/`, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      });
      alert("활동을 종료했습니다.");
    } catch {
      alert("활동종료에 실패했습니다. 다시 시도해 주세요.");
    }
  };

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
      setplus_oneself("이건 저의 한 줄 소개입니다.");
      setplus_rating("7점");
      setplus_email("1234@naver.com");
      setplus_fields(["council", "trip"]);
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
      <Container component="main" maxWidth="md">
        <PlzId>
          <Title>{plus_id}</Title>
          <Explain>
            <FaQuoteLeft size="18" color="#404A41" /> {plus_oneself}
            <FaQuoteRight size="18" color="#404A41" />
          </Explain>
          <Explain>평균 평점 : {plus_rating}</Explain>
          <Explain>이메일 : {plus_email}</Explain>
          <Explain>분야 : {plus_fields}</Explain>
          <Explain>
            시간 : {plus_start_time} ~ {plus_end_time}
          </Explain>
          <Explain>지역 : {plus_address_big}</Explain>
          <Explain>장소 : {plus_address_small}</Explain>
        </PlzId>
      </Container>
      <Buttons>
        <Button color="primary" onClick={apply}>
          활동완료하기
        </Button>
      </Buttons>
    </>
  );
};
export default Detail;
