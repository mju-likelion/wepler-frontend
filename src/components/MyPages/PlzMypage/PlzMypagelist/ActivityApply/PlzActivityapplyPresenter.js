import React, { useState, useEffect } from "react";
import PlzMypageNav from "../../PlzMypagenav";
import Pagination from "@material-ui/lab/Pagination";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Activityapplylist from "./PlzActivityapplylist";
import { TextTitle } from "../Basic/PlzBasicStyle";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(40),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  Typography: {
    paddingLeft: theme.spacing(36),
  },
}));

const ActivityapplyPresenter = (props) => {
  const { Itemcard } = props;
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1); //현재활성화된 page기본은 1
  const pageSize = 3; //한페이지에 보여줄 개수
  const [itemsCount, setItemsCount] = useState(5); //아이템 개수
  const [lastpage, setLastpage] = useState(2);

  const handlePageChange = (event, page) => {
    setCurrentPage(page); // 페이지 수 클릭 시 현재 페이지 변경
    console.log(currentPage);
  };

  useEffect(() => {
    setItemsCount();
    setLastpage(Math.ceil(itemsCount / pageSize));
  }, []);

  return (
    <>
      <PlzMypageNav />
      <div>
      <Container maxWidth="sm">
          <TextTitle className={classes.Typography}> 신청한 활동 </TextTitle>
      </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {Itemcard &&
            Itemcard.slice(currentPage * 3 - 3, currentPage * 3).map(
              (carddata, id) => (
                <Grid item key={id} xs={12} sm={6} md={4}>
                  <Activityapplylist
                    index={carddata.index}
                    plus_id={carddata.plus_id}
                    plus_fields={carddata.plus_fields}
                    plus_address_big={carddata.plus_address_big}
                    plus_rating={carddata.plus_rating}
                  />
                </Grid>
              )
            )}
        </Grid>
      </Container>

      <Container className={classes.cardGrid} maxWidth="sm">
        <Pagination
          variant="outlined"
          shape="rounded"
          color="primary"
          size="large"
          count={lastpage}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Container>
    </>
  );
};

export default ActivityapplyPresenter;
