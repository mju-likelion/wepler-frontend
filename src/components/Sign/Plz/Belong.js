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
    margin-bottom:30px;
    display: flex; 
    font-size: 20px; 
    line-height: 1.5; 
    label{
        padding-right:20px;
    }
`;
const TextDisplayWhen = styled.div`
    display: flex; 
    font-size: 20px; 
    line-height: 1.5; 
    label{
        padding-right:20px;
    }
`;
const TextQuestion = styled.div`
    padding-top: 30px;
    margin-bottom:30px;
    font-size:20px;
    font-weight: bold;
`;
class Belong extends Component {
    state = {
        fields: [],
        when_learn: '',
        belong: '',
    };

    postBoard = async () => {
        const { belong, when_learn, fields } = this.state;
        const post = await axios.post(`http://localhost:4000/plz_signin`, {
            belong, when_learn, fields,
        });
        alert("전송");
        this.setState({
            belong, when_learn, fields,
        });
        console.log(post);
    };

    constructor(props) {
        super(props)
        this.handleWhenRadio = this.handleWhenRadio.bind(this)
        this.handleBelongRadio = this.handleBelongRadio.bind(this)
        this.handleActivityCheck = this.handleActivityCheck.bind(this)
        this.state = {
            ...this.state,
        }
    }

    handleWhenRadio(event) {
        let obj = {}
        obj[event.target.value] = event.target.checked // true
        this.setState({ when_learn: obj })
    }
    handleBelongRadio(event) {
        let obj2 = {}
        obj2[event.target.value] = event.target.checked // true
        this.setState({ belong: obj2 })
    }
    handleActivityCheck(e) {
        const { name } = e.target;

        // 배열에 값이 있으면
        if (this.state.fields.findIndex((i) => i === name) !== -1) {
            const newHash = this.state.fields.filter((value) => value !== name);
            this.setState({
                ...this.state,
                fields: newHash,
            });
        }
        // 배열에 값이 없으면
        else {
            this.setState({
                ...this.state,
                fields: [...this.state.fields, name],
            });
        }
    }

    render() {
        return (
            <>
                {console.log(this.state)}
                <TextQuestion>
                    관심있는 분야를 선택해주세요.
              </TextQuestion>
                <ActivityDisplay>
                    <ActivityBox>
                        <FormControlLabel
                            control={<Checkbox
                                name="education"
                                onChange={this.handleActivityCheck}
                                value={this.state.fields.education}
                                color="primary"
                            />}
                            label="교육"
                        />
                    </ActivityBox>
                    <ActivityBox>
                        <FormControlLabel
                            control={<Checkbox
                                name="council"
                                onChange={this.handleActivityCheck}
                                value={this.state.fields.council}
                                color="primary"
                            />}
                            label="상담"
                        />
                    </ActivityBox>
                    <ActivityBox>
                        <FormControlLabel
                            control={<Checkbox
                                name="making"
                                onChange={this.handleActivityCheck}
                                value={this.state.fields.making}
                                color="primary"
                            />}
                            label="메이킹"
                        />
                    </ActivityBox>
                    <ActivityBox>
                        <FormControlLabel
                            control={<Checkbox
                                name="activity"
                                onChange={this.handleActivityCheck}
                                value={this.state.fields.activity}
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
                                onChange={this.handleActivityCheck}
                                value={this.state.fields.culture}
                                color="primary"
                            />}
                            label="문화"
                        />
                    </ActivityBox>
                    <ActivityBox>
                        <FormControlLabel
                            control={<Checkbox
                                name="trip"
                                onChange={this.handleActivityCheck}
                                value={this.state.fields.trip}
                                color="primary"
                            />}
                            label="여행"
                        />
                    </ActivityBox>
                    <ActivityBox>
                        <FormControlLabel
                            control={<Checkbox
                                name="etc"
                                onChange={this.handleActivityCheck}
                                value={this.state.fields.etc}
                                color="primary"
                            />}
                            label="기타"
                        />
                    </ActivityBox>

                </ActivityDisplay>
                <TextQuestion>
                    언제 배우고 싶으신가요?
              </TextQuestion>
                <TextDisplayWhen>
                    <label>
                        <input type="radio"
                            name="when_learn" value='regularly'
                            checked={this.state['regularly']}
                            onChange={this.handleWhenRadio} />정기적으로 배우고 싶어요
                           </label>
                </TextDisplayWhen>
                <TextDisplayWhen>
                    <label>
                        <input type="radio"
                            name="when_learn"
                            value='specific'
                            checked={this.state['specific']}
                            onChange={this.handleWhenRadio} />특정한 날에만 배우고 싶어요
                            </label>
                </TextDisplayWhen>
                <TextDisplayWhen>
                    <label>
                        <input type="radio" name="when_learn" value='thinking'
                            checked={this.state['thinking']}
                            onChange={this.handleRadio} />생각중이에요
                            </label>
                </TextDisplayWhen>
                <TextQuestion>
                    개인 혹은 단체 이신가요?
                </TextQuestion>

                <TextDisplay>
                    <label>
                        <input type="radio"
                            name="belong" value='individual'
                            checked={this.state['individual']}
                            onChange={this.handleBelongRadio} />개인
                           </label>
                    <label>
                        <input type="radio"
                            name="belong"
                            value='group'
                            checked={this.state['group']}
                            onChange={this.handleBelongRadio} />단체
                            </label>

                </TextDisplay>
            </>
        );
    }
}

export default Belong;
