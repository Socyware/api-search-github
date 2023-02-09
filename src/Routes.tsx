import Navbar from "components/Navbar";
import Find from "pages/Find";
import Home from "pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/find" exact>
            <Find/>
        </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
