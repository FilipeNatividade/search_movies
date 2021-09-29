import styled from "styled-components/macro";

export const Container = styled.div`
  background-color: #445367;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  height: 180px;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
`;

export const InputSearch = styled.input`
  background-color: #dedede;
  border-radius: 10px;
  font-size: 20px;
  height: 40px;
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
`;