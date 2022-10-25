import { Figure } from "../../models/figures/Figure";
import { FunctionComponent } from 'react'

interface LostFiguresProps {
  title: string
  figures: Figure[]
}

const LostFigures: FunctionComponent<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className="lost_figures_component">
      <h2> {title} </h2>
      <ul>
        {
          figures.map((figure) => {
            return (<li key={figure.id}>
              {figure.logo && <img src={figure.logo} />}
            </li>)
          })
        }
      </ul>
    </div>
  );
}

export default LostFigures;