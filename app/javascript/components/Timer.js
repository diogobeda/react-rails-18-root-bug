import React, { useEffect, useState } from "react";

const Timer = ({ id }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3>I'm timer {id}</h3>
      <p>{count} seconds elapsed</p>
    </div>
  );
};

export default Timer;
