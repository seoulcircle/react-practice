import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return <button onClick={handleClick}>Count : {count}</button>;
};
