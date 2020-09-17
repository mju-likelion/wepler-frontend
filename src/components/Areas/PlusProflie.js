import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "components/Profile/Profile.js";

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

const SeoulMem = () => (
  <>
    <Container>
      <h1>서울</h1>
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

export default SeoulMem;
