import React from "react";
import {
  TabsWrapper,
} from "../styles";

interface TodoTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TodoTabs: React.FC<TodoTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
      <TabsWrapper>
        <button onClick={() => setActiveTab("all")} className={activeTab === "all" ? "active" : ""}>All</button>
        <button onClick={() => setActiveTab("todo")} className={activeTab === "todo" ? "active" : ""}>To Do</button>
        <button onClick={() => setActiveTab("done")} className={activeTab === "done" ? "active" : ""}>Done</button>
      </TabsWrapper>
  );
};

export default TodoTabs;
