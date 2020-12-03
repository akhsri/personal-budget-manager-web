import { AccountsList } from "./components/CategoriesList";
import { CategoriesList } from "./components/AccountsList";
import Transactions from "./components/Transactions";


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <AccountsList />
          <CategoriesList />
        </div>
        <div className="col-6">
          <Transactions />
        </div>
      </div>
    </div>
  );
}

export default App;
