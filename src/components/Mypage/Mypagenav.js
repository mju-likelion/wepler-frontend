import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
    text-align: center;
    justify-content: center;
`;

const Item = styled.li`
  padding-right: 1070px;
  padding-top: 10px; 
  font-size: 20px;
  text-align: center;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menuname = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #F2D4CA;
`;

export default withRouter(({location: {pathname} }) => (
  <>


    <List>
      <Item>
        <Menuname>개인 정보 수정</Menuname>
      </Item>
      <Item current={pathname === "/Infobasic"}>
        <SLink to="/Infobasic">기본 정보</SLink>
      </Item>
      <Item current={pathname === "/Infoactivity"}>
        <SLink to="/Infoactivity">활동 분야</SLink >
      </Item>
      <Item>
        <Menuname>교육 이수 내역</Menuname>
      </Item>
      <Item current={pathname === "/Activityapply"}>
        <SLink to="/Activityapply">신청 활동</SLink >
      </Item>
      <Item current={pathname === "/Activityend"}>
        <SLink to="/Activityend">진행중</SLink >
      </Item>
      <Item current={pathname === "/Activityprogress"}>
        <SLink to="/Activityprogress">활동 완료</SLink >
      </Item>
    </List>
  
  </>
));
