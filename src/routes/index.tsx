import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../views/homepage";

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
