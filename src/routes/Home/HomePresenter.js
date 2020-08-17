import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Container = styled.h2`
    padding: 100px 0px;
    text-align: center;
    font-size: 50px;
    color: #C9AA79;
`;

const Explanation = styled.div`
    padding: 0px 250px;
    text-align: center;
    color: #404A41;
`;
const ButtonList = styled.ul`
    display: flex;  
    justify-content: center;
    padding : 20px;   
    height: 50px:
    text-align: center;
`;

const ButtonLink = styled(Link)`
    display: flex;
    align-items: center;
`;

const ButFi = styled.button`
    border-radius: 5px; 
    background-color:#C9AA79;
    color:#FFFFFF;
    margin:5px;
`;

const ButSe = styled.button`
    border-radius: 5px; 
    background-color:#FFFFFF;
    color:#404A41;
    margin:5px;
`;

const HomePresenter = () => (
    <>
        <Container>
            <h2>WEPLER</h2>
        </Container>
        <Explanation>
            <div>
                <FaQuoteLeft size="24" color="#404A41" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <FaQuoteRight size="24" color="#404A41" />
            </div>
        </Explanation>
        <ButtonList>
            <ButtonLink to="/hire">
                <ButFi>참여하기</ButFi>
            </ButtonLink>
            <ButtonLink to="/weplers">
                <ButSe>더보기</ButSe>
            </ButtonLink>
        </ButtonList>
    </>
)

export default HomePresenter;
