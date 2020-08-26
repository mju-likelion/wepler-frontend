import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from 'react-router-dom';



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

class WhenShare extends Component {
    state = {
        start_time: '',
    };
    postBoard = async () => {
        const { start_time } = this.state;
        const post = await axios.post('http://localhost:4000/board', {
            start_time
        });

        this.setState({
            start_time: '', 
        });
        console.log(post);
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            <>
                <ActivityList>
                    <TextList><h3>재능 나눔 시작일</h3></TextList>
                    <TextWrapterm>
                        <input
                            type="date"
                            name="start_time"
                            placeholder="ex) 2020.08.08"
                            onChange={this.handleChange}
                            value={this.state.start_time}
                        />
                    </TextWrapterm>
                </ActivityList>               
                <div>{JSON.stringify(this.state)}</div>
            </>
        )
    }

}

export default WhenShare;
