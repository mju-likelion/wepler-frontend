import React from "react";
import { Link } from "react-router-dom";
import { Item, TextWrap, ListItem } from "./ListStyle";

function Itemlist({ id, title, plus_id, plus_writeday }) {
  return (
    <ListItem key={id}>
      <Link to={`/reviewplus/${id}`}>
        <TextWrap>
          <Item>
            <div>{id}</div>
          </Item>
          <Item>
            <h3>{title}</h3>
          </Item>
          <Item>
            <p>{plus_writeday}</p>
          </Item>
          <Item>
            <div>{plus_id}</div>
          </Item>
        </TextWrap>
      </Link>
    </ListItem>
  );
}
export default Itemlist;
