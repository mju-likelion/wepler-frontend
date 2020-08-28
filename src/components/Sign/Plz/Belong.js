import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Checkbox from '@material-ui/core/Checkbox';


const TextDisplay = styled.div`
  display: flex;
  
`;
const TextDisplay2 = styled.div`
    padding-top:20px;
    padding-right: 50px;
    display: flex;  
    justify-content: center;
    font-size:20px;
`;


class Belong extends Component {
    state = {
        belong: [],
    };
    postBoard = async () => {
        const { belong } = this.state;
        const post = await axios.post("http://localhost:4000/board", {
            belong,
        });
        alert("전송");
        this.setState({
            belong,
        });
        console.log(post);
    };

    handleChange = (e) => {
        const { name, value } = e.target;

        // 배열에 값이 있으면
        if (this.state.belong.findIndex((i) => i === name) !== -1) {
            const newHash = this.state.belong.filter((value) => value !== name);
            this.setState({
                ...this.state,
                belong: newHash,
            });
        }
        // 배열에 값이 없으면
        else {
            this.setState({
                ...this.state,
                belong: [...this.state.belong, name],
            });
        }
    };

    render() {
        return (
            <>
                {console.log(this.state)}

                <TextDisplay>
                <TextDisplay2>
                    <Checkbox
                        name="individual"
                        onChange={this.handleChange}
                        value={this.state.belong.individual}
                        color="primary"
                        label="개인"
                    />
                    <div>개인</div>
                    </TextDisplay2>
                    <TextDisplay2>  
                    <Checkbox
                        name="group"
                        onChange={this.handleChange}
                        value={this.state.belong.group}
                        color="primary"
                        label="개인"
                    />                    
                   <div>단체</div>
                   </TextDisplay2>
                </TextDisplay>

                <div>{JSON.stringify(this.state)}</div>
            </>
        );
    }
}

export default Belong;
