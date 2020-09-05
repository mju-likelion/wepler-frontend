import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

//styling
const Wrap = styled.div`
  padding: 20px;
`;
const Button = styled.div`
  border-top: 1px solid #eee;
  padding: 20px;
  a {
    float: right;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    background: #212121;
    color: #fff;
  }
`;

class Read extends Component {
  state = { id: "", board: [] };
  //로딩 데이터
  loadingData = async () => {
    try {
      // const id = 0; //test id
      const { id } = this.props.match.params;
      console.log(id);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/1`
      );
      this.setState({
        // boards: 'test'
        board: response.data,
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
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
          {/* 삭제) 장고로 바로 보냄 */}
          {/* 수정) 리액트에서 골라서 보냄 - Link사용*/}
        </Button>
      </Wrap>
    );
  }
}

export default Read;
