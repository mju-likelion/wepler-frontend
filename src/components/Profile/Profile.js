import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {IoIosArrowRoundForward} from "react-icons/io";
import clock from "assets/img/clock.png";

const Box = styled.div`
    padding-top:30px;
    padding-left: 200px;
    padding-right: 20px;
    margine: 10px;
    display: flex;
`;
const BoxLeft = styled.div`
    padding: 30px;  
    width: 210px;    
    height: 210px;
    background-color:#C9AA79;
`;

const BoxBig = styled.div`    
    padding-left: 20px;
    font-size:20px;    
    height: 210px;
    width: 900px; 
    background-color:#EFEFEF;
`;

const BoxName = styled.div`
    padding: 20px;
    font-size:30px;
    font-weight: bold;
    text-align: center;
    display: flex;  
`;

const BoxExplan = styled.div`   
    font-size:20px;       
    float: left; 
    line-height: 2;      
`;

const BoxPink = styled.div`
    display: flex; 
    color: #F2D4CA; 
    width: 500px;
`;

const BoxButtonLink = styled(Link)`  
    
`;

const BoxButton = styled.button`
    color: #404A41; 
    border: 3px solid #EFEFEF; 
    font-size: 1rem;
    line-height: 1.5;
    
`;


const Profile = () => (
    <Box>
        <BoxLeft />
        <BoxBig>
            <BoxName>
                <h2>제목</h2>
            </BoxName>
            <BoxExplan>
                <div>플러스 회원의 한줄 소개</div>
                <div>평균평점: 7</div>
                <BoxPink>
                    <img src={clock} alt=".." className="clock-image" />
                    <div>1h ago</div>
                    <BoxButtonLink to="/plzseoulde">
                        <BoxButton> <IoIosArrowRoundForward size="24" color="#404A41" /></BoxButton>

                    </BoxButtonLink>

                </BoxPink>
            </BoxExplan>

        </BoxBig>
    </Box>
)

export default Profile;
