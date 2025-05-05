import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = (delta: number) => {
    setCount((prev) => prev + delta);
  };
  return (
    <>
      <div className="flex">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow w-20 h-20"
          onClick={() => handleClick(+1)}
        >
          Count up
        </button>
        <p className="p-10 font-semibold">{count}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow w-20 h-20"
          onClick={() => handleClick(-1)}
        >
          Count down
        </button>
      </div>
      <div className="flex">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded shadow w-10 h-10"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </>
  );
}
