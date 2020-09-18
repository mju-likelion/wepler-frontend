import React from "react";
import { Link } from "react-router-dom";
import { Item, TextWrap, ExplanWrap, ListItem } from "./ListStyle";

function Itemlist({
  type,
  id,
  title,
  recruit,
  plz_id,
  need_member,
  apply_member,
  start_date,
  end_date,
  plz_fields,
}) {
  return (
    <ListItem key={id}>
      <Link to={`/@$plzboard/${id}`}>
        <TextWrap>
          <Item>
            <div>{id}</div>
          </Item>
          <Item>
            <h3>{title}</h3>
          </Item>
          <Item>
            <p>{recruit}</p>
          </Item>
          <Item>
            <div>{plz_id}</div>
          </Item>
        </TextWrap>

        <ExplanWrap>
          <div>
            필요/신청인원: {need_member}/{apply_member}
          </div>
          <div>
            기간: {start_date}~{end_date}
          </div>
          <div>분야: {plz_fields}</div>
        </ExplanWrap>
      </Link>
    </ListItem>
  );
}
export default Itemlist;
