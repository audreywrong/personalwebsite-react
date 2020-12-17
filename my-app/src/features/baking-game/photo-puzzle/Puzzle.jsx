import React from 'react';
import Board from './Board';
import frankenbread from '../../../images/frankenbread.png';
import './Puzzle.css';

function Puzzle() {
  return (
    <div className="puzzle">
      <Board imgUrl={frankenbread} />
    </div>
  );
}

export default Puzzle;
