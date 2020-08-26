import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const ActivityList = styled.div`
    justify-content: left; 
`;

const ButtonActivity = styled.button`
    border-radius: 10px; 
    border: 2px solid #c9aa79;
    background-color:#FFFFFF;
    color:#404A41;   
    font-size: 20px;  
    margin:30px;  
    display: flex;  
    &:hover {
        background-color: #F2D4CA;
    }
    
`;

class WhenLearn extends Component {
    state = {
        when_learn: [],
    };
    postBoard = async () => {
        const { when_learn } = this.state;
        const post = await axios.post("http://localhost:4000/board", {
            when_learn,
        });
        alert("전송");
        this.setState({
            when_learn: '',
        });
        console.log(post);
    };

    handleChange = (e) => {
        const { name, value } = e.target;

        // 배열에 값이 있으면
        if (this.state.when_learn.findIndex((i) => i === name) !== -1) {
            const newHash = this.state.when_learn.filter((value) => value !== name);
            this.setState({
                ...this.state,
                when_learn: newHash,
            });
        }
        // 배열에 값이 없으면
        else {
            this.setState({
                ...this.state,
                when_learn: [...this.state.when_learn, name],
            });
        }
    };
    render() {
        return (
            <>
                <ActivityList>
                    <ButtonActivity>
                        <input
                            type="checkbox"
                            name="regularly"
                            onChange={this.handleChange}
                            value={this.state.when_learn.regularly}
                        />
                        <div>정기적으로 배우고 싶어요</div>
                    </ButtonActivity>
                    <ButtonActivity>
                        <input
                            type="checkbox"
                            name="specific"
                            onChange={this.handleChange}
                            value={this.state.when_learn.specific}
                        />
                        <div>특정한 날에만 배우고 싶어요</div></ButtonActivity>
                    <ButtonActivity>
                        <input
                            type="checkbox"
                            name="thinking"
                            onChange={this.handleChange}
                            value={this.state.when_learn.thinking}
                        />
                        <div>생각중이에요</div></ButtonActivity>
                </ActivityList>
                <div>{JSON.stringify(this.state)}</div>
            </>

        )
    }
}

export default WhenLearn;
