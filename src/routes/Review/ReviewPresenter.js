import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";

const ButtonList = styled.ul`
    display: flex;  
    justify-content: center;  
    height: 50px:
    text-align: center;
`;

const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
`;
const ButtMember = styled.div`
  font-size: 40px;
  padding: 50px 20px;
`;

const ButtPlz = styled.button`
  border: 3px solid #c9aa79;
  border-radius: 1000px;
  background-color: #f2d4ca;
  color: #404a41;
  font-size: 30px;
  margin: 40px;
  width: 350px;
  height: 350px;
`;

const ButtPlu = styled.button`
  border: 3px solid #c9aa79;
  border-radius: 1000px;
  background-color: #efefef;
  color: #404a41;
  font-size: 30px;
  margin: 40px;
  width: 350px;
  height: 350px;
`;

const ReviewPresenter = () => (
  <>
    <ButtonList>
      <ButtonLink to="/reviewplz">
        <ButtPlz>
          <br />
          재능이 필요해요<ButtMember>플리즈 후기</ButtMember>
        </ButtPlz>
      </ButtonLink>
      <ButtonLink to="/reviewplus">
        <ButtPlu>
          <br />
          재능을 나누고 싶어요<ButtMember>플러스 후기</ButtMember>
        </ButtPlu>
      </ButtonLink>
    </ButtonList>
    <Footer />
  </>
);

export default ReviewPresenter;
