import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  padding-top: 15%;
  padding-left: 8%;
  text-align: center;
  justify-content: center;
  position: fixed;
  width: 30%;
  top: 0;
  bottom: 0;
`;

const Item = styled.li`
  font-size: 20px;
  text-align: center;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menuname = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c9aa79;
`;

export default withRouter(({ location: { pathname } }) => (
  <List>
    <Item>
      <Menuname>개인 정보 수정</Menuname>
    </Item>
    <Item current={pathname === "/PlusInfobasic"}>
      <SLink to="/PlusInfobasic">기본 정보</SLink>
    </Item>
    <Item current={pathname === "/PlusInfoactivity"}>
      <SLink to="/PlusInfoactivity">활동/참여 분야</SLink>
      <hr width="80%" color="#f2d4ca" size="5"></hr>
    </Item>

    <Item>
      <Menuname>교육 이수 내역</Menuname>
    </Item>
    <Item current={pathname === "/Plusactivityhistory"}>
      <SLink to="/Plusactivityhistory">교육 이수 내역</SLink>
      <hr width="80%" color="#f2d4ca" size="5"></hr>
    </Item>
    <Item>
      <Menuname>활동 내역</Menuname>
    </Item>
    <Item current={pathname === "/PlusActivityapply"}>
      <SLink to="/PlusActivityapply">신청 활동</SLink>
    </Item>
    <Item current={pathname === "/PlusActivityend"}>
      <SLink to="/PlusActivityend">진행중</SLink>
    </Item>
    <Item current={pathname === "/PlusActivityprogress"}>
      <SLink to="/PlusActivityprogress">활동 완료</SLink>
    </Item>
  </List>
));
