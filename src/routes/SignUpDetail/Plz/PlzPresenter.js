import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#C9AA79",
    },
    secondary: {
      main: "#F2D4CA",
    },
    initial: {
      main: "#404A41",
    },
  },
});

const Big = styled.div`
  padding-left: 25%;
  padding-right: 25%;
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

const TextQuestion = styled.div`
  padding-top: 30px;
  font-size: 20px;
  font-weight: bold;
`;

const TextDisplayWhen = styled.div`
  display: flex;
  font-size: 20px;
  line-height: 1.5;
  label {
    padding-right: 20px;
  }
`;

const TextDisplay = styled.div`
  margin-bottom: 30px;
  display: flex;
  font-size: 20px;
  line-height: 1.5;
  label {
    padding-right: 20px;
  }
`;

const AccountAsk = styled.div`
  font-size: 15px;
`;

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

const PlzPresenter = ({
  handleWhenRadio,
  handleBelongRadio,
  handelinfoChange,
  handleActivity,
  handleTerms,
  postBoard,
  classes,
  plz_when_learn,
  plz_belong,
  plz_fields,
}) => (
  <>
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <TextTitle>Plz(플리즈) - 회원가입</TextTitle>
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
                    id="plz_name"
                    label="이름"
                    name="plz_name"
                    autoComplete="plz_name"
                    onChange={handelinfoChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="plz_email"
                    label="이메일 주소"
                    name="plz_email"
                    autoComplete="plz_email"
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
                    name="plz_password"
                    label="비밀번호"
                    type="password"
                    id="plz_password"
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
                    id="plz_phonenumber"
                    label="전화번호"
                    name="plz_phonenumber"
                    autoComplete="plz_phonenumber"
                    onChange={handelinfoChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextQuestion>주소</TextQuestion>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <select
                    name="plz_address_big"
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
                    id="plz_address_small"
                    label="나머지 주소"
                    name="plz_address_small"
                    autoComplete="plz_address_small"
                    onChange={handelinfoChange}
                  />
                </Grid>
              </Grid>
              <Grid>
                <TextQuestion>원하는 재능 배움 분야</TextQuestion>
                <ActivityDisplay>
                  <ActivityBox>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="education"
                          onChange={handleActivity}
                          value={plz_fields.education}
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
                          value={plz_fields.council}
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
                          value={plz_fields.making}
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
                          value={plz_fields.activity}
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
                          value={plz_fields.culture}
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
                          value={plz_fields.trip}
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
                          value={plz_fields.etc}
                          color="primary"
                        />
                      }
                      label="기타"
                    />
                  </ActivityBox>
                </ActivityDisplay>
              </Grid>

              <TextQuestion>언제 배우고 싶으신가요?</TextQuestion>
              <TextDisplayWhen>
                <label>
                  <input
                    type="radio"
                    name="plz_when_learn"
                    value="regularly"
                    checked={plz_when_learn["regularly"] ? true : false}
                    onChange={handleWhenRadio}
                  />
                  정기적으로 배우고 싶어요
                </label>
              </TextDisplayWhen>
              <TextDisplayWhen>
                <label>
                  <input
                    type="radio"
                    name="plz_when_learn"
                    value="specific"
                    checked={plz_when_learn["specific"] ? true : false}
                    onChange={handleWhenRadio}
                  />
                  특정한 날에만 배우고 싶어요
                </label>
              </TextDisplayWhen>
              <TextDisplayWhen>
                <label>
                  <input
                    type="radio"
                    name="plz_when_learn"
                    value="thinking"
                    checked={plz_when_learn["thinking"] ? true : false}
                    onChange={handleWhenRadio}
                  />
                  생각중이에요
                </label>
              </TextDisplayWhen>
              <TextQuestion>개인 혹은 단체 이신가요?</TextQuestion>
              <TextDisplay>
                <label>
                  <input
                    type="radio"
                    name="plz_belong"
                    value="individual"
                    checked={plz_belong["individual"] ? true : false}
                    onChange={handleBelongRadio}
                  />
                  개인
                </label>
                <label>
                  <input
                    type="radio"
                    name="plz_belong"
                    value="group"
                    checked={plz_belong["group"] ? true : false}
                    onChange={handleBelongRadio}
                  />
                  단체
                </label>
              </TextDisplay>
              <TextQuestion>
                <Checkbox
                  name="agreePrivate"
                  defaultChecked={"agreePrivate" ? false : true}
                  onChange={handleTerms}
                />
                <Link to="/memberterms" color="initial">
                  개인정보 수집 및 이용 동의(필수)
                </Link>
              </TextQuestion>
              <TextQuestion>
                <Checkbox
                  name="agreeWepler"
                  defaultChecked={"agreeWepler" ? false : true}
                  onChange={handleTerms}
                />
                <Link to="/terms" color="initial">
                  위플러 이용약관 동의(필수)
                </Link>
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
                <AccountAsk>
                  <Link to="/Signin" variant="body2">
                    이미 계정이 있으신가요?
                  </Link>
                </AccountAsk>
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

PlzPresenter.propTypes = {
  postBoard: PropTypes.func.isRequired,
  handelinfoChange: PropTypes.func.isRequired,
  handleActivity: PropTypes.func.isRequired,
  handleWhenRadio: PropTypes.func.isRequired,
  handleBelongRadio: PropTypes.func.isRequired,
  handleTerms: PropTypes.func.isRequired,
};

export default withStyles(styles)(PlzPresenter);
