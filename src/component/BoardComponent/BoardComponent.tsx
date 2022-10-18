import { Fragment, FunctionComponent, useEffect, useState } from "react";
import { Board } from "../../models/Board";
import { Cell } from "../../models/Cell";
import CellComponet from "../CellComponent/CellComponent";


interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}



const BoardCompoents: FunctionComponent<BoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)


  const chooseFigure = (cell: Cell) => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell)
      setSelectedCell(null)
    } else {
      setSelectedCell(cell)
    }

  }

  useEffect(() => {
    highlightCells()
  }, [selectedCell])

  const updateBoard = () => {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }
  const highlightCells = () => {
    board.highlightCells(selectedCell)
    updateBoard()
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
                    selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y} />
                )}
              </Fragment>
            )
          })}
      </div>
    </div>
  );
}

export default BoardCompoents;