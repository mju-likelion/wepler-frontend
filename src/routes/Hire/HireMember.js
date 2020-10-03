import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaTree } from "react-icons/fa";
import { CgPiano } from "react-icons/cg";
import { AiOutlineCar } from "react-icons/ai";
import { VscPerson } from "react-icons/vsc";
import { BiCookie, BiCameraMovie } from "react-icons/bi";
import imgReview1 from "assets/img/Hire/hire1.PNG";
import imgReview2 from "assets/img/Hire/hire2.PNG";
import imgReview3 from "assets/img/Hire/hire3.PNG";
import imgReview4 from "assets/img/Hire/hire4.PNG";
import imgReview5 from "assets/img/Hire/hire5.PNG";
import imgReview6 from "assets/img/Hire/hire6.PNG";
import Footer from "../../components/Footer/Footer";

const Container = styled.div`
  padding: 20px 30px;
  margin: 20px;
  border: 3px solid #f2d4ca;
  border-radius: 10px;
  font-size: 20px;
  width: 450px;
  height: 300px;
  background-color: #ffffff;
`;

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

const Box1 = styled.div`
  padding-left: 10px;
`;

const Box = styled.div`
  padding-top: 50px;
  padding-right: 20px;
  margin: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: #efefef;
  border-radius: 10px;
`;

const BoxExplan = styled.div`
  line-height: 1.5;
`;

const BoxName = styled.div`
  padding: 25px;
  font-size: 24px;
  text-align: center;
  justify-content: center;
  display: flex;
`;

const HireMember = () => (
  <>
    <ButtonList>
      <ButtonLink to="/plzboard">
        <ButtPlz>
          <br></br>재능이 필요해요<ButtMember>개인 혹은 단체</ButtMember>
        </ButtPlz>
      </ButtonLink>
      <ButtonLink to="/areaplus">
        <ButtPlu>
          <br></br>
          <br></br>재능을 나누고 싶어요
          <ButtMember>
            플러스회원<br></br>프로필보기
          </ButtMember>
        </ButtPlu>
      </ButtonLink>
    </ButtonList>
    <Box>
      <Box1>
        <Container>
          <BoxName>
            <div>
              <FaTree size="30" color="#404A41" />
              &nbsp; 야외활동 (운동, 산책, 맛집 탐방...)
            </div>
          </BoxName>
          <BoxExplan>
            <img
              src={imgReview1}
              alt="First slide"
              className="slicks-image"
              height="150"
              width="200"
            />
          </BoxExplan>
        </Container>
        <Container>
          <BoxName>
            <div>
              <CgPiano size="30" color="#404A41" />
              &nbsp; 교육 (컴퓨터, 악기, 언어...)
            </div>
          </BoxName>
          <BoxExplan>
            <img
              src={imgReview2}
              alt="First slide"
              className="slicks-image"
              height="150"
              width="200"
            />
          </BoxExplan>
        </Container>
      </Box1>
      <Box1>
        <Container>
          <BoxName>
            <div>
              <BiCameraMovie size="30" color="#404A41" />
              &nbsp; 문화 (공연, 영화, 전시회...)
            </div>
          </BoxName>
          <BoxExplan>
            <img
              src={imgReview3}
              alt="First slide"
              className="slicks-image"
              height="150"
              width="200"
            />
          </BoxExplan>
        </Container>
        <Container>
          <BoxName>
            <div>
              <AiOutlineCar size="30" color="#404A41" />
              &nbsp; 상담 (이야기, 말동무...)
            </div>
          </BoxName>
          <BoxExplan>
            <img
              src={imgReview4}
              alt="First slide"
              className="slicks-image"
              height="150"
              width="200"
            />
          </BoxExplan>
        </Container>
      </Box1>
      <Box1>
        <Container>
          <BoxName>
            <div>
              <VscPerson size="30" color="#404A41" />
              &nbsp; 여행
            </div>
          </BoxName>
          <BoxExplan>
            <img
              src={imgReview6}
              alt="First slide"
              className="slicks-image"
              height="150"
              width="200"
            />
          </BoxExplan>
        </Container>
        <Container>
          <BoxName>
            <div>
              <BiCookie size="30" color="#404A41" />
              &nbsp; 메이킹 (공예, 베이킹...)
            </div>
          </BoxName>
          <BoxExplan>
            <img
              src={imgReview5}
              alt="First slide"
              className="slicks-image"
              height="150"
              width="200"
            />
          </BoxExplan>
        </Container>
      </Box1>
    </Box>
    <Footer />
  </>
);

export default HireMember;
