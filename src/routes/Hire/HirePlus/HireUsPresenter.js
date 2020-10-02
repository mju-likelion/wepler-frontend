import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 40%;
  justify-content: center;
`;

const ButtonList = styled.ul`
  display: flex;
  justify-content: left;
`;

const ButtonLink = styled(Link)`
  align-items: center;
`;

const ButtonArea = styled.button`
  padding: 20px 20px;
  border-radius: 40px;
  border: 3px solid #c9aa79;
  background-color: #ffffff;
  color: #404a41;
  font-size: 20px;
  margin: 20px;
  &:hover {
    background-color: #f2d4ca;
  }
`;

const HireUsPresenter = () => (
  <>
    <Container>
      <p>플러스 회원 프로필 보기</p>

      <ButtonList>
        <ButtonLink to="/plusprofile?location=seoul">
          <ButtonArea>서울특별시</ButtonArea>
        </ButtonLink>
        <ButtonLink to="/plusprofile?location=gyeonggi">
          <ButtonArea>경기도</ButtonArea>
        </ButtonLink>
        <ButtonLink to="/plusprofile?location=incheon">
          <ButtonArea>인천</ButtonArea>
        </ButtonLink>
      </ButtonList>
      <ButtonList>
        <ButtonLink to="/plusprofile?location=gangwon">
          <ButtonArea>강원도</ButtonArea>
        </ButtonLink>
      </ButtonList>

      <ButtonList>
        <ButtonLink to="/plusprofile?location=chungbuk">
          <ButtonArea>충청북도</ButtonArea>
        </ButtonLink>
        <ButtonLink to="/plusprofile?location=chungnam">
          <ButtonArea>충청남도</ButtonArea>
        </ButtonLink>
        <ButtonLink to="/plusprofile?location=daejeon">
          <ButtonArea>대전</ButtonArea>
        </ButtonLink>
      </ButtonList>
      <ButtonList>
        <ButtonLink to="/plusprofile?location=jeonbuk">
          <ButtonArea>전라북도</ButtonArea>
        </ButtonLink>
        <ButtonLink to="/plusprofile?location=jeonnam">
          <ButtonArea>전라남도</ButtonArea>
        </ButtonLink>
        <ButtonLink to="/plusprofile?location=gwangju">
          <ButtonArea>광주</ButtonArea>
        </ButtonLink>
      </ButtonList>
      <ButtonList>
        <ButtonLink to="/plusprofile?location=gyeongbuk">
          <ButtonArea>경상북도</ButtonArea>
        </ButtonLink>
        <ButtonLink to="/plusprofile?location=daegu">
          <ButtonArea>대구</ButtonArea>
        </ButtonLink>
      </ButtonList>
      <ButtonList>
        <ButtonLink to="/plusprofile?location=gyeongnam">
          <ButtonArea>경상남도</ButtonArea>
        </ButtonLink>
        <ButtonLink to="/plusprofile?location=ulsan">
          <ButtonArea>울산</ButtonArea>
        </ButtonLink>
        <ButtonLink to="/plusprofile?location=busan">
          <ButtonArea>부산</ButtonArea>
        </ButtonLink>
      </ButtonList>
      <ButtonList>
        <ButtonLink to="/plusprofile?location=jeju">
          <ButtonArea>제주</ButtonArea>
        </ButtonLink>
      </ButtonList>
    </Container>
  </>
);

export default HireUsPresenter;
