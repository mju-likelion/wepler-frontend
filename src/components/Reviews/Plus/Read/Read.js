import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const Container2 = styled.div`
  text-align: center;
  color: #404a41;
  line-height: 2;
  font-weight: bold;
  font-size: 30px;
`;

const Box = styled.div`
  margin-bottom: 3%;
`;
const Box2 = styled.div`
  padding-left: 64%;
  margin-top: 1rem;
  margin-bottom: 5%;
  color: #8d99ae;
  display: flex;
`;
const Wrap = styled.div`
  padding-left: 20%;
  padding-right: 25%;
`;

const FlexItem = styled.div`
  padding-left: 3%;
  color: #a26769;
`;

const ConItem = styled.div`
  padding-left: 10%;
  padding-right: 15%;
  justify-content: center;
  color: #403d39;
`;

const Button = styled.div`
  margin-bottom: 10%;
  padding-right: 5%;
  float: right;
  padding: 10px 10px;
  border-radius: 5px;
  text-decoration: none;
  background: #c9aa79;
  color: #fff;
  font-size: 20px;
  &:hover {
    background-color: #eee4e1;
  }
`;
const Buttonlist = styled.div`
  padding-top: 2%;
  padding-left: 45%;
  display: flex;
  padding-right: 5%;
  justify-content: center;
  text-align: center;
  border-top: 1px solid #c9aa79;
`;
const ButtonItem = styled.div`
  padding-right: 5%;
`;

const Read = ({ match }) => {
  console.log(match.params.postId);
  const [ismodify, setIsmodify] = useState(false); //수정가능=true
  const id = 1; //포스트 넘버
  const [write_email, setWrite] = useState(""); //포스트 작성자 이메일
  const [user_email, setEmail] = useState(""); //현사용자 이메일
  const [user_id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [matching, setMatching] = useState("");
  const [fields, setFields] = useState([]);

  useEffect(() => {
    async function getMypage() {
      try {
        const gets = await axios.get("/token_check/", {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
        });
        setEmail(gets.data.user_email);
      } catch {
        console.log("user information error!");
      }
    }
    getMypage();

    async function getRead() {
      // try {
      //   //포스트의 내용
      //   const reads = await axios.get(`/review/plz_review_detail/${match.params.postId}`, {
      //     headers: {
      //       Authorization: JSON.parse(localStorage.getItem("token")),
      //     },
      //   });
      //   setWrite(reads.data.user_email);
      // } catch {
      //   console.log("post error!");
      // }

      setWrite("123@naver.com");
      setId("plus_id");
      setTitle("제목1");
      setContent(
        "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
      );
      setMatching("plz_id");
      setFields(["council", "trip"]);
    }

    getRead();
  }, []);

  const onChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
    if (e.target.name === "content") {
      setContent(e.target.value);
    }
  };

  const postBoard = async (e) => {
    e.preventDefault();
    try {
      const post = await axios.post(
        `/review/plz_review_update/${match.params.postId}/`,
        {
          title,
          content,
        }
      );
      console.log(post);
      alert("수정 되었습니다");
    } catch {
      alert("실패하였습니다.");
    }
  };

  const postDelete = async (e) => {
    await axios.delete(`/review/plz_review_delete/${match.params.postId}`);
    alert("삭제되었습니다.");
  };

  const read = (
    <>
      <Container2>
        <h2>{title}</h2>
      </Container2>

      <Container maxWidth="md">
        <Box2>
          <Grid item xs={12} sm={4}>
            <span>
              <b>작성일:</b>
            </span>
          </Grid>
          <Grid item xs={12} sm={12}>
            <span>{new Date().toLocaleDateString()}</span>
          </Grid>
        </Box2>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <div>매칭회원:</div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlexItem>
                <div>{matching}</div>
              </FlexItem>
            </Grid>
            <Grid item xs={12} sm={2}>
              <div>작성자:</div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FlexItem>
                <p>{user_id}</p>
                <p>{user_email}</p>
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
                <p>{fields}</p>
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
            <div>{content}</div>
          </ConItem>
        </Box>
      </Container>
      <Wrap>
        <Buttonlist>
          <ButtonItem>
            {user_email === write_email ? (
              <Button onClick={() => setIsmodify(true)}>수정하기</Button>
            ) : undefined}
          </ButtonItem>
          <Button>
            <Link to="/reviewplus">목록</Link>
          </Button>
        </Buttonlist>
      </Wrap>
    </>
  );

  const modify = (
    <>
      <Container2>
        <TextField
          rows={6}
          name="title"
          defaultValue={title}
          onChange={onChange}
          required
        />
      </Container2>
      <Container maxWidth="md">
        <Box2>
          <Grid item xs={12} sm={4}>
            <span>
              <b>작성일:</b>
            </span>
          </Grid>
          <Grid item xs={12} sm={12}>
            <span>{new Date().toLocaleDateString()}</span>
          </Grid>
        </Box2>

        <Box>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={2}>
              <div>매칭회원:</div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlexItem>
                <div>{matching}</div>
              </FlexItem>
            </Grid>
            <Grid item xs={12} sm={2}>
              <div>작성자:</div>
            </Grid>
            <Grid item xs={12} sm={2}>
              <FlexItem>
                <p>{user_id}</p>
                <p>{user_email}</p>
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
                <p>{fields}</p>
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
            <TextField
              label="내용"
              multiline
              rows={4}
              name="content"
              defaultValue={content}
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={onChange}
              required
            />
          </ConItem>
        </Box>
      </Container>
      <Wrap>
        <Buttonlist>
          <ButtonItem>
            <Button onClick={postBoard}>
              <Link to={`/reviewplus/${id}`}>완료하기</Link>
            </Button>
          </ButtonItem>
          <ButtonItem>
            <Button onClick={postDelete}>
              <Link to="/reviewplus">삭제하기</Link>
              {/* 삭제) 장고로 바로 보냄 */}
            </Button>
          </ButtonItem>
          <Button onClick={() => setIsmodify(false)}>
            <Link to={`/reviewplus/${id}`}>취소하기</Link>
          </Button>
        </Buttonlist>
      </Wrap>
    </>
  );

  return <div>{ismodify ? modify : read}</div>;
};

export default Read;
