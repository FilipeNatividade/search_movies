import styled from "styled-components/macro";

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 50px auto 0;
  width: 25%;
  .hidden{
    visibility: hidden;
  }
`;

export const Buttons = styled.button`
  background-color: transparent;
  height: 30px;
  width: 50%;
  .arrowButton {
    color: #dedede;
    height: 25px;
  }
`;

export const Small = styled.small`
width: 100px;
text-align: center;
`

