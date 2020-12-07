import { AccountsList } from "./components/CategoriesList";
import { CategoriesList } from "./components/AccountsList";
import Transactions from "./components/Transactions";
import ExpenseByCategory from "./components/ExpenseByCategory";


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
        <div className="col-3">
          <ExpenseByCategory />
        </div>
      </div>
    </div>
  );
}

export default App;
