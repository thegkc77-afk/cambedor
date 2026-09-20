import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Compass,
  Briefcase,
  FileCheck,
  Activity,
  Award,
  Users,
  User,
  Settings,
  LogOut,
  PlusCircle,
  BarChart3,
  Building2,
  CheckSquare,
  Bell,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Sidebar = ({ isMobileOpen, onCloseMobile }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const role = user?.role || 'student';

  const getRoleNav = () => {
    switch (role) {
      case 'student':
        return [
          { label: 'Dashboard', path: '/student/dashboard', icon: LayoutDashboard },
          { label: 'Opportunities', path: '/student/opportunities', icon: Compass },
          { label: 'My Campaigns', path: '/student/campaigns', icon: Briefcase },
          { label: 'Applications', path: '/student/applications', icon: FileCheck },
          { label: 'Activity Log', path: '/student/activity', icon: Activity },
          { label: 'Achievements', path: '/student/achievements', icon: Award },
          { label: 'Community', path: '/student/community', icon: Users },
          { label: 'My Profile', path: '/student/profile', icon: User },
        ];
      case 'company':
        return [
          { label: 'Dashboard', path: '/company/dashboard', icon: LayoutDashboard },
          { label: 'Campaigns', path: '/company/campaigns', icon: Briefcase },
          { label: 'Create Campaign', path: '/company/campaigns/create', icon: PlusCircle },
          { label: 'Students', path: '/company/students', icon: Users },
          { label: 'Applications', path: '/company/applications', icon: FileCheck },
          { label: 'Activity Stream', path: '/company/activity', icon: Activity },
          { label: 'Analytics', path: '/company/analytics', icon: BarChart3 },
          { label: 'Company Profile', path: '/company/profile', icon: Building2 },
        ];
      case 'admin':
        return [
          { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
          { label: 'Students', path: '/admin/students', icon: Users },
          { label: 'Companies', path: '/admin/companies', icon: Building2 },
          { label: 'Campaigns', path: '/admin/campaigns', icon: Briefcase },
          { label: 'Approvals', path: '/admin/approvals', icon: CheckSquare },
          { label: 'Applications', path: '/admin/applications', icon: FileCheck },
          { label: 'Platform Activity', path: '/admin/activity', icon: Activity },
          { label: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
        ];
      default:
        return [];
    }
  };

  const navItems = getRoleNav();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const roleLabel = role.toUpperCase();

  return (
    <aside style={{
      width: '260px',
      backgroundColor: '#FFFFFF',
      borderRight: '1px solid var(--color-border)',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      position: 'sticky',
      top: 0,
      zIndex: 40
    }}>
      {/* Brand Logo Header */}
      <div style={{
        padding: '1.5rem',
        borderBottom: '1px solid var(--color-border-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--color-deep-navy)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-primary-green)',
            fontWeight: '800',
            fontSize: '1.125rem'
          }}>
            C
          </div>
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--color-deep-navy)' }}>
              CAMBEDOR
            </span>
            <span style={{
              display: 'block',
              fontSize: '0.65rem',
              fontWeight: '700',
              color: '#84D400',
              letterSpacing: '0.08em'
            }}>
              {roleLabel} PANEL
            </span>
          </div>
        </div>
      </div>

      {/* Nav Menu */}
      <nav style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
        <p style={{
          fontSize: '0.6875rem',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: 'var(--color-text-muted)',
          marginBottom: '0.75rem',
          paddingLeft: '0.5rem'
        }}>
          Navigation
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onCloseMobile}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.625rem 0.875rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? '#2D6A00' : 'var(--color-text-secondary)',
                  backgroundColor: isActive ? 'var(--color-soft-green)' : 'transparent',
                  borderLeft: isActive ? '3px solid var(--color-primary-green)' : '3px solid transparent',
                  transition: 'all 0.15s ease'
                })}
              >
                {({ isActive }) => (
                  <>
                    <Icon size={18} color={isActive ? '#84D400' : 'var(--color-text-secondary)'} />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Footer Settings & Logout */}
      <div style={{
        padding: '1rem',
        borderTop: '1px solid var(--color-border-light)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem'
      }}>
        <NavLink
          to={`/${role}/settings`}
          onClick={onCloseMobile}
          style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.625rem 0.875rem',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.875rem',
            fontWeight: isActive ? '700' : '500',
            color: isActive ? '#2D6A00' : 'var(--color-text-secondary)',
            backgroundColor: isActive ? 'var(--color-soft-green)' : 'transparent'
          })}
        >
          <Settings size={18} />
          <span>Settings</span>
        </NavLink>

        <button
          onClick={handleLogout}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.625rem 0.875rem',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: 'var(--color-error)',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
            textAlign: 'left'
          }}
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
