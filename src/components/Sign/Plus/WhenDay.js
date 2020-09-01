import React, { Component } from "react"; import axios from "axios";
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

const ActivityList = styled.div`   
    display:flex;
`;
const TextQuestion = styled.div`
  padding-top: 30px;
  font-size:20px;
  font-weight: bold;
`;

const TextList = styled.div`
    padding-top: 30px;
    padding-left: 17px;
    font-size: 20px;  
    font-weight: bold;
   
`;
const TextWrapterm = styled.div`
    display:flex;
    font-size: 23px;
    margin-top: 25px;
    margin-left: 20px;
    textarea {
        resize: none;
        border: none;
        width: 30%;
        height: 30px;
        border: none;
    }
    div{
        padding-left:5px;
        font-size: 20px; 
    }
`;

class WhenDay extends Component {
    state = {
        plus_start_day: [],
        plus_talentshare: '',
        plus_continu_month: '',
        plus_start_time: '',
        plus_end_time: '',
        plus_fields:[],
    };
    postBoard = async () => {
        const { plus_start_day, plus_talentshare, plus_continu_month, plus_start_time, plus_end_time, plus_fields } = this.state;
        const post = await axios.post("http://localhost:4000/plus_signup", {
            plus_start_day, plus_talentshare, plus_continu_month, plus_start_time, plus_end_time, plus_fields
        });
        this.setState({
            ...this.state,
        });
        console.log(post);
    };

    handleChange = (e) => {
        const { name } = e.target;
        if (name === 'plus_talentshare') {
            this.setState({
                plus_talentshare: e.target.value,
            });
        }
        if (name === 'plus_continu_month') {
            this.setState({
                plus_continu_month: e.target.value,

            });
        }
        if (name === 'plus_start_time') {
            this.setState({
                plus_start_time: e.target.value,

            });
        }
        if (name === 'plus_end_time') {
            this.setState({
                plus_end_time: e.target.value,

            });
        }
    };

    handleWhen = (e) => {
        const { name } = e.target;
        if (name === 'plus_start_day') {
            // 배열에 값이 있으면
            if (this.state.plus_start_day.findIndex((i) => i === name) !== -1) {
                const newHash = this.state.plus_start_day.filter((value) => value !== name);
                this.setState({
                    ...this.state,
                    plus_start_day: newHash,
                });
            }
            // 배열에 값이 없으면
            else {
                this.setState({
                    ...this.state,
                    plus_start_day: [...this.state.plus_start_day, name],
                });
            }
        }
        if (name === 'plus_fields') {
            // 배열에 값이 있으면
            if (this.state.plus_fields.findIndex((i) => i === name) !== -1) {
                const newHash = this.state.plus_fields.filter((value) => value !== name);
                this.setState({
                    ...this.state,
                    plus_fields: newHash,
                });
            }
            // 배열에 값이 없으면
            else {
                this.setState({
                    ...this.state,
                    plus_fields: [...this.state.plus_fields, name],
                });
            }
        }

    };

    render() {
        return (
            <>
                {console.log(this.state)}
                <TextQuestion>
                    원하는 재능 나눔 분야
                  </TextQuestion>
                  <ActivityDisplay>
                    <ActivityBox>
                        <FormControlLabel
                            control={<Checkbox
                                name="education"
                                onChange={this.handleWhen}
                                value={this.state.plus_fields.education}
                                color="primary"
                            />}
                            label="교육"
                        />
                    </ActivityBox>
                    <ActivityBox>
                        <FormControlLabel
                            control={<Checkbox
                                name="council"
                                onChange={this.handleWhen}
                                value={this.state.plus_fields.council}
                                color="primary"
                            />}
                            label="상담"
                        />
                    </ActivityBox>
                    <ActivityBox>
                        <FormControlLabel
                            control={<Checkbox
                                name="making"
                                onChange={this.handleWhen}
                                value={this.state.plus_fields.making}
                                color="primary"
                            />}
                            label="메이킹"
                        />
                    </ActivityBox>
                    <ActivityBox>
                        <FormControlLabel
                            control={<Checkbox
                                name="activity"
                                onChange={this.handleWhen}
                                value={this.state.plus_fields.activity}
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
                                onChange={this.handleWhen}
                                value={this.state.plus_fields.culture}
                                color="primary"
                            />}
                            label="문화"
                        />
                    </ActivityBox>
                    <ActivityBox>
                        <FormControlLabel
                            control={<Checkbox
                                name="trip"
                                onChange={this.handleWhen}
                                value={this.state.plus_fields.trip}
                                color="primary"
                            />}
                            label="여행"
                        />
                    </ActivityBox>
                    <ActivityBox>
                        <FormControlLabel
                            control={<Checkbox
                                name="etc"
                                onChange={this.handleWhen}
                                value={this.state.plus_fields.etc}
                                color="primary"
                            />}
                            label="기타"
                        />
                    </ActivityBox>

                </ActivityDisplay>


                  <TextQuestion>
                  재능나눔 시간 입력해주세요.
                  </TextQuestion>
                <ActivityList>
                    <TextList><h3>재능 나눔 시작일</h3></TextList>
                    <TextWrapterm>
                        <input
                            type="date"
                            name="plus_talentshare"
                            placeholder="ex) 2020.08.08"
                            onChange={this.handleChange}
                            value={this.state.plus_talentshare}
                        />
                    </TextWrapterm>
                </ActivityList>
                <ActivityList>
                    <TextList><h3>요일</h3></TextList>
                    <TextWrapterm>
                        <input
                            type="checkbox"
                            name="monday"
                            onChange={this.handleWhen}
                            value={this.state.plus_start_day.mon}
                        />
                        <div>월</div>
                    </TextWrapterm>
                    <TextWrapterm>
                        <input
                            type="checkbox"
                            name="tuesday"
                            onChange={this.handleWhen}
                            value={this.state.plus_start_day.tues}
                        />
                        <div>화</div>
                    </TextWrapterm>
                    <TextWrapterm>
                        <input
                            type="checkbox"
                            name="wednesday"
                            onChange={this.handleWhen}
                            value={this.state.plus_start_day.wednes}
                        />
                        <div>수</div>
                    </TextWrapterm>
                    <TextWrapterm>
                        <input
                            type="checkbox"
                            name="thursday"
                            onChange={this.handleWhen}
                            value={this.state.plus_start_day.thurs}
                        />
                        <div>목</div>
                    </TextWrapterm>
                    <TextWrapterm>
                        <input
                            type="checkbox"
                            name="friday"
                            onChange={this.handleWhen}
                            value={this.state.plus_start_day.fri}
                        />
                        <div>금</div>
                    </TextWrapterm>
                    <TextWrapterm>
                        <input
                            type="checkbox"
                            name="saturday"
                            onChange={this.handleWhen}
                            value={this.state.plus_start_day.satur}
                        />
                        <div>토</div>
                    </TextWrapterm>
                    <TextWrapterm>
                        <input
                            type="checkbox"
                            name="sunday"
                            onChange={this.handleWhen}
                            value={this.state.plus_start_day.sun}
                        />
                        <div>일</div>
                    </TextWrapterm>
                </ActivityList>
                <ActivityList>
                    <TextList><h3>시작시간</h3></TextList>
                    <TextWrapterm>
                        <input
                            type="time"
                            name="plus_start_time"
                            onChange={this.handleChange}
                            value={this.state.plus_start_time}
                        />
                    </TextWrapterm>
                    <TextList><h3>종료시간</h3></TextList>
                    <TextWrapterm>
                        <input
                            type="time"
                            name="plus_end_time"
                            onChange={this.handleChange}
                            value={this.state.plus_end_time}
                        />
                    </TextWrapterm>
                </ActivityList>
                <ActivityList>
                    <TextList><h3>이 시간으로 얼마나 지속할 수 있으신가요?</h3></TextList>
                    <TextWrapterm>
                        <input
                            type="number"
                            name="continu_month"
                            placeholder="ex) 5"
                            onChange={this.handleChange}
                            value={this.state.continu_month}
                        />
                        <div>개월</div>
                    </TextWrapterm>
                </ActivityList>

            </>

        )
    }
}

export default WhenDay;
