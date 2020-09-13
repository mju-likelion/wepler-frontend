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

const MyPages = () => {
  const classes = useStyles();
  const [type, setType] = useState("");
  const [board, setBoard] = useState([]);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    address_big: "",
    address_small: "",
    continu_month: "",
    start_time: "",
    end_time: "",
    talentshare: "",
    start_day: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    setType(user_id);
    if (user_id !== "plus") {
      localStorage.clear();
    }

    async function getMypage() {
      var test = await axios.get("/mypage/getMypage", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      });
      setBoard(test.data.user_class);
      setData(
        (data.name = test.data.user_name),
        (data.phone = test.data.user_phone),
        (data.email = test.data.user_email),
        (data.address_big = test.data.user_address_big),
        (data.address_small = test.data.user_address_small),
        (data.continu_month = test.data.user_continu_month),
        (data.start_time = test.data.user_start_time),
        (data.end_time = test.data.user_end_time),
        (data.talentshare = test.data.user_talentshare),
        (data.start_day = test.data.user_start_day)
      );
    }

    getMypage();
  }, []);

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
            <form className={classes.form} noValidate>
              <Profile>
                <img src={imgProfile} width="200" height="220" alt="testA" />
                <input type="file"></input>
              </Profile>
              <BigProfile>
                <Infor>
                  <InforTitle>
                    <div>이름:</div>
                  </InforTitle>
                  <InforContents>
                    <div>{data.name}</div>
                  </InforContents>
                </Infor>
                <Infor>
                  <InforTitle>
                    <div>이메일:</div>
                  </InforTitle>
                  <InforContents>
                    <div>{data.email}</div>
                  </InforContents>
                </Infor>
                <Infor>
                  <InforTitle>
                    <div>전화번호:</div>
                  </InforTitle>
                  <InforContents>
                    <div>{data.phone}</div>
                  </InforContents>
                </Infor>
                <Infor>
                  <InforTitle>
                    <div>주소:</div>
                  </InforTitle>
                  <InforContents>
                    <div>{data.address_big}</div>
                    <div>{data.address_small}</div>
                  </InforContents>
                </Infor>
                <Infor>재능기부</Infor>
                <Infortalent>
                  <Infor>
                    <InforTitle>
                      <div>나눔 분야</div>
                    </InforTitle>
                    <InforContents>
                      <div>{board}</div>
                    </InforContents>
                  </Infor>
                  <Infor>
                    <InforTitle>
                      <div>시작 날짜:</div>
                    </InforTitle>
                    <InforContents>
                      <div>{data.talentshare}</div>
                    </InforContents>
                  </Infor>
                  <Infor>
                    <InforTitle>
                      <div>요일:</div>
                    </InforTitle>
                    <InforContents>
                      <div>{data.start_day}</div>
                    </InforContents>
                  </Infor>
                  <Infor>
                    <InforTitle>
                      <div>시작시간:</div>
                    </InforTitle>
                    <InforContents>
                      <div>{data.start_time}</div>
                    </InforContents>
                  </Infor>
                  <Infor>
                    <InforTitle>
                      <div>종료시간:</div>
                    </InforTitle>
                    <InforContents>
                      <div>{data.end_time}</div>
                    </InforContents>
                  </Infor>
                  <Infor>
                    <InforTitle>
                      <div>지속기간:</div>
                    </InforTitle>
                    <InforContents>
                      <div>{data.continu_month}</div>
                    </InforContents>
                  </Infor>
                </Infortalent>
              </BigProfile>
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
};
export default MyPages;
