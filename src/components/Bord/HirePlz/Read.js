import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const Container2 = styled.div`
  text-align: center;
  color: #404a41;
  line-height: 2;
  padding-bottom: 5%;
  font-weight: bold;
  font-size: 30px;
`;

const Box = styled.div`
  margin-bottom: 3%;
`;

const FlexItem = styled.div`
  padding-left: 3%;
  color: #f07167;
`;

const ConItem = styled.div`
  padding-left: 10%;
  padding-right: 15%;
  justify-content: center;
  color: #403d39;
`;

const Button = styled.div`
  margin-bottom: 10%;
  padding-top: 10%;
  padding-left: 15%;
  a {
    float: right;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    background: #c9aa79;
    color: #fff;
  }
`;
const Buttonlist = styled.div`
  padding-left: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  border-top: 1px solid #c9aa79;
`;

const Wrap = styled.div`
  padding-left: 20%;
  padding-right: 25%;
`;

const Read = () => {
  const [type, setType] = useState("");
  const [data, setData] = useState([
    {
      number: "1",
      title: "제목1",
      content:
        "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
      recruit: "모집중",
      plz_id: "빛나는 위플러",
      need_member: "5",
      start_date: "2020.08.08",
      end_date: "2020.12.31",
      plz_list_fields: ["council", "trip"],
    },
  ]);

  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    setType(user_id);

    async function getRead() {
      var reads = await axios.get("/hire_post/", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      });
    }
    getRead();
  }, []);

  return (
    <>
      <Container2>
        <h2>{data[0].title}</h2>
      </Container2>
      <Container maxWidth="md">
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={1}>
              <div>모집:</div>
            </Grid>
            <Grid item xs={12} sm={5}>
              <FlexItem>
                <p>{data[0].recruit}</p>
              </FlexItem>
            </Grid>
            <Grid item xs={12} sm={2}>
              <div>개인/단체:</div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FlexItem>
                <p>{data[0].plz_id}</p>
              </FlexItem>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <div>필요인원:</div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlexItem>
                <p>{data[0].need_member}</p>
              </FlexItem>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <div>시작기간:</div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FlexItem>
                <p>{data[0].start_date}</p>
              </FlexItem>
            </Grid>
            <Grid item xs={12} sm={2}>
              <div>종료기간:</div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlexItem>
                <p>{data[0].end_date}</p>
              </FlexItem>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <div>분야:</div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlexItem>
                <p>{data[0].plz_list_fields}</p>
              </FlexItem>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <div>내용:</div>
          </Grid>
        </Grid>
        <Box>
          <ConItem>
            <p>{data[0].content}</p>
          </ConItem>
        </Box>
      </Container>
      <Wrap>
        <Buttonlist>
          {type === "plus" ? (
            <Button>
              <Link to={`/plzwrite`}>신청하기</Link>
            </Button>
          ) : (
            <Button>
              <Link to={`/`}>이전으로</Link>
            </Button>
          )}
          <Button>
            <Link to="/">목록</Link>
            {/* 삭제) 장고로 바로 보냄 */}
            {/* 수정) 리액트에서 골라서 보냄 - Link사용*/}
          </Button>
        </Buttonlist>
      </Wrap>
    </>
  );
};

export default Read;
