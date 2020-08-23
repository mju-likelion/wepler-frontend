import React from "react";
import styled from "styled-components";


const ActivityList = styled.div`
    justify-content: left; 
    display:flex;
`;

const ButtonActivity = styled.button`
    border-radius: 10px; 
    border: 5px solid #FFFFFF;
    background-color:#FFFFFF;
    color:#404A41;   
    font-size: 20px;  
    margin:20px;  
    display: flex;  
    &:hover {
        background-color: #F2D4CA;
    }
`;

const TextList = styled.div`
    padding-top: 30px;
    padding-left: 17px;
    font-size: 20px;  
    font-weight: bold;
   
`;

const WhenShare= () => (
    <>
    
        <ActivityList>
            <TextList><h3>요일</h3></TextList>            
            <ButtonActivity>월</ButtonActivity>
            <ButtonActivity>화</ButtonActivity>
            <ButtonActivity>수</ButtonActivity>
            <ButtonActivity>목</ButtonActivity>
            <ButtonActivity>금</ButtonActivity>
            <ButtonActivity>토</ButtonActivity>
            <ButtonActivity>일</ButtonActivity>
        </ActivityList>        
    </>
)

export default WhenShare;
