import { Fragment, FunctionComponent, useState } from "react";
import { Board } from "../../models/Board";
import { Cell } from "../../models/Cell";
import CellComponet from "../CellComponent/CellComponent";


interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}



const BoardCompoents: FunctionComponent<BoardProps> = ({ board, setBoard }) => {
  const [selectedFigure, setSelectedFigure] = useState<Cell | null>(null)


  const chooseFigure = (cell: Cell) => {
    if (cell.figure) {
      setSelectedFigure(cell)
    }
  }

  return (
    <div className="">
      <div className="board">
        {
          board.cells.map((row, index) => {
            return (
              <Fragment key={index}>
                {row.map((cell, cellIndex) =>
                  <CellComponet
                    chooseFigure={chooseFigure}
                    cell={cell}
                    key={cellIndex}
                    selected={cell.x === selectedFigure?.x && cell.y === selectedFigure?.y} />
                )}
              </Fragment>
            )
          })}
      </div>
    </div>
  );
}

export default BoardCompoents;