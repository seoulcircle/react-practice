// src/router/exampleRoutes.ts
import React from "react";

const modules = import.meta.glob<{
  default: React.ComponentType;
}>("../components/examples/*.tsx", { eager: true });
console.log(modules);
export const exampleRoutes = Object.entries(modules).map(([path, module]) => {
  const name = path.split("/").pop()!.replace(".tsx", "");

  return {
    path: `/examples/${name.toLowerCase()}`, // 실제 라우트 경로
    element: React.createElement(module.default),
    name, // UI에 표시 될 이름
  };
});
