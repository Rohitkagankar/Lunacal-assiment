import React, { useState } from 'react';
import './TabsWidget.css';

const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  return (
    <div className="widget widget-tabs">
      <div className="tabs">
        {['About Me', 'Experiences', 'Recommended'].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="content">
        {activeTab === 'About Me' && (
          <p>Hello! I'm Rohit, your sales rep here from Salesforce...</p>
        )}
        {activeTab === 'Experiences' && <p>Experience content goes here...</p>}
        {activeTab === 'Recommended' && <p>Recommended content goes here...</p>}
      </div>
    </div>
  );
};

export default TabsWidget;
