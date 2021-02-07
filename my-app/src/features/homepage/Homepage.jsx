import React from 'react';
import './Homepage.css';
import headshot from '../../images/headshot.jpg';

function Homepage() {
  return (
    <div className="row">
      <div className="column left-column">
        <p className="tag">{'<html>'}</p>
        <p className="tag margin-left-65">{'<body>'}</p>
        <div className="mobile-headshot-wrapper">
          <img src={headshot} alt="Headshot" className="mobile-headshot" />
        </div>
        <p className="tag margin-left-125">{'<h1>'}</p>
        <h1>
          <span className="blast" aria-hidden="true">
            H
          </span>
          <span className="blast" aria-hidden="true">
            i
          </span>
          <span className="blast" aria-hidden="true">
            ,
          </span>
          <br />
          <span className="blast" aria-hidden="true">
            I
          </span>
          <span className="blast" aria-hidden="true">
            '
          </span>
          <span className="blast" aria-hidden="true">
            m&nbsp;
          </span>
          <span className="blast" aria-hidden="true">
            A
          </span>
          <span className="blast" aria-hidden="true">
            u
          </span>
          <span className="blast" aria-hidden="true">
            d
          </span>
          <span className="blast" aria-hidden="true">
            r
          </span>
          <span className="blast" aria-hidden="true">
            e
          </span>
          <span className="blast" aria-hidden="true">
            y
          </span>
          <span className="blast" aria-hidden="true">
            ,
          </span>

          <br />
          <span className="blast" aria-hidden="true">
            w
          </span>
          <span className="blast" aria-hidden="true">
            e
          </span>
          <span className="blast" aria-hidden="true">
            b&nbsp;
          </span>
          <span className="blast" aria-hidden="true">
            d
          </span>
          <span className="blast" aria-hidden="true">
            e
          </span>
          <span className="blast" aria-hidden="true">
            v
          </span>
          <span className="blast" aria-hidden="true">
            e
          </span>
          <span className="blast" aria-hidden="true">
            l
          </span>
          <span className="blast" aria-hidden="true">
            o
          </span>
          <span className="blast" aria-hidden="true">
            p
          </span>
          <span className="blast" aria-hidden="true">
            e
          </span>
          <span className="blast" aria-hidden="true">
            r
          </span>
          <span className="blast" aria-hidden="true">
            .
          </span>
        </h1>
        <p className="tag margin-left-125">{'</h1>'}</p>
        <p className="tag margin-left-65">{'</body>'}</p>
        <p className="tag">{'</html>'}</p>
      </div>
      <div className="column right-column">
        <img src={headshot} alt="Headshot" className="headshot" />
      </div>
    </div>
  );
}

export default Homepage;
