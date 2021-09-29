import styled from "styled-components/macro";

export const Container = styled.div`
  background-color: #445367;
  border-radius: 16px;
  border: 5px solid #dedede;
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  margin-top: 25px;
  padding: 20px;
  width: 100%;
  /* @media only screen and (min-width: 850px){
    align-items:center ;
    display: flex;
    height: 125px;
    justify-content: space-between;
  } */
`;

export const BackButton = styled.button`
  background-color: transparent;
  width: 50px;
  .home{
    color: #dedede;
  }
`;

export const PosterMovie = styled.img`
  margin-bottom: 25px;
  width: 100%;
  @media only screen and (min-width: 500px){
    width: 300px;
  }
`;

export const NoPoster = styled.p`
  color:#ff0000;
`;

export const Paragraph = styled.p`
  display: flex;
  font-weight:bolder;
  justify-content: space-between;
  margin-bottom: 25px;

`

export const SpanParagraph = styled.span`
  font-weight: 400;
  width: 60%;
`