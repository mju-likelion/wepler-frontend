import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BoxBody = styled.div`
    padding: 40px ;
`;

const Container = styled.h2`
    text-align: center;
    font-size: 45px;
    color: #C9AA79;
    font-weight: bold;
`;

const Body = styled.div`
    padding-top: 50px;
    text-align: center;
    justify-content: center;
`;

const ButtonMember = styled.div`
    font-size: 60px;
`;

const ButtonLink  = styled(Link)``;

const PlzButton = styled.button`
    width: 400px;
    height: 55px; 
    color: #404A41; 
    border: 1px solid #F2D4CA;
    background-color:#F2D4CA; 
    font-size: 25px;    
`;

const PlusButton = styled.button`
    width: 400px;
    height: 55px; 
    color: #404A41; 
    border: 1px solid #EFEFEF;
    background-color:#EFEFEF; 
    font-size: 25px;    
`;

const SignupPresenter = () => (
    <>
    <BoxBody>
        <Container>
            <div>WEPLER</div>
        </Container>
        <Body>
            <div>다양한 것을 배우고 싶어요.</div>
        
        <ButtonMember>
            <ButtonLink to="/signuplz">
                <PlzButton>플리즈 회원</PlzButton>
            </ButtonLink>
        </ButtonMember>         
        
        </Body>
        <Body>
            <div>재능을 나누고 싶어요.</div>
        
        <ButtonMember>
            <ButtonLink to="/signuplus">
                <PlusButton>플러스 회원</PlusButton>
            </ButtonLink>
        </ButtonMember>         
        
        </Body>
        </BoxBody>
    </>
)

export default SignupPresenter;
