import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';
import {Switch} from 'react-router';
import Homepage from './features/homepage/Homepage';
import BakingGame from './features/baking-game/BakingGame';
import AboutMe from './features/about-me/AboutMe';
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
            <Link className="nav-item" to="/about-me">
              About Me
            </Link>
            {/* <Link className="nav-item">Resume</Link> */}
            <Link className="nav-item" to="/baking-game">
              Baking Game
            </Link>
            {/* <a className="nav-item" href="https://audreywrong.github.io/all-about-audrey/" target="_blank">
              Blog
            </a> */}
            <a className="social-item" href="https://github.com/audreywrong" target="_blank">
              <FaGithub />
            </a>
            <a className="social-item" href="https://twitter.com/audwrong" target="_blank">
              <FaTwitter />
            </a>
            <a className="social-item" href="https://www.linkedin.com/in/audreylwright/" target="_blank">
              <FaLinkedin />
            </a>
          </nav>
        </div>
        <Switch>
          <Route exact path="/personalwebsite-react" component={Homepage} />
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/baking-game" component={BakingGame} />
          <Redirect to="/personalwebsite-react" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
