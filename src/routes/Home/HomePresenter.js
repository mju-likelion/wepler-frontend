import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "assets/css/img.css";
import imgBg1 from "assets/img/Home/bg1.jpg";
import imgReview1 from "assets/img/Home/review1.jpg";
import Footer from "../../components/Footer/Footer";

const Container = styled.h2`
  padding-top: 100px;
  text-align: center;
  font-size: 50px;
  color: #c9aa79;
`;

const Explanation = styled.div`
  padding: 0px 250px;
  text-align: center;
  color: #404a41;
  line-height: 2;
`;

const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const ButFi = styled.button`
  color: white;
  background: #c9aa79;
  padding: 0.375rem 0.75rem;
  border: 3px solid #c9aa79;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  margin: 55px;
`;

const ButSe = styled.button`
  color: #404a41;
  background: white;
  padding: 0.375rem 0.75rem;
  border: 1px solid #404a41;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  margin: 55px;
`;

const Margin = styled.div`
  padding: 20px;
`;

const Box = styled.div`
  padding-top: 50px;
  padding-left: 20%;
  padding-right: 20%;
  margine: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: #efefef;
  border-radius: 10px;
`;

const BoxBig = styled.div`
  margin: 20px;
  border: 3px solid #f2d4ca;
  border-radius: 10px;
  font-size: 20px;
  width: 450px;
  height: 300px;
  background-color: #ffffff;
`;

const BoxExplan = styled.div`
  padding: 10%;
  font-size: 20px;
  line-height: 1.5;
`;

const BoxName = styled.div`
  padding: 25px;
  font-size: 30px;
  text-align: center;
  justify-content: center;
  display: flex;
`;

const BoxButtonLink = styled(Link)`
  padding-left: 30px;
`;

const BoxButton = styled.button`
  color: #404a41;
  border: 3px solid #ffffff;
  font-size: 1rem;
  line-height: 1.5;
`;

const HomePresenter = () => (
  <>
    <Container>
      <div>WEPLER</div>
      <img src={imgBg1} alt="First slide" className="bg-image" />
    </Container>

    <Explanation>
      <div>
        <FaQuoteLeft size="24" color="#404A41" />
        위플러로 다양한 취미생활을 즐겨보세요.
        <FaQuoteRight size="24" color="#404A41" />
      </div>
      <ButtonList>
        <ButtonLink to="/hire">
          <ButFi>참여하기</ButFi>
        </ButtonLink>
        <ButtonLink to="/weplers">
          <ButSe>더보기</ButSe>
        </ButtonLink>
      </ButtonList>
    </Explanation>
    <Margin>
      <Box>
        <BoxBig>
          <BoxName>
            <h2>고용하기</h2>

            <BoxButtonLink to="/hire">
              <BoxButton>고용하기</BoxButton>
            </BoxButtonLink>
          </BoxName>
          <BoxExplan>
            <p>
              위플러는 <br />
              플러스 회원와 플리즈회원이 <br></br>서로 원하는 회원을 매칭할 수
              있습니다.
            </p>
          </BoxExplan>
        </BoxBig>
        <BoxBig>
          <BoxName>
            <h2>활동후기</h2>
            <BoxButtonLink to="/review">
              <BoxButton>더보기</BoxButton>
            </BoxButtonLink>
          </BoxName>
          <BoxExplan>
            <img src={imgReview1} alt="First slide" className="slicks-image" />
          </BoxExplan>
        </BoxBig>
      </Box>
    </Margin>
    <Footer />
  </>
);

export default HomePresenter;
