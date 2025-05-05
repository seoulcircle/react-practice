import { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(true);
  return (
    <button
      onClick={() => setToggle((prev) => !prev)}
      className={`w-12 h-6 flex items-center rounded-full p-1 ${
        toggle ? "bg-green-400" : "bg-gray-300"
      } transition-colors duration-300`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 transform ${
          toggle ? "translate-x-0" : "translate-x-7"
        }`}
      />
    </button>
  );
}
