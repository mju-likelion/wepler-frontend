import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const ActivityBox = styled.div`
    padding:5px 5px;
    border-radius: 5px; 
    background-color:#FFFFFF;
    color:#404A41;   
    font-size: 20px;  
    display: flex;  
    
    
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
                <ActivityBox>
                    <FormControlLabel
                        control={<Checkbox
                            name="regularly"
                            onChange={this.handleChange}
                            value={this.state.when_learn.regularly}
                            color="primary"
                        />}
                        label="정기적으로 배우고 싶어요"
                    />
                </ActivityBox>
                <ActivityBox>
                    <FormControlLabel
                        control={<Checkbox
                            name="specific"
                            onChange={this.handleChange}
                            value={this.state.when_learn.specific}
                            color="primary"
                        />}
                        label="특정한 날에만 배우고 싶어요"
                    />
                </ActivityBox>
                <ActivityBox>
                    <FormControlLabel
                        control={<Checkbox
                            name="thinking"
                            onChange={this.handleChange}
                            value={this.state.when_learn.thinking}
                            color="primary"
                        />}
                        label="생각중이에요"
                    />
                </ActivityBox>
                <div>{JSON.stringify(this.state)}</div>
            </>

        )
    }
}

export default WhenLearn;
