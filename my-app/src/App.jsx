import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';
import {Switch} from 'react-router';
import Homepage from './features/homepage/Homepage';
import BakingGame from './features/baking-game/BakingGame';
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';

function App() {
  return (
    <div className="router-wrapper">
      <BrowserRouter>
        <div id="nav-bar">
          <nav>
            <Link className="nav-item" to="/personalwebsite-react">
              Home
            </Link>
            {/* <Link className="nav-item">Resume</Link> */}
            <Link className="nav-item" to="/baking-game">
              Baking Game
            </Link>
            <Link className="social-item" to="https://github.com/audreywrong">
              <FaGithub />
            </Link>
            <Link className="social-item" to="https://twitter.com/audwrong">
              <FaTwitter />
            </Link>
            <Link className="social-item" to="https://www.linkedin.com/in/audreylwright/">
              <FaLinkedin />
            </Link>
          </nav>
        </div>
        <Switch>
          <Route exact path="/personalwebsite-react" component={Homepage} />
          <Route exact path="/baking-game" component={BakingGame} />
          <Redirect to="/personalwebsite-react" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
