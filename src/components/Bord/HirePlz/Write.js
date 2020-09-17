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
  TextWrapNeed,
  TextWrapterm,
  Act,
} from "../HirePlz/WirteStyled";

class Write extends Component {
  state = {
    title: "",
    recruit: "",
    need_member: "",
    start_date: "",
    end_date: "",
    content: "",
    fields: [],
  };
  postBoard = async () => {
    const post = await axios.post("/hire_post/", {
      title: this.state.title,
      recruit: this.state.recruit,
      need_member: this.state.need_member,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      content: this.state.content,
      fields: this.state.fields,
    });
    alert("작성되었습니다.");
    this.setState({
      title: "",
      recruit: "",
      need_member: "",
      start_date: "",
      end_date: "",
      content: "",
      fields: [],
    });
    console.log(post);
  };
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
    };
  }
  handleChange = (e) => {
    const { name } = e.target;
    if (name === "title") {
      this.setState({
        title: e.target.value,
      });
    }
    if (name === "recruit") {
      this.setState({
        recruit: e.target.value,
      });
    }
    if (name === "need_member") {
      this.setState({
        need_member: e.target.value,
      });
    }
    if (name === "start_date") {
      this.setState({
        start_date: e.target.value,
      });
    }
    if (name === "end_date") {
      this.setState({
        end_date: e.target.value,
      });
    }
    if (name === "content") {
      this.setState({
        content: e.target.value,
      });
    }
  };

  render() {
    return (
      <>
        {console.log(this.state)}
        <Container component="main" maxWidth="md">
          <Container2>
            <h2>고용 글 작성하기</h2>
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
                <div>모집마감일</div>
              </TextDisplay2>
              <input
                type="date"
                name="recruit"
                onChange={this.handleChange}
                value={this.state.recruit}
              />
            </TextDisplay>
            <Line>
              <br />
            </Line>
            <TextDisplay>
              <div>필요인원</div>
              <TextWrapNeed>
                <input
                  type="number"
                  name="need_member"
                  placeholder="ex) 5"
                  onChange={this.handleChange}
                  value={this.state.need_member}
                />
                명
              </TextWrapNeed>
            </TextDisplay>
            <Line>
              <br />
            </Line>
            <div>시작기간 및 종료기간</div>
            <TextWrapterm>
              <TextDisplay>
                <TextDisplay2>시작기간 :</TextDisplay2>
                <input
                  type="date"
                  name="start_date"
                  onChange={this.handleChange}
                  value={this.state.start_date}
                />
                <TextDisplay2>~ 종료기간:</TextDisplay2>
                <input
                  type="date"
                  name="end_date"
                  onChange={this.handleChange}
                  value={this.state.end_date}
                />
              </TextDisplay>
            </TextWrapterm>
            <Line>
              <br />
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
                <Button>
                  <Link to="/@plzboardboard">취소</Link>
                </Button>
              </ButtonItem>
              <Button onClick={this.postBoard}>전송하기</Button>
            </Buttonlist>
          </Container3>
        </Container>
      </>
    );
  }
}

export default Write;
