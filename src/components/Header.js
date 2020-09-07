import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderLo = styled.header`
  padding-left:750px;
  color: #C9AA79;
  top:0;
  left:0;
  height: 50px:
  display:felx;
  align-items: center;
  background-color: #fffffc;
`;

const ListLo = styled.ul`
  display: flex;
  padding-left: 40%;
`;

const ItemLo = styled.li`
  width: 35%;
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
const ShortCut = styled.div`
  order: 1;
  width: 100;
  height: 20px;
  text-align: right;
`;

class Head extends Component {
  rener() {
    const { logged, onLogout } = this.props;
    return (
      <>
        <HeaderLo>
          {logged ? (
            <ListLo>
              <ItemLo>
                <SLink to="/signup">마이페이지</SLink>
              </ItemLo>
              <ItemLo>
                <SLink to="/" onClick={onLogout}>
                  로그아웃
                </SLink>
              </ItemLo>
            </ListLo>
          ) : (
            <ListLo>
              <ItemLo>
                <SLink to="/signup">회원가입</SLink>
              </ItemLo>
              <ItemLo>
                <SLink to="/signin">로그인</SLink>
              </ItemLo>
            </ListLo>
          )}
        </HeaderLo>
      </>
    );
  }
}
export default Head;
