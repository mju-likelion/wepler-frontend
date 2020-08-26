import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const ActivityList = styled.div`   
    display:flex;
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
`;

class WhenDay extends Component {
    state = {
        start_day: [],
    };
    postBoard = async () => {
        const { start_day } = this.state;
        const post = await axios.post("http://localhost:4000/board", {
            start_day,
        });
        alert("전송");
        this.setState({
            start_day: '',
        });
        console.log(post);
    };

    handleChange = (e) => {
        const { name, value } = e.target;

        // 배열에 값이 있으면
        if (this.state.start_day.findIndex((i) => i === name) !== -1) {
            const newHash = this.state.start_day.filter((value) => value !== name);
            this.setState({
                ...this.state,
                start_day: newHash,
            });
        }
        // 배열에 값이 없으면
        else {
            this.setState({
                ...this.state,
                start_day: [...this.state.start_day, name],
            });
        }
    };
    render() {
        return (
            <>
               <ActivityList>
<TextList><h3>요일</h3></TextList>
<TextWrapterm>
    <input
        type="checkbox"
        name="monday"
        onChange={this.handleChange}
        value={this.state.start_day.mon}
    />
    <div>월</div>
    </TextWrapterm>
    <TextWrapterm>
    <input
        type="checkbox"
        name="tuesday"
        onChange={this.handleChange}
        value={this.state.start_day.tues}
    />
    <div>화</div>
    </TextWrapterm>
    <TextWrapterm>
    <input
        type="checkbox"
        name="wednesday"
        onChange={this.handleChange}
        value={this.state.start_day.wednes}
    />
    <div>수</div>
    </TextWrapterm>
    <TextWrapterm>
    <input
        type="checkbox"
        name="thursday"
        onChange={this.handleChange}
        value={this.state.start_day.thurs}
    />
    <div>목</div>
    </TextWrapterm>
    <TextWrapterm>
    <input
        type="checkbox"
        name="friday"
        onChange={this.handleChange}
        value={this.state.start_day.fri}
    />
    <div>금</div>
    </TextWrapterm>
    <TextWrapterm>
    <input
        type="checkbox"
        name="saturday"
        onChange={this.handleChange}
        value={this.state.start_day.satur}
    />
    <div>토</div>
    </TextWrapterm>
    <TextWrapterm>
    <input
        type="checkbox"
        name="sunday"
        onChange={this.handleChange}
        value={this.state.start_day.sun}
    />
    <div>일</div>
    </TextWrapterm>
</ActivityList>
                <div>{JSON.stringify(this.state)}</div>
            </>

        )
    }
}

export default WhenDay ;
