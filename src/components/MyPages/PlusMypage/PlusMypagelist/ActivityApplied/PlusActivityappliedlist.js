import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const ActivityPlus = ({ index, plus_id, plus_fields, plus_address_big }) => {
  return (
    <>
      <Link to={`/plusapplied/${index}`}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              {plus_id}
            </Typography>
            <Typography align="center">활동 분야: {plus_fields}</Typography>
            <Typography align="center">
              활동 장소: {plus_address_big}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default ActivityPlus;
