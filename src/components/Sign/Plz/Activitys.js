import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


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
