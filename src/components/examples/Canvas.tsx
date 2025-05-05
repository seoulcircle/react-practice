import { useRef, useEffect } from "react";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    let drawing = false;

    // 그리기 시작
    const drawStart = (e: MouseEvent) => {
      drawing = true;
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    };

    // 그리는 중
    const onDrawing = (e: MouseEvent) => {
      if (!drawing) return;
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    };

    // 그리기 끝
    const drawEnd = () => {
      drawing = false;
    };

    canvas.addEventListener("mousedown", drawStart);
    canvas.addEventListener("mousemove", onDrawing);
    canvas.addEventListener("mouseleave", drawEnd);
    canvas.addEventListener("mouseup", drawEnd);

    return () => {
      canvas.removeEventListener("mousedown", drawStart);
      canvas.removeEventListener("mousemove", onDrawing);
      canvas.removeEventListener("mouseleave", drawEnd);
      canvas.removeEventListener("mouseup", drawEnd);
    };
  }, []);

  const onReset = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        style={{ border: "1px solid black", width: "500px", height: "500px" }}
      ></canvas>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
