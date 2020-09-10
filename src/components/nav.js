import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: #C9AA79;
  padding : 50px;
  top:0;
  left:0;
  width:100%;
  height: 50px:
  display:felx;
  align-items: center;
  background-color: #fffffc;
  
`;
const HeaderLo = styled.header`
  padding-left:50%;
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
const List = styled.ul`
  display: flex;
`;

const ItemH = styled.li`
  width: 300%;
  height: 50%;
  text-align: center;
  font-size: 50px;
  color: #f2d4ca;
  font-weight: bold;
`;

const Item = styled.li`
  width: 160%;
  height: 50%;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#C9AA79" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ pathname }) => {
  const [logged, setLogged] = useState(false);
  const [type, setType] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");
    setLogged(token ? true : false);
    setType(user_id);
  }, []);

  function handleLogoutClieked() {
    localStorage.clear();
    setLogged(false);
  }

  return (
    <>
      {/* {console.log(logged, type)} */}
      <HeaderLo>
        {logged ? (
          <ListLo>
            {type === '"plus_id"' ? (
              <ItemLo>
                <SLink to="/plusinfobasic">플러스회원</SLink>
              </ItemLo>
            ) : (
              <ItemLo>
                <SLink to="/plzinfobasic">플리즈회원</SLink>
              </ItemLo>
            )}
            <ItemLo>
              <SLink to="/" onClick={handleLogoutClieked}>
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
      <Header>
        <List>
          <ItemH>
            <SLink to="/">Wepler</SLink>
          </ItemH>
          <Item current={pathname === "/weplers"}>
            <SLink to="/weplers">위플러란?</SLink>
          </Item>
          <Item current={pathname === "/hire"}>
            <SLink to="/hire">고용하기</SLink>
          </Item>
          <Item current={pathname === "/review"}>
            <SLink to="/review">활동후기</SLink>
          </Item>
          <Item current={pathname === "/education"}>
            <SLink to="/education">교육신청</SLink>
          </Item>
        </List>
      </Header>
    </>
  );
});
