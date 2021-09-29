import { useStateProvider } from "../../providers/state-context";
import ButtonsPages from "../button-Pages";
import { Container, Header, InputSearch, RenderCards } from "./style";
import CardMovie from "../card-movies";

const ContainerSearch = () => {
  const { data, title, setTitle } = useStateProvider();

  const getTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  return (
    <Container>
      <Header>
        <h2>which movie are you looking for?</h2>
          <InputSearch
            value={title}
            onChange={(e) => getTitle(e)}
            placeholder="Enter the title in the source language"
          />
      </Header>

      {title.length > 0 && data === undefined && (
        <p className="notFound">movie not found</p>
      )}
      <RenderCards>{data !== undefined && <CardMovie />}</RenderCards>
      <ButtonsPages />
    </Container>
  );
};

export default ContainerSearch;
