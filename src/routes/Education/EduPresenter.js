import React from "react";
import styled from "styled-components";
import Calendar from 'react-calendar'


const Container = styled.div`
    background-color: #404A41;
    padding: 50px 100px;
    text-align: left;
    color: #F2D4CA;
    font-size:30px;
    textAlign: justify;
    lineHeight: 27px;
`;

const Explain = styled.div`
    font-size:20px;
    padding: 30px 0px;
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

const EduPresenter = () => (
    <>
        <Container>
            <h2>WEPLER 교육 일정</h2>
            <Explain>
                <p>전문가의 일정에 따라 변동될 수 있습니다.</p>
            </Explain>
            <Calendar />
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
export default EduPresenter;
