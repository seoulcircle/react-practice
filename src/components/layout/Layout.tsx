import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar />
      <main style={{ display: "flex", width: "70%" }}>
        <Outlet />
      </main>
    </div>
  );
}
