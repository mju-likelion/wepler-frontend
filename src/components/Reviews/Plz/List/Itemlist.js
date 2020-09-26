import React from "react";
import { Link } from "react-router-dom";
import { Item, TextWrap, ListItem } from "./ListStyle";

function Itemlist({ id, matching, title, plz_id, plz_writeday }) {
  return (
    <ListItem key={id}>
      <Link to={`/reviewplz/${id}`}>
        <TextWrap>
          <Item>
            <div>{id}</div>
          </Item>
          <Item>
            <h3>{title}</h3>
          </Item>
          <Item>
            <p>{matching}</p>
          </Item>
          <Item>
            <p>{plz_writeday}</p>
          </Item>
          <Item>
            <div>{plz_id}</div>
          </Item>
        </TextWrap>
      </Link>
    </ListItem>
  );
}
export default Itemlist;
