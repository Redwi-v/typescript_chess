import { Fragment, FunctionComponent, useEffect } from "react";
import { Board } from "../../models/Board";
import CellComponet from "../CellComponent/CellComponent";


interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}



const BoardCompoents: FunctionComponent<BoardProps> = ({ board, setBoard }) => {
  useEffect(() => {
    console.log(board)
  }, [board])

  return (
    <div className="">
      <div className="board">
        {
          board.cells.map((row, index) => {
            return (
              <Fragment key={index}>
                {row.map((cell, cellIndex) => <CellComponet cell={cell} key={cellIndex} />)}
              </Fragment>
            )
          })}
      </div>
    </div>
  );
}

export default BoardCompoents;