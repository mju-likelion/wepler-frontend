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
    border: none;
    text-decoration: none;
    background: #C9AA79;
    color: #fff;
    font-size: 16px;
    &:hover {
      background-color: #F2D4CA;
    }
  
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
  line-height: 1.5;
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
const DisplayLine = styled.div`
padding-right: 10px;
`;

const ActivityDisplay = styled.div`
  display: flex;
  line-height: 1.5;
  input {
    width: 10%;

  }
`;


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
  const { title, recruit, need_member, start_date, end_date, content, fields } = this.state;
  const post = await axios.post("http://localhost:8000/hire_post", {
    title, recruit, need_member, start_date, end_date, content, fields,
  });
  alert("전송");
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

handleChange = (e) => {
  const { name, value } = e.target;
  if(name === 'title'){
    this.setState({
      title : e.target.value,        
    });
  }
  if( name === 'recruit' ){
    this.setState({       
      recruit : e.target.value,
      
    });
  }
  if( name === 'need_member'){
    this.setState({        
      need_member : e.target.value,
      
    });
  }
  if( name === 'start_date'){
    this.setState({        
      start_date : e.target.value,       
    });
  }
  if(name === 'end_date'){
    this.setState({        
      end_date : e.target.value,        
    });
  }
  if(name === 'content'){
    this.setState({       
      content : e.target.value,
    });
  }
       
};

handleHashChange = (er) => {
  const { name, value } = er.target;
  // 분야가 배열에 값이 있으면 삭제하고
  if (this.state.fields.findIndex((i) => i === name) !== -1) {
    const newFields = this.state.hash.filter((value) => value !== name);
    this.setState({
      ...this.state,
      fields: newFields,
    });
  }
  // 분야가 배열에 값이 없으면 추가한다
  else {
    this.setState({
      ...this.state,
      fields: [...this.state.fields, name],
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
            </Line>
            
            <div>분야</div> <br />
                <ActivityDisplay>
                    <input
                        type="checkbox"
                        name="education"
                        onChange={this.handleHashChange}
                        value={this.state.fields.education}
                    />
                    <div>교육</div>
                    <DisplayLine />
                    <input
                        type="checkbox"
                        name="council"
                        onChange={this.handleHashChange}
                        value={this.state.fields.council}
                    />
                    <div>상담</div>
                    <DisplayLine />
                    <input
                        type="checkbox"
                        name="making"
                        onChange={this.handleHashChange}
                        value={this.state.fields.making}
                    />
                    <div>메이킹</div>
                    <DisplayLine />
                    <input
                        type="checkbox"
                        name="activity"
                        onChange={this.handleHashChange}
                        value={this.state.fields.activity}
                    />
                    <div>야외활동</div>
                </ActivityDisplay>
                <ActivityDisplay>
                    <input
                        type="checkbox"
                        name="culture"
                        onChange={this.handleHashChange}
                        value={this.state.fields.culture}
                    />
                    <div>문화</div>
                    <DisplayLine />
                    <input
                        type="checkbox"
                        name="trip"
                        onChange={this.handleHashChange}
                        value={this.state.fields.trip}
                    />
                    <div>여행</div>
                    <DisplayLine />
                    <input
                        type="checkbox"
                        name="etc"
                        onChange={this.handleHashChange}
                        value={this.state.fields.etc}
                    />
                    <div>기타</div>
                </ActivityDisplay>
                <Line>
                    <br />
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
