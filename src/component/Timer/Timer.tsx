import { Player } from "../../models/Player";
import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { Colors } from "../../models/Colors";

interface TimerProps {
  currentPlayer: Player | null
  restart: () => void
}

const Timer: FunctionComponent<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300)
  const [whiteTime, setWhiteTime] = useState(300)
  const timer = useRef<null | ReturnType<typeof setInterval>>(null)


  useEffect(() => {
    startTimer()
  }, [currentPlayer])

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current)
    }

    const callBack = currentPlayer?.color === Colors.white ? decrementWhiteTimer : decrementBlackTimer
    timer.current = setInterval(callBack, 1000);
  }

  const decrementBlackTimer = () => {
    setBlackTime(time => --time)
  }

  const decrementWhiteTimer = () => {
    setWhiteTime(time => --time)
  }

  const restartHandler = () => {
    setBlackTime(1800)
    setWhiteTime(1800)
    restart()
  }

  return (
    <div >
      <div className="timers">
        <div className={`timer ${blackTime <= 300 ? 'danger' : ''}`}>Черные: <span>{blackTime}</span> сек</div>
        <div className={`timer ${whiteTime <= 300 ? 'danger' : ''}`}>Белые: <span>{whiteTime}</span> сек</div>
      </div>
      <button className="restart" onClick={restartHandler}>Запустить снова</button>
    </div>
  );
}

export default Timer;