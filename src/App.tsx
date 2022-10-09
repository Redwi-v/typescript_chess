import React, { useEffect, useState } from 'react';
import './App.css';
import BoardCompoents from './component/BoardComponent/BoardComponent';
import { Board } from './models/Board';

function App() {
  const [board, setBoard] = useState(new Board())


  const restart = () => {
    const newBoard = new Board()
    newBoard.initSels()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  useEffect(() => {
    restart()

  }, [])

  return (
    <div className="app">
      <BoardCompoents board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
