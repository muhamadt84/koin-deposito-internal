import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const LoadingPage = lazy(() => import('./components/Loading/LoadingPage'))
const Home = lazy(() => import('./pages/Home'))
const Bank = lazy(() => import('./pages/Bank'))
const Deposito = lazy(() => import('./pages/Deposito'))
const DepositoEditRequest = lazy(() => import('./pages/DepositoEditRequest'))
const Transaction = lazy(() => import('./pages/Transaction'))
const ManageBankOfficer = lazy(() => import('./pages/ManageBankOfficer'))
const Lender = lazy(() => import('./pages/Lender'))
const HistoryLog = lazy(() => import('./pages/HistoryLog'))
const RequirementData = lazy(() => import('./pages/RequirementData'))

function App() {
  return (
    <Router>
      <Suspense fallback={ LoadingPage } >
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/bank" component={ Bank } />
          <Route path="/deposito" component={ Deposito } />
          <Route path="/deposito-edit-request" component={ DepositoEditRequest } />
          <Route path="/transaction" component={ Transaction } />
          <Route path="/manage-bank-officer" component={ ManageBankOfficer } />
          <Route path="/lender" component={ Lender } />
          <Route path="/history-log" component={ HistoryLog } />
          <Route path="/requirement-data" component={ RequirementData } />

        </Switch>
      </Suspense>
    </Router >
  );
}

export default App;
