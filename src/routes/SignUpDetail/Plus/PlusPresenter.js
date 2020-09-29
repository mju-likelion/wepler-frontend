import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Big = styled.div`
  padding-left: 25%;
  padding-right: 25%;
`;

const SLink = styled(Link)`
 
`;

const TextTitle = styled.div`
  padding-top: 10px;
  font-weight: bold;
  font-size: 25px;
`;
const ActivityDisplay = styled.div`
  display: flex;
  margin: 30px;
  line-height: 1.5;
  input {
    width: 10%;
  }
`;

const ActivityBox = styled.div`
  padding: 5px 5px;
  border-radius: 5px;
  border: 2px solid #c9aa79;
  background-color: #ffffff;
  color: #404a41;
  margin-right: 20px;
  display: flex;
  &:hover {
    background-color: #f2d4ca;
  }
`;

const ActivityList = styled.div`
  display: flex;
`;
const TextQuestion = styled.div`
  padding-top: 30px;
  font-size: 20px;
  font-weight: bold;
`;

const TextList = styled.div`
  padding-top: 30px;
  padding-left: 17px;
  font-size: 20px;
  font-weight: bold;
`;

const TextWrapterm = styled.div`
  display: flex;
  font-size: 23px;
  margin-top: 25px;
  margin-left: 20px;
  textarea {
    resize: none;
    border: none;
    width: 30%;
    height: 30px;
    border: none;
  }
  div {
    padding-left: 5px;
    font-size: 20px;
  }
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#C9AA79",
    },
    secondary: {
      main: "#EFEFEF",
    },
  },
});

const styles = {
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
};

const PlusPresenter = ({
  handleChange,
  handelinfoChange,
  handleWhen,
  handleActivity,
  postBoard,
  classes,
  plus_name,
  plus_email,
  plus_password,
  plus_phonenumber,
  plus_address_big,
  plus_address_small,
  plus_start_day,
  plus_talentshare,
  plus_continu_month,
  plus_start_time,
  plus_end_time,
  plus_fields,
}) => (
  <>
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <TextTitle>Plus(플러스) - 회원가입</TextTitle>
      </div>
    </Container>
    <Big>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="md">
          <div className={classes.paper}>
            <form className={classes.form} onSubmit={postBoard} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextQuestion>이름</TextQuestion>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextQuestion>이메일</TextQuestion>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="plus_name"
                    label="이름"
                    name="plus_name"
                    autoComplete="plus_name"
                    onChange={handelinfoChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="plus_email"
                    label="이메일 주소"
                    name="plus_email"
                    autoComplete="plus_email"
                    onChange={handelinfoChange}
                  />
                </Grid>
                <Grid item xs={10}>
                  <TextQuestion>비밀번호</TextQuestion>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="plus_password"
                    label="비밀번호"
                    type="plus_password"
                    id="plus_password"
                    autoComplete="current-password"
                    onChange={handelinfoChange}
                  />
                </Grid>

                <Grid item xs={10}>
                  <TextQuestion>전화번호</TextQuestion>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="plus_phonenumber"
                    label="전화번호"
                    name="plus_phonenumber"
                    autoComplete="plus_phonenumber"
                    onChange={handelinfoChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextQuestion>주소</TextQuestion>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <select
                    name="plus_address_big"
                    defaultValue="지역을 선택하세요"
                    onChange={handelinfoChange}
                  >
                    <option disabled>지역을 선택하세요</option>
                    <option value="seoul">서울</option>
                    <option value="gyeonggi">경기도</option>
                    <option value="incheon">인천</option>
                    <option value="gangwon">강원도</option>
                    <option value="chungbuk">충청북도</option>
                    <option value="chungnam">충청남도</option>
                    <option value="daejeon">대전</option>
                    <option value="jeonbuk">전라북도</option>
                    <option value="jeonnam">전라남도</option>
                    <option value="gwangju">광주</option>
                    <option value="gyeongbuk">경상북도</option>
                    <option value="daegu">대구</option>
                    <option value="gyeongnam">경상남도</option>
                    <option value="ulsan">울산</option>
                    <option value="busan">부산</option>
                    <option value="jeju">제주</option>
                  </select>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    required
                    fullWidth
                    id="plus_address_small"
                    label="나머지 주소"
                    name="plus_address_small"
                    autoComplete="plus_address_small"
                    onChange={handelinfoChange}
                  />
                </Grid>
              </Grid>
              <Grid>
                <TextQuestion>원하는 재능 나눔 분야</TextQuestion>
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
                          onChange={handleActivity}
                          value={plus_fields.activity}
                          color="primary"
                        />
                      }
                      label="야외활동"
                    />
                  </ActivityBox>
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
                </ActivityDisplay>
                <ActivityDisplay>
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

                <TextQuestion>재능나눔 시간 입력해주세요.</TextQuestion>
                <ActivityList>
                  <TextList>
                    <h3>재능 나눔 시작일</h3>
                  </TextList>
                  <TextWrapterm>
                    <input
                      type="date"
                      name="plus_talentshare"
                      onChange={handleChange}
                      value={plus_talentshare}
                    />
                  </TextWrapterm>
                </ActivityList>
                <ActivityList>
                  <TextList>
                    <h3>요일</h3>
                  </TextList>
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
                <ActivityList>
                  <TextList>
                    <h3>시작시간</h3>
                  </TextList>
                  <TextWrapterm>
                    <input
                      type="time"
                      name="plus_start_time"
                      onChange={handleChange}
                      value={plus_start_time}
                    />
                  </TextWrapterm>
                  <TextList>
                    <h3>종료시간</h3>
                  </TextList>
                  <TextWrapterm>
                    <input
                      type="time"
                      name="plus_end_time"
                      onChange={handleChange}
                      value={plus_end_time}
                    />
                  </TextWrapterm>
                </ActivityList>
                <ActivityList>
                  <TextList>
                    <h3>이 시간으로 얼마나 지속할 수 있으신가요?</h3>
                  </TextList>
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
                </ActivityList>
              </Grid>
              <TextQuestion>
                <SLink to="/memberterms">개인정보 수집 및 이용 동의</SLink>
              <Checkbox
                          name="agree"
                          onChange={handleActivity}
                        />
              </TextQuestion>
              <TextQuestion>
                <SLink to="/terms">위플러 이용약관 동의</SLink>
              <Checkbox
                          name="agree"
                          onChange={handleActivity}
                        />
              </TextQuestion>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                회원가입
              </Button>

              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/Signin" variant="body2">
                    이미 계정이 있으신가요?
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5} />
        </Container>
      </ThemeProvider>
    </Big>
    <Footer />
  </>
);

export default withStyles(styles)(PlusPresenter);
