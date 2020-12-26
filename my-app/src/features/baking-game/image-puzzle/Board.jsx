import React, {useState} from 'react';
import Tile from './Tile';
import {shuffle, isSolved} from './ImagePuzzleHelpers';
import './Board.css';
import {setStepIsSolved} from '../mini-game/miniGameSlice';
import {useDispatch} from 'react-redux';

function Board(props) {
  const [isStarted, setIsStarted] = useState(false);
  const [initialTiles] = useState(props.initialTiles);
  const dispatch = useDispatch();

  const updateAndRenderIsSolved = () => {
    const hasWon = isSolved(props.tiles);

    if (isStarted && hasWon) {
      dispatch(setStepIsSolved);
      return <div>Puzzle solved</div>;
    }
  };

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(props.tiles);
    props.setTiles(shuffledTiles);
  };

  const unFuckTiles = () => {
    setIsStarted(false);
    props.setTiles(initialTiles);
  };

  const handleTileClick = index => {
    props.swapTiles(index);
  };

  const handleResetClick = () => {
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

  return (
    <>
      <ul style={style} className="board">
        {props.tiles.map((tile, index) => {
          return (
            <Tile
              key={tile}
              index={index}
              imgUrl={props.imgUrl}
              tile={tile}
              tiles={props.tiles}
              gridSize={props.gridSize}
              boardSize={props.boardSize}
              tileCount={props.tileCount}
              width={pieceWidth}
              height={pieceHeight}
              handleTileClick={handleTileClick}
            />
          );
        })}
      </ul>
      {updateAndRenderIsSolved()}
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
