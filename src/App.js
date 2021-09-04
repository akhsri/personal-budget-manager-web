import { AccountsList } from "./parts/CategoriesList";
import { CategoriesList } from "./parts/AccountsList";
import Transactions from "./components/Transactions";
import ExpenseByCategory from "./components/ExpenseByCategory";
import Navbar from "./components/Navbar";
import { Fragment } from "react";
import UnauthorisedRoutes from "./UnauthorisedRoutes";
import AuthorisedRoutes from "./AuthorisedRoutes";
import SideNav from "./components/SideNav";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <div>
        <Switch>
          <Route exact from="/app" render={(props) => <AuthorisedRoutes />} />
          <Route path="/" render={(props) => <UnauthorisedRoutes />} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
