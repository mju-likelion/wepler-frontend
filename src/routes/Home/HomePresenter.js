import React from 'react';
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import img from './main.PNG';




const Content = styled.div`
    background-image: url(${img});
    width: 1500px;
    height: 400px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;


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

const Lower1 = styled.div`

    padding: 100px 0px;
    text-align: center;
    font-size: 20px;
    color: #C9AA79;

`;

const Lower2 = styled.div`

    padding: 100px 0px;
    text-align: center;
    font-size: 20px;
    color: #C9AA79;

`;

const Lower1List = styled.div`

    display: flex;  
    justify-content: center;
    padding : 20px;   
    height: 50px;
    text-align: center;


`;

const Lower2List = styled.div`

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

    <Content>
        <W>
            <Lower1>

                <Lower1List>
                    <A>고용하기</A>
                    <ButtonList>
                        <ButtonLink to="/hire">
                            <ButFi>참여하기</ButFi>
                        </ButtonLink>
                    </ButtonList>
                </Lower1List>

                <C>고용하기 설명입니다.</C>

            </Lower1>    

            <Lower2>

                <Lower2List>
                    <A1>활동후기</A1>

                    <ButtonList>
                        <ButtonLink to="/hire">
                                <ButFi>더보기</ButFi>
                        </ButtonLink>
                    </ButtonList>    
                </Lower2List>

                <C1>활동후기 사진 들어갈 곳.</C1>

            </Lower2>

        </W>  

    </Content>

    </>        
)

export default HomePresenter;
