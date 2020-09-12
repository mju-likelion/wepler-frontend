import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import boards from "../../../../BoardData.json";
import MypageNav from "../PlusMypagenav";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import imgProfile from "assets/img/imgProfile.PNG";

const TextTitle = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;

const BigProfile = styled.div`
  margin-bottom: 10%;
`;

const Profile = styled.div`
  margin-bottom: 5%;
`;

const Infor = styled.div`
  display: flex;
  margin-bottom: 2%;
`;

const InforTitle = styled.div`
  padding-right: 5%;
`;

const InforContents = styled.div`
  color: #22577a;
`;

const Infortalent = styled.div`
  padding-right: 50%;
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#C9AA79",
    },
    secondary: {
      main: "#F2D4CA",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  form: {
    width: "160%",
    marginTop: theme.spacing(3),
  },
}));

export default function Mypage() {
  const classes = useStyles();
  const [type, setType] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    setType(user_id);
    if (user_id !== '"plus_id"') {
      localStorage.clear();
    }
    if (token) {
      let result = axios.get("/token_check/", {
        token: token,
      });
      if (result !== null) {
        async function getBoard(e) {
          const { plus_id } = this.state;
          const get = await axios.get("/plus_onesinfo/", {
            plus_id,
          });
          console.log(plus_id);
        }
      }
    } else {
      console.log("Information error");
    }
  });
  async function postBoard(e) {
    e.preventDefault();
    const {
      plus_password,
      plus_address_big,
      plus_address_small,
      plus_start_day,
      plus_talentshare,
      plus_continu_month,
      plus_start_time,
      plus_end_time,
      plus_fields,
    } = this.state;
    try {
      const post = await axios.post("/plus_onesinfromation/", {
        plus_password,
        plus_address_big,
        plus_address_small,
        plus_start_day,
        plus_talentshare,
        plus_continu_month,
        plus_start_time,
        plus_end_time,
        plus_fields,
      });
      console.log(post);
      alert("플러스 회원조회 성공!");
    } catch {
      console.log("Theres was an error!");
    }
  }
  const state = {
    borads: [],
  };

  return (
    <>
      <MypageNav />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <TextTitle>기본 정보 수정</TextTitle>
        </div>
      </Container>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm">
          <div className={classes.paper}>
            <form className={classes.form} onSubmit={postBoard} noValidate>
              <Profile>
                <img src={imgProfile} width="200" height="220" alt="testA" />
                <input type="file"></input>
              </Profile>
              <Infor>
                <InforTitle>
                  <div>이름:</div>
                </InforTitle>
                <InforContents>{/* <div>{plus_id}</div> */}</InforContents>
              </Infor>
              {boards.map((item) => {
                return (
                  <BigProfile>
                    <Infor>
                      <InforTitle>
                        <div>이름:</div>
                      </InforTitle>
                      <InforContents>
                        <div>{item.plus_id}</div>
                      </InforContents>
                    </Infor>
                    <Infor>
                      <InforTitle>
                        <div>이메일:</div>
                      </InforTitle>
                      <InforContents>
                        <div>{item.plus_email}</div>
                      </InforContents>
                    </Infor>
                    <Infor>
                      <InforTitle>
                        <div>비밀번호:</div>
                      </InforTitle>
                      <InforContents>
                        <div>{item.plus_password}</div>
                      </InforContents>
                    </Infor>
                    <Infor>
                      <InforTitle>
                        <div>전화번호:</div>
                      </InforTitle>
                      <InforContents>
                        <div>{item.plus_email}</div>
                      </InforContents>
                    </Infor>
                    <Infor>
                      <InforTitle>
                        <div>주소:</div>
                      </InforTitle>
                      <InforContents>
                        <div>{item.area}</div>
                        <div>{item.plus_address_small}</div>
                      </InforContents>
                    </Infor>
                    <Infor>재능기부</Infor>
                    <Infortalent>
                      <Infor>
                        <InforTitle>
                          <div>나눔 분야</div>
                        </InforTitle>
                        <InforContents>
                          <div>{item.plus_fields}</div>
                        </InforContents>
                      </Infor>
                      <Infor>
                        <InforTitle>
                          <div>시작 날짜:</div>
                        </InforTitle>
                        <InforContents>
                          <div>{item.plus_talentshare}</div>
                        </InforContents>
                      </Infor>
                      <Infor>
                        <InforTitle>
                          <div>요일:</div>
                        </InforTitle>
                        <InforContents>
                          <div>{item.plus_start_day}</div>
                        </InforContents>
                      </Infor>
                      <Infor>
                        <InforTitle>
                          <div>시작시간:</div>
                        </InforTitle>
                        <InforContents>
                          <div>{item.plus_start_time}</div>
                        </InforContents>
                      </Infor>
                      <Infor>
                        <InforTitle>
                          <div>종료시간:</div>
                        </InforTitle>
                        <InforContents>
                          <div>{item.plus_end_time}</div>
                        </InforContents>
                      </Infor>
                      <Infor>
                        <InforTitle>
                          <div>지속기간:</div>
                        </InforTitle>
                        <InforContents>
                          <div>{item.plus_continu_month}</div>
                        </InforContents>
                      </Infor>
                    </Infortalent>
                  </BigProfile>
                );
              })}
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.submit}
                margin="normal"
              >
                완료하기
              </Button>
            </form>
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
}
