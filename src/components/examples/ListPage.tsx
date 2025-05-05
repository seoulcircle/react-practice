// pages/ListPage.tsx or App.tsx
import Pagination from "./Pagination";

export default function ListPage() {
  return (
    <>
      <h1>리스트</h1>
      <Pagination totalItems={100} itemsPerPage={10} />
    </>
  );
}
