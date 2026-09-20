import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { DashboardHeader } from './DashboardHeader';

export const DashboardLayout = ({ children }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-bg-soft)' }}>
      {/* Desktop Sidebar */}
      <div className="desktop-sidebar">
        <Sidebar isMobileOpen={false} onCloseMobile={() => {}} />
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(17, 24, 43, 0.5)',
          zIndex: 100,
          display: 'flex'
        }}>
          <div style={{ width: '260px', backgroundColor: '#FFFFFF', height: '100%' }}>
            <Sidebar isMobileOpen={true} onCloseMobile={() => setIsMobileOpen(false)} />
          </div>
          <div style={{ flex: 1 }} onClick={() => setIsMobileOpen(false)} />
        </div>
      )}

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <DashboardHeader onToggleMobile={() => setIsMobileOpen(true)} />
        <main style={{ flex: 1, padding: '1.5rem', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          {children}
        </main>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
