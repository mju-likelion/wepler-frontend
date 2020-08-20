import React from 'react';
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import css from "assets/css/img.css";
import image1 from "assets/img/Home/bg1.jpg";


const Container = styled.h2`
    padding-top: 100px;
    text-align: center;
    font-size: 50px;
    color: #C9AA79;
`;

const Explanation = styled.div`
    padding: 0px 250px;
    text-align: center;
    color: #404A41;
    
    
`;

const ButtonList = styled.ul`
    display: flex;  
    justify-content: center;
    text-align: center;
    justify-content: center;
    
`;


const ButtonLink = styled(Link)`
    display: flex;
    align-items: center;
    
`;

const ButFi = styled.button`
    color: white;
    background: #C9AA79;
    padding: 0.375rem 0.75rem;
    border: 3px solid #C9AA79;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 1.5;
    margin:55px;
`;

const ButSe = styled.button`
    color: #404A41;
    background: white;
    padding: 0.375rem 0.75rem;
    border: 1px solid #404A41;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 1.5;
    margin:55px;
`;



const A = styled.div`

    color: #404A41;
    position: relative;
    

`;

const B = styled.button`

    position: relative;
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


`;

const A1 = styled.div`

    color: #404A41;
    position: relative;

`;

const C1 = styled.div`

    color: #404A41;
    position: relative;


`;

const W = styled.div`

    display: flex;  
    justify-content: center;
    padding : 20px;   
    height: 50px;
    text-align: center;

`;

const W1 = styled.div`

    padding: 100px 0px;
    text-align: center;
    font-size: 20px;
    color: #C9AA79;

`;

const W2 = styled.div`

    padding: 100px 0px;
    text-align: center;
    font-size: 20px;
    color: #C9AA79;

`;

const Y = styled.div`

    display: flex;  
    justify-content: center;
    padding : 20px;   
    height: 50px;
    text-align: center;

`;

const Y1 = styled.div`

    display: flex;  
    justify-content: center;
    padding : 20px;   
    height: 50px;
    text-align: center;

`;





const HomePresenter = () => (
    <>  

        <Container>
            <h2>WEPLER</h2>
            <img src={image1} alt="First slide" className="slick-image" /> 
        </Container>        
            
        <Explanation>
        
            <div>
                <FaQuoteLeft size="24" color="#404A41" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <FaQuoteRight size="24" color="#404A41" />
            </div>
            <ButtonList>
                <ButtonLink to="/hire">
                    <ButFi>참여하기</ButFi>
                </ButtonLink>
                <ButtonLink to="/weplers">
                    <ButSe>더보기</ButSe>
                </ButtonLink>
            </ButtonList>
        </Explanation>

        <W>
            <W1>
                <Y>
                    <A>고용하기</A>

                    <ButtonList>
                        <ButtonLink to="/hire">
                        <ButFi>참여하기</ButFi>
                        </ButtonLink>
                    </ButtonList>
                </Y>

                <C>고용하기 설명입니다.</C>
            </W1>    

            <W2>
                <Y1>
                    <A1>활동후기</A1>

                    <ButtonList>
                        <ButtonLink to="/hire">
                                <ButSe>더보기</ButSe>
                        </ButtonLink>
                    </ButtonList>    
                </Y1>

                <C1>활동후기 사진 들어갈 곳.</C1>
            </W2>

        </W>    

</>

        
)

export default HomePresenter;
