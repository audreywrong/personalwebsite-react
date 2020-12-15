import React, { useState } from "react";
import Tile from "./Tiles";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./Constants";
import { canSwap, shuffle, swap, isSolved } from "./Helpers";
import '../BakingGame.css';

function Board({ imgUrl }) {
    const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
    const [isStarted, setIsStarted] = useState(false);
    console.log('is started:', isStarted)

    const shuffleTiles = () => {
        const shuffledTiles = shuffle(tiles)
        setTiles(shuffleTiles);
    }

    const swapTiles = (tileIndex) => {
        if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
        const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1))
        setTiles(swappedTiles)
      }
    }

    const handleTileClick = (index) => {
        swapTiles(index)
    }

    const handleShuffleClick = (index) => {
        shuffleTiles()
    }

    const handleStartClick = () => {
        shuffleTiles()
        setIsStarted(true)
    }


    const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
    const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
    const style = {
      width: BOARD_SIZE,
      height: BOARD_SIZE,
    };
    const hasWon = isSolved(tiles)

    return (
        <> 
        {/* <style>{".tile{list-style: none}"}</style> */}
          <ul style={style} className="board">
            {tiles.map((tile, index) => (
              <Tile
                key={tile}
                index={index}
                imgUrl={imgUrl}
                tile={tile}
                width={pieceWidth}
                height={pieceHeight}
                handleTileClick={handleTileClick}
              />
            ))}
          </ul>
        {hasWon && isStarted && <div>Puzzle solved</div>}  
        {!isStarted ?
        (<button onClick={() => handleStartClick()}>Start game</button>) :
        (<button onClick={() => handleShuffleClick()}>Restart game</button>)}
        </>
      );
    }
    
    export default Board;