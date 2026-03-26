import { useState, useRef } from "react";

export default function Bai5_Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const inputRef = useRef();

  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime((t) => t + 10);
      }, 10);
    }
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    pause();
    setTime(0);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Bài 5 - Stopwatch</h2>

      <h3>{time} ms</h3>

      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>

      <br />
      <br />
      <input ref={inputRef} placeholder="Lap name" />
      <button onClick={focusInput}>Add Lap</button>
    </div>
  );
}
