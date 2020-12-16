import React from "react";
import Board from "./Board";
import frankenbread from '../../../images/frankenbread.png';
import './Puzzle.css';

function Puzzle() {

    return (
      <div className="puzzle">
        <h1>PLEASE WORK DEAR GOD.</h1>
        <Board imgUrl={frankenbread} />
      </div>
    );
  }
  
  export default Puzzle;
  