import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import HashTag from "components/HashTag/HashTagChoose/HashTagChoose";

const Container2 = styled.div`
    text-align: center;
    color: #404A41;
    line-height: 2; 
    padding-bottom: 5%;
    font-weight:bold;
    font-size:30px;
`;

const Button = styled.div` 
border-top: 1px solid #eee; 
padding: 20px; 
button { float: right; padding: 10px 20px; border-radius: 5px; 
    text-decoration: none; 
    background: #212121; color: #fff; 
    font-size: 16px; 
} 
    a { 
        float: right; padding:
        10px 20px;
        border-radius: 5px;
        text-decoration: none;
        background: #f2f2f2;
        border: 1px solid #ddd;
        color: #424242; font-size: 16px;
    }
    & > button + a {
        margin-right: 5px;
    }
`;

const TitleWrap = styled.div`
    padding: 20px;
    padding-left: 30px;
    margin-top: 30px;
    margin-left: 50px;
    input{
        width: 91%;
        padding-bottom: 30px;
        border: none;
        font-size: 22px;
        border-bottom: solid 1px #ababab;
        font-weight: bold;
    }
`;
const TextDisplay = styled.div`
    display:flex;
`;
const TextWrap = styled.div`
    padding: 20px;
    padding-left: 30px;
    margin-top: 30px;
    margin-left: 50px;
    textarea{
        resize: none;
        border: none;
        width: 100%; 
        height: 100px; 
        border: none; 
    }
`;
const TextWrapNeed = styled.div`
    padding-left: 30px;
    textarea{
        resize: none;
        border: none;
        width: 30%; 
        height: 20px; 
        border: none; 
    }
`;
const TextWrapterm = styled.div`
padding-left: 30px;
margin-top: 30px;
margin-left: 50px;
textarea{
    resize: none;
    border: none;
    width: 30%; 
    height: 30px; 
    border: none; 
}
`;

class Write extends Component {
    state = {
        title: '',
        need: '',
        ne_mem: '',
        term1:'',
        term2:'',
        content: '',
    };
    postBoard = async () => {
        const { title, content, need } = this.state;
        const post = await axios.post('http://localhost:4000/board', {
            title,
            content,
        });
        alert('전송');
        this.setState({
            title: '',
            content: '',
            need: '',
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
                <Container component="main" maxWidth="md">
                    <Container2>
                        <h2>고용 글 작성하기</h2>
                    </Container2>
                    <TitleWrap>
                        <input
                            type="text"
                            name="title"
                            placeholder="제목"
                            onChange={this.handleChange}
                            value={this.state.title}
                        />
                    </TitleWrap>
                    <TextDisplay>
                        <div>모집</div>
                        <FormControlLabel
                            label="모집중 입니다."
                            control={<Checkbox value="remember" color="primary" />}
                            name="need"
                        />
                    </TextDisplay>
                    <TextDisplay>
                        <div>필요인원</div>
                        <TextWrapNeed>
                            <textarea
                                type="text"
                                name="ne_mem"
                                placeholder="ex) 5"
                                onChange={this.handleChange}
                                value={this.state.ne_mem} />
                                명
                        </TextWrapNeed>
                    </TextDisplay>
                    <div>시작기간 및 종료기간</div>
                    <TextWrapterm >
                        <TextDisplay >
                            시작기간 :
                            <textarea
                                type="text"
                                name="ne_mem"
                                placeholder="ex) 2020.08.08"
                                onChange={this.handleChange}
                                value={this.state.ne_mem} />
                                ~ 종료기간: 
                                <textarea
                                type="text"
                                name="ne_mem"
                                placeholder="ex) 2020.12.31"
                                onChange={this.handleChange}
                                value={this.state.ne_mem} />
                                </TextDisplay>
                        </TextWrapterm >
                    <div>분야</div>
                    <TextDisplay >
                        <HashTag />
                    </TextDisplay>


                    <div>내용</div>
                    <TextWrap>
                        <textarea
                            type="text"
                            name="content"
                            placeholder="내용을 입력하세요."
                            onChange={this.handleChange}
                            value={this.state.content} />
                    </TextWrap>

                    <Button>
                        <button onClick={this.postBoard}>전송하기 </button>
                        <Link to="/plzlist">목록</Link>
                    </Button>
                    <div>{JSON.stringify(this.state)}</div>

                </Container>
            </>
        );
    }
}

export default Write;
