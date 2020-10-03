import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PlusList from "./Profile/Profile";
import Pagination from "@material-ui/lab/Pagination";
import qs from "qs";

const Container = styled.div`
  padding-left: 13%;
  padding-top: 10px;
  font-size: 40px;
  font-weight: bold;
`;
const Container2 = styled.div`
  padding-left: 10%;
  padding-top: 10px;
`;
const ButtonMember = styled.div`
  font-size: 50px;
  padding-left: 75%;
`;

const ButtonLink = styled(Link)`
  font-size: 30px;
  display: flex;
  align-items: center;
`;

const BeforeButton = styled.button`
  border: 3px solid #c9aa79;
  background-color: #c9aa79;
  color: #ffffff;
  font-size: 20px;
  margin: 50px;
  width: 150px;
  height: 55px;
  &:hover {
    background-color: #f2d4ca;
  }
`;

const Page = styled.div`
  padding-top: 5%;
  padding-left: 50%;
`;

const city = {
  seoul: "서울특별시",
  gyeonggi: "경기도",
  incheon: "인천",
  gangwon: "강원도",
  chungbuk: "충청북도",
  chungnam: "충청남도",
  daejeon: "대전",
  jeonbuk: "전라북도",
  jeonnam: "전라남도",
  gwangju: "광주",
  gyeongbuk: "경상북도",
  daegu: "대구",
  gyeongnam: "경상남도",
  ulsan: "울산",
  busan: "부산",
  jeju: "제주",
};

const SeoulMem = ({ location: { search } }) => {
  const [currentPage, setCurrentPage] = useState(1); //현재활성화된 page기본은 1
  const pageSize = 5; //한페이지에 보여줄 개수
  const [count, setCount] = useState(1); //아이템 개수
  const [lastpage, setLastpage] = useState(1);
  const [itemList, setItemList] = useState([]);
  const query = qs.parse(search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 맨 앞의 ? 생략
  });

  const handlePageChange = (event, page) => {
    setCurrentPage(page); // 페이지 수 클릭 시 현재 페이지 변경
  };

  useEffect(() => {
    const getList = async () => {
      const list = require("../../BoardData.json");
      setItemList(list.data);
    };
    // const getList = async () => {
    //   const list = await axios.get("board/hire_board_list/");
    //   setItemList(list.data);
    // };
    getList();
    async function getCount() {
      const counts = await axios.get("board/hire_board_count/");
      setCount(counts.data.count);
      setLastpage(Math.ceil(count / pageSize));
    }
    getCount();
  }, [count]);

  return (
    <>
      <Container>
        <h1>{query?.location ? city[query.location] : "전체"}</h1>
      </Container>
      <Container2>
        {itemList &&
          itemList
            .slice(currentPage * 5 - 5, currentPage * 5)
            .map((itemdata, index) => (
              <div key={index}>
                <PlusList
                  id={itemdata.id}
                  plus_id={itemdata.plus_id}
                  plus_fields={itemdata.plus_fields}
                  plus_edu={itemdata.plus_edu}
                  plus_oneself={itemdata.plus_oneself}
                  plus_rating={itemdata.plus_rating}
                  plus_start_day={itemdata.plus_start_day}
                  plus_start_time={itemdata.plus_start_time}
                  plus_end_time={itemdata.plus_end_time}
                  plus_email={itemdata.plus_email}
                />
              </div>
            ))}
      </Container2>
      <Page>
        <Pagination
          variant="outlined"
          shape="rounded"
          color="primary"
          size="large"
          count={lastpage}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Page>
      <ButtonMember>
        <ButtonLink to="/areaplus">
          <BeforeButton>이전으로</BeforeButton>
        </ButtonLink>
      </ButtonMember>
    </>
  );
};

export default SeoulMem;
