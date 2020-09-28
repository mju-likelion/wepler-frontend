import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  padding-left: 8%;
  text-align: center;
  justify-content: center;
  position: fixed;
  width: 30%;
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
    <Item current={pathname === "/plusinfobasic"}>
      <SLink to="/plusinfobasic">기본 정보</SLink>
    </Item>
    <hr width="80%" color="#f2d4ca" size="5"></hr>

    <Item>
      <Menuname>교육 이수 내역</Menuname>
    </Item>
    <Item current={pathname === "/plusactivityhistory"}>
      <SLink to="/plusactivityhistory">교육 이수 내역</SLink>
      <hr width="80%" color="#f2d4ca" size="5"></hr>
    </Item>
    <Item>
      <Menuname>활동 내역</Menuname>
    </Item>
    <Item current={pathname === "/plusapply"}>
      <SLink to="/plusapply">신청한 활동</SLink>
    </Item>
    <Item current={pathname === "/plusapplied"}>
      <SLink to="/plusapplied">신청 받은 활동</SLink>
    </Item>
    <Item current={pathname === "/plusactivitying"}>
      <SLink to="/plusactivitying">진행 중</SLink>
    </Item>
    <Item current={pathname === "/plusactivitydone"}>
      <SLink to="/plusactivitydone">활동 완료</SLink>
    </Item>
  </List>
));
