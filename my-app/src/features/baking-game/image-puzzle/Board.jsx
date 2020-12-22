import React, {useState} from 'react';
import Tile from './Tile';
import {shuffle, isSolved} from './ImagePuzzleHelpers';
import './Board.css';

function Board(props) {
  const [isStarted, setIsStarted] = useState(false);
  console.log('is started:', isStarted);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(props.tiles);
    props.setTiles(shuffledTiles);
  };

  const unFuckTiles = () => {
    setIsStarted(false);
    props.setTiles(props.initalTiles);
  };

  const handleTileClick = index => {
    props.swapTiles(index);
  };

  const handleResetClick = index => {
    unFuckTiles();
  };

  const handleStartClick = () => {
    shuffleTiles();
    setIsStarted(true);
  };

  const pieceWidth = Math.round(props.boardSize / props.gridSize);
  const pieceHeight = Math.round(props.boardSize / props.gridSize);
  const style = {
    width: props.boardSize,
    height: props.boardSize,
  };
  debugger;
  const hasWon = isSolved(props.tiles);

  return (
    <>
      <ul style={style} className="board">
        {props.tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            imgUrl={props.imgUrl}
            tile={tile}
            tiles={props.tiles}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul>
      {hasWon && isStarted && <div>Puzzle solved</div>}
      {!isStarted ? (
        <button id="board-button" onClick={() => handleStartClick()}>
          Start game
        </button>
      ) : (
        <button id="board-button" onClick={() => handleResetClick()}>
          Reset game
        </button>
      )}
    </>
  );
}

export default Board;
