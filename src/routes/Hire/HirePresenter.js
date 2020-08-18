import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    padding: 20px 200px;
`;

const ButtonList = styled.ul`
    display: flex;  
    justify-content: left; 
    height: 50px: 
`;

const ButtonLink = styled(Link)`    
    align-items: center;
`;

const ButtonArea = styled.button`
    border-radius: 40px; 
    border: 3px solid #c9aa79;
    background-color:#FFFFFF;
    color:#404A41;   
    font-size: 20px;  
    margin:20px;
`;


const HirePresenter = () => (
    <>
        <Container>
            <p>지도사진 넣기</p>

            <ButtonList>
                <ButtonLink to>
                    <ButtonArea>서울특별시</ButtonArea>
                </ButtonLink>
                <ButtonLink>
                    <ButtonArea>경기도</ButtonArea>
                </ButtonLink>
                <ButtonLink>
                    <ButtonArea>인천</ButtonArea>
                </ButtonLink>
            </ButtonList>
            <ButtonList>
                <ButtonLink>
                    <ButtonArea>강원도</ButtonArea>
                </ButtonLink>
            </ButtonList>

            <ButtonList>
                <ButtonLink>
                    <ButtonArea>충청북도</ButtonArea>
                </ButtonLink>
                <ButtonLink>
                    <ButtonArea>충청남도</ButtonArea>
                </ButtonLink>
                <ButtonLink>
                    <ButtonArea>대전</ButtonArea>
                </ButtonLink>
            </ButtonList>
            <ButtonList>
                <ButtonLink>
                    <ButtonArea>전라북도</ButtonArea>
                </ButtonLink>
                <ButtonLink>
                    <ButtonArea>전라남도</ButtonArea>
                </ButtonLink>
                <ButtonLink>
                    <ButtonArea>광주</ButtonArea>
                </ButtonLink>
            </ButtonList>
            <ButtonList>
                <ButtonLink>
                    <ButtonArea>경상북도</ButtonArea>
                </ButtonLink>
                <ButtonLink>
                    <ButtonArea>대구</ButtonArea>
                </ButtonLink>
            </ButtonList>
            <ButtonList>
                <ButtonLink>
                    <ButtonArea>경상남도</ButtonArea>
                </ButtonLink>
                <ButtonLink>
                    <ButtonArea>울산</ButtonArea>
                </ButtonLink>
                <ButtonLink>
                    <ButtonArea>부산</ButtonArea>
                </ButtonLink>
            </ButtonList>
            <ButtonList>
                <ButtonLink>
                    <ButtonArea>제주</ButtonArea>
                </ButtonLink>
            </ButtonList>
        </Container>
    </>
)

export default HirePresenter;
