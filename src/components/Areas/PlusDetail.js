import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Profile from "./Profile/Profile";

const ButtonMember = styled.div`
  display: flex;
  padding-top: 5%;
  padding-left: 40%;
`;

const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
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
  const [plus_continu_month, setPlus_continu_month] = useState("");
  const [plus_fields, setPlus_fields] = useState([]);
  const [plus_edu, setPlus_edu] = useState("");
  const [plus_start_day, setPlus_start_day] = useState("");
  const [plus_start_time, setPlus_start_time] = useState("");
  const [plus_end_time, setPlus_end_time] = useState("");
  const [plus_email, setPlus_email] = useState("");

  console.log(match.params.proflieId);
  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    setType(user_id); //현사용자 회원
    // async function getRead() {
    //   var reads = await axios.get(
    //     `/choice_plus/choice_dedtail/${match.params.proflieId}`,
    //     {
    //       headers: {
    //         Authorization: JSON.parse(localStorage.getItem("token")),
    //       },
    //     }
    //   );
    // }
    // getRead();
    setPlus_id("plus_id");
    setPlus_continu_month("5");
    setPlus_fields("council", "trip");
    setPlus_edu("O");
    setPlus_start_day("월");
    setPlus_start_time("8:00");
    setPlus_end_time("17:00");
    setPlus_email("1234@naver.com");
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
      <Profile />
      <div>저는 {plus_id} 입니다.</div>
      <div>저의 이메일 주소는 {plus_email} 입니다.</div>
      <div>원하는 재능 나눔 분야</div>
      {plus_fields} <div>봉사자 교육 수료 여부</div>
      {plus_edu}
      <div>제가 활동을 함께 할 수 있는 요일은 입니다.</div>
      {plus_start_day}
      <div>제가 활동을 함께 할 수 있는 시간은 입니다.</div>
      {plus_start_time} ~{plus_end_time}
      <div>
        제가 활동을 지속할 수 있는 기간은 {plus_continu_month} 개월 입니다.
      </div>
      <div>'고용하기'버튼을 누르면 플러스에게 알림이 갑니다.</div>
      <ButtonMember>
        {type === "plus" ? (
          <ApplyButton onClick={apply}>신청하기</ApplyButton>
        ) : undefined}
        <ButtonLink to="/areaplus">
          <BeforeButton>이전으로</BeforeButton>
        </ButtonLink>
      </ButtonMember>
    </>
  );
};

export default PlusDetail;
