import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import board from "../../../BoardData.json";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import axios from "axios";

const Container2 = styled.div`
  text-align: center;
  color: #404a41;
  line-height: 2;
  padding-bottom: 5%;
  font-weight: bold;
  font-size: 30px;
`;

const Wrap = styled.div`
  text-align: center;
`;

const Item = styled.div`
  width: 160%;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#C9AA79" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;
`;

const TextWrap = styled.div`
  padding: 10px 20px;
  display: flex;
`;
const BigTextWrap = styled.div`
  padding: 10px 20px;
  display: flex;
  font-weight: bold;
`;
const ExplanWrap = styled.div`
  font-size: 20px;
  line-height: 1.2;
`;

const ListItem = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 15px;
  border-top: 1px solid #eee;
  a {
    text-decoration: none;
    h3 {
      margin: 0;
      padding: 0;
      color: #212121;
    }
    p {
      margin: 0;
      padding: 10px 0 0 0;
      color: #787878;
    }
    &:hover {
      h3 {
        color: #f8961e;
      }
    }
  }
`;

const Button = styled.div`
  border-top: 1px solid #eee;
  padding: 20px;
  a {
    float: right;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    background: #c9aa79;
    color: #ffffff;
  }
`;

const List = () => {
  const [type, setType] = useState("");
  const [title, setTitle] = useState({});
  const [content, setContent] = useState({});

  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    setType(user_id);
    async function getList() {
      var lists = await axios.get("/hire_post/", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      });
      setTitle(lists.data.title);
      setContent(lists.data.content);
    }
    getList();
  }, []);

  return (
    <>
      <Container component="main" maxWidth="lg">
        <Grid item lg={12}>
          <Container2>
            <h2>고용합니다</h2>
          </Container2>
          <BigTextWrap>
            <Item>
              <div>번호</div>
            </Item>
            <Item>
              <div>제목</div>
            </Item>
            <Item>
              <div>모집여부</div>
            </Item>
            <Item>
              <div>개인/단체</div>
            </Item>
          </BigTextWrap>
          <Wrap>
            {board.map((item) => {
              return (
                <ListItem key={item.number}>
                  <Link to={`/plzread/${item.number}`}>
                    <TextWrap>
                      <Item>
                        <div>{item.number}</div>
                      </Item>
                      <Item>
                        <h3>{item.title}</h3>
                        <h3>{title}</h3>
                      </Item>
                      <Item>
                        <p>{item.recruit}</p>
                      </Item>
                      <Item>
                        <div>{item.plz_id}</div>
                      </Item>
                    </TextWrap>

                    <ExplanWrap>
                      <div>
                        필요/신청인원: {item.need_member}/{item.apply_member}
                      </div>
                      <div>
                        기간: {item.start_date}~{item.end_date}
                      </div>
                      <div>분야: {item.plz_list_fields}</div>
                    </ExplanWrap>
                  </Link>
                </ListItem>
              );
            })}
          </Wrap>
          {type === "pluz" ? (
            <Button>
              <Link to={`/plzwrite`}>작성하기</Link>
            </Button>
          ) : (
            <Button>
              <Link to={`/`}>홈으로</Link>
            </Button>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default List;
