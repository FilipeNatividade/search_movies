import { useStateProvider } from "../../providers/state-context";
import { v4 as uuidv4 } from "uuid";
import { Container, Posters, Title, NoPoster } from "./style";
const CardMovie = () => {
  const { data } = useStateProvider();
  return (
    <>
      {data.map((movie) => (
        <Container key={uuidv4()}>
          {movie.Poster === "N/A" ? (
            <NoPoster>Sem poster</NoPoster>
          ) : (
            <Posters src={movie.Poster} alt={movie.Title} />
          )}

          <Title>{movie.Title}</Title>
        </Container>
      ))}
    </>
  );
};

export default CardMovie;
