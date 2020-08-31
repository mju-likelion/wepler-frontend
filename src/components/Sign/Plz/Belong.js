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

const TextDisplay = styled.div`
    padding:20px;
    display: flex; 
    font-size: 20px; 
    line-height: 1.5; 
`;

const TextQuestion = styled.div`
  padding-top: 30px;
  font-size:20px;
  font-weight: bold;
`;
class Belong extends Component {
    state = {
        hash: [],
        when_learn: '',
        belong: '',
    };

    postBoard = async () => {
        const { belong, when_learn,hash } = this.state;
        const post = await axios.post(`http://localhost:4000/plz_signin`, {
            belong, when_learn,hash,
        });
        alert("전송");
        this.setState({
            belong, when_learn,hash,
        });
        console.log(post);
    };
    handleFieldChange = (e) => {
        const { name, value } = e.target;
    
        // 배열에 값이 있으면
        if (this.state.field.findIndex((i) => i === name) !== -1) {
          const newField = this.state.field.filter((value) => value !== name);
          this.setState({
            ...this.state,
            field: newField,
          });
        }
        // 배열에 값이 없으면
        else {
          this.setState({
            ...this.state,
            field: [...this.state.field, name],
          });
        }
      };
    handleLearnChange(event) {
        console.log(event.target.value);
    }

    handleChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <>
                {console.log(this.state)}
                <ActivityDisplay>
         
        </ActivityDisplay>
                <TextQuestion>
                    언제 배우고 싶으신가요?
              </TextQuestion>
                <TextDisplay>
                    <div onChange={this.handleLearnChange.bind(this.state.when_learn)}>
                        <input type="radio" value="regularly" name="when_learn" /> 정기적으로 배우고 싶어요<br />
                        <input type="radio" value="specific" name="when_learn" /> 특정한 날에만 배우고 싶어요<br />
                        <input type="radio" value="thinking" name="when_learn" /> 생각중이에요<br />
                    </div>
                </TextDisplay>
                <TextQuestion>
                개인 혹은 단체 이신가요?
              </TextQuestion>
                <TextDisplay>
                    <div onChange={this.handleChange.bind(this.state.belong)}>
                        <input type="radio" value="individual" name="belong" /> 개인
                        <input type="radio" value="group" name="belong" /> 단체
                    </div>
                </TextDisplay>
                
        <div>{JSON.stringify(this.state)}</div>
            </>
        );
    }
}

export default Belong;
