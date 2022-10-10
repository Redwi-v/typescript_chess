import { FC } from "react";
import { Cell } from "../../models/Cell";


interface CellProps {
  cell: Cell
  selected: boolean
  chooseFigure: (cell: Cell) => void
}


const CellComponet: FC<CellProps> = ({ cell, selected, chooseFigure }) => {



  return (
    <div
      className={`cell ${cell.color} ${selected ? 'selected' : ''}`}
      onClick={() => chooseFigure(cell)}
    >
      {cell.figure?.logo && <img src={cell.figure.logo} />}
      {!cell.figure && cell.available && <div className="available" />}
    </div>
  );
}

export default CellComponet;