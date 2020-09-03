import React from "react";
import styled from "styled-components";
import HashTag from "components/HashTag/HashTagChoose/HashTagChoose";
import WhenDay from "components/Sign/Plus/WhenDay";
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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
  padding-top:0px;
  font-weight: bold;
  font-size:25px;
`;

const ButtonField = styled.ul`
  display: flex;  
  justify-content: center;
  text-align: center;
  padding-top:30px; 
`;

const DeleteBt = styled.div`
  padding-left:40px;
`;

const CompleteBt = styled.div`
  padding-right:40px;
`;

const Field = styled.div`
  display: flex;  
`;

const FirstQuestion = styled.div`
  padding-top:0px;
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
            활동 분야 수정
          </TextTitle>
        </div>
      </Container>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <Grid>
                <Grid item xs={12}>
                  <FirstQuestion>
                    원하는 재능 나눔 분야
                  </FirstQuestion>
                </Grid>
                <Field>
                  <HashTag />
                </Field>

                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="봉사자 교육을 수료했습니다."
                />

                <WhenDay />
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
          <Box mt={5} />
        </Container>
      </ThemeProvider>
    </>
  );
}

