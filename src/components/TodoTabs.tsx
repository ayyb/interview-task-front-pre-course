import React from "react";

interface TodoTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TodoTabs: React.FC<TodoTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <button onClick={() => setActiveTab("all")} >
        ALL
      </button>
      <button onClick={() => setActiveTab("todo")} >
        TODO
      </button>
      <button onClick={() => setActiveTab("done")} >
        DONE
      </button>
    </div>
  );
};

export default TodoTabs;