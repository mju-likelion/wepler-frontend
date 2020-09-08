import React from "react";
import styled from "styled-components";
import PlzMypageNav from "../PlzMypagenav";
import PlzWhenDay from "components/Sign/Plz/PlzWhenDay";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

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

const TextTitle = styled.div`
  padding-top: 0px;
  font-weight: bold;
  font-size: 25px;
  padding-left: 200px;
`;

const ButtonField = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 30px;
`;

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "160%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  Container: {
    paddingLeft: theme.spacing(30),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <>
      <PlzMypageNav />
      <Container component="main" maxWidth="xs">
        <TextTitle>참여 분야 수정</TextTitle>
        <ThemeProvider theme={theme}>
          <form className={classes.form} noValidate>
            <PlzWhenDay />
            <ButtonField>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                margin="normal"
              >
                완료하기
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.submit}
                padding="normal"
              >
                취소하기
              </Button>
            </ButtonField>
          </form>
        </ThemeProvider>
      </Container>
    </>
  );
}
