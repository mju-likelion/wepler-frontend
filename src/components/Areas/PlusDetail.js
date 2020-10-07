import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  ListItem,
  Box,
  BoxBig,
  BoxName,
  BoxExplan,
  HashBox,
} from "./Profile/ProfileStyled";

const ButtonMember = styled.div`
  display: flex;
  padding-top: 2%;
  padding-bottom: 5%;
  padding-left: 40%;
`;

const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  padding-left: 10%;
  padding-top: 10px;
`;

const Container2 = styled.div`
  padding-left: 15%;
  padding-top: 40px;
`;

const Line = styled.div`
  padding-bottom: 30px;
`;

const LineLast = styled.div`
  padding-bottom: 15px;
  color: #000000;
`;

const Bigfont = styled.div`
  font-size: 35px;
  display: inline-block;
  color: #c9aa79;
`;

const ApplyButton = styled.button`
  border: 3px solid #c9aa79;
  background-color: #c9aa79;
  color: #ffffff;
  font-size: 30px;
  margin: 10%;
  width: 200px;
  height: 60px;
  &:hover {
    border: 3px solid #0077b6;
    background-color: #caf0f8;
    color: #0077b6;
  }
`;

const BeforeButton = styled.button`
  border: 3px solid #c9aa79;
  background-color: #c9aa79;
  color: #ffffff;
  font-size: 30px;
  width: 200px;
  height: 60px;
  &:hover {
    border: 3px solid #f2d4ca;
    background-color: #ffffff;
    color: #f2d4ca;
  }
`;

const PlusDetail = ({ match }) => {
  const [type, setType] = useState(""); //현사용자 회원
  const [plus_id, setPlus_id] = useState("");
  const [plus_oneself, setPlus_oneself] = useState("");
  const [plus_rating, setPlus_rating] = useState("");
  const [plus_continu_month, setPlus_continu_month] = useState("");
  const [plus_fields, setPlus_fields] = useState([]);
  const [plus_edu, setPlus_edu] = useState("");
  const [plus_start_day, setPlus_start_day] = useState("");
  const [plus_start_time, setPlus_start_time] = useState("");
  const [plus_end_time, setPlus_end_time] = useState("");
  const [plus_email, setPlus_email] = useState("");

  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    setType(user_id); //현사용자 회원
    async function getRead() {
      var reads = await axios.get(
        `/choice_plus/plus_profile_detail/${match.params.proflieId}`,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      setPlus_id(reads.data.plus_name);
      setPlus_continu_month(reads.data.plus_continu_month);
      setPlus_fields(reads.data.plus_fields);
      setPlus_edu(reads.data.plus_edu);
      setPlus_start_day(reads.data.plus_start_day);
      setPlus_start_time(reads.data.plus_start_time);
      setPlus_end_time(reads.data.plus_end_time);
      setPlus_email(reads.data.plus_id);
      setPlus_oneself(reads.data.plus_info);
      setPlus_rating(reads.data.plus_point);
    }
    getRead();
  }, [match.params.proflieId]);

  const apply = async (e) => {
    const overap = await axios.post(
      `/choice_plus/apply/${match.params.proflieId}/`,
      {},
      {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      }
    );
    if (overap.data.isoverap === true) alert("이미 신청하셨습니다.");
    else alert("신청되었습니다.");
  };

  return (
    <>
      <Container>
        <Box>
          <BoxBig>
            <ListItem>
              <BoxName>
                <h2>{plus_id}</h2>
              </BoxName>
              <BoxExplan>
                <FaQuoteLeft size="15" color="#404A41" />
                {plus_oneself}
                <FaQuoteRight size="15" color="#404A41" />
                <div>평균평점: {plus_rating}</div>
                <HashBox>{plus_fields}</HashBox>
              </BoxExplan>
            </ListItem>
          </BoxBig>
        </Box>

        <Container2>
          <Line>
            저는 <Bigfont>{plus_id}</Bigfont> 입니다.{" "}
          </Line>
          <Line>
            저의 이메일 주소는 <Bigfont>{plus_email}</Bigfont> 입니다.
          </Line>
          <Line>
            제가 원하는 재능 나눔 분야는 <Bigfont>{plus_fields}</Bigfont>{" "}
            입니다.
          </Line>
          <Line>
            봉사자 교육 수료 <Bigfont>{plus_edu}</Bigfont>
          </Line>
          <Line>
            제가 활동을 함께 할 수 있는 요일은{" "}
            <Bigfont>{plus_start_day}</Bigfont> 입니다.
          </Line>
          <Line>
            제가 활동을 함께 할 수 있는 시간은{" "}
            <Bigfont>
              {plus_start_time}시부터 ~{plus_end_time}시까지
            </Bigfont>{" "}
            입니다.
          </Line>
          <Line>
            제가 활동을 지속할 수 있는 기간은{" "}
            <Bigfont>{plus_continu_month}개월</Bigfont> 입니다.
          </Line>
          <br /> <br />
          <LineLast>
            '고용하기' 버튼을 누르면 플러스에게 알림이 갑니다.
          </LineLast>
        </Container2>
      </Container>

      <ButtonMember>
        {type === "plz" ? (
          <ApplyButton onClick={apply}>고용하기</ApplyButton>
        ) : undefined}
        <ButtonLink to="/areaplus">
          <BeforeButton>이전으로</BeforeButton>
        </ButtonLink>
      </ButtonMember>
    </>
  );
};

export default PlusDetail;
