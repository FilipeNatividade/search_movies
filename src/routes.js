import { Switch, Route } from "react-router-dom";
import ContainerSearch from "./components/container-search";

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/'>
                <ContainerSearch/>
            </Route>
            <Route exact path='/movie'>
                {/* </> */}
            </Route>
        </Switch>
    )
}
export default Routes