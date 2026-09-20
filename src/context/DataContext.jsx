import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialCampaigns } from '../data/campaigns';
import { initialStudents } from '../data/students';
import { initialCompanies } from '../data/companies';
import { initialApplications } from '../data/applications';
import { initialActivities } from '../data/activities';
import { initialNotifications } from '../data/notifications';
import { initialAchievements } from '../data/achievements';

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  // LocalStorage state management
  const [campaigns, setCampaigns] = useState(() => {
    const saved = localStorage.getItem('cambedor_campaigns');
    return saved ? JSON.parse(saved) : initialCampaigns;
  });

  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('cambedor_students');
    return saved ? JSON.parse(saved) : initialStudents;
  });

  const [companies, setCompanies] = useState(() => {
    const saved = localStorage.getItem('cambedor_companies');
    return saved ? JSON.parse(saved) : initialCompanies;
  });

  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem('cambedor_applications');
    return saved ? JSON.parse(saved) : initialApplications;
  });

  const [activities, setActivities] = useState(() => {
    const saved = localStorage.getItem('cambedor_activities');
    return saved ? JSON.parse(saved) : initialActivities;
  });

  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem('cambedor_notifications');
    return saved ? JSON.parse(saved) : initialNotifications;
  });

  const [achievements, setAchievements] = useState(() => {
    const saved = localStorage.getItem('cambedor_achievements');
    return saved ? JSON.parse(saved) : initialAchievements;
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('cambedor_campaigns', JSON.stringify(campaigns));
  }, [campaigns]);

  useEffect(() => {
    localStorage.setItem('cambedor_students', JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem('cambedor_companies', JSON.stringify(companies));
  }, [companies]);

  useEffect(() => {
    localStorage.setItem('cambedor_applications', JSON.stringify(applications));
  }, [applications]);

  useEffect(() => {
    localStorage.setItem('cambedor_activities', JSON.stringify(activities));
  }, [activities]);

  useEffect(() => {
    localStorage.setItem('cambedor_notifications', JSON.stringify(notifications));
  }, [notifications]);

  // Actions
  const joinCampaign = (campaignId, student) => {
    const targetCampaign = campaigns.find(c => c.id === campaignId);
    if (!targetCampaign) return false;

    // Check if already applied
    const exists = applications.some(a => a.campaignId === campaignId && a.studentId === student.id);
    if (exists) return false;

    const newApp = {
      id: `app-${Date.now()}`,
      campaignId: targetCampaign.id,
      campaignTitle: targetCampaign.title,
      companyName: targetCampaign.companyName,
      companyLogo: targetCampaign.companyLogo,
      studentId: student.id,
      studentName: student.name,
      studentEmail: student.email,
      appliedDate: new Date().toISOString().split('T')[0],
      status: "Accepted", // Auto-join for prototype
      progress: 20,
      submittedTasks: 1,
      totalTasks: 4
    };

    setApplications(prev => [newApp, ...prev]);

    // Update campaign participants count
    setCampaigns(prev => prev.map(c => c.id === campaignId ? {
      ...c,
      participants: c.participants + 1,
      activeParticipants: c.activeParticipants + 1
    } : c));

    // Log Activity
    const newActivity = {
      id: `act-${Date.now()}`,
      actor: student.name,
      actorType: "student",
      category: "Joined",
      campaign: targetCampaign.title,
      description: `joined ${targetCampaign.title}`,
      timestamp: "Just now",
      date: "Today"
    };

    setActivities(prev => [newActivity, ...prev]);

    // Create Notification for Company
    const newNotif = {
      id: `notif-${Date.now()}`,
      role: "company",
      title: "New Student Application 📄",
      message: `${student.name} joined ${targetCampaign.title}.`,
      timestamp: "Just now",
      read: false,
      link: "/company/applications"
    };

    setNotifications(prev => [newNotif, ...prev]);

    return true;
  };

  const createCampaign = (campaignData, company) => {
    const newCampaign = {
      id: `camp-${Date.now()}`,
      title: campaignData.title,
      companyId: company.id,
      companyName: company.name,
      companyLogo: company.logo || "🏢",
      category: campaignData.category || "General",
      description: campaignData.description,
      objectives: campaignData.objectives || ["Complete assigned campaign tasks"],
      skills: campaignData.skills || ["Communication"],
      responsibilities: campaignData.responsibilities || ["Submit regular reports"],
      location: campaignData.location || "Remote",
      workType: campaignData.workType || "Part-Time",
      startDate: campaignData.startDate || new Date().toISOString().split('T')[0],
      endDate: campaignData.endDate || "2026-06-30",
      deadline: campaignData.deadline || "2026-04-15",
      reward: campaignData.reward || "Stipend + Certificate",
      participants: 0,
      activeParticipants: 0,
      completedParticipants: 0,
      status: campaignData.status || "pending",
      approval: "pending"
    };

    setCampaigns(prev => [newCampaign, ...prev]);

    // Log activity
    const newActivity = {
      id: `act-${Date.now()}`,
      actor: company.name,
      actorType: "company",
      category: "Campaigns",
      campaign: campaignData.title,
      description: `submitted new campaign proposal for approval`,
      timestamp: "Just now",
      date: "Today"
    };

    setActivities(prev => [newActivity, ...prev]);

    // Admin notification
    const newNotif = {
      id: `notif-${Date.now()}`,
      role: "admin",
      title: "New Campaign Proposal 📢",
      message: `${company.name} created "${campaignData.title}" awaiting approval.`,
      timestamp: "Just now",
      read: false,
      link: "/admin/approvals"
    };

    setNotifications(prev => [newNotif, ...prev]);

    return newCampaign;
  };

  const updateApplicationStatus = (appId, status) => {
    setApplications(prev => prev.map(a => a.id === appId ? { ...a, status } : a));
  };

  const approveCompany = (companyId) => {
    setCompanies(prev => prev.map(c => c.id === companyId ? { ...c, status: 'verified', verified: true } : c));
  };

  const rejectCompany = (companyId) => {
    setCompanies(prev => prev.map(c => c.id === companyId ? { ...c, status: 'suspended', verified: false } : c));
  };

  const approveCampaign = (campaignId) => {
    setCampaigns(prev => prev.map(c => c.id === campaignId ? { ...c, approval: 'approved', status: 'active' } : c));
  };

  const rejectCampaign = (campaignId) => {
    setCampaigns(prev => prev.map(c => c.id === campaignId ? { ...c, approval: 'rejected', status: 'rejected' } : c));
  };

  const markNotificationRead = (notifId) => {
    setNotifications(prev => prev.map(n => n.id === notifId ? { ...n, read: true } : n));
  };

  return (
    <DataContext.Provider value={{
      campaigns,
      students,
      companies,
      applications,
      activities,
      notifications,
      achievements,
      joinCampaign,
      createCampaign,
      updateApplicationStatus,
      approveCompany,
      rejectCompany,
      approveCampaign,
      rejectCampaign,
      markNotificationRead
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
