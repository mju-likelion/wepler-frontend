import styled from "styled-components";

export const ListItem = styled.div` 
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

export const Box = styled.div`
    padding-top:30px;
    padding-left: 200px;
    padding-right: 20px;
    margine: 10px;
    display: flex;
`;
export const BoxLeft = styled.div`      
    width: 210px;    
    height: 210px;
    background-color:#C9AA79;
`;

export const BoxBig = styled.div`    
    padding-left: 20px;
    font-size:20px;    
    height: 210px;
    width: 900px; 
    background-color:#EFEFEF;
`;

export const BoxName = styled.div`   
    font-size:30px;
    font-weight: bold;
    text-align: center;
    display: flex;  
`;

export const BoxExplan = styled.div`  
    padding-top:25px; 
    font-size:20px;       
    float: left; 
    line-height: 2;      
`;


export const HashBox = styled.span`
    border-radius: 10px; 
    border: 2px solid #F2D4CA;
    background-color:#FFFFFF;
    color:#404A41;   
    font-size: 20px;   
    display: left;  
`;