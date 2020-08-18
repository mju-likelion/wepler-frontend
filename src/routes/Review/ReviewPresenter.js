import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 30px;
    padding-left: 150px;
    width: 80%;   
    box-sizing: border-box; 
`; 

const ButtonList = styled.ul`
    display: flex;  
    justify-content: center;  
    height: 50px:
    text-align: center;
`;

const ButtonLink = styled(Link)`
    display: flex;
    align-items: center;
`;
const ButtMember = styled.div`
    font-size: 40px;
    padding: 50px 20px; 
`;

const ButtPlz = styled.button`       
    border: 3px solid #c9aa79;
    border-radius: 1000px;
    background-color:#F2D4CA;
    color:#404A41;   
    font-size: 30px;  
    margin:40px;
    width: 350px;
    height: 350px;

`;

const ButtPlu = styled.button` 
    border: 3px solid #c9aa79;
    border-radius: 1000px;
    background-color:#EFEFEF;
    color:#404A41;   
    font-size: 30px;  
    margin:40px;
    width: 350px;
    height: 350px;
`;

const ReviewPresenter= () => (
    <>        
    <ButtonList>
        <ButtonLink to="/areaplz">
            <ButtPlz><br></br>재능이 필요해요<ButtMember>플리즈 후기</ButtMember></ButtPlz>
        </ButtonLink>
        <ButtonLink to="/areaplus">
            <ButtPlu><br></br>재능을 나누고 싶어요<ButtMember>플러스 후기</ButtMember></ButtPlu>
        </ButtonLink>
    </ButtonList>    
    </>
)

export default ReviewPresenter;
