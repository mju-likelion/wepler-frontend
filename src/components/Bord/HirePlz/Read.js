import React, { useState, useEffect } from "react";
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

const Read = () => {
  const [type, setType] = useState("");
  const [title, setTitle] = useState({});
  const [content, setContent] = useState({});

  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    setType(user_id);

    async function getRead() {
      var reads = await axios.get("/hire_post/", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      });
      setTitle(reads.data.title);
      setContent(reads.data.content);
    }
    getRead();
  }, []);

  return (
    <Wrap>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button>
        <Link to="/">목록</Link>
        {/* 삭제) 장고로 바로 보냄 */}
        {/* 수정) 리액트에서 골라서 보냄 - Link사용*/}
      </Button>
    </Wrap>
  );
};

export default Read;
