import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Pagination from "@material-ui/lab/Pagination";
import ItemCard from "./Itemlist";
import { Container2, Wrap, Item, BigTextWrap, Button } from "./ListStyle";

const Listpage = (props) => {
  const { Itemcard } = props;
  const [type, setType] = useState("");
  const [currentPage, setCurrentPage] = useState(1); //현재활성화된 page기본은 1
  const pageSize = 5; //한페이지에 보여줄 개수
  const [count, setCount] = useState(1); //아이템 개수
  const [lastpage, setLastpage] = useState(1);

  const handlePageChange = (event, page) => {
    setCurrentPage(page); // 페이지 수 클릭 시 현재 페이지 변경
  };

  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    setType(user_id);
    async function getCount() {
      const counts = await axios.get("board/hire_board_count/");
      setCount(counts.data.count);
      setLastpage(Math.ceil(count / pageSize));
    }
    getCount();
  }, [count]);

  return (
    <>
      <Container maxWidth="lg">
        <Grid item lg={12}>
          <Container2>
            <h2>고용합니다</h2>
          </Container2>
          <BigTextWrap>
            <Item>
              <div>번호</div>
            </Item>
            <Item>
              <div>제목</div>
            </Item>
            <Item>
              <div>모집여부</div>
            </Item>
            <Item>
              <div>개인/단체</div>
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
                      timeover={itemdata.timeover}
                      plz_group={itemdata.plz_group}
                      title={itemdata.title}
                      plz_id={itemdata.plz_id}
                      need_member={itemdata.need_member}
                      apply_member={itemdata.apply_member}
                      start_date={itemdata.start_date}
                      end_date={itemdata.end_date}
                      plz_fields={itemdata.plz_class}
                    />
                  </div>
                )
              )}
          </Wrap>
          {type === "plz" ? (
            <Button>
              <Link to={`/plzwrite`}>포스트 작성하기</Link>
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
      </Container>
    </>
  );
};
export default Listpage;
