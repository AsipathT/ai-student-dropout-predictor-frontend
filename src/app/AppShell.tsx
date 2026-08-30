import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  Menu,
  Bell,
  Settings,
  Brain,
  BarChart3,
  Users,
  Heart,
  MessageSquare,
  Activity,
  TrendingUp,
  Shield,
  Layers,
  GitBranch,
  Target,
  ClipboardList,
  BookOpen,
  Package,
  FileText,
  UserCheck,
  PanelLeftClose,
  PanelLeft,
} from 'lucide-react';
import { usePipeline } from '@/hooks/usePipeline';
import RoleSwitcher from '@/components/shared/RoleSwitcher';

interface NavItem {
  label: string;
  path: string;
  icon: React.ElementType;
}

interface NavSection {
  id: string;
  label: string;
  shortLabel: string;
  accent: string;
  activeBorder: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    id: 'c1',
    label: 'C1 — Affective State Detection',
    shortLabel: 'C1',
    accent: 'text-violet-400',
    activeBorder: 'border-violet-400',
    items: [
      { label: 'Cohort Affective Climate', path: '/c1/cohort', icon: BarChart3 },
      { label: 'Student Affective Profile', path: '/c1/student/IT23198234', icon: Heart },
      { label: 'Model Explainability', path: '/c1/explainability', icon: Brain },
    ],
  },
  {
    id: 'c2',
    label: 'C2 — Behavioural Engagement',
    shortLabel: 'C2',
    accent: 'text-blue-400',
    activeBorder: 'border-blue-400',
    items: [
      { label: 'Cohort Engagement Dashboard', path: '/c2/cohort', icon: Activity },
      { label: 'Student Temporal Analysis', path: '/c2/student/IT23198234', icon: TrendingUp },
    ],
  },
  {
    id: 'c3',
    label: 'C3 — Multimodal Risk Prediction',
    shortLabel: 'C3',
    accent: 'text-indigo-400',
    activeBorder: 'border-indigo-400',
    items: [
      { label: 'Cohort Risk Dashboard', path: '/c3/cohort', icon: Shield },
      { label: 'Student Risk Fusion Profile', path: '/c3/student/IT23198234', icon: Layers },
      { label: 'LSTM Model Explainability', path: '/c3/explainability', icon: GitBranch },
      { label: 'Pipeline Integration & Routing', path: '/c3/pipeline', icon: GitBranch },
    ],
  },
  {
    id: 'c4',
    label: 'C4 — Adaptive Intervention',
    shortLabel: 'C4',
    accent: 'text-purple-400',
    activeBorder: 'border-purple-400',
    items: [
      { label: 'Student Intervention Dashboard', path: '/c4/student/IT23198234', icon: Target },
      { label: 'Recommendation & Comparison', path: '/c4/recommendation/IT23198234', icon: ClipboardList },
      { label: 'Outcome Monitoring', path: '/c4/outcome/IT23198234', icon: FileText },
      { label: 'Adaptive History', path: '/c4/adaptive-history/IT23198234', icon: GitBranch },
      { label: 'Student List', path: '/c4/students', icon: Users },
      { label: 'Intervention Library', path: '/c4/library', icon: BookOpen },
      { label: 'Resource Availability', path: '/c4/resources', icon: Package },
      { label: 'Reports & Analytics', path: '/c4/reports', icon: BarChart3 },
    ],
  },
];

function getBreadcrumb(pathname: string): string {
  for (const section of navSections) {
    for (const item of section.items) {
      if (pathname.startsWith(item.path.split('/').slice(0, 3).join('/'))) {
        const sectionPrefix = section.shortLabel;
        return `${sectionPrefix} › ${item.label}`;
      }
    }
  }
  return 'Dashboard';
}

function getActiveSection(pathname: string): string {
  if (pathname.startsWith('/c1')) return 'c1';
  if (pathname.startsWith('/c2')) return 'c2';
  if (pathname.startsWith('/c3')) return 'c3';
  if (pathname.startsWith('/c4')) return 'c4';
  return 'c1';
}

export default function AppShell() {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    c1: true,
    c2: true,
    c3: true,
    c4: true,
  });
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentRole, setCurrentRole } = usePipeline();

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const activeSection = getActiveSection(location.pathname);
  const breadcrumb = getBreadcrumb(location.pathname);

  return (
    <div className="flex h-screen overflow-hidden bg-workspace">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-sidebar text-white z-40 flex flex-col transition-all duration-300 ${
          collapsed ? 'w-16' : 'w-64'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-700/50">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center flex-shrink-0">
            <Brain className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <div className="text-sm font-semibold text-white truncate">
                EWS Dropout Prediction
              </div>
              <div className="text-xs text-slate-400 font-mono">J26-IT-349</div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-2 px-2">
          {navSections.map((section) => (
            <div key={section.id} className="mb-1">
              <button
                onClick={() => toggleSection(section.id)}
                className={`w-full flex items-center gap-2 px-2 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors ${
                  activeSection === section.id
                    ? `${section.accent} bg-slate-800/50`
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {collapsed ? (
                  <span className={`text-sm font-bold ${section.accent}`}>
                    {section.shortLabel}
                  </span>
                ) : (
                  <>
                    {expandedSections[section.id] ? (
                      <ChevronDown className="w-3.5 h-3.5 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
                    )}
                    <span className="truncate">{section.label}</span>
                  </>
                )}
              </button>

              {(expandedSections[section.id] || collapsed) && (
                <div className={collapsed ? 'space-y-0.5 mt-1' : 'space-y-0.5 ml-2 mt-1'}>
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.path);
                    return (
                      <button
                        key={item.path}
                        onClick={() => navigate(item.path)}
                        title={collapsed ? item.label : undefined}
                        className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                          active
                            ? `sidebar-item-active ${section.activeBorder} bg-slate-800/80 text-white`
                            : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        {!collapsed && (
                          <span className="truncate">{item.label}</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom section - User & Role */}
        <div className="border-t border-slate-700/50 p-3">
          {!collapsed ? (
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-xs font-semibold">
                  SP
                </div>
                <div className="overflow-hidden">
                  <div className="text-sm font-medium text-white truncate">
                    Dr. Sarah Perera
                  </div>
                </div>
              </div>
              <RoleSwitcher
                currentRole={currentRole}
                onRoleChange={setCurrentRole}
              />
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-xs font-semibold">
                SP
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          collapsed ? 'ml-16' : 'ml-64'
        }`}
      >
        {/* Top Bar */}
        <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
            >
              {collapsed ? (
                <PanelLeft className="w-5 h-5" />
              ) : (
                <PanelLeftClose className="w-5 h-5" />
              )}
            </button>
            <div>
              <h1 className="text-sm font-semibold text-slate-900">{breadcrumb}</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              System Active
            </div>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full" />
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Notification dropdown */}
        {showNotifications && (
          <div className="absolute top-14 right-6 w-80 bg-white border border-slate-200 rounded-xl shadow-lg z-50 animate-fade-in">
            <div className="p-4 border-b border-slate-200">
              <h3 className="text-sm font-semibold">Notifications</h3>
            </div>
            <div className="p-2 max-h-64 overflow-y-auto">
              {[
                { text: 'Critical risk alert: Kasun Perera (84%)', time: '2 min ago', urgent: true },
                { text: 'New intervention outcome recorded', time: '15 min ago', urgent: false },
                { text: 'C2 trajectory update: 3 students declined', time: '1 hr ago', urgent: false },
                { text: 'Recommendation approved for student IT23145870', time: '2 hrs ago', urgent: false },
              ].map((n, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg mb-1 cursor-pointer hover:bg-slate-50 ${
                    n.urgent ? 'bg-rose-50' : ''
                  }`}
                  onClick={() => setShowNotifications(false)}
                >
                  <p className="text-sm text-slate-700">{n.text}</p>
                  <p className="text-xs text-slate-400 mt-1">{n.time}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
