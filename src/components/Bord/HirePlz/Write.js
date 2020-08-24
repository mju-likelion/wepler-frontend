import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Container from "@material-ui/core/Container";

const Container2 = styled.div`
  text-align: center;
  color: #404a41;
  line-height: 2;
  padding-bottom: 5%;
  font-weight: bold;
  font-size: 30px;
`;
const Container3 = styled.div`
  padding: 20px;
  padding-left: 30px;
  margin-top: 30px;
  margin-left: 50px;
`;

const Button = styled.div`
  border-top: 1px solid #eee;
  padding: 20px;
  button {
    float: right;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    background: #212121;
    color: #fff;
    font-size: 16px;
  }
  a {
    float: right;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    background: #f2f2f2;
    border: 1px solid #ddd;
    color: #424242;
    font-size: 16px;
  }
  & > button + a {
    margin-right: 5px;
  }
`;
const Line = styled.div`
  line-height: 1.5;
`;

const TitleWrap = styled.div`
  padding: 20px;
  padding-left: 30px;
  margin-top: 30px;
  margin-left: 50px;
  input {
    width: 91%;
    padding-bottom: 30px;
    border: none;
    font-size: 22px;
    border-bottom: solid 1px #ababab;
    font-weight: bold;
  }
`;
const TextDisplay = styled.div`
  display: flex;
`;
const TextDisplay2 = styled.div`
  padding-right: 30px;
`;
const TextWrap = styled.div`
  textarea {
    resize: none;
    border: none;
    width: 100%;
    height: 100px;
    border: none;
  }
`;
const TextWrapNeed = styled.div`
  padding-left: 30px;
  textarea {
    resize: none;
    border: none;
    width: 30%;
    height: 20px;
  }
`;
const TextWrapterm = styled.div`
  font-size: 23px;
  margin-top: 20px;
  margin-left: 50px;
  textarea {
    resize: none;
    border: none;
    width: 30%;
    height: 30px;
    border: none;
  }
`;

class Write extends Component {
  state = {
    title: "",
    need: "",
    ne_mem: "",
    term1: "",
    term2: "",
    content: "",
    hash: [],
  };
  postBoard = async () => {
    const { title, content, need } = this.state;
    const post = await axios.post("http://localhost:4000/board", {
      title,
      content,
    });
    alert("전송");
    this.setState({
      title: "",
      content: "",
      need: "",
    });
    console.log(post);
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    // 배열에 값이 있으면
    if (this.state.hash.findIndex((i) => i === name) !== -1) {
      const newHash = this.state.hash.filter((value) => value !== name);
      this.setState({
        ...this.state,
        hash: newHash,
      });
    }
    // 배열에 값이 없으면
    else {
      this.setState({
        ...this.state,
        hash: [...this.state.hash, name],
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
                name="need"
                onChange={this.handleChange}
                value={this.state.need ? "모집완료" : "모집중"}
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
                  name="ne_mem"
                  placeholder="ex) 5"
                  onChange={this.handleChange}
                  value={this.state.ne_mem}
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
                  name="term1"
                  placeholder="ex) 2020.08.08"
                  onChange={this.handleChange}
                  value={this.state.term1}
                />
                <TextDisplay2>~ 종료기간:</TextDisplay2>
                <input
                  type="date"
                  name="term2"
                  placeholder="ex) 2020.12.31"
                  onChange={this.handleChange}
                  value={this.state.term2}
                />
              </TextDisplay>
            </TextWrapterm>
            <Line>
              <br />
            </Line>
            <div>분야</div> <br />
            <TextDisplay>
              <input
                type="checkbox"
                name="education"
                onChange={this.handleChange}
                value={this.state.hash.education}
              />
              <div>교육</div>
              <input
                type="checkbox"
                name="council"
                onChange={this.handleChange}
                value={this.state.hash.council}
              />
              <div>상담</div>
              <input
                type="checkbox"
                name="making"
                onChange={this.handleChange}
                value={this.state.hash.making}
              />
              <div>메이킹</div>
              <input
                type="checkbox"
                name="activity"
                onChange={this.handleChange}
                value={this.state.hash.activity}
              />
              <div>야외활동</div>
              <input
                type="checkbox"
                name="culture"
                onChange={this.handleChange}
                value={this.state.hash.culture}
              />
              <div>문화</div>
              <input
                type="checkbox"
                name="trip"
                onChange={this.handleChange}
                value={this.state.hash.trip}
              />
              <div>여행</div>
              <input
                type="checkbox"
                name="etc"
                onChange={this.handleChange}
                value={this.state.hash.etc}
              />
              <div>기타</div>
            </TextDisplay>
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
            <Button>
              <button onClick={this.postBoard}>전송하기 </button>
              <Link to="/plzlist">목록</Link>
            </Button>
            <div>{JSON.stringify(this.state)}</div>
          </Container3>
        </Container>
      </>
    );
  }
}

export default Write;
