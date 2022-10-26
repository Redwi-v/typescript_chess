import React, { useEffect, useState } from 'react';
import './App.css';
import BoardCompoents from './component/BoardComponent/BoardComponent';
import LostFigures from './component/LostFigures/LostFigures';
import Timer from './component/Timer/Timer';
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { Player } from './models/Player';

function App() {
  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.white))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.black))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  const restart = () => {
    setCurrentPlayer(whitePlayer)
    const newBoard = new Board()
    newBoard.initSels()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  const swapPlayer = () => {
    setCurrentPlayer((currentPlayer) => currentPlayer?.color === Colors.white ? blackPlayer : whitePlayer)
  }

  useEffect(() => {
    restart()
  }, [])

  return (
    <div className="app">
      <div className="container">
        <Timer currentPlayer={currentPlayer} restart={restart} />
        <h1>Ход {currentPlayer?.color === Colors.white ? 'белых' : 'черных'}</h1>
        <div className="main">
          <BoardCompoents board={board} setBoard={setBoard} swapPlayer={swapPlayer} currentPlayer={currentPlayer} />
          <div className="lost_figures">
            <LostFigures title='Черные фигуры' figures={board.lostBlackFigures} />
            <LostFigures title='Белые фигуры' figures={board.lostWhiteFigures} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
