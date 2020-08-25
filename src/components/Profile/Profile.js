import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";
import clock from "assets/img/clock.png";
import board from "BoardData.json";

const ListItem = styled.div` 
    width: 100%; 
    margin-top: 10px; 
    padding: 15px; 
    border-top: 1px solid #eee; 
    a { 
        text-decoration: none; 
        h3 {
            margin: 0;
            padding: 0; 
            color: #212121; 
        } 
        p { 
            margin: 0; 
            padding: 10px 0 0 0; 
            color: #787878; 
        } 
        &:hover { 
            h3 { 
                color: #f8961e; 
            } 
        } 
    } 
`;

const Box = styled.div`
    padding-top:30px;
    padding-left: 200px;
    padding-right: 20px;
    margine: 10px;
    display: flex;
`;
const BoxLeft = styled.div`      
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
    font-size:30px;
    font-weight: bold;
    text-align: center;
    display: flex;  
`;

const BoxExplan = styled.div`  
    padding-top:25px; 
    font-size:20px;       
    float: left; 
    line-height: 2;      
`;


const BoxButtonLink = styled(Link)``;

const BoxButton = styled.button`
    color: #404A41; 
    border: 3px solid #EFEFEF; 
    font-size: 1rem;
    line-height: 1.5;    
`;

const HashBox = styled.span`
    border-radius: 10px; 
    border: 2px solid #F2D4CA;
    background-color:#FFFFFF;
    color:#404A41;   
    font-size: 20px;   
    display: left;  
`;

class Profile extends Component {
    state = {
        borads: [],
    };
    render() {

        return (
            <>
                {board.map((item) => {
                    return (
                        <Box>
                            <BoxLeft />
                            <BoxBig>
                                <ListItem key={item.number}>
                                    <Link to={`/plusseoulde/${item.number}`}>
                                        <BoxName>
                                            <h2>{item.mem_id}</h2>
                                        </BoxName>
                                        <BoxExplan>
                                            <div>{item.mem_oneself}</div>
                                            <div>평균평점: {item.mem_rating}</div>
                                            <HashBox>{item.hash}</HashBox>
                                        </BoxExplan>
                                    </Link>
                                </ListItem>
                            </BoxBig>
                        </Box>
                    )
                })}
            </>
        )
    }
}

export default Profile;
