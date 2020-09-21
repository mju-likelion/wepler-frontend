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
  const [type, setType] = useState(""); //현사용자 회원
  const [ismodify, setIsmodify] = useState(false); //수정가능=true
  const [id, setPostid] = useState(1); //포스트 넘버
  const [write_email, setWrite] = useState(""); //포스트 작성자 이메일
  const [user_email, setEmail] = useState(""); //현사용자 이메일
  const [user_id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [recruit, setRecruit] = useState("");
  const [need, setNeed] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [fields, setFields] = useState([]);
  const [plz_belong, setBelong] = useState("");

  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    setType(user_id); //현사용자 회원

    async function getMypage() {
      //현사용자 이메일가져오기
      // const gets = await axios.get("/mypage/getMypage", {
      //   headers: {
      //     Authorization: JSON.parse(localStorage.getItem("token")),
      //   },
      // });
      // setEmail(gets.data.user_email);
      setEmail("123@naver.com");
    }

    getMypage();
    async function getRead() {
      //포스트의 내용
      // const reads = await axios.get(`/hire_detail/${match.params.postId}`, {
      //   headers: {
      //     Authorization: JSON.parse(localStorage.getItem("token")),
      //   },
      // });
      // setWrite(reads.data.user_email);
      setWrite("12123@naver.com");
      setId("plz_id");
      setBelong("individual");
      setTitle("제목1");
      setContent(
        "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
      );
      setRecruit("모집중");
      setNeed("5");
      setStart("2020-08-08");
      setEnd("2020-12-31");
      setFields(["council", "trip"]);
    }

    getRead();
  }, []);

  const onChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
    if (e.target.name === "need") {
      if (e.target.value >= 1) {
        setNeed(e.target.value);
      }
    }
    if (e.target.name === "start") {
      setStart(e.target.value);
    }
    if (e.target.name === "end") {
      setEnd(e.target.value);
    }
    if (e.target.name === "content") {
      setContent(e.target.value);
    }
  };

  const postBoard = async (e) => {
    e.preventDefault();
    const { title, content, need, start } = this.state;
    try {
      const post = await axios.post("/board/hire_detail/", {
        title,
        content,
        need,
        start,
      });
      console.log(post);
      alert("수정 되었습니다");
    } catch {
      alert("실패하였습니다.");
    }
  };

  const postDelete = async (e) => {
    await axios.post(
      "/board/hire_delete/",
      {
        id: setPostid,
      },
      {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      }
    );
    alert("삭제되었습니다.");
  };

  const apply = async (e) => {
    await axios.post(
      "/board/hire_apply/",
      {
        id: setPostid,
      },
      {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      }
    );
    alert("신청되었습니다.");
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
            <Grid item xs={12} sm={1}>
              <div>모집:</div>
            </Grid>
            <Grid item xs={12} sm={5}>
              <FlexItem>
                <div>{recruit}</div>
              </FlexItem>
            </Grid>
            <Grid item xs={12} sm={2}>
              <div>작성자:</div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FlexItem>
                <p>
                  {user_id}({plz_belong})
                </p>
                <p>{user_email}</p>
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
                <p>{need}</p>
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
                <p>{start}</p>
              </FlexItem>
            </Grid>
            <Grid item xs={12} sm={2}>
              <div>종료기간:</div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlexItem>
                <p>{end}</p>
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
            {type === "plus" ? (
              <Button onClick={apply}>신청하기</Button>
            ) : undefined}
            {user_email === write_email ? (
              <Button onClick={() => setIsmodify(true)}>수정하기</Button>
            ) : undefined}
          </ButtonItem>

          <Button>
            <Link to="/plzboard">목록</Link>
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
            <Grid item xs={12} sm={1}>
              <div>모집:</div>
            </Grid>
            <Grid item xs={12} sm={5}>
              <FlexItem>
                <div>{recruit}</div>
              </FlexItem>
            </Grid>
            <Grid item xs={12} sm={2}>
              <div>작성자:</div>
            </Grid>
            <Grid item xs={12} sm={2}>
              <FlexItem>
                <p>
                  {user_id}({plz_belong})
                </p>
                <p>{user_email}</p>
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
                <TextField
                  rows={3}
                  type="number"
                  name="need"
                  defaultValue={need}
                  onChange={onChange}
                  required
                />
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
                <TextField
                  type="date"
                  name="start"
                  defaultValue={start}
                  min={start}
                  max={end}
                  onChange={onChange}
                  required
                />
              </FlexItem>
            </Grid>
            <Grid item xs={12} sm={2}>
              <div>종료기간:</div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlexItem>
                <TextField
                  type="date"
                  name="end"
                  defaultValue={end}
                  min={start}
                  max={end}
                  onChange={onChange}
                  required
                />
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
            <Button onClick={postBoard}>완료하기</Button>
          </ButtonItem>
          <ButtonItem>
            <Button onClick={postDelete}>
              <Link to={`/plzboard/${id}`}>삭제하기</Link>
              {/* 삭제) 장고로 바로 보냄 */}
            </Button>
          </ButtonItem>
          <Button onClick={() => setIsmodify(false)}>
            <Link to={`/plzboard/${id}`}>취소하기</Link>
          </Button>
        </Buttonlist>
      </Wrap>
    </>
  );

  return <div>{ismodify ? modify : read}</div>;
};

export default Read;
