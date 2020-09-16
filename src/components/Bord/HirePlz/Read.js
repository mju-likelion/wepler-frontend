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
  padding-bottom: 5%;
  font-weight: bold;
  font-size: 30px;
`;

const Box = styled.div`
  margin-bottom: 3%;
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

const Read = () => {
  const [type, setType] = useState("");
  const [ismodify, setIsmodify] = useState(true);
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
    setType(user_id);
    async function getRead() {
      var reads = await axios.get("/hire_detail/", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      });
    }
    getRead();
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
  }, []);

  const onChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "recruit") {
      setRecruit(e.target.value);
    }
  };

  const postBoard = async (e) => {
    e.preventDefault();
    const { title, content, need, start, fields } = this.state;
    try {
      const post = await axios.post("/hire_detail/", {
        title,
        content,
        need,
        start,
        fields,
      });
      console.log(post);
      alert("수정 되었습니다");
    } catch {
      alert("실패하였습니다.");
    }
  };
  //어플라이) 토큰, 게시글 넘버
  const read = (
    <>
      <Container2>
        <h2>{title}</h2>
      </Container2>
      <Container maxWidth="md">
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
              <Button>
                <Link to={`/plzwrite`}>신청하기</Link>
              </Button>
            ) : (
              <Button>
                <Link to={`/`}>수정하기</Link>
              </Button>
            )}
          </ButtonItem>

          <Button>
            <Link to="/">목록</Link>
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
          value={title}
          onChange={onChange}
          required
        />
      </Container2>
      <Container maxWidth="md">
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
                  value={need}
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
              value={content}
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
            <Button type="submit" onSubmit={postBoard}>
              완료하기
            </Button>
          </ButtonItem>
          <ButtonItem>
            <Button>
              <Link to="/">삭제하기</Link>
              {/* 삭제) 장고로 바로 보냄 */}
            </Button>
          </ButtonItem>
          <Button onClick={() => setIsmodify(false)}>취소하기</Button>
        </Buttonlist>
      </Wrap>
    </>
  );

  return <div>{ismodify ? modify : read}</div>;
};

export default Read;
