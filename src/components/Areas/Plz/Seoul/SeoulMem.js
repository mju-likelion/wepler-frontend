import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HashTag from "components/HashTag/HashTag.js";
import Profile from "components/Profile/Profile.js";


const Container = styled.div`
    padding-left: 200px;
    padding-top: 10px;
    font-size:40px;
    font-weight: bold;
`;

const ButtonMember = styled.div`
    font-size: 50px;
    padding-top:60px; 
    padding-left: 1100px; 
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
        <HashTag />
        <Profile />
        <ButtonMember>
            <ButtonLink to="/areaplz">
                <BeforeButton>이전으로</BeforeButton>
            </ButtonLink>
        </ButtonMember>
    </>

)

export default SeoulMem;
