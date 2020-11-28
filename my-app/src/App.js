import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import  Homepage  from './features/homepage/Homepage';
import BakingGame from './features/baking-game/BakingGame';

function App() {
  return (
    <div className="router-wrapper">
      <BrowserRouter>
        <switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/baking-game' component={BakingGame}/>
        </switch>
            <nav>
        <Link className="nav-item" to='/'>Home</Link>
        <Link className="nav-item" to='/baking-game'>Game</Link>
      </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
