import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Container = styled.h2`
    padding: 100px 0px;
    text-align: center;
    font-size: 50px;
    color: #C9AA79;
`;

const Explanation = styled.div`
    padding: 0px 250px;
    text-align: center;
    color: #404A41;
`;
const BoList = styled.ul`
    display: flex;  
`;

const Bottoms = styled.div`  
    padding : 20px;   
    width:50%;
    height: 50px:
    text-align: center;
`;

const BoLink = styled(Link)`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
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
        <BoList>
            <Bottoms>
                <BoLink to="/hire">참여하기</BoLink>
            </Bottoms>
            <Bottoms>
                <BoLink to="/weplers">더보기</BoLink>
            </Bottoms>
        </BoList>

    </>
)

export default HomePresenter;
