import styled from "styled-components/macro";

export const Container = styled.div`
  background-color: #445367;
  border-radius: 16px;
  border: 5px solid #dedede;
  font-size: 20px;
  margin-top: 25px;
  padding: 20px;
  width: 100%;
  @media only screen and (min-width: 700px) and (max-width: 900px) {
    width: 48%;
  }
  @media only screen and (min-width: 901px){
    width: 250px;
  }
 
`;

export const Posters = styled.img`
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-top: 25px;
`;

export const NoPoster = styled.p`
  color:#ff0000;
`;
