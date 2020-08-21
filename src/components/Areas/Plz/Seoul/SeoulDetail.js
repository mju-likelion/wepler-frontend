import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

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
    <Container>
    <h1>서울</h1>
    </Container>

    <ButtonMember>
        <ButtonLink to="/areaplz">
        <BeforeButton>이전으로</BeforeButton>
        </ButtonLink>

    </ButtonMember>
    </>
)

export default SeoulDetail;
