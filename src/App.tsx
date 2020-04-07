import { h } from "preact";
import Navbar from "./navbar";
import { Route, Switch } from "wouter/preact";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import LimerickPage from "./pages/LimerickPage";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/info" component={InfoPage} />
        <Route path="/limerick" component={LimerickPage} />
      </Switch>
    </div>
  );
}

export default App;
