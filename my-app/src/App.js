import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
//import { Homepage } from './features/homepage/Homepage';

function App() {
  return (
    <div className="router-wrapper">
      <BrowserRouter>
        <switch>
          <Route exact path='/' component={Counter}/>
          <Route exact path='/game' component={Counter}/>
        </switch>
            <nav>
        <Link className="nav-item" to='/'>Home</Link>
        <Link className="nav-item" to='/game'>Game</Link>
      </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
