import { useState } from "react";

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
};

export default function Pagination({
  totalItems,
  itemsPerPage,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  console.log(currentPage);
  // 페이지별로 보여지는 아이템 리스트
  const items = Array.from(
    { length: itemsPerPage },
    (_, i) => `아이템 ${(currentPage - 1) * 10 + i + 1}}`
  );

  // 페이지 번호 배열
  const maxVisible = 5;
  const totalPage = Math.ceil(totalItems / itemsPerPage);
  const half = Math.floor(maxVisible / 2);

  // 기본 범위
  let pageStart = currentPage - half;
  let pageEnd = currentPage + half;

  // 범위 벗어났을 때 예외처리
  if (pageStart < 1) {
    pageStart = 1;
    pageEnd = Math.min(totalPage, pageStart + maxVisible - 1);
  }
  if (pageEnd > totalPage) {
    pageEnd = totalPage;
    pageStart = Math.max(1, pageEnd - maxVisible + 1);
  }

  // 전체 페이지 수
  const pageNums = [];
  for (let i = pageStart; i <= pageEnd; i++) {
    pageNums.push(i);
  }

  return (
    <>
      <div>
        <ul>
          {items.map((item) => (
            <li>This is list no.{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul style={{ display: "flex", listStyle: "none", gap: "8px" }}>
          {pageNums.map((num) => (
            <li key={num}>
              <button
                onClick={() => setCurrentPage(num)}
                aria-current={num === currentPage ? "page" : undefined}
              >
                {num}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
