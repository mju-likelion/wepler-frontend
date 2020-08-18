import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: #C9AA79;
  padding : fixed;
  top:0;
  left:0;
  width:100%;
  height: 50px:
  display:felx;
  align-items: center;
  background-color: #fffffc;
  
`;

const List = styled.ul`
  display: flex;
`;

const ItemH = styled.li`
  width: 300px;
  height: 50px;
  text-align: center;
  font-size: 50px;
  color: #F2D4CA;
`;

const Item = styled.li`
  width: 160px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${props => (props.current ? "#C9AA79" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;
`;

const ItemLo = styled.li`
  width: 160px;
  height: 0px;
  text-align: right;
  font-size: 20px;
`;
const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({location: {pathname} }) => (
  <Header>
    <List>
      <ItemH>
        <SLink to="/">Wepler</SLink >
      </ItemH>
      <Item current={pathname === "/weplers"}>
        <SLink to="/weplers">위플러란?</SLink >
      </Item>
      <Item current={pathname === "/hire"}>
        <SLink to="/hire">고용하기</SLink >
      </Item>
      <Item current={pathname === "/review"}>
        <SLink to="/review">활동후기</SLink >
      </Item>
      <Item current={pathname === "/education"}>
        <SLink to="/education">교육신청</SLink >
      </Item>
      <ItemLo current={pathname === "/education"}>
        <SLink to="/education">회원가입</SLink >
      </ItemLo>
      <ItemLo current={pathname === "/education"}>
        <SLink to="/education">로그인</SLink >
      </ItemLo>
    </List>
  </Header>
));
