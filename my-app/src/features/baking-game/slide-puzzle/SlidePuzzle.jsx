import React, {useState} from 'react';
import ImagePuzzle from '../image-puzzle/ImagePuzzle';
import {swap, getMatrixPosition} from '../image-puzzle/ImagePuzzleHelpers';

export const TILE_COUNT = 4;
export const GRID_SIZE = 2;
export const BOARD_SIZE = 320;

const INITIAL_TILES = [...Array(TILE_COUNT).keys()];

export function canSwap(srcIndex, destIndex) {
  const {row: srcRow, col: srcCol} = getMatrixPosition(srcIndex);
  const {row: destRow, col: destCol} = getMatrixPosition(destIndex);
  return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
}

export const SlidePuzzle = props => {
  const [tiles, setTiles] = useState(INITIAL_TILES);

  const swapTiles = tileIndex => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1));
      setTiles(swappedTiles);
    }
  };

  return (
    <ImagePuzzle
      {...props}
      {...{
        swapTiles,
        tiles,
        setTiles,
        initialTiles: INITIAL_TILES,
        tileCount: TILE_COUNT,
        gridSize: GRID_SIZE,
        boardSize: BOARD_SIZE,
      }}
    ></ImagePuzzle>
  );
};
