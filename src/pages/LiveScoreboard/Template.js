import React, { useState } from 'react';
import Layout from '../../components/Layouts/Layout';
import Styles from './template.module.css';
import RenderContent from './RenderContent.js';

export default function Template() {
  const [activeFilter, setActiveFilter] = useState('today');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <Layout>
      <div style={{ margin: '5rem 0 0 0' }}>
        <h1 className={Styles.title}>Cricket</h1>
        <div className={Styles.filters}>
          <button
            className={`${Styles.button} ${activeFilter === 'today' ? Styles.active : Styles.normal}`}
            onClick={() => handleFilterClick('today')}
          >
            Today's Matches
          </button>
          <button
            className={`${activeFilter === 'upcoming' ? Styles.active : Styles.normal}`}
            onClick={() => handleFilterClick('upcoming')}
          >
            Upcoming Matches
          </button>
          <button
            className={`${activeFilter === 'past' ? Styles.active : Styles.normal}`}
            onClick={() => handleFilterClick('past')}
          >
            Past Matches
          </button>
          <button
            className={`${activeFilter === 'points' ? Styles.active : Styles.normal}`}
            onClick={() => handleFilterClick('points')}
          >
            Points Table
          </button>
        </div>
        <RenderContent activeFilter={activeFilter}/>
      </div>
    </Layout>
  );
}
