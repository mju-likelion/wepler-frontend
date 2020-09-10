import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  padding-top: 12%;
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
  color: #F2D4CA;
`;

export default withRouter(({ location: { pathname } }) => (
  <List>
    <Item>
      <Menuname>개인 정보 수정</Menuname>
    </Item>
    <Item current={pathname === "/PlzInfobasic"}>
      <SLink to="/PlzInfobasic">기본 정보</SLink>
    </Item>
    <Item current={pathname === "/PlzInfoactivity"}>
      <SLink to="/PlzInfoactivity">활동/참여 분야</SLink >
    </Item>
    <Item>
      <Menuname>교육 이수 내역</Menuname>
    </Item>
    <Item current={pathname === "/Plusactivityhistory"}>
      <SLink to="/Plusactivityhistory">교육 이수 내역</SLink >
    </Item>
    <Item current={pathname === "/PlzActivityapply"}>
      <SLink to="/PlzActivityapply">신청 활동</SLink >
    </Item>
    <Item current={pathname === "/PlzActivityend"}>
      <SLink to="/PlzActivityend">진행중</SLink >
    </Item>
    <Item current={pathname === "/PlzActivityprogress"}>
      <SLink to="/PlzActivityprogress">활동 완료</SLink >
    </Item>
  </List>
));
