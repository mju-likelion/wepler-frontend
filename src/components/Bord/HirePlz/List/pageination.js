import React from "react";
import _ from "lodash";
import styled from "styled-components";
import { Button } from "./ListStyle";
import { Link } from "react-router-dom";
import qs from "qs";

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const PageNumber = styled.div``;

const buildLinke = ({ plzboard, page }) => {
  const query = qs.stringify({ page });
  return plzboard ? "/@${plzboard}?${query}" : "/?${query}";
};

const Pagination = ({
  pageSize,
  itemsCount,
  currentPage,
  handlePageChange,
  page,
  plzboard,
}) => {
  // const { itemsCount, pageSize } = props; // 각각 아이템 개수, 한 페이지에 보여줄 아이템 개수
  const pageCount = Math.ceil(itemsCount / pageSize); // 몇 페이지가 필요한지 계산
  if (pageCount === 1) return null; // 1페이지 뿐이라면 페이지 수를 보여주지 않음
  const pages = _.range(1, pageCount + 1); // 마지막 페이지에 보여줄 컨텐츠를 위해 +1
  const lastPage = 3;
  return (
    <nav>
      <ul className="pagination">
        <Button
          disabled={page === 1}
          to={page === 1 ? undefined : buildLinke({ plzboard, page: page - 1 })}
        >
          이전
        </Button>

        <PageNumber>
          {pages.map((page) => (
            <Button
              key={page.id}
              to={currentPage === buildLinke({ plzboard, page: page })}
              onClick={() => {
                console.log(page);
                handlePageChange(page);
              }}
            >
              {page}
            </Button>
          ))}
        </PageNumber>

        <Button
          disabled={page === lastPage}
          to={
            page === lastPage
              ? undefined
              : buildLinke({ plzboard, page: page + 1 })
          }
        >
          다음
        </Button>
      </ul>
    </nav>
  );
};

export default Pagination;
