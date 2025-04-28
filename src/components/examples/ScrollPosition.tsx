import { useState, useEffect } from "react";

export default function ScrollPosition() {
  const [position, setPosition] = useState<number>(0);

  const onScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setPosition(scrollPercent);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll); // 이벤트 제거 (메모리 누수 방지)
    };
  }, []);
  return (
    <>
      <div style={{ height: "200vh", padding: "20px" }}>
        <p style={{ position: "fixed" }}>
          현재 스크롤 포지션은 {Math.round(position)} % 입니다.
        </p>
      </div>
    </>
  );
}
