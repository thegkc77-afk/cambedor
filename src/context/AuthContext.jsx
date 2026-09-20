import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const DEMO_USERS = {
  student: {
    id: "std-1",
    name: "Alex Johnson",
    email: "alex.johnson@university.edu",
    role: "student",
    college: "Stanford University",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  company: {
    id: "cmp-1",
    name: "TechPulse Labs",
    email: "contact@techpulse.io",
    role: "company",
    industry: "AI & Developer Tools",
    logo: "⚡",
    verified: true
  },
  admin: {
    id: "adm-1",
    name: "Platform Admin",
    email: "admin@cambedor.com",
    role: "admin",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('cambedor_user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('cambedor_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('cambedor_user');
    }
  }, [user]);

  const login = (userData) => {
    setUser(userData);
  };

  const loginAsDemo = (role) => {
    const demoUser = DEMO_USERS[role] || DEMO_USERS.student;
    setUser(demoUser);
    return demoUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cambedor_user');
  };

  const updateProfile = (updatedFields) => {
    setUser(prev => prev ? { ...prev, ...updatedFields } : null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      role: user?.role || null,
      isAuthenticated: !!user,
      login,
      loginAsDemo,
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
