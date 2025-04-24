import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "30%",
        background: "#f8f8f8",
        padding: "1rem",
        height: "100%",
      }}
    >
      <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem", color: "black" }}>
        🧪 연습 컴포넌트
      </h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/counter">➕ Counter</Link>
        </li>
        <li>
          <Link to="/timer">⏱ Timer</Link>
        </li>
        {/* 필요 시 여기에 더 추가 */}
      </ul>
    </aside>
  );
}
