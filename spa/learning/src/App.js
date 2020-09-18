import React from 'react';
import {Header} from './components/expenseTracker/Header';
import {Balance} from "./components/expenseTracker/Balance";
import {IncomeExpenses} from "./components/expenseTracker/IncomeExpenses";
import {TransactionList} from "./components/expenseTracker/TransactionList";
import {AddTransaction} from "./components/expenseTracker/AddTransaction";
import {GlobalProvider} from "./components/expenseTracker/context/GlobalState";

function App() {
  return (
    <GlobalProvider>
        <Header/>
        <div className="container">
            <Balance/>
            <IncomeExpenses/>
            <TransactionList/>
            <AddTransaction/>
        </div>
    </GlobalProvider>
  );
}

export default App;
