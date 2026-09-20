import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

export const Logo = ({ size = 34, showText = true, textSublabel = null, linkTo = '/' }) => {
  const content = (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem' }}>
      <img
        src={logoImg}
        alt="Cambedor Logo"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '8px',
          objectFit: 'cover',
          boxShadow: 'var(--shadow-sm)',
          flexShrink: 0
        }}
      />
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{
            fontSize: `${size * 0.58}px`,
            fontWeight: '800',
            letterSpacing: '-0.02em',
            color: 'var(--color-deep-navy)',
            lineHeight: 1.1
          }}>
            CAMBEDOR
          </span>
          {textSublabel && (
            <span style={{
              fontSize: '0.65rem',
              fontWeight: '700',
              color: '#84D400',
              letterSpacing: '0.08em',
              lineHeight: 1
            }}>
              {textSublabel}
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (linkTo) {
    return <Link to={linkTo} style={{ textDecoration: 'none' }}>{content}</Link>;
  }

  return content;
};
