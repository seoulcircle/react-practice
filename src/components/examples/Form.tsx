import { useState } from "react";

export default function Form() {
  const [text, setText] = useState("");

  return (
    <>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        placeholder="type here"
        className="w-full bg-white text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p>{text}</p>
    </>
  );
}
