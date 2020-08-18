import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {GrBus} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 30px;
    padding-left: 40px;
    width: 80%;   
    box-sizing: border-box; 
`; 

const ButtonList = styled.ul`
    display: flex;  
    justify-content: center;
    padding : 20px;   
    height: 50px:
    text-align: center;
`;

const ButtonLink = styled(Link)`
    display: flex;
    align-items: center;
`;
const ButtMember = styled.div`
    font-size: 50px;
    padding: 100px 20px; 
`;

const ButtPlz = styled.button`       
    border: 3px solid #c9aa79;
    border-radius: 1000px;
    background-color:#F2D4CA;
    color:#404A41;   
    font-size: 30px;  
    margin:50px;
    width: 400px;
    height: 400px;

`;

const ButtPlu = styled.button` 
    border: 3px solid #c9aa79;
    border-radius: 1000px;
    background-color:#EFEFEF;
    color:#404A41;   
    font-size: 30px;  
    margin:50px;
    width: 400px;
    height: 400px;
`;

const HireMember= () => (
    <>        
    <ButtonList>
        <ButtonLink to="/areaplz">
            <ButtPlz><br></br>재능이 필요해요<ButtMember>개인 혹은 단체</ButtMember></ButtPlz>
        </ButtonLink>
        <ButtonLink to="/areaplus">
            <ButtPlu><br></br><br></br>재능을 나누고 싶어요<ButtMember>플러스회원<br></br>프로필보기</ButtMember></ButtPlu>
        </ButtonLink>
    </ButtonList>

    <Container>  
        <div>  
            야외활동(운동, 산책, 맛집 탐방...)
        </div>        
        <div>교육(컴퓨터, 악기, 언어...)</div>
        </Container>
        <Container> 
        <div>문화(공연, 영화, 전시회...)</div>
         
        <div>상담(이야기, 말동무)</div>
        </Container>
        <Container> 
        <div>여행</div>
        <div>메이킹(공예, 쿠킹, 베이킹...)</div>
        </Container>
    </>
)

export default HireMember;
