import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import MypageNav from "../PlusMypagenav";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";


const TextTitle = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;  
  padding-left: 200px;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;

const BigProfile = styled.div`
  margin-bottom: 10%;
  text-align: center;
  justify-content: center;
`;

const BigBox = styled.div`
  text-align: center;
  justify-content: center;
`;


const Profile = styled.div`
  padding-right: 60px;
  padding-bottom: 20px;
  justify-content: center;
  justify-content: center;
  text-align: center;
`;

const Infor = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const InforTitle = styled.div`
`;

const InforContents = styled.div`
  color: #22577a;
`;

const Infortalent = styled.div`
  padding-right: 200px;
  padding-bottom: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  text-align: center;
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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address_big, setBig] = useState("");
  const [address_small, setSmall] = useState("");
  const [continu_month, setContinu] = useState("");
  const [start_time, setStart] = useState("");
  const [end_time, setEnd] = useState("");
  const [talentshare, setShare] = useState("");
  const [start_day, setDay] = useState([]);

  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const [imgFile, setImgFile] = useState(null);	//파일	

  const handleChangeFile = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
    }
  }

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
      setName(test.data.user_name);
      setPhone(test.data.user_phone);
      setEmail(test.data.user_email);
      setBig(test.data.user_address_big);
      setSmall(test.data.user_address_small);
      setContinu(test.data.user_continu_month);
      setStart(test.data.user_start_time);
      setEnd(test.data.user_end_time);
      setShare(test.data.user_talentshare);
      setDay(test.data.user_start_day);
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

        <BigBox>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <div className={classes.paper}>
                <form className={classes.form} noValidate>
                  <Wrapper>


                    <Profile>
                      <div className={MyPages}>
                        <div style={{ "backgroundColor": "#efefef", "width": "200px", "height": "200px" }}>
                        </div>
                        <div>
                          {/* onChange 추가 */}
                          <input type="file" name="imgFile" id="imgFile" onChange={handleChangeFile} />
                        </div>
                      </div>
                    </Profile>

                    <BigProfile>
                      <Infor>
                        <InforTitle>
                          <div>이름:</div>
                        </InforTitle>
                        <InforContents>
                          <div>{name}</div>
                        </InforContents>
                      </Infor>
                      <Infor>
                        <InforTitle>
                          <div>이메일:</div>
                        </InforTitle>
                        <InforContents>
                          <div>{email}</div>
                        </InforContents>
                      </Infor>
                      <Infor>
                        <InforTitle>
                          <div>전화번호:</div>
                        </InforTitle>
                        <InforContents>
                          <div>{phone}</div>
                        </InforContents>
                      </Infor>
                      <Infor>
                        <InforTitle>
                          <div>주소:</div>
                        </InforTitle>
                        <InforContents>
                          <div>{address_big}</div>
                          <div>{address_small}</div>
                        </InforContents>
                      </Infor>
                      <Infor>재능기부)</Infor>
                      <Infortalent>
                        <Infor>
                          <InforTitle>
                            <div>나눔 분야:</div>
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
                            <div>{talentshare}</div>
                          </InforContents>
                        </Infor>
                        <Infor>
                          <InforTitle>
                            <div>요일:</div>
                          </InforTitle>
                          <InforContents>
                            <div>{start_day}</div>
                          </InforContents>
                        </Infor>
                        <Infor>
                          <InforTitle>
                            <div>시작시간:</div>
                          </InforTitle>
                          <InforContents>
                            <div>{start_time}</div>
                          </InforContents>
                        </Infor>
                        <Infor>
                          <InforTitle>
                            <div>종료시간:</div>
                          </InforTitle>
                          <InforContents>
                            <div>{end_time}</div>
                          </InforContents>
                        </Infor>
                        <Infor>
                          <InforTitle>
                            <div>지속기간:</div>
                          </InforTitle>
                          <InforContents>
                            <div>{continu_month}</div>
                          </InforContents>
                        </Infor>
                      </Infortalent>
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                        margin="normal"
                      >
                        완료하기
                </Button>
                    </BigProfile>
                  </Wrapper>
                </form>
              </div>
            </Container>
          </ThemeProvider>
        </BigBox>
      </>
    );

};

export default MyPages;
