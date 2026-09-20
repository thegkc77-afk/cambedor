import React, { useState } from 'react';
import { Menu, Search, User, LogOut, Settings, ExternalLink } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Avatar } from '../common/Avatar';
import { NotificationDropdown } from './NotificationDropdown';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';

export const DashboardHeader = ({ onToggleMobile }) => {
  const { user, logout } = useAuth();
  const { campaigns, students, companies } = useData();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Search logic across campaigns, students, companies
  const filteredCampaigns = searchQuery.trim() ? campaigns.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase())) : [];
  const filteredStudents = searchQuery.trim() ? students.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase())) : [];
  const filteredCompanies = searchQuery.trim() ? companies.filter(co => co.name.toLowerCase().includes(searchQuery.toLowerCase())) : [];

  const hasResults = filteredCampaigns.length > 0 || filteredStudents.length > 0 || filteredCompanies.length > 0;

  return (
    <header style={{
      height: '64px',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid var(--color-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1.5rem',
      position: 'sticky',
      top: 0,
      zIndex: 30
    }}>
      {/* Mobile Menu Toggle & Global Search */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
        <button
          onClick={onToggleMobile}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-primary)'
          }}
          className="mobile-hamburger-btn"
        >
          <Menu size={22} />
        </button>

        {/* Global Search Container */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', color: 'var(--color-text-muted)' }} />
            <input
              type="text"
              placeholder="Search campaigns, students, companies..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchResults(true);
              }}
              onFocus={() => setShowSearchResults(true)}
              style={{
                width: '100%',
                padding: '0.45rem 1rem 0.45rem 2.25rem',
                backgroundColor: 'var(--color-bg-soft)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.8125rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Search Dropdown Overlay */}
          {showSearchResults && searchQuery.trim() !== '' && (
            <div style={{
              position: 'absolute',
              top: '44px',
              left: 0,
              width: '100%',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-lg)',
              maxHeight: '300px',
              overflowY: 'auto',
              zIndex: 150,
              padding: '0.5rem'
            }}>
              {!hasResults ? (
                <div style={{ padding: '1rem', textAlign: 'center', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                  No matching results
                </div>
              ) : (
                <>
                  {filteredCampaigns.length > 0 && (
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ fontSize: '0.6875rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-text-muted)', padding: '0.25rem 0.5rem' }}>
                        Campaigns
                      </p>
                      {filteredCampaigns.slice(0, 3).map(c => (
                        <div
                          key={c.id}
                          onClick={() => {
                            setShowSearchResults(false);
                            setSearchQuery('');
                            navigate(`/${user.role}/opportunities`);
                          }}
                          style={{
                            padding: '0.375rem 0.5rem',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.8125rem',
                            cursor: 'pointer',
                            color: 'var(--color-text-primary)'
                          }}
                        >
                          📢 {c.title}
                        </div>
                      ))}
                    </div>
                  )}

                  {filteredStudents.length > 0 && (
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ fontSize: '0.6875rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-text-muted)', padding: '0.25rem 0.5rem' }}>
                        Students
                      </p>
                      {filteredStudents.slice(0, 3).map(s => (
                        <div
                          key={s.id}
                          onClick={() => {
                            setShowSearchResults(false);
                            setSearchQuery('');
                            navigate(`/${user.role}/students`);
                          }}
                          style={{
                            padding: '0.375rem 0.5rem',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.8125rem',
                            cursor: 'pointer'
                          }}
                        >
                          🎓 {s.name} ({s.college})
                        </div>
                      ))}
                    </div>
                  )}

                  {filteredCompanies.length > 0 && (
                    <div>
                      <p style={{ fontSize: '0.6875rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-text-muted)', padding: '0.25rem 0.5rem' }}>
                        Companies
                      </p>
                      {filteredCompanies.slice(0, 3).map(co => (
                        <div
                          key={co.id}
                          onClick={() => {
                            setShowSearchResults(false);
                            setSearchQuery('');
                            navigate(`/${user.role}/companies`);
                          }}
                          style={{
                            padding: '0.375rem 0.5rem',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.8125rem',
                            cursor: 'pointer'
                          }}
                        >
                          🏢 {co.name}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Right Controls: Notifications & User Avatar Menu */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <NotificationDropdown />

        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.25rem'
            }}
          >
            <Avatar src={user?.avatar} name={user?.name} logo={user?.logo} size={36} />
            <div style={{ textAlign: 'left' }} className="user-text-details">
              <p style={{ fontSize: '0.8125rem', fontWeight: '700', color: 'var(--color-text-primary)', lineHeight: 1.2 }}>
                {user?.name}
              </p>
              <p style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', textTransform: 'capitalize' }}>
                {user?.role}
              </p>
            </div>
          </button>

          {showUserMenu && (
            <div style={{
              position: 'absolute',
              right: 0,
              top: '48px',
              width: '200px',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 100,
              padding: '0.5rem'
            }}>
              <div style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid var(--color-border-light)' }}>
                <p style={{ fontSize: '0.8125rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>
                  {user?.name}
                </p>
                <p style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>
                  {user?.email}
                </p>
              </div>

              <button
                onClick={() => {
                  setShowUserMenu(false);
                  navigate(`/${user.role}/profile`);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 0.75rem',
                  background: 'none',
                  border: 'none',
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-primary)',
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <User size={15} />
                <span>My Profile</span>
              </button>

              <button
                onClick={() => {
                  setShowUserMenu(false);
                  navigate(`/${user.role}/settings`);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 0.75rem',
                  background: 'none',
                  border: 'none',
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-primary)',
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <Settings size={15} />
                <span>Settings</span>
              </button>

              <div style={{ borderTop: '1px solid var(--color-border-light)', marginTop: '0.25rem', paddingTop: '0.25rem' }}>
                <button
                  onClick={() => {
                    logout();
                    navigate('/login');
                  }}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0.75rem',
                    background: 'none',
                    border: 'none',
                    fontSize: '0.8125rem',
                    color: 'var(--color-error)',
                    cursor: 'pointer',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <LogOut size={15} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-hamburger-btn {
            display: flex !important;
          }
          .user-text-details {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
