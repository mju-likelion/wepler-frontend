import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "components/Footer/Footer.js"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 30px;
    padding-left: 150px;
    width: 80%;   
    box-sizing: border-box; 
`; 



const veiw= () => (
    <>  
    <Container>
        <h2>플리즈들의 후기</h2>        
    </Container>      
    <div>검색</div>
        <div>게시판</div>
    <Footer />
    </>
)

export default veiw;



