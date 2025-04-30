import React from "react";

const modules = import.meta.glob<{
  default: React.ComponentType;
}>(
  [
    "../components/examples/*.tsx", // 1. 바로 아래 단일 파일
    "../components/examples/*/index.tsx", // 2. 폴더 안 index.tsx
  ],
  { eager: true }
);

export const exampleRoutes = Object.entries(modules).map(([path, module]) => {
  const segments = path.split("/");

  let name: string;

  if (segments[segments.length - 1] === "index.tsx") {
    // 폴더/index.tsx인 경우
    name = segments[segments.length - 2];
  } else {
    // 단일 파일 (예: Counter.tsx)
    name = segments[segments.length - 1].replace(".tsx", "");
  }

  return {
    path: `/examples/${name.toLowerCase()}`,
    element: React.createElement(module.default),
    name,
  };
});
