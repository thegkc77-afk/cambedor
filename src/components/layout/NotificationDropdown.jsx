import React, { useState } from 'react';
import { Bell, Check, ExternalLink } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { notifications, markNotificationRead } = useData();
  const { role } = useAuth();
  const navigate = useNavigate();

  const roleNotifs = notifications.filter(n => n.role === role || n.role === 'all');
  const unreadCount = roleNotifs.filter(n => !n.read).length;

  const handleNotifClick = (notif) => {
    markNotificationRead(notif.id);
    if (notif.link) {
      navigate(notif.link);
      setIsOpen(false);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-bg-soft)',
          border: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'var(--color-text-secondary)',
          position: 'relative'
        }}
      >
        <Bell size={18} />
        {unreadCount > 0 && (
          <span style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary-green)',
            color: '#111827',
            fontSize: '0.6875rem',
            fontWeight: '800',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          right: 0,
          top: '48px',
          width: '320px',
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 100,
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '0.875rem 1rem',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--color-bg-soft)'
          }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>
              Notifications
            </h4>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
              {unreadCount} unread
            </span>
          </div>

          <div style={{ maxHeight: '320px', overflowY: 'auto' }}>
            {roleNotifs.length === 0 ? (
              <div style={{ padding: '2rem 1rem', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.8125rem' }}>
                No notifications right now
              </div>
            ) : (
              roleNotifs.map((notif) => (
                <div
                  key={notif.id}
                  onClick={() => handleNotifClick(notif)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderBottom: '1px solid var(--color-border-light)',
                    backgroundColor: notif.read ? '#FFFFFF' : 'var(--color-soft-green)',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.25rem' }}>
                    <p style={{ fontSize: '0.8125rem', fontWeight: notif.read ? '600' : '700', color: 'var(--color-text-primary)' }}>
                      {notif.title}
                    </p>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>
                      {notif.timestamp}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', lineHeight: '1.4' }}>
                    {notif.message}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
