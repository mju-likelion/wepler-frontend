import React from "react";
import { Link } from "react-router-dom";
import Profile from "components/Profile/Profile.js";

function Itemlist({
  id,
  plus_id,
  plus_fields,
  plus_edu,
  plus_start_day,
  plus_start_time,
  plus_end_time,
  plus_email,
}) {
  return (
    <>
      {/* <Profile /> */}
      <div key={id} />
      <Link to={`/plusprofile/${id}`}>
        {plus_id},{plus_fields}, {plus_edu}, {plus_start_day}, {plus_start_time}
        ,{plus_end_time}, {plus_email},
      </Link>
    </>
  );
}
export default Itemlist;
