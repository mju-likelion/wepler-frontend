import React from "react";
import styled from "styled-components";
import Footer from "components/Footer/Footer.js"
import member1 from "assets/img/Member/member1.png";
import member2 from "assets/img/Member/member2.png";
import member3 from "assets/img/Member/member3.png";
import member4 from "assets/img/Member/member4.png";



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
    line-height: 1.5;   
`;



const WeplerPresenter = () => (
    <>
        <Container>
            <p>Story 1</p>
            <WeHead>
                <h2>Welcome to WEPLER</h2>
                <br/>
                
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
                <br></br>           
                <img src={member1} alt="First slide" className="member-image" />
                <img src={member2} alt="First slide" className="member-image" />
                <img src={member3} alt="First slide" className="member-image" />
                <img src={member4} alt="First slide" className="member-image" />
            </WeHead>
        </Container>
        <Footer />
        
    </>
)

export default WeplerPresenter;
