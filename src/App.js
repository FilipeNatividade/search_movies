import { useStateProvider } from "./providers/state-context";
import GlobalStyled from "./global-style/style";
import ContainerSearch from "./components/container-search";
import CardMovie from "./components/card-movies";
import ButtonsPages from "./components/button-Pages";
function App() {
  const { data, title } = useStateProvider();

  return (
    <div className="app">
      <GlobalStyled />
      <ContainerSearch />
      {title.length > 0 && data === undefined && <p className='notFound'>filme não encontrado</p>}
      {data !== undefined && <CardMovie />}
      <ButtonsPages />
    </div>
  );
}

export default App;
