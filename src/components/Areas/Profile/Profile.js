import React from "react";
import { Link } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  ListItem,
  Box,
  BoxBig,
  BoxName,
  BoxExplan,
  HashBox,
} from "../Profile/ProfileStyled";

function Itemlist({
  id,
  plus_id,
  plus_fields,
  plus_oneself,
  plus_rating,
  plus_edu,
  plus_start_day,
  plus_start_time,
  plus_end_time,
  plus_email,
}) {
  return (
    <>
      <Box>
        <BoxBig>
          <ListItem>
            <Link to={`/plusprofile/${id}`}>
              <BoxName>
                <h2>{plus_id}</h2>
              </BoxName>
              <BoxExplan>
                <FaQuoteLeft size="15" color="#404A41" />
                {plus_oneself}
                <FaQuoteRight size="15" color="#404A41" />
                <div>평균평점: {plus_rating}</div>
                <HashBox>{plus_fields}</HashBox>
              </BoxExplan>
            </Link>
          </ListItem>
        </BoxBig>
      </Box>
    </>
  );
}

export default Itemlist;
