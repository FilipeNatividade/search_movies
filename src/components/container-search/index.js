import { useStateProvider } from "../../providers/state-context";
import { Container,InputSearch } from "./style";
const ContainerSearch = () => {
  const {title, setTitle} = useStateProvider()

  const getTitle = (e) => {
    e.preventDefault()
    setTitle(e.target.value)
  }
  return (
  <Container>
      <h2>Qual filme você procura?</h2>
      <InputSearch 
        value={title}
        onChange={e => getTitle(e)}
      />
  </Container>
  )
};

export default ContainerSearch;
