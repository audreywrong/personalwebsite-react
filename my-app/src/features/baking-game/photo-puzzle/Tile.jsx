import React from 'react';
import {Motion, spring} from 'react-motion';
import {getMatrixPosition, getVisualPosition} from './Helpers';
import {TILE_COUNT, GRID_SIZE, BOARD_SIZE} from './Constants';
import './Tile.css';

const Tile = props => {
  const {tile, index, width, height, handleTileClick, imgUrl} = props;
  const {col, initialRow, row} = getMatrixPosition(index, tile);
  const visualPos = getVisualPosition(row, col, width, height);

  const tileStyle = {
    height: Math.ceil(BOARD_SIZE / GRID_SIZE),
    width: Math.ceil(BOARD_SIZE / GRID_SIZE),
    translateX: visualPos.x,
    translateY: visualPos.y,
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: `${(100 / (GRID_SIZE - 1)) * (tile % GRID_SIZE)}% ${(100 * initialRow) / (GRID_SIZE - 1)}%`,
    backgroundSize: `${GRID_SIZE * 100}%`,
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
};

export default Tile;
