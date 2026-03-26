import { useEffect, useState } from "react";

export default function Bai2_Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h2>Bài 2 - Clock</h2>
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  );
}
