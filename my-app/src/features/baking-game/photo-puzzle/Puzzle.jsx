import React from 'react';
import Board from './Board';
import frankenbread from '../../../images/frankenbread.png';
import './Puzzle.css';

const Puzzle = props =>
  props.show ? (
    <div className="puzzle">
      <Board imgUrl={frankenbread} />
    </div>
  ) : (
    <></>
  );

export default Puzzle;
