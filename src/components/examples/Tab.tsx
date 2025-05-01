import { useState } from "react";

type TabItem = {
  id: string;
  content: string;
};
const tabList: TabItem[] = [
  { id: "tab1", content: "this is tab 1" },
  { id: "tab2", content: "this is tab 2" },
  { id: "tab3", content: "this is tab 3" },
];
export default function Tab() {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <>
      {tabList.map((tab) => (
        <div key={tab.id}>
          <button
            onClick={() => {
              setActiveTab(tab.id);
            }}
            style={{
              backgroundColor: tab.id === activeTab ? "red" : "inherit",
            }}
          >
            {tab.id}
          </button>
        </div>
      ))}
      {tabList.map(
        (tab) => tab.id === activeTab && <p key={tab.id}>{tab.content}</p>
      )}
    </>
  );
}

// key는 부모의 최상위에 있을 것
// 반복되는 것에는 꼭! key를 넣을 것
// tab.id === activeTab 조건으로 해당 콘텐츠만 렌더링
