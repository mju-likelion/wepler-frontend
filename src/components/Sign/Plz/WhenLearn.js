import React from "react";
import styled from "styled-components";

const ActivityList = styled.div`
    justify-content: left; 
`;


const ButtonActivity = styled.button`
    border-radius: 10px; 
    border: 2px solid #c9aa79;
    background-color:#FFFFFF;
    color:#404A41;   
    font-size: 20px;  
    margin:30px;  
    display: flex;  
    &:hover {
        background-color: #F2D4CA;
    }
`;

const WhenLearn= () => (
    <>
        <ActivityList>
            <ButtonActivity>정기적으로 배우고 싶어요</ButtonActivity>
            <ButtonActivity>특정한 날에만 배우고 싶어요</ButtonActivity>
            <ButtonActivity>생각중이에요</ButtonActivity>
        </ActivityList>
    </>
)

export default WhenLearn;
