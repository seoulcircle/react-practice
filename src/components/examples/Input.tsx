import { useState, useRef, useEffect } from "react";

export default function Input() {
  const [inputDisabled, setInputDisabled] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setInputDisabled((prev) => !prev); // 이 과정에서 예약만 걸어짐 (Batching)
    // inputRef.current?.focus();
  };

  useEffect(() => {
    if (!inputDisabled) {
      inputRef.current?.focus();
    }
  }, [inputDisabled]);

  // setState는 바로 화면에 적용되지 않는다. 그래서 변경 완료 후 무언가 하려면 useEffect 써야함
  return (
    <>
      <input
        ref={inputRef}
        disabled={inputDisabled}
        placeholder="focused input"
        className="w-full bg-white text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button onClick={handleClick}>이걸 눌러야 입력</button>
    </>
  );
}
