import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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

const ActivityDisplay = styled.div`
  display: flex;
  margin:30px;
  line-height: 1.5;
  input {
    width: 10%;

  }
`;

const ActivityBox = styled.div`
    padding:5px 5px;
    border-radius: 5px; 
    border: 2px solid #c9aa79;
    background-color:#FFFFFF;
    color:#404A41;  
    margin-right:30px;
    display: flex;  
    &:hover {
        background-color: #F2D4CA;
    }
    
`;

class Activitys extends Component {
  state = {
    hash: [],
  };
  postBoard = async () => {
    const { hash } = this.state;
    const post = await axios.post("http://localhost:4000/board", {
      hash,
    });
    alert("전송");
    this.setState({
      hash: '',
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
        <ActivityDisplay>
          <ActivityBox>
            <FormControlLabel
              control={<Checkbox
                name="education"
                onChange={this.handleChange}
                value={this.state.hash.education}
                color="primary"
              />}
              label="교육"
            />
          </ActivityBox>
          <ActivityBox>
            <FormControlLabel
              control={<Checkbox
                name="council"
                onChange={this.handleChange}
                value={this.state.hash.council}
                color="primary"
              />}
              label="상담"
            />
          </ActivityBox>
          <ActivityBox>
            <FormControlLabel
              control={<Checkbox
                name="making"
                onChange={this.handleChange}
                value={this.state.hash.making}
                color="primary"
              />}
              label="메이킹"
            />
          </ActivityBox>
          <ActivityBox>
            <FormControlLabel
              control={<Checkbox
                name="activity"
                onChange={this.handleChange}
                value={this.state.hash.activity}
                color="primary"
              />}
              label="야외활동"
            />
          </ActivityBox>
        </ActivityDisplay>
        <ActivityDisplay>
          <ActivityBox>
            <FormControlLabel
              control={<Checkbox
                name="culture"
                onChange={this.handleChange}
                value={this.state.hash.culture}
                color="primary"
              />}
              label="문화"
            />
          </ActivityBox>
          <ActivityBox>
            <FormControlLabel
              control={<Checkbox
                name="trip"
                onChange={this.handleChange}
                value={this.state.hash.trip}
                color="primary"
              />}
              label="여행"
            />
          </ActivityBox>

          <ActivityBox>
            <FormControlLabel
              control={<Checkbox
                name="etc"
                onChange={this.handleChange}
                value={this.state.hash.etc}
                color="primary"
              />}
              label="기타"
            />
          </ActivityBox>
        </ActivityDisplay>
        <div>{JSON.stringify(this.state)}</div>
      </>
    );
  }
}

export default Activitys;
