import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const ActivityPlus = ({ index, plus_id, plus_fields, plus_address_big, plus_email }) => {
  return (
    <>
      {/* {console.log(match.params.profileId)} */}
      {/* <Card>
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="Image title"
          />
        </Card> */}
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {plus_id}
          </Typography>
          <Typography align="center">Plz회원 email: {plus_email}</Typography>
          <Typography align="center">활동 분야: {plus_fields}</Typography>
          <Typography align="center">활동 장소: {plus_address_big}</Typography>
          <Typography align="center">매칭 넘버: {index}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ActivityPlus;
