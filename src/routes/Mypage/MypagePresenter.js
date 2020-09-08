import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import imgProfile from "assets/img/imgProfile.PNG";
import bords from "../../BoardData.json";

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

const TextTitle = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;

const ButtonField = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Box1 = styled.div`
  text-align: center;
  justify-content: "center";
`;

const Profile = styled.div`
  padding-top: 40px;
  padding-right: 40px;
  justify-content: center;
`;

const ProfileBox = styled.div`
  justify-content: center;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

const BigBox = styled.div`
  text-align: center;
  justify-content: center;
`;

const UploadBt = styled.div`
  padding-right: 40px;
  padding-top: 20px;
`;

const DeleteBt = styled.div`
  padding-left: 40px;
`;

const CompleteBt = styled.div`
  padding-right: 40px;
`;

const useStyles = makeStyles((theme) => ({
  form: {
    width: "160%",
    marginTop: theme.spacing(3),
  },
}));

export default function Mypage() {
  const classes = useStyles();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <TextTitle>기본 정보 수정</TextTitle>
        </div>
      </Container>

      <Wrapper>
        <ProfileBox>
          <Profile>
            <img src={imgProfile} width="200" height="220" alt="testA" />
          </Profile>

          <UploadBt>
            <Button
              type="submit"
              variant="contained"
              className={classes.submit}
            >
              업로드하기
            </Button>
          </UploadBt>
        </ProfileBox>

        <BigBox>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <Box1>
                <div className={classes.paper}>
                  <form className={classes.form} noValidate>
                    <Grid justify="flex-end">
                      <Grid item xs={10} sm={10}>
                        <TextField
                          autoComplete="name"
                          name="name"
                          variant="outlined"
                          required
                          fullWidth
                          id="Name"
                          label="이름"
                          autoFocus
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="이메일 주소"
                          name="email"
                          autoComplete="email"
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="id"
                          label="아이디"
                          name="id"
                          autoComplete="id"
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password_mo"
                          label="비밀번호 수정"
                          type="password_mo"
                          id="password_mo"
                          autoComplete="current-password"
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password_ch"
                          label="수정된 비밀번호 확인"
                          type="password_ch"
                          id="password_ch"
                          autoComplete="current-password"
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="school"
                          label="학교"
                          name="school"
                          autoComplete="school"
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="grade"
                          label="학년"
                          name="grade"
                          autoComplete="grade"
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="number"
                          label="전화번호"
                          name="number"
                          autoComplete="number"
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          id="introduce"
                          label="자기소개"
                          name="introduce"
                          autoComplete="introduce"
                          margin="normal"
                          fullWidth
                        />
                      </Grid>
                    </Grid>

                    <ButtonField>
                      <CompleteBt>
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          className={classes.submit}
                          margin="normal"
                        >
                          완료하기
                        </Button>
                      </CompleteBt>

                      <DeleteBt>
                        <Button
                          type="submit"
                          variant="contained"
                          className={classes.submit}
                          padding="normal"
                        >
                          취소하기
                        </Button>
                      </DeleteBt>
                    </ButtonField>
                  </form>
                </div>
              </Box1>
            </Container>
          </ThemeProvider>
        </BigBox>
      </Wrapper>
    </>
  );
}
