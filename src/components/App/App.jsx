import React from 'react';
import Garden from '../Garden/Garden.jsx';
import PlantDetails from '../PlantDetails/PlantDetails.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Your Garden!</h1>
      </header>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Garden />
          </Route>
          <Route path="/plants/:id">
            <PlantDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

