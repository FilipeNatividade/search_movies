import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
    box-sizing:border-box;
    margin: 0;
    padding:0;
    }
    body{
        background-color: #1D232A;
        color: #dedede;
    }
    .app{
        padding: 25px;
        .notFound{
            color: #ff0000;
            font-size: 10vw;
            margin-top: 50px;
            text-align: center;
        }
    }
     button, input {
        border:none;
        outline:none;
    }
    button{
        cursor: pointer;
    }
`;
