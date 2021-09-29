import { Switch, Route } from "react-router-dom";
import ContainerSearch from "./components/container-search";
import SelectedMovie from "./components/selected-movie";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ContainerSearch />
      </Route>
      <Route exact path="/movie">
        <SelectedMovie />
      </Route>
    </Switch>
  );
};
export default Routes;
