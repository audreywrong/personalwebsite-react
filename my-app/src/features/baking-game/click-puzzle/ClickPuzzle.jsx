export const CLICK_PUZZLE_TILE_COUNT = 16;
export const CLICK_PUZZLE_GRID_SIZE = 4;
export const CLICK_PUZZLE_BOARD_SIZE = 320;

//swap selected tile with blank tile
function swapTiles(array) {
  //var tile = parseInt(prompt("Please enter a number to swap with 0"), 10);
  // identify the index position of my tile

  var tilePos = array.indexOf(tile);
  // identify the index position of the blank tile
  document.getElementById('my-tile-pos').innerHTML = tilePos;
  var blankPos = array.indexOf(0);
  document.getElementById('blank-tile-pos').innerHTML = blankPos;
  //swap them over
  t = array[tilePos];
  array[tilePos] = array[blankPos];
  array[blankPos] = t;
}
