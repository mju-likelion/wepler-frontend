import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios'; 
import styled from 'styled-components';
import board from "../../../BoardData.json";

//styling 
const Wrap = styled.div` padding: 20px; `; 
const ListItem = styled.div` width: 100%; margin-top: 10px; padding: 20px; border-top: 1px solid #eee; a { text-decoration: none; h3 { margin: 0; padding: 0; color: #212121; } p { margin: 0; padding: 10px 0 0 0; color: #787878; } &:hover { h3 { color: #0066ff; } } } `; 
const Button = styled.div` border-top: 1px solid #eee; padding: 20px; a { float: right; padding: 10px 20px; border-radius: 5px; text-decoration: none; background: #212121; color: #fff; } `;


class Read extends Component { state = { id: '', board: [], }; 
//로딩 데이터 
loadingData = async () => { 
        //test JSON: 이 주소로 넣으면 오류 없음 //https://jsonplaceholder.typicode.com/todos/1 
        try {
            // const id = 0; //test id 
            const { id } = this.props.match.params; console.log(id);
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
            this.setState({
                // boards: 'test' 
                board: response.data,
            });
            console.log(response.data);
        } catch (e) { console.log(e); }
    };

    componentDidMount() {
        const { loadingData } = this;
        loadingData();
    }

    render() {
        const { board } = this.state;
        return (
            <Wrap>
                <h2>{board.title}</h2>
                <p>{board.content}</p>
                <Button>
                    <Link to="/">목록</Link>
                    <a href="#" onClick={() => { alert('삭제'); }} > 삭제 </a>
                    <a href="#" onClick={() => { alert('수정'); }} > 수정 </a>
                </Button>
            </Wrap>
        );
    }
}


export default Read;
