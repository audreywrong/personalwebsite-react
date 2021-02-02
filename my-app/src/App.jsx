import React from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';
import Homepage from './features/homepage/Homepage';
import BakingGame from './features/baking-game/BakingGame';

function App() {
  return (
    <div className="router-wrapper">
      <BrowserRouter>
        <switch>
          <Route exact path="/personalwebsite-react" component={Homepage} />
          <Route exact path="/baking-game" component={BakingGame} />
          <Redirect to="/personalwebsite-react" />
        </switch>
        <nav>
          <Link className="nav-item" to="/personalwebsite-react">
            Home
          </Link>
          <Link className="nav-item">Resume</Link>
          <Link className="nav-item" to="/baking-game">
            Baking Game
          </Link>
          <Link className="nav-item">Contact Me</Link>
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
