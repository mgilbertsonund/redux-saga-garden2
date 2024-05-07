import React from 'react';
import Garden from '../Garden/Garden.jsx';
import PlantForm from '../PlantForm/PlantForm.jsx';
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
          <Route path="/">
            <Garden />
          </Route>
          <Route path="/plant/:id">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

