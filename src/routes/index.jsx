import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
