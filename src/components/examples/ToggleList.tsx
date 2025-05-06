import { useState } from "react";

export default function ToggleList() {
  const [activeToggle, setActiveToggle] = useState<string | null>(null);

  const listItem = [
    { id: "item1", content: "this is item1" },
    { id: "item2", content: "this is item2" },
    { id: "item3", content: "this is item3" },
  ];

  return (
    <ul>
      {listItem.map((item) => {
        const isActive = activeToggle === item.id;

        return (
          <li key={item.id} style={{ fontWeight: isActive ? 700 : 400 }}>
            {item.content}
            <button
              onClick={() =>
                setActiveToggle((prev) => (prev === item.id ? null : item.id))
              }
              className={`w-12 h-6 flex items-center rounded-full p-1 ${
                isActive ? "bg-green-400" : "bg-gray-300"
              } transition-colors duration-300`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 transform ${
                  isActive ? "translate-x-0" : "translate-x-7"
                }`}
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
