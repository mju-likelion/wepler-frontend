import styled from "styled-components";

export const Container2 = styled.div`
  text-align: center;
  color: #404a41;
  line-height: 2;
  padding-bottom: 5%;
  font-weight: bold;
  font-size: 30px;
`
export const Container3 = styled.div`
  padding: 20px;
  padding-left: 30px;
  margin-top: 30px;
  margin-left: 50px;
`

export const Button = styled.div`
  border-top: 1px solid #eee;
  padding: 20px;
  button {
    float: right;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    text-decoration: none;
    background: #C9AA79;
    color: #fff;
    font-size: 16px;
    &:hover {
      background-color: #F2D4CA;
    }
  
  }
  a {
    float: right;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    background: #f2f2f2;
    border: 1px solid #ddd;
    color: #424242;
    font-size: 16px;
  }
  & > button + a {
    margin-right: 5px;
  }
`;
export const Line = styled.div`
  line-height: 1.5;
`;

export const TitleWrap = styled.div`
  padding: 20px;
  padding-left: 30px;
  margin-top: 30px;
  margin-left: 50px;
  input {
    width: 91%;
    padding-bottom: 30px;
    border: none;
    font-size: 22px;
    border-bottom: solid 1px #ababab;
    font-weight: bold;
  }
`;
export const TextDisplay = styled.div`
  display: flex;
  line-height: 1.5;
`;
export const TextDisplay2 = styled.div`
  padding-right: 30px;
`;
export const TextWrap = styled.div`
  textarea {
    resize: none;
    border: none;
    width: 100%;
    height: 100px;
    border: none;
  }
`;
export const TextWrapNeed = styled.div`
  padding-left: 30px;
  textarea {
    resize: none;
    border: none;
    width: 30%;
    height: 20px;
  }
`;
export const TextWrapterm = styled.div`
  font-size: 23px;
  margin-top: 20px;
  margin-left: 50px;
  textarea {
    resize: none;
    border: none;
    width: 30%;
    height: 30px;
    border: none;
  }
`;
export const DisplayLine = styled.div`
padding-right: 10px;
`;

export const ActivityDisplay = styled.div`
  display: flex;
  line-height: 1.5;
  input {
    width: 10%;

  }
`;
