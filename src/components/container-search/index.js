import { useStateProvider } from "../../providers/state-context";
import ButtonsPages from "../button-Pages";
import { Container, InputSearch} from "./style";
import CardMovie from "../card-movies";

const ContainerSearch = () => {
  const { data, title, setTitle } = useStateProvider();

  const getTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  return (
    <>
      <Container>
        <h2>Qual filme você procura?</h2>
        <div>
          <InputSearch
            value={title}
            onChange={(e) => getTitle(e)}
            placeholder="Informe o título no idioma de origem"
          />
        </div>
      </Container>
      {title.length > 0 && data === undefined && (
        <p className="notFound">filme não encontrado</p>
      )}
      {data !== undefined && <CardMovie />}
      <ButtonsPages />
    </>
  );
};

export default ContainerSearch;
