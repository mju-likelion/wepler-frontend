import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';


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
class Write extends Component {
    state = {
        title: '',
        content: '',
    };
    postBoard = async () => {
        const { title, content } = this.state;
        const post = await axios.post('http://localhost:4000/board', {
            title,
            content,
        });
        alert('전송');
        this.setState({
            title: '',
            content: '',
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
                    <h2>Write</h2>
                    <TitleWrap>
                        <input
                            type="text"
                            name="title"
                            placeholder="제목"
                            onChange={this.handleChange}
                            value={this.state.title}
                        />
                    </TitleWrap>
                    <div>모집</div>
                    <div>필요인원</div>
                    <div>시작기간 및 종료기간</div>
                    <div>분야</div>
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
