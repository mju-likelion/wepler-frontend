import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const ActivityPlz = ({
  index,
  plus_id,
  plus_fields,
  plus_address_big,
  plus_rating,
}) => {
  return (
    <>
      {/* <Card>
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="Image title"
          />
        </Card> */}

      <Card>
        <Link to={`/plzapplied/${index}`}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              {plus_id}
            </Typography>
            <Typography align="center">활동 분야: {plus_fields}</Typography>
            <Typography align="center">
              활동 장소: {plus_address_big}
            </Typography>
            <Typography align="center">평균 평점: {plus_rating}</Typography>
          </CardContent>
        </Link>
      </Card>
    </>
  );
};

export default ActivityPlz;
