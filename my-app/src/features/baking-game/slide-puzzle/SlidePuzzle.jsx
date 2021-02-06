import React, {useState} from 'react';
import ImagePuzzle from '../image-puzzle/ImagePuzzle';
import {swap, getMatrixPosition, isSolvable, isSolved} from '../image-puzzle/ImagePuzzleHelpers';

export const TILE_COUNT = 4;
export const GRID_SIZE = 2;
export const BOARD_SIZE = 320;

const INITIAL_TILES = [...Array(TILE_COUNT).keys()];

export const SlidePuzzle = props => {
  const [tiles, setTiles] = useState(INITIAL_TILES);
  // const _isSolvable = isSolvable;
  // const _isSolved = isSolved;

  // import {isSolvable, isSolved} from '../image-puzzle/ImagePuzzleHelpers';

  const swapTiles = tileIndex => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1));
      setTiles(swappedTiles);
    }
  };

  const canSwap = (srcIndex, destIndex) => {
    const {row: srcRow, col: srcCol} = getMatrixPosition(srcIndex, INITIAL_TILES.indexOf(srcIndex), GRID_SIZE);
    const {row: destRow, col: destCol} = getMatrixPosition(destIndex, INITIAL_TILES.indexOf(destIndex), GRID_SIZE);
    return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
  };

  return (
    <ImagePuzzle
      {...props}
      {...{
        swapTiles,
        tiles,
        setTiles,
        // shuffle,
        initialTiles: INITIAL_TILES,
        tileCount: TILE_COUNT,
        gridSize: GRID_SIZE,
        boardSize: BOARD_SIZE,
      }}
    ></ImagePuzzle>
  );
};
