import { useEffect, useState } from "react/cjs/react.development";
import { useHistory } from "react-router";
import Api from "../../api";
import { useStateProvider } from "../../providers/state-context";
import { ArrowLeftCircleFill } from "@styled-icons/bootstrap";
import {
  Container,
  BackButton,
  NoPoster,
  PosterMovie,
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
      <BackButton onClick={() => history.push("/")}>
        <ArrowLeftCircleFill className="home" />
      </BackButton>
      <Container>
        {chosenMovie.Poster === "N/A" ? (
          <NoPoster>Sem poster</NoPoster>
        ) : (
          <PosterMovie src={chosenMovie.Poster} alt={chosenMovie.Titulo} />
        )}

        <Paragraph>
          Título: <SpanParagraph>{chosenMovie.Title}</SpanParagraph>{" "}
        </Paragraph>
        <Paragraph>
          Ano: <SpanParagraph>{chosenMovie.Year}</SpanParagraph>{" "}
        </Paragraph>
        <Paragraph>
          Estreia: <SpanParagraph>{chosenMovie.Released}</SpanParagraph>{" "}
        </Paragraph>
        <Paragraph>
          Duração: <SpanParagraph>{chosenMovie.Runtime}</SpanParagraph>{" "}
        </Paragraph>
        <Paragraph>
          Genero: <SpanParagraph>{chosenMovie.Genre}</SpanParagraph>{" "}
        </Paragraph>
        <Paragraph>
          Diretor: <SpanParagraph>{chosenMovie.Director}</SpanParagraph>{" "}
        </Paragraph>
        <Paragraph>
          Sinopse: <SpanParagraph>{chosenMovie.Plot}</SpanParagraph>{" "}
        </Paragraph>
        <Paragraph>
          Awards: <SpanParagraph>{chosenMovie.Awards}</SpanParagraph>{" "}
        </Paragraph>
      </Container>
    </>
  );
};

export default SelectedMovie;
