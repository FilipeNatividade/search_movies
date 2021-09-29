import { useStateProvider } from "../../providers/state-context";
import { v4 as uuidv4 } from "uuid";
import { Container, Posters, Title, NoPoster } from "./style";
import { useHistory } from "react-router";
const CardMovie = () => {
  const history = useHistory()
  const { data,setIdMovie} = useStateProvider();
  const handleGetID = (movie) => {
    setIdMovie(movie)
    history.push('/movie')
  };
  return (
    <>
      {data.map((movie) => (
        <Container key={uuidv4()} onClick={() => handleGetID(movie.imdbID)}>
          {movie.Poster === "N/A" ? (
            <NoPoster>No poster</NoPoster>
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
