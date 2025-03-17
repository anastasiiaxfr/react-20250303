import { useEffect, useRef, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState("0");

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => setTime(new Date().getTime()), 100);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <div>{time}</div>
      <button onClick={() => clearInterval(intervalRef.current)}>stop</button>
    </div>
  );
};
