import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "components/Profile/Profile.js";


const ButtonMember = styled.div`
    font-size: 50px;
    padding-top:60px; 
    padding-left: 650px; 
`;

const ButtonLink = styled(Link)`
    font-size: 50px;
    display: flex;
    align-items: center;
`;

const BeforeButton = styled.button`
    border: 3px solid #c9aa79;    
    background-color:#C9AA79;
    color:#FFFFFF;   
    font-size: 30px;  
    margin:50px;
    width: 200px;
    height: 60px;
    &:hover {
        background-color: #F2D4CA;
    }
    
`;

const SeoulDetail = () => (
    <>    
    <Profile/>
   <div>원하는 재능 나눔 분야</div>
   <div>봉사자 교육 수료 여부</div>
   <div>제가 활동을 함께 할 수 있는 요일은 입니다.</div>
   <div>제가 활동을 함께 할 수 있는 시간은 입니다.</div>
   <div>제가 활동을 지속할 수 있는 기간은 입니다.</div>
   <div>'고용하기'버튼을 누르면 플러스에게 알림이 갑니다.</div>
    <ButtonMember>
        <ButtonLink to="/plusseoul">
        <BeforeButton>이전으로</BeforeButton>
        </ButtonLink>
    </ButtonMember>
    </>
)

export default SeoulDetail;
