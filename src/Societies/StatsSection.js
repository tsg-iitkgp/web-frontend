import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  return (
    <div className="stats-container">
      <div className="stat-item">
        <div className="stat-number">260+</div>
        <div className="stat-label">PDS Problems</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">17+</div>
        <div className="stat-label">Articles</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">15+</div>
        <div className="stat-label">Events</div>
      </div>
    </div>
  );
};

export default StatsSection;