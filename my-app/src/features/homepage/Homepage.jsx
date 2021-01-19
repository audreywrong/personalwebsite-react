import React from 'react';
import './Homepage.css';
import headshot from '../../images/headshot.jpg';

function Homepage() {
  return (
    <div class="row">
      <div class="column">
        <p>{'<body>'}</p>
        <p>{'<h1>'}</p>
        <h1>
          <span class="blast" aria-hidden="true">
            H
          </span>
          <span class="blast" aria-hidden="true">
            i
          </span>
          <span class="blast" aria-hidden="true">
            ,
          </span>
          <br />
          <span class="blast" aria-hidden="true">
            I
          </span>
          <span class="blast" aria-hidden="true">
            '
          </span>
          <span class="blast" aria-hidden="true">
            m&nbsp;
          </span>
          <span class="blast" aria-hidden="true">
            A
          </span>
          <span class="blast" aria-hidden="true">
            u
          </span>
          <span class="blast" aria-hidden="true">
            d
          </span>
          <span class="blast" aria-hidden="true">
            r
          </span>
          <span class="blast" aria-hidden="true">
            e
          </span>
          <span class="blast" aria-hidden="true">
            y
          </span>
          <span class="blast" aria-hidden="true">
            ,
          </span>

          <br />
          <span class="blast" aria-hidden="true">
            w
          </span>
          <span class="blast" aria-hidden="true">
            e
          </span>
          <span class="blast" aria-hidden="true">
            b&nbsp;
          </span>
          <span class="blast" aria-hidden="true">
            d
          </span>
          <span class="blast" aria-hidden="true">
            e
          </span>
          <span class="blast" aria-hidden="true">
            v
          </span>
          <span class="blast" aria-hidden="true">
            e
          </span>
          <span class="blast" aria-hidden="true">
            l
          </span>
          <span class="blast" aria-hidden="true">
            o
          </span>
          <span class="blast" aria-hidden="true">
            p
          </span>
          <span class="blast" aria-hidden="true">
            e
          </span>
          <span class="blast" aria-hidden="true">
            r
          </span>
        </h1>
        <p>{'</h1>'}</p>
        <p>{'</body>'}</p>
        <p>{'</html>'}</p>
      </div>
      <div class="column">
        <img src={headshot} alt="Headshot" className="headshot" />
      </div>
    </div>
  );
}

export default Homepage;
