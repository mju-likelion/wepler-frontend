import React, { useState, useEffect } from "react";
import axios from "axios";
import MypageNav from "../PlusMypagenav";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import {
  TextTitle,
  BigProfile,
  BigBox,
  Profile,
  Infor,
  InforContents,
  Infortalent,
  Wrapper,
  ButtonList,
  ActivityDisplay,
  ActivityList,
  TextWrapterm,
  ActivityBox,
} from "./BasicStyle";

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

const MyPages = ({ handleActivity, handleChange, handleWhen, postBoard }) => {
  const classes = useStyles();
  const [ismodify, setIsmodify] = useState(false);
  const [type, setType] = useState("");
  const [plus_fields, setBoard] = useState([]);
  const [plus_name, setName] = useState("");
  const [plus_phone, setPhone] = useState("");
  const [plus_email, setEmail] = useState("");
  const [plus_address_big, setBig] = useState("");
  const [plus_address_small, setSmall] = useState("");
  const [plus_continu_month, setContinu] = useState("");
  const [plus_start_time, setStart] = useState("");
  const [plus_end_time, setEnd] = useState("");
  const [plus_talentshare, setShare] = useState("");
  const [plus_start_day, setDay] = useState([]);
  const [file, setfile] = useState(null); //파일

  const handleChangeFile = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        base64.toString(); // 파일 base64 상태 업데이트
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setfile(URL.createObjectURL(event.target.files[0])); // 파일 상태 업데이트
    }
    setfile(URL.createObjectURL(event.target.files[0]));
  };

  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    setType(user_id);
    if (type !== "plus") {
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
  }, [type]);
  const read = (
    <Infortalent>
      <Infor>
        <div>나눔 분야:</div>
        <InforContents>
          <div>{plus_fields}</div>
        </InforContents>
      </Infor>
      <Infor>
        <div>시작 날짜:</div>

        <InforContents>
          <div>{plus_talentshare}</div>
        </InforContents>
      </Infor>
      <Infor>
        <div>요일:</div>

        <InforContents>
          <div>{plus_start_day}</div>
        </InforContents>
      </Infor>
      <Infor>
        <div>시작시간:</div>

        <InforContents>
          <div>{plus_start_time}</div>
        </InforContents>
      </Infor>
      <Infor>
        <div>종료시간:</div>

        <InforContents>
          <div>{plus_end_time}</div>
        </InforContents>
      </Infor>
      <Infor>
        <div>지속기간:</div>
        <InforContents>
          <div>{plus_continu_month}</div>
        </InforContents>
      </Infor>
    </Infortalent>
  );

  const modify = (
    <Infortalent>
      <Infor>
        <div>나눔 분야:</div>
      </Infor>
      <Infor>
        <InforContents>
          <ActivityDisplay>
            <ActivityBox>
              <FormControlLabel
                control={
                  <Checkbox
                    name="education"
                    onChange={handleActivity}
                    value={plus_fields.education}
                    color="primary"
                  />
                }
                label="교육"
              />
            </ActivityBox>
            <ActivityBox>
              <FormControlLabel
                control={
                  <Checkbox
                    name="council"
                    onChange={handleActivity}
                    value={plus_fields.council}
                    color="primary"
                  />
                }
                label="상담"
              />
            </ActivityBox>
            <ActivityBox>
              <FormControlLabel
                control={
                  <Checkbox
                    name="making"
                    onChange={handleActivity}
                    value={plus_fields.making}
                    color="primary"
                  />
                }
                label="메이킹"
              />
            </ActivityBox>
            <ActivityBox>
              <FormControlLabel
                control={
                  <Checkbox
                    name="activity"
                    value={plus_fields.activity}
                    onChange={handleActivity}
                    color="primary"
                  />
                }
                label="야외활동"
              />
            </ActivityBox>
          </ActivityDisplay>
          <ActivityDisplay>
            <ActivityBox>
              <FormControlLabel
                control={
                  <Checkbox
                    name="culture"
                    onChange={handleActivity}
                    value={plus_fields.culture}
                    color="primary"
                  />
                }
                label="문화"
              />
            </ActivityBox>

            <ActivityBox>
              <FormControlLabel
                control={
                  <Checkbox
                    name="trip"
                    onChange={handleActivity}
                    value={plus_fields.trip}
                    color="primary"
                  />
                }
                label="여행"
              />
            </ActivityBox>
            <ActivityBox>
              <FormControlLabel
                control={
                  <Checkbox
                    name="etc"
                    onChange={handleActivity}
                    value={plus_fields.etc}
                    color="primary"
                  />
                }
                label="기타"
              />
            </ActivityBox>
          </ActivityDisplay>
        </InforContents>
      </Infor>
      <Infor>
        <div>시작 날짜:</div>

        <InforContents>
          <input
            type="date"
            name="plus_talentshare"
            onChange={handleChange}
            value={plus_talentshare}
          />
        </InforContents>
      </Infor>
      <Infor>
        <div>요일:</div>

        <InforContents>
          <ActivityList>
            <TextWrapterm>
              <input
                type="checkbox"
                name="monday"
                onChange={handleWhen}
                value={plus_start_day.mon}
              />
              <div>월</div>
            </TextWrapterm>
            <TextWrapterm>
              <input
                type="checkbox"
                name="tuesday"
                onChange={handleWhen}
                value={plus_start_day.tues}
              />
              <div>화</div>
            </TextWrapterm>
            <TextWrapterm>
              <input
                type="checkbox"
                name="wednesday"
                onChange={handleWhen}
                value={plus_start_day.wednes}
              />
              <div>수</div>
            </TextWrapterm>
            <TextWrapterm>
              <input
                type="checkbox"
                name="thursday"
                onChange={handleWhen}
                value={plus_start_day.thurs}
              />
              <div>목</div>
            </TextWrapterm>
            <TextWrapterm>
              <input
                type="checkbox"
                name="friday"
                onChange={handleWhen}
                value={plus_start_day.fri}
              />
              <div>금</div>
            </TextWrapterm>
            <TextWrapterm>
              <input
                type="checkbox"
                name="saturday"
                onChange={handleWhen}
                value={plus_start_day.satur}
              />
              <div>토</div>
            </TextWrapterm>
            <TextWrapterm>
              <input
                type="checkbox"
                name="sunday"
                onChange={handleWhen}
                value={plus_start_day.sun}
              />
              <div>일</div>
            </TextWrapterm>
          </ActivityList>
        </InforContents>
      </Infor>
      <Infor>
        <div>시작시간:</div>

        <InforContents>
          <TextWrapterm>
            <input
              type="time"
              name="plus_start_time"
              onChange={handleChange}
              value={plus_start_time}
            />
          </TextWrapterm>
        </InforContents>
      </Infor>
      <Infor>
        <div>종료시간:</div>

        <InforContents>
          <TextWrapterm>
            <input
              type="time"
              name="plus_end_time"
              onChange={handleChange}
              value={plus_end_time}
            />
          </TextWrapterm>
        </InforContents>
      </Infor>
      <Infor>
        <div>지속기간:</div>
        <InforContents>
          <TextWrapterm>
            <input
              type="number"
              name="plus_continu_month"
              placeholder="ex) 5"
              onChange={handleChange}
              value={plus_continu_month}
            />
            <div>개월</div>
          </TextWrapterm>
        </InforContents>
      </Infor>
    </Infortalent>
  );

  return (
    <>
      <MypageNav />
      <Container component="main" maxWidth="xs">
        <div>
          <TextTitle>기본 정보 수정</TextTitle>
        </div>
      </Container>
      <BigBox>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <div>
              <form className={classes.form} onSubmit={postBoard} noValidate>
                <Wrapper>
                  <Profile>
                    <img
                      style={{
                        backgroundColor: "#efefef",
                        width: "200px",
                        height: "200px",
                      }}
                      src={file}
                      alt=""
                    />
                    <div>
                      <input
                        type="file"
                        name="imgFile"
                        id="imgFile"
                        onChange={handleChangeFile}
                      />
                    </div>
                  </Profile>

                  <BigProfile>
                    <Infor>
                      <div>이름:</div>

                      <InforContents>
                        <div>{plus_name}</div>
                      </InforContents>
                    </Infor>
                    <Infor>
                      <div>이메일:</div>

                      <InforContents>
                        <div>{plus_email}</div>
                      </InforContents>
                    </Infor>
                    <Infor>
                      <div>전화번호:</div>

                      <InforContents>
                        <div>{plus_phone}</div>
                      </InforContents>
                    </Infor>
                    <Infor>
                      <div>주소:</div>
                      <InforContents>
                        <div>{plus_address_big}</div>
                        <div>{plus_address_small}</div>
                      </InforContents>
                    </Infor>
                  </BigProfile>
                </Wrapper>
                <Infor>재능기부)</Infor>
                <BigProfile>{ismodify ? modify : read}</BigProfile>
                <ButtonList>
                  {ismodify ? (
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      className={classes.submit}
                      margin="normal"
                    >
                      완료하기
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="secondary"
                      margin="normal"
                      onClick={() => setIsmodify(true)}
                    >
                      수정하기
                    </Button>
                  )}
                </ButtonList>
              </form>
            </div>
            <Box mt={5} />
          </Container>
        </ThemeProvider>
      </BigBox>
    </>
  );
};

export default MyPages;
