import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
    rating: "",
  };
  postBoard = async () => {
    try {
      const post = await axios.post(
        "/plus_reviews/",
        {
          title: this.state.title,
          content: this.state.content,
          matching: this.state.matching,
          rating: this.state.rating,
        },
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      alert("작성되었습니다.");
      this.setState({
        title: "",
        content: "",
        matching: "",
      });
      console.log(post);
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
              <input
                type="select"
                name="matching"
                onChange={this.handleChange}
                value={this.state.matching}
              />
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
