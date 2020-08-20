import React from "react";
import styled from "styled-components";

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

const Footers = () => (

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

)

export default Footers;
