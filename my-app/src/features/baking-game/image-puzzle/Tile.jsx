import React from 'react';
import {Motion, spring} from 'react-motion';
import {getMatrixPosition, getVisualPosition} from './ImagePuzzleHelpers';
import './Tile.css';

const Tile = props => {
  const {col, initialRow, row} = getMatrixPosition(props.index, props.tile);
  const visualPos = getVisualPosition(row, col, props.width, props.height);

  debugger;
  const tileStyle = {
    height: Math.ceil(props.boardSize / props.gridSize),
    width: Math.ceil(props.boardSize / props.gridSize),
    translateX: visualPos.x,
    translateY: visualPos.y,
    backgroundImage: `url(${props.imgUrl})`,
    backgroundPosition: `${(100 / (props.gridSize - 1)) * (props.tile % props.gridSize)}% ${
      (100 * initialRow) / (props.gridSize - 1)
    }%`,
    backgroundSize: `${props.gridSize * 100}%`,
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
            opacity: props.tile === props.tileCount - 1 ? 0 : 1,
          }}
          className="tile"
          onClick={() => props.handleTileClick(props.index)}
        >
          {!props.imgUrl && `${props.tile + 1}`}
        </li>
      )}
    </Motion>
  );
};

export default Tile;
