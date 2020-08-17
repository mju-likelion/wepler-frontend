import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-size: 25px;
        background-color: #fffffc;
        color: #404A41;
        padding-top:50px;
    }
`;
export default globalStyles;
