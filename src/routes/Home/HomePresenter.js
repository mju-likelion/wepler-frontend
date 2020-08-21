import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import css from "assets/css/img.css";
import imgBg1 from "assets/img/Home/bg1.jpg";
import imgReview1 from "assets/img/Home/review1.jpg";


const Container = styled.h2`
    padding-top: 100px;
    text-align: center;
    font-size: 50px;
    color: #C9AA79;
`;

const Explanation = styled.div`
    padding: 0px 250px;
    text-align: center;
    color: #404A41;
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
    background: #C9AA79;
    padding: 0.375rem 0.75rem;
    border: 3px solid #C9AA79;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 1.5;
    margin:55px;
`;

const ButSe = styled.button`
    color: #404A41;
    background: white;
    padding: 0.375rem 0.75rem;
    border: 1px solid #404A41;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 1.5;
    margin:55px;
`;

const Margin = styled.div`
    padding: 20px;
`;

const Box = styled.div`
    padding-top:50px;
    padding-left: 10px;
    padding-right: 20px;
    margine: 10px;
    display: flex;  
    justify-content: center;
    text-align: center;
    background-color:#EFEFEF;
    border-radius: 10px;
`;

const BoxBig = styled.div`    
    padding: 20px 30px;
    margin: 20px;
    border: 3px solid #F2D4CA;
    border-radius: 10px;
    font-size:20px;
    width: 450px;
    height: 300px;
    background-color:#FFFFFF;    
`;

const BoxExplan = styled.div`   
    font-size:20px;   
    line-height: 1.5;
`;

const BoxName = styled.div`
    padding: 25px;
    font-size:30px;
    text-align: center;
    justify-content: center;
    display: flex;  

`;


const BoxButtonLink = styled(Link)`  
    padding-left: 30px;  
`;

const BoxButton = styled.button`
    color: #404A41; 
    border: 3px solid #FFFFFF; 
    font-size: 1rem;
    line-height: 1.5;    
`;



const HomePresenter = () => (
    <>

        <Container>
            <h2>WEPLER</h2>
            <img src={imgBg1} alt="First slide" className="slick-image" />
        </Container>

        <Explanation>
            <div>
                <FaQuoteLeft size="24" color="#404A41" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                        <p>위플러는 <br/>플러스 회원와 플리즈회원이 <br></br>서로 원하는 회원을 매칭할 수 있습니다. </p>
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


    </>


)

export default HomePresenter;
