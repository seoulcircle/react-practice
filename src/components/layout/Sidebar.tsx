// src/components/layout/Sidebar.tsx
import { Link } from "react-router-dom";
import { exampleRoutes } from "../../router/exampleRoutes";

export default function Sidebar() {
  return (
    <aside className="w-1/4 p-4 bg-gray-100 h-screen">
      <h2 className="text-lg font-bold mb-4">🧪 예제</h2>
      <ul className="space-y-2">
        {exampleRoutes.map((route) => (
          <li key={route.path}>
            <Link to={route.path} className="text-blue-600 hover:underline">
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
