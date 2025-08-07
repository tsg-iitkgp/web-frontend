import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./NavigationTabs.css";

const NavigationTabs = () => {
  const history = useHistory();
  const location = useLocation();

  const tabs = [
    { id: "about", label: "About" },
    { id: "posts", label: "Posts" },
    { id: "event", label: "Event" },
    { id: "team", label: "Team" },
  ];

  // Get tab from query string
  const params = new URLSearchParams(location.search);
  const activeTab = params.get("tab") || "about";

  const handleTabClick = (tabId) => {
    params.set("tab", tabId);
    history.replace({ search: params.toString() });
  };

  return (
    <div className='tabs-container'>
      <div className='tabs-wrapper'>
        <div className='tabs-list'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationTabs;
