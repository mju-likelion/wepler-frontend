import React from 'react';
import PlusMypageNav from "../PlusMypagenav";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(30),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  Typography: {
    paddingLeft: theme.spacing(30),
  },
}));

const cards = [1, 2, 3];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <PlusMypageNav />
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" gutterBottom className={classes.Typography}>
              진행중
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      활동 이름
                    </Typography>
                    <Typography  align="center">
                      활동 분야: 웅앙앙
                    </Typography>
                    <Typography  align="center">
                      활동 기간: 웅앙앙
                    </Typography>
                    <Typography  align="center">
                      활동 장소: 웅앙앙
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary"  align="center">
                      자세히 보기
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}