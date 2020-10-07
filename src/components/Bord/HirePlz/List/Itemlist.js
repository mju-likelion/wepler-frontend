import React from "react";
import { Link } from "react-router-dom";
import { Item, TextWrap, ExplanWrap, ListItem } from "./ListStyle";

function Itemlist({
  id,
  title,
  timeover,
  plz_group,
  need_member,
  apply_member,
  start_date,
  end_date,
  plz_fields,
}) {
  return (
    <ListItem key={id}>
      <Link to={`/plzboard/${id}`}>
        <TextWrap>
          <Item>
            <div>{id}</div>
          </Item>
          <Item>
            <h3>{title}</h3>
          </Item>
          <Item>
            <p>{timeover}</p>
          </Item>
          <Item>
            <div>{plz_group}</div>
          </Item>
        </TextWrap>

        <ExplanWrap>
          <div>
          신청인원/필요: {apply_member}/{need_member}
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
