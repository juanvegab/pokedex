import React, { useState } from "react";

interface TabItem {
  id: string;
  label: string;
  children: React.ReactNode;
}

interface TabMenuProps {
  tabs: TabItem[];
}

const TabMenu = ({ tabs }: TabMenuProps) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const inActiveStyles = "bg-white text-blue-950";
  const activeStyles = "bg-blue-950 text-white";

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full sm:w-2/3 md:w-2/5 flex rounded-xl overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 hover:underline font-bold py-5 px-4 ${
                selectedTab === tab.id ? activeStyles : inActiveStyles
              }`}
              onClick={() => setSelectedTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="">
        {tabs.map((tab) =>
          selectedTab === tab.id ? <div key={tab.id}>{tab.children}</div> : null
        )}
      </div>
    </div>
  );
};

export default TabMenu;
