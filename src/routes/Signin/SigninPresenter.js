import React from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  palette: {
    primary: {     
      main: '#C9AA79',
    },
    secondary: {
      main: '#404A41',
    },
  },
});

const TextTitle = styled.div`
  text-align: center;
  padding-top:10%;
  font-weight: bold;
  font-size: 35px;
  padding: 40px ;
`;

const SigninPresenter = ({ postBoard,classes, email }) => (
  <>
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <TextTitle>
          로그인
          </TextTitle>
      </div>
    </Container>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <form className={classes.form} onSubmit={postBoard} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="이메일 주소"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="아이디를 기억합니다."
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              로그인
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  비밀번호를 잊으셨나요?
              </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"회원가입"}
                </Link>
              </Grid>
            </Grid>

          </form>
        </div>
        <Box mt={8}>
        </Box>
      </Container>
    </ThemeProvider>
  </>



);

export default SigninPresenter;
