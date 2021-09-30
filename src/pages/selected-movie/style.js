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
  @media only screen and (min-width: 650px){
    justify-content: space-between;
  }
`;

export const BackButton = styled.button`
  background-color: transparent;
  width: 50px;
  .home{
    color: #dedede;
  }
`;

export const PosterContent = styled.div`
width: 100%;
@media only screen and (min-width: 650px){
    width: 48%;
  }
`

export const PosterMovie = styled.img`
  margin-bottom: 25px;
  width: 100%;
`;

export const NoPoster = styled.p`
  color:#ff0000;
`;

export const InfoContent = styled.div`
width: 100%;
@media only screen and (min-width: 650px){
    width: 48%;
  }
`


export const Paragraph = styled.p`
  display: flex;
  font-weight:bolder;
  justify-content: space-between;
  margin-bottom: 25px;
  width: 100%;

`

export const SpanParagraph = styled.span`
  font-weight: 400;
  width: 60%;
`