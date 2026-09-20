import React from 'react';

export const DataTable = ({ columns, data, emptyMessage = 'No data available' }) => {
  if (!data || data.length === 0) {
    return (
      <div style={{
        padding: '2.5rem',
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        color: 'var(--color-text-secondary)',
        fontSize: '0.875rem'
      }}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <div style={{
      width: '100%',
      overflowX: 'auto',
      backgroundColor: '#FFFFFF',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
        <thead>
          <tr style={{ backgroundColor: 'var(--color-bg-soft)', borderBottom: '1px solid var(--color-border)' }}>
            {columns.map((col, idx) => (
              <th
                key={idx}
                style={{
                  padding: '0.875rem 1.25rem',
                  fontWeight: '600',
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={row.id || rowIndex}
              style={{
                borderBottom: rowIndex === data.length - 1 ? 'none' : '1px solid var(--color-border-light)',
                transition: 'background-color 0.15s ease'
              }}
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} style={{ padding: '0.875rem 1.25rem', verticalAlign: 'middle' }}>
                  {col.render ? col.render(row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
