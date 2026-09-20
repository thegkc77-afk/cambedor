import React from 'react';

export const Stats = () => {
  const statsList = [
    { label: 'ACTIVE STUDENTS', value: '500+' },
    { label: 'PARTNER STARTUPS', value: '30+' },
    { label: 'LIVE CAMPAIGNS', value: '20+' },
    { label: 'COMPLETED ACTIVITIES', value: '1,240+' }
  ];

  return (
    <section style={{ padding: '3rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {statsList.map((stat, idx) => (
            <div key={idx} style={{ padding: '1rem' }}>
              <p style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: 'var(--color-deep-navy)',
                lineHeight: '1.2',
                marginBottom: '0.25rem'
              }}>
                {stat.value}
              </p>
              <p style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase'
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
