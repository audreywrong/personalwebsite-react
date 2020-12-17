import React from 'react';
import {Motion, spring} from 'react-motion';
import {getMatrixPosition, getVisualPosition} from './Helpers';
import {TILE_COUNT, GRID_SIZE, BOARD_SIZE} from './Constants';
import './Tile.css';

function Tile(props) {
  const {tiles, tile, index, width, height, handleTileClick, imgUrl} = props;

  const {row, col} = getMatrixPosition(index);
  const visualPos = getVisualPosition(row, col, width, height);
  const tileStyle = {
    width: `calc(100% / ${GRID_SIZE})`,
    height: `calc(100% / ${GRID_SIZE})`,
    translateX: visualPos.x,
    translateY: visualPos.y,
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: `${BOARD_SIZE}px`,
    backgroundPosition: `${(100 / GRID_SIZE) * (tile % GRID_SIZE)}% ${(100 / GRID_SIZE) * getRowNumber(tiles, tile)}%`,
  };

  const motionStyle = {
    translateX: spring(visualPos.x),
    translateY: spring(visualPos.y),
  };

  return (
    <Motion style={motionStyle}>
      {({translateX, translateY}) => (
        <li
          style={{
            ...tileStyle,
            transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
            // Is last tile?
            opacity: tile === TILE_COUNT - 1 ? 0 : 1,
          }}
          className="tile"
          onClick={() => handleTileClick(index)}
        >
          {!imgUrl && `${tile + 1}`}
        </li>
      )}
    </Motion>
  );
}

export default Tile;

/*
Troubleshooting from even grid size to all grid sizes from source code.

Input: [0, 1, 2, 3, 4, 5, 6, 7, 8]
Output: [0, 0, 0, 1, 1, 1, 2, 2, 2]
*/

const getRowNumber = (allTiles, thisTile) => {
  const rowSize = Math.sqrt(allTiles.length);
  let rowNumber = -1;

  for (let i = 0; i < allTiles.length; i++) {
    const el = allTiles[i];
    if (el % rowSize === 0) {
      rowNumber++;
    }

    if (el === thisTile) {
      return rowNumber;
    }
  }
};
