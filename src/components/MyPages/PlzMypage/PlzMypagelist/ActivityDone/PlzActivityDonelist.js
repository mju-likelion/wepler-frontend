import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const ActivityPlz = ({
  index,
  plus_id,
  plus_fields,
  plus_address_big,
  plus_email,
  match,
}) => {
  return (
    <>

      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {plus_id}
          </Typography>
          <Typography align="center">Plus회원 email: {plus_email}</Typography>
          <Typography align="center">활동 분야: {plus_fields}</Typography>
          <Typography align="center">활동 장소: {plus_address_big}</Typography>
          <Typography align="center">매칭 넘버: {index}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ActivityPlz;