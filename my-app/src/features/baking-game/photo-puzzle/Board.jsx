import React, {useState} from 'react';
import Tile from './Tile';
import {TILE_COUNT, GRID_SIZE, BOARD_SIZE} from './Constants';
import {canSwap, shuffle, swap, isSolved} from './PuzzleHelpers';
import './Board.css';

const INITIAL_TILES = [...Array(TILE_COUNT).keys()];

function Board({imgUrl}) {
  const [tiles, setTiles] = useState(INITIAL_TILES);
  const [isStarted, setIsStarted] = useState(false);
  console.log('is started:', isStarted);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles);
    setTiles(shuffledTiles);
  };

  const unFuckTiles = () => {
    setIsStarted(false);
    setTiles(INITIAL_TILES);
  };

  const swapTiles = tileIndex => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1));
      setTiles(swappedTiles);
    }
  };

  const handleTileClick = index => {
    swapTiles(index);
  };

  const handleResetClick = index => {
    unFuckTiles();
  };

  const handleStartClick = () => {
    shuffleTiles();
    setIsStarted(true);
  };

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };
  const hasWon = isSolved(tiles);

  return (
    <>
      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            imgUrl={imgUrl}
            tile={tile}
            tiles={tiles}
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
