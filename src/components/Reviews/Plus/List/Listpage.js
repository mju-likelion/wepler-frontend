import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Pagination from "@material-ui/lab/Pagination";
import ItemCard from "./Itemlist";
import Box from "@material-ui/core/Box";
import { Container2, Wrap, Item, BigTextWrap, Button } from "./ListStyle";

const Listpage = (props) => {
  const { Itemcard } = props;
  const [type, setType] = useState("");
  const [currentPage, setCurrentPage] = useState(1); //현재활성화된 page기본은 1
  const pageSize = 5; //한페이지에 보여줄 개수
  const [itemsCount, setItemsCount] = useState(6); //아이템 개수
  const [lastpage, setLastpage] = useState(1);

  const handlePageChange = (event, page) => {
    setCurrentPage(page); // 페이지 수 클릭 시 현재 페이지 변경
    console.log(currentPage);
  };

  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    setType(user_id);
    setItemsCount();
    setLastpage(Math.ceil(itemsCount / pageSize));
  }, []);

  return (
    <>
      <Container component="main" maxWidth="lg">
        <Grid item lg={12}>
          <Container2>
            <h2>플러스들의 후기</h2>
          </Container2>
          <BigTextWrap>
            <Item>
              <div>번호</div>
            </Item>
            <Item>
              <div>제목</div>
            </Item>
            <Item>
              <div>작성일</div>
            </Item>
            <Item>
              <div>아이디</div>
            </Item>
          </BigTextWrap>
          <Wrap>
            {Itemcard &&
              Itemcard.slice(currentPage * 5 - 5, currentPage * 5).map(
                (itemdata, index) => (
                  <div key={index}>
                    <ItemCard
                      type={type}
                      id={itemdata.id}
                      title={itemdata.plus_title}
                      plus_id={itemdata.plus_id}
                      plus_writeday={itemdata.plus_writeday}
                    />
                  </div>
                )
              )}
          </Wrap>
          {type === "plus" ? (
            <Button>
              <Link to={`/reviewpluswrite`}>포스트 작성하기</Link>
            </Button>
          ) : (
            <Button>
              <Link to={`/`}>홈으로</Link>
            </Button>
          )}
        </Grid>
      </Container>
      <Container maxWidth="sm">
        <Pagination
          variant="outlined"
          shape="rounded"
          color="primary"
          size="large"
          count={lastpage}
          page={currentPage}
          onChange={handlePageChange}
        />
        <Box mt={5} />
      </Container>
    </>
  );
};
export default Listpage;
