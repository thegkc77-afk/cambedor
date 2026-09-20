import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  type = 'button',
  icon: Icon = null,
  className = '',
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--color-primary-green)',
          color: '#111827',
          border: '1px solid #75BD00',
          fontWeight: '600'
        };
      case 'secondary':
        return {
          backgroundColor: '#FFFFFF',
          color: 'var(--color-text-primary)',
          border: '1px solid var(--color-border)',
          fontWeight: '500'
        };
      case 'dark':
        return {
          backgroundColor: 'var(--color-deep-navy)',
          color: '#FFFFFF',
          border: '1px solid #11182B',
          fontWeight: '600'
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-text-primary)',
          border: '1px solid var(--color-border)',
          fontWeight: '500'
        };
      case 'danger':
        return {
          backgroundColor: '#FEE2E2',
          color: '#991B1B',
          border: '1px solid #FCA5A5',
          fontWeight: '600'
        };
      default:
        return {};
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return { padding: '0.375rem 0.75rem', fontSize: '0.8125rem' };
      case 'lg':
        return { padding: '0.75rem 1.5rem', fontSize: '1rem' };
      case 'md':
      default:
        return { padding: '0.5rem 1rem', fontSize: '0.875rem' };
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        borderRadius: 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        transition: 'all 0.15s ease',
        boxShadow: variant === 'primary' ? '0 2px 4px rgba(132, 212, 0, 0.25)' : 'none',
        ...getVariantStyles(),
        ...getSizeStyles()
      }}
      className={`btn-${variant} ${className}`}
      {...props}
    >
      {Icon && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
      {children}
    </button>
  );
};
