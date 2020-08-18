import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    padding-left: 200px;
    padding-top: 10px;
    font-size:40px;
    font-weight: bold;
`;

const ActivityList = styled.div`
    padding-left: 350px;
    display: flex;  
    justify-content: left; 
    height: 50px: 
`;

const ButtonActivity = styled.button`

    padding: 20px 20px;
    border-radius: 40px; 
    border: 3px solid #c9aa79;
    background-color:#FFFFFF;
    color:#404A41;   
    font-size: 20px;  
    margin:20px;
    &:hover {
        background-color: #F2D4CA;
    }
`;


const ButtonMember = styled.div`
    font-size: 50px;
    padding-top:60px; 
    padding-left: 750px; 
`;

const ButtonLink = styled(Link)`
    font-size: 30px;
    display: flex;
    align-items: center;
`;

const BeforeButton = styled.button`
    border: 3px solid #c9aa79;    
    background-color:#C9AA79;
    color:#FFFFFF;   
    font-size: 20px;  
    margin:50px;
    width: 150px;
    height: 55px;
    &:hover {
        background-color: #F2D4CA;
    }
    
`;

const SeoulMem = () => (
    <>
        <Container>
            <h1>서울</h1>
        </Container>
        <ActivityList>
            <ButtonActivity># 전체</ButtonActivity>
            <ButtonActivity># 야외활동</ButtonActivity>
            <ButtonActivity># 교육</ButtonActivity>
            <ButtonActivity># 문화</ButtonActivity>
        </ActivityList>
        <ActivityList>
            <ButtonActivity># 상담</ButtonActivity>
            <ButtonActivity># 여행</ButtonActivity>
            <ButtonActivity># 메이킹</ButtonActivity>
            <ButtonActivity># 기타</ButtonActivity>
        </ActivityList>
        <ButtonMember>
            <ButtonLink to="/plzseoulde">
                <BeforeButton>프로필 뜨는 곳</BeforeButton>
            </ButtonLink>
        </ButtonMember>
        <ButtonMember>
            <ButtonLink to="/areaplz">
                <BeforeButton>이전으로</BeforeButton>
            </ButtonLink>
        </ButtonMember>
    </>

)

export default SeoulMem;
