import { FC } from "react";
import { Cell } from "../../models/Cell";


interface CellProps {
  cell: Cell
}


const CellComponet: FC<CellProps> = ({ cell }) => {
  return (
    <div className={`cell ${cell.color}`}>
      {cell.figure?.logo && <img src={cell.figure.logo} />}
    </div>
  );
}

export default CellComponet;