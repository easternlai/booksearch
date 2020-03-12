import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Save from "./pages/Save";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search}/>
            <Route exact path="/save" component={Save}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
