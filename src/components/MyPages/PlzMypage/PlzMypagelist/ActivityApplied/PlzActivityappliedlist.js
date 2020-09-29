import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const ActivityPlz = ({
  index,
  plus_id,
  plus_fields,
  plus_address_big,
  plus_rating,
  match,
}) => {
  const apply = async (e) => {
    e.preventDefault();
    try {
      const overap = await axios.post(
        `/board/hire_apply/${match.params.postId}/`,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      if (overap.data.isoverap === true) alert("이미 수락하셨습니다.");
      else alert("수락되었습니다. 즐겁게 재능을 배우세요!");
    } catch {
      alert("수락에 실패하였습니다. 다시 시도해 주세요.");
    }
  };

  const postDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/delete/${match.params.profileId}`);
      alert("거절되었습니다.");
    } catch {
      alert("거절에 실패하였습니다.");
    }
  };
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
        <CardActions>
          <Button onClick={apply}>수락하기</Button>
          <Button onClick={postDelete}>
            <Link to="/plzapplied">거절하기</Link>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ActivityPlz;