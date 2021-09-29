// import { useStateProvider } from "./providers/state-context";
import GlobalStyled from "./global-style/style";
// import ContainerSearch from "./components/container-search";
import ButtonsPages from "./components/button-Pages";
import Routes from "./routes";
function App() {
  return (
    <div className="app">
      <GlobalStyled />
      <Routes />
      <ButtonsPages />
    </div>
  );
}

export default App;
