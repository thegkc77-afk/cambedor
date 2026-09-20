import React from 'react';

export default function Stats() {
  const statsList = [
    { number: '500+', label: 'STUDENTS', isGreen: false },
    { number: '30+', label: 'CAMPUSES', isGreen: false },
    { number: '20+', label: 'COMMUNITIES', isGreen: false },
    { number: 'Growing', label: 'STARTUP NETWORK', isGreen: true },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statsList.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className={`stat-number ${stat.isGreen ? 'green' : 'dark'}`}>
                {stat.number}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
