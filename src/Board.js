import React, { cloneElement, useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());
  console.log("Board", board);

  function getRandomBoolean() {
    return Math.random() < chanceLightStartsOn;
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    // TODO: create array-of-arrays of true/false values
    for (let i = 0; i < ncols; i++) {
      let row = [];
      for (let j = 0; j < nrows; j++) {
        row.push(getRandomBoolean());
      }
      initialBoard.push(row);
    }
    return initialBoard;
  }
  // console.log(createBoard(), "boarding");
  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    let checkBoard = board.filter((row) => !row.includes(true));
    // console.log(checkBoard, "XXXXXXXX")
    return checkBoard.length > 0;
  }
  // console.log(hasWon(), "YYYYYYYY")

  function flipCellsAround(coord) {
    setBoard((oldBoard) => {
      const [y, x] = coord.split("-").map(Number);
      console.log(oldBoard, "oldBoard Flip cells around");

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard (identical but different reference)
      //* Same data (identical twin)
      const deepBoard = [...oldBoard];
      console.log(deepBoard);

      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, deepBoard);
      flipCell(y - 1, x, deepBoard);
      flipCell(y + 1, x, deepBoard);
      flipCell(y, x - 1, deepBoard);
      flipCell(y, x + 1, deepBoard);

      // TODO: return the copy
      return deepBoard;
    });
  }
  // flipCellsAround("2-1")
  //* Display board on click to see how it will run
  //* Can also display button on click to flip cells around

  // if the game is won, just show a winning msg & render nothing else

  // TODO: If statement to check if winning

  // make table board

  // TODO: Create table board and pass cells into it
  return <button onClick={() => flipCellsAround("0-1")}>PUSH</button>;
}

export default Board;
