import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "components/Profile/Profile.js";
import qs from "qs";

const Container = styled.div`
  padding-left: 13%;
  padding-top: 10px;
  font-size: 40px;
  font-weight: bold;
`;
const Container2 = styled.div`
  padding-left: 20%;
  padding-top: 10px;
`;
const ButtonMember = styled.div`
  font-size: 50px;
  padding-top: 60px;
  padding-left: 75%;
`;

const ButtonLink = styled(Link)`
  font-size: 30px;
  display: flex;
  align-items: center;
`;

const BeforeButton = styled.button`
  border: 3px solid #c9aa79;
  background-color: #c9aa79;
  color: #ffffff;
  font-size: 20px;
  margin: 50px;
  width: 150px;
  height: 55px;
  &:hover {
    background-color: #f2d4ca;
  }
`;

const city = {
  seoul: "서울특별시",
  gyeonggi: "경기도",
  incheon: "인천",
  gangwon: "강원도",
  chungbuk: "충청북도",
  chungnam: "충청남도",
  daejeon: "대전",
  jeonbuk: "전라북도",
  jeonnam: "전라남도",
  gwangju: "광주",
  gyeongbuk: "경상북도",
  daegu: "대구",
  gyeongnam: "경상남도",
  ulsan: "울산",
  busan: "부산",
  jeju: "제주",
};

const SeoulMem = ({ location: { search } }) => {
  const query = qs.parse(search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 맨 앞의 ? 생략
  });
  return (
    <>
      <Container>
        <h1>{query?.location ? city[query.location] : "전체"}</h1>
      </Container>
      <Container2 />

      <Profile />
      <ButtonMember>
        <ButtonLink to="/areaplus">
          <BeforeButton>이전으로</BeforeButton>
        </ButtonLink>
      </ButtonMember>
    </>
  );
};

export default SeoulMem;
