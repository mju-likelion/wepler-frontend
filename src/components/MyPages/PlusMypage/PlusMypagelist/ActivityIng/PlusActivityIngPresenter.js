import React, { useState, useEffect } from "react";
import axios from "axios";
import PlusMypageNav from "../../PlusMypagenav";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ActivityInglist from "./PlusActivityInglist";
import { TextTitle } from "../Basic/BasicStyle";

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
    paddingLeft: theme.spacing(37),
  },
}));

const ActivityIngPresenter = (props) => {
  const { Itemcard } = props;
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1); //현재활성화된 page기본은 1
  const pageSize = 3; //한페이지에 보여줄 개수
  const [count, setCount] = useState(1); //아이템 개수
  const [lastpage, setLastpage] = useState(1);

  const handlePageChange = (event, page) => {
    setCurrentPage(page); // 페이지 수 클릭 시 현재 페이지 변경
    console.log(currentPage);
  };

 
  useEffect(() => {
    async function getCount() {
      const counts = await axios.get("/mypage/match_list_count/", 
      {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      });
      setCount(counts.data.count);
      setLastpage(Math.ceil(count / pageSize));
    }
    getCount();
  }, [count]);
  return (
    <>
      <PlusMypageNav />
      <div>
        <Container maxWidth="sm">
          <TextTitle className={classes.Typography}> 진행 중인 활동 </TextTitle>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {Itemcard &&
            Itemcard.slice(currentPage * 3 - 3, currentPage * 3).map(
              (carddata, id) => (
                <Grid item key={id} xs={12} sm={6} md={4}>
                  <ActivityInglist
                         index={carddata.id}
                         plus_id={carddata.plz_name}
                         plus_fields={carddata.plz_class}
                         plus_address_big={carddata.plz_address_big}
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

export default ActivityIngPresenter;
