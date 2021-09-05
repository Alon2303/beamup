import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Details">
            <Details/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
