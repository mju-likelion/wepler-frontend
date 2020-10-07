import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {
  Container2,
  Container3,
  Button,
  ButtonItem,
  Buttonlist,
  Line,
  TitleWrap,
  TextDisplay,
  TextDisplay2,
  TextWrap,
  Act,
} from "./WriteStyled";

class Write extends Component {
  state = {
    title: "",
    content: "",
    matching: "",
    matchingEmail: "",
    rating: "",
  };
  postBoard = async () => {
    try {
      const post = await axios.post(
        "/review/review_post/",
        {
          title: this.state.title,
          content: this.state.content,
          matching: this.state.matching,
          matchingEmail: this.state.matchingEmail,
          rating: this.state.rating,
        },
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      if(post.data.hasuser === false){
        alert("활동이 완료되지 않았거나 활동을 같이 하지 않은 유저의 email 입니다.");
      }
      else if(post.data.isoverap === true){
          alert("이미 후기를 작성한 유저의 email 입니다.");
        }
      else{
        alert("작성되었습니다.");
        this.setState({
          title: "",
          content: "",
          matching: "",
          matchingEmail: "",
          rating: "",
        });}
    } catch {
      console.log("작성에 실패하였습니다.");
    }
  };

  handleChange = (e) => {
    const { name } = e.target;
    if (name === "title") {
      this.setState({
        title: e.target.value,
      });
    }
    if (name === "content") {
      this.setState({
        content: e.target.value,
      });
    }
    if (name === "matching") {
      this.setState({
        matching: e.target.value,
      });
    }

    if (name === "matchingEmail") {
      this.setState({
        matchingEmail: e.target.value,
      });
    }

    if (name === "rating") {
      if (e.target.value >= 1 && e.target.value <= 10) {
        this.setState({
          rating: e.target.value,
        });
      } else {
        alert("별점은 1부터 10까지 입력해주세요.");
      }
    }
  };

  render() {
    return (
      <>
        {console.log(this.state)}
        <Container component="main" maxWidth="md">
          <Container2>
            <h2>플리즈 후기 작성하기</h2>
          </Container2>
          <TitleWrap>
            <input
              type="text"
              name="title"
              placeholder="제목을 입력하세요"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </TitleWrap>
          <Container3>
            <TextDisplay>
              <TextDisplay2>
                <div>매칭회원</div>
              </TextDisplay2>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="매칭 넘버"
                  type="text"
                  name="matching"
                  onChange={this.handleChange}
                  value={this.state.matching}
                />
                <TextField
                  required
                  fullWidth
                  label="플러스 회원 이메일"
                  type="text"
                  name="matchingEmail"
                  onChange={this.handleChange}
                  value={this.state.matchingEmail}
                />
              </Grid>
            </TextDisplay>
            <TextDisplay>
              <TextDisplay2>
                <div>매칭회원 별점</div>
              </TextDisplay2>
              <input
                type="number"
                name="rating"
                placeholder="ex) 5"
                onChange={this.handleChange}
                value={this.state.need_member}
              />
            </TextDisplay>
            <Line>
              <Act>
                <div>분야는 회원가입 시 선택한 분야로 자동 등록 됩니다.</div>
                <div>마이페이지에서 수정 할 수 있습니다.</div>
              </Act>
            </Line>
            <Line>
              <br />
            </Line>
            <div>내용</div>
            <br />
            <TextWrap>
              <textarea
                type="text"
                name="content"
                placeholder="내용을 입력하세요."
                onChange={this.handleChange}
                value={this.state.content}
              />
            </TextWrap>
            <Buttonlist>
              <ButtonItem>
                <Button onClick={this.postBoard}>
                  <Link to={`/reviewplz`}>전송하기</Link>
                </Button>
              </ButtonItem>
              <ButtonItem>
                <Button>
                  <Link to="/reviewplz">취소</Link>
                </Button>
              </ButtonItem>
            </Buttonlist>
          </Container3>
        </Container>
      </>
    );
  }
}

export default Write;
