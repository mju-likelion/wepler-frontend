import React from "react";
import styled from "styled-components";
import Footer from "components/Footer/Footer.js";
import Calendar from "../Education/Calendar";

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
const CalendarExplain = styled.div`
    font-size:18px;
    padding: 30px 0px;
`;


const EduPresenter = () => (
    <>
        <Container>
            <h2>WEPLER 교육 일정</h2>
            <Explain>
                <p>전문가의 일정에 따라 변동될 수 있습니다.</p>
            </Explain>
            <CalendarExplain>
            <Calendar/>
            </CalendarExplain>
           
            
        </Container>
        
        <Footer/>
    </>
)
export default EduPresenter;
