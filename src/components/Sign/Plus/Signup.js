import React from "react";
import styled from "styled-components";
import HashTag from "components/HashTag/HashTagChoose/HashTagChoose";
import WhenShare from "components/Sign/Plus/WhenShare";
import WhenStart from "components/Sign/Plus/WhenStart";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  palette: {
    primary: {     
      main: '#C9AA79',
    },
    secondary: {
      main: '#EFEFEF',
    },
  },
});

const TextTitle = styled.div`
  padding-top:10px;
  font-weight: bold;
  font-size:25px;
`;

const TextQuestion = styled.div`
  padding-top: 30px;
  font-size:20px;
  font-weight: bold;
`;

const Field = styled.div`
  display: flex;  
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '160%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <TextTitle>
            Plus(플러스) - 회원가입
          </TextTitle>
        </div>
      </Container>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstname"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="성"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="이름"
                    name="name"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="이메일 주소"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="비밀번호"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="address"
                    label="주소"
                    name="address"
                    autoComplete="address" />

                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="number"
                    label="전화번호"
                    name="number"
                    autoComplete="number"
                  />
                </Grid>
              </Grid>
              <Grid>
                <Grid item xs={12}>
                  <TextQuestion>
                    원하는 재능 나눔 분야
              </TextQuestion>
                </Grid>
                <Field>
                  <HashTag />
                </Field>
                <Grid item xs={12}>
                  <TextQuestion>
                    재능나눔 시간 입력해주세요.
              </TextQuestion>
                </Grid>
                <Field>
                  <WhenStart />
                </Field>
                <Field>
                  <WhenShare />
                </Field>                
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="관련 소식을 이메일로 받아보고 싶어요."
                  />
                </Grid>
              </Grid>

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
    </>
  );
}

