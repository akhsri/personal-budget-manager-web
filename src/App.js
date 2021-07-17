import { AccountsList } from "./parts/CategoriesList";
import { CategoriesList } from "./parts/AccountsList";
import Transactions from "./components/Transactions";
import ExpenseByCategory from "./components/ExpenseByCategory";
import Navbar from "./components/Navbar";
import { Fragment } from "react";
import UnauthorisedRoutes from "./UnauthorisedRoutes";
import SideNav from "./components/SideNav";

function App() {
  const token = localStorage.getItem("token");
  const isUserLoggedIn = !!token;
  return (
    <Fragment>
      <div>
        <Navbar />
        <UnauthorisedRoutes />
      </div>

      {isUserLoggedIn && <SideNav />}
    </Fragment>
  );
}

export default App;
