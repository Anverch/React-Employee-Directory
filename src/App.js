import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
