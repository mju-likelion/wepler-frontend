import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  padding: 20px 0px;
  background-color: #404a41;
  color: white;
`;
const FirstFooter = styled.div`
  padding: 3px 20px;
  margin-bottom: 10px;
  background-color: #404a41;
  color: white;
  font-size: 25px;
`;

const Footer = styled.div`
  padding: 3px 20px;
  background-color: #404a41;
  color: white;
  font-size: 20px;
`;

const MiddleFooter = styled.div`
  display: flex;
`;

const SLink = styled(Link)`
  padding: 3px 20px;
  background-color: #404a41;
  color: white;
  font-size: 17px;
`;

const Footers = () => (
  <FooterContainer>
    <FirstFooter>
      <h1>WEPLER</h1>
    </FirstFooter>
    <MiddleFooter>
      <SLink to="/weplers">
        <p>Preoject</p>
      </SLink>
      <SLink to="/terms">
        <p>이용 약관</p>
      </SLink>
      <SLink to="/memberterms">
        <p>회원 정책</p>
      </SLink>
    </MiddleFooter>
    <hr width="100%" color="#C9AA79" size="10"></hr>
    <Footer>
      <p>E-mail. </p>
      <p>kimhan0421@naver.com</p>
      <p>re9946@naver.com</p>
      <p>sooooooohyeon5@naver.com</p>
    </Footer>
  </FooterContainer>
);

export default Footers;
