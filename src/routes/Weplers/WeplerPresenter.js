import React from "react";
import styled from "styled-components";
import Footer from "components/Footer/Footer.js";
import member1 from "assets/img/Member/member1.png";
import member2 from "assets/img/Member/member2.png";
import member3 from "assets/img/Member/member3.png";
import member4 from "assets/img/Member/member4.png";
import act1 from "assets/img/Wepler/act1.png";
import act2 from "assets/img/Wepler/act2.png";
import act3 from "assets/img/Wepler/act3.png";
import act4 from "assets/img/Wepler/act4.png";


const Container = styled.div`
    background-color: #F2D4CA;
    padding: 50px 0px;
    text-align: center;
    color: #404A41;
    font-size:20px;
`;

const WeHead = styled.div`
    font-size:35px;
    padding: 30px 0px;
`;

const WeBody = styled.div`
    font-size:23px;
    padding: 30px 100px;
    textAlign: justify;
    lineHeight: 27px;
    line-height: 1.5;   
`;
const Imgs = styled.div`
    padding-left: 5%;
    text-align: left;
`;

const WeplerPresenter = () => (
    <>
        <Container>
            <p>Story 1</p>
            <WeHead>
                <h2>위플러에 오신 것을 환영합니다!</h2>
                <br/>
                
            </WeHead>
            <p>"위플러로 세상을 바라보는 시각을 넓혀요"</p>

            <WeBody>
                <p>위플러는 사회적 약자와 일손이 필요한 요양원을 지역사회 대학생과 이어주는 서비스입니다. <br/>
                    대학생인 플러스 회원은 자신의 정보를 담은 프로필을 작성하고, 사회적 약자와 요양원인 플리즈 회원은 그 프로필을 검색해 플러스 회원을 고용하게 됩니다.
                    이 서비스를 통해 플리즈 회원은 원할 때, 원하는 위치에서, 원하는 내용으로 취미 활동을 즐길 수 있게 되며 
                    플러스 회원은 자신의 학과 전공을 살려 플리즈 회원을 도울 수 있습니다. 플러스 회원이 플리즈 회원과 함께 활동하기 이전에는 전문가의 교육을 1 회 이상 수강해야 하며, 
                    자세한 날짜나 시간, 시급 등은 서로 협의 하에 결정하게 됩니다.
                </p>       
            </WeBody>
            <Imgs>
            <img src={act1} alt="First slide" className="act-image" />
            <img src={act2} alt="First slide" className="act-image" />
            <img src={act3} alt="First slide" className="act-image" />
            <img src={act4} alt="First slide" className="act-image" />
            </Imgs>
            <br/><br/><br/><br/>
            <p fontsize="10px">Story 2</p>
            <WeHead>
                <h2>위플러의 팀원을 소개합니다.</h2>
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
