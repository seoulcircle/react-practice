import { useState, useEffect, useRef } from "react";

export default function Timer() {
  const [millisecond, setMillisecond] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);

  const timer = useRef<number | null>(null);

  // millisecond
  useEffect(() => {
    timer.current = setInterval(() => {
      setMillisecond((prev) => prev + 10);
    }, 10);
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, []);

  //second
  useEffect(() => {
    if (millisecond >= 1000) {
      setMillisecond(0);
      setSecond((prev) => prev + 1);
    }
  }, [millisecond]);

  //minute
  useEffect(() => {
    if (second >= 60) {
      setSecond(0);
      setMinute((prev) => prev + 1);
    }
  }, [second]);

  // 멈춤
  const handleStop = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  const handleStart = () => {
    if (!timer.current) {
      // 타이머 생성 후 재시작
      timer.current = setInterval(() => {
        setMillisecond((prev) => prev + 10);
      }, 10);
    }
  };

  const handleReset = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null; // 타이머 삭제
    }
    setMillisecond(0); // 시간도 0으로 초기화
    setSecond(0);
    setMinute(0);
  };

  return (
    <>
      {minute} : {second}: {millisecond}
      <button onClick={handleStop}>stop</button>
      <button onClick={handleStart}>start</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
}
