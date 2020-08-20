import React from 'react';
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import './main.jpg';



const Explanation = styled.div`

    padding: 0px 250px;
    text-align: center;
    color: #404A41;
    
    
`;
const ButtonList = styled.ul`
    display: flex;  
    justify-content: center;
    padding : 20px;   
    height: 50px;
    text-align: center;
    justify-content: center;
    
`;


const ButtonLink = styled(Link)`
    display: flex;
    align-items: center;
    
`;

const ButFi = styled.button`
    color: white;
    background: teal;
    padding: 0.375rem 0.75rem;
    border: 1px solid teal;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 1.5;
    margin:55px;
`;

const ButSe = styled.button`
    color: white;
    background: teal;
    padding: 0.375rem 0.75rem;
    border: 1px solid teal;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 1.5;
    margin:55px;
`;

const Container = styled.h2`
    padding: 100px 0px;
    text-align: center;
    font-size: 50px;
    color: #C9AA79;
    
    
`;

const A = styled.div`

    color: #404A41;
    position: relative;
    left: 400px;
    top: 150px;

`;

const B = styled.button`

    position: relative;
    left: 500px;
    top: 67px;
    color: white;
    background: teal;
    padding: 0.375rem 0.75rem;
    border: 1px solid teal;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 1.5;
    margin:55px;
`;

const C = styled.div`

    color: #404A41;
    position: relative;
    left: 400px;
    top: 50px;


`;

const A1 = styled.div`

    color: #404A41;
    position: relative;
    left: 850px;
    top: -46px;

`;

const B1 = styled.button`

    position: relative;
    left: 960px;
    top: -130px;
    color: white;
    background: teal;
    padding: 0.375rem 0.75rem;
    border: 1px solid teal;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 1.5;
    margin:55px;

`;

const C1 = styled.div`

    color: #404A41;
    position: relative;
    left: 830px;
    top: -150px;


`;

const W = styled.div`
    
`;


const HomePresenter = () => (
    <>  

        <Container>
            <h2>WEPLER</h2>
        </Container>
        <Explanation>
            <div>
                <FaQuoteLeft size="24" color="#404A41" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <FaQuoteRight size="24" color="#404A41" />
            </div>
        </Explanation>
        <ButtonList>
            <ButtonLink to="/hire">
                <ButFi>참여하기</ButFi>
            </ButtonLink>
            <ButtonLink to="/weplers">
                <ButSe>더보기</ButSe>
            </ButtonLink>
        </ButtonList>

        <W>
            <A>
                <h2>
                    고용하기
                </h2>
            </A>
            <ButtonLink to="/hire">
                    <B>참여하기</B>
            </ButtonLink>
            <C>
                <p>                
                    고용하기 설명입니다.                
                </p>
            </C>       

        <A1>
            <h2>
                활동후기
            </h2>
        </A1>

        <ButtonLink to="/hire">
                <B1>더보기</B1>
        </ButtonLink>
        
        <C1>
            <p>                
                활동후기 사진 들어갈 곳.                
            </p>
        </C1>
    </W>    

        


    </>

        
)

export default HomePresenter;
