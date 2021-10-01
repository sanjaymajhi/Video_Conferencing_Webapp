import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContextProvider } from "./context";
import Homepage from "./components/Homepage"

function App() {
  return (
    <div className="App">
      <Router>
        <ContextProvider>
          <Switch>
            <Route path="/" exact component={Homepage} />
          </Switch>
        </ContextProvider>
      </Router>
    </div>
  );
}

export default App;
