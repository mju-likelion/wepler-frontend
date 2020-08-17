import React from "react";
import styled from "styled-components";


const Container = styled.div`
    background-color: #F2D4CA;
    padding: 50px 0px;
    text-align: center;
    color: #404A41;
    font-size:20px;
`;

const WeHead = styled.div`
    font-size:40px;
    padding: 30px 0px;
`;

const WeBody = styled.div`
    font-size:26px;
    padding: 30px 100px;
    textAlign: justify;
    lineHeight: 27px;
`;

const FooterContainer = styled.div`
    padding: 20px 0px;
    background-color: #404A41;
    color: white;   
    
`;

const Footer = styled.div`
    padding: 3px 20px;
    background-color: #404A41;
    color: white;
    font-size:15px;
    
`;

const WeplerPresenter = () => (
    <>
        <Container>
            <p>Story 1</p>
            <WeHead>
                <h2>WEPLER</h2>
            </WeHead>
            <p>"WEPLER로 세상을 바라보는 시각을 넓혀요"</p>

            <WeBody>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation
                ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt inpeku culpa qui officia deserunt
                mollit anim id est laborum.
                </p>       
            </WeBody>
            <br></br><br></br><br></br><br></br>
            <p fontsize="10px">Story 2</p>
            <WeHead>
                <h2>WEPLER's TEAM</h2>
                <br></br><br></br>
                <hr width = "100%" color="#404A41" size = "3"></hr>
            </WeHead>
        </Container>
        <FooterContainer>
            <h1>WEPLER</h1>
            <Footer>
                <p>Preoject</p>
            </Footer>
            <hr width="100%" color="#C9AA79" size="10"></hr>
            <Footer>
                <p>Tel. 000-0000</p>
                <p>E-mail. wepler@wepl.com</p>
            </Footer>
        </FooterContainer>
        
    </>
)

export default WeplerPresenter;
