import React from "react";
import styled from "styled-components";
import HashTag from "components/HashTag/HashTagChoose/HashTagChoose";


const Container = styled.div`
    padding-left: 200px;
    padding-top: 10px;
    font-size:40px;
    font-weight: bold;
`;

const Signup = () => (
    <>
        <Container>
            <h1>회원가입</h1>
        </Container>
        <HashTag />
       
    </>

)

export default Signup;
