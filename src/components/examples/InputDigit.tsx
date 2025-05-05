import { useState, useRef, useEffect, ChangeEvent } from "react";

export default function InputDigit() {
  const [buttonDisable, setButtonDisable] = useState(true);
  const [inputDiable, setInputDiable] = useState(false);
  const [value, setValue] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= 4) {
      setValue(newValue);
    }
  };
  useEffect(() => {
    if (value?.length === 4) {
      setButtonDisable(false);
      setInputDiable(true);
    }
  }, [value]);

  useEffect(() => {
    if (!buttonDisable) {
      buttonRef.current?.focus();
    }
  }, [buttonDisable]);

  return (
    <>
      <input
        disabled={inputDiable}
        value={value}
        onChange={onChange}
        placeholder="4 Digit Numbers"
        className="w-full bg-white text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button disabled={buttonDisable} ref={buttonRef}>
        제출하기
      </button>
    </>
  );
}
