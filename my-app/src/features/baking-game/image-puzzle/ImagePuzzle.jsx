import React from 'react';
import Board from './Board';
import './ImagePuzzle.css';

const ImagePuzzle = props =>
  props.show ? (
    <div className="puzzle">
      <Board {...props} />
    </div>
  ) : (
    <></>
  );

export default ImagePuzzle;
