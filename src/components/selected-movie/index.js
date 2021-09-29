import { useEffect, useState } from "react/cjs/react.development";
import { useHistory } from "react-router";
import Api from "../../api";
import { useStateProvider } from "../../providers/state-context";
import { ArrowLeftCircleFill } from "@styled-icons/bootstrap";
import {
  Container,
  BackButton,
  NoPoster,
  PosterContent,
  PosterMovie,
  InfoContent,
  Paragraph,
  SpanParagraph,
} from "./style";

const SelectedMovie = () => {
  const history = useHistory();
  const { idMovie } = useStateProvider();
  const [chosenMovie, setChosenMovie] = useState({});
  useEffect(() => {
    idMovie.length !== 0 &&
      Api.get(`?&apikey=69630ed6&i=${idMovie}`).then((response) => {
        setChosenMovie(response.data);
      });
  }, [idMovie]);
  return (
    <>
      <BackButton title="back to home" onClick={() => history.push("/")}>
        <ArrowLeftCircleFill className="home" />
      </BackButton>
      <Container>
        <PosterContent>
          {chosenMovie.Poster === "N/A" ? (
            <NoPoster>No poster</NoPoster>
          ) : (
            <PosterMovie src={chosenMovie.Poster} alt={chosenMovie.Titulo} />
          )}
        </PosterContent>
        <InfoContent>
          <Paragraph>
            Title: <SpanParagraph>{chosenMovie.Title}</SpanParagraph>{" "}
          </Paragraph>
          <Paragraph>
            Year: <SpanParagraph>{chosenMovie.Year}</SpanParagraph>{" "}
          </Paragraph>
          <Paragraph>
            Released: <SpanParagraph>{chosenMovie.Released}</SpanParagraph>{" "}
          </Paragraph>
          <Paragraph>
            Runtime: <SpanParagraph>{chosenMovie.Runtime}</SpanParagraph>{" "}
          </Paragraph>
          <Paragraph>
            Genre: <SpanParagraph>{chosenMovie.Genre}</SpanParagraph>{" "}
          </Paragraph>
          <Paragraph>
            Director: <SpanParagraph>{chosenMovie.Director}</SpanParagraph>{" "}
          </Paragraph>
          <Paragraph>
            Plot: <SpanParagraph>{chosenMovie.Plot}</SpanParagraph>{" "}
          </Paragraph>
          <Paragraph>
            Awards: <SpanParagraph>{chosenMovie.Awards}</SpanParagraph>{" "}
          </Paragraph>
        </InfoContent>
      </Container>
    </>
  );
};

export default SelectedMovie;
