import styled from "styled-components";

export const Container2 = styled.div`
  text-align: center;
  color: #404a41;
  line-height: 2;
  padding-bottom: 5%;
  font-weight: bold;
  font-size: 30px;
`;

export const Wrap = styled.div`
  text-align: center;
`;

export const Item = styled.div`
  width: 160%;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#C9AA79" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;
`;

export const TextWrap = styled.div`
  padding: 10px 20px;
  display: flex;
`;
export const BigTextWrap = styled.div`
  padding: 10px 20px;
  display: flex;
  font-weight: bold;
`;
export const ExplanWrap = styled.div`
  font-size: 20px;
  line-height: 1.2;
`;

export const ListItem = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 15px;
  border-top: 1px solid #eee;
  a {
    text-decoration: none;
    h3 {
      margin: 0;
      padding: 0;
      color: #212121;
    }
    p {
      margin: 0;
      padding: 10px 0 0 0;
      color: #787878;
    }
    &:hover {
      h3 {
        color: #f8961e;
      }
    }
  }
`;

export const Button = styled.div`
  border-top: 1px solid #eee;
  padding: 20px 20px;
  a {
    float: right;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    background: #c9aa79;
    color: #ffffff;
  }
  $:disabled {
    background: #b5838d;
    color: #e9c46a;
    cursor: not-allowed;
  }
`;
