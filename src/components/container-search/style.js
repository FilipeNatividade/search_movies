import styled from "styled-components/macro";

export const Container = styled.div``;

export const Header = styled.div`
  background-color: #445367;
  border-radius: 16px;
  font-size: 20px;
  padding: 15px;
  width: 100%;
  h2{
    @media only screen and (min-width: 850px){
    font-size: 25px;
  }
  }
  @media only screen and (min-width: 850px){
    align-items:center ;
    display: flex;
    height: 125px;
    justify-content: space-between;
  }
`;

export const InputSearch = styled.input`
  background-color: #dedede;
  border-radius: 10px;
  font-size: 20px;
  height: 40px;
  margin: 25px auto 0;
  padding: 0 15px;
  width: 100%;
  ::-webkit-input-placeholder {
    font-size: 14px;
  }
  input:-moz-placeholder {
    font-size: 14px;
  }
  textarea:-moz-placeholder {
    font-size: 14px;
  }
  @media only screen and (min-width: 850px){
    margin: 0;
    width: 50%;
  }
`;

export const RenderCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
