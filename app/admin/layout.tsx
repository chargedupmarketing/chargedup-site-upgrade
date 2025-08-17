'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Zap,
  BarChart3,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  Sun,
  Moon,
  Bell,
  Search,
  Building,
  Target,
  Rocket,
  Shield,
  Globe,
  Calendar,
  FileText,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
  Plus,
  Filter,
  Download,
  Copy,
  Share2,
  Edit3,
  Eye,
  Trash2,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp,
  DollarSign,
  UserCheck,
  UserX,
  Star,
  MessageSquare,
  Video,
  Image,
  Palette,
  HelpCircle,
  CreditCard,
  Lock,
  EyeOff,
} from 'lucide-react';
import { AdminUser, clearAdminSession } from '@/lib/auth';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [financialDropdownOpen, setFinancialDropdownOpen] = useState(false);
  const [invertedMode, setInvertedMode] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if admin is authenticated
    const storedAdmin = localStorage.getItem('adminUser');
    if (storedAdmin) {
      const admin = JSON.parse(storedAdmin);
      if (admin.isAuthenticated) {
        setAdminUser(admin);
        setLoading(false);
      } else {
        router.push('/admin-login');
      }
    } else {
      router.push('/admin-login');
    }
  }, [router]);

  // Load and persist Inverted Mode preference
  useEffect(() => {
    const saved = localStorage.getItem('adminInvertedMode');
    if (saved) {
      setInvertedMode(saved === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('adminInvertedMode', String(invertedMode));
  }, [invertedMode]);

  const handleLogout = () => {
    const clearedAdmin = clearAdminSession();
    setAdminUser(clearedAdmin);
    localStorage.removeItem('adminUser');

    // Clear the cookie for middleware authentication
    document.cookie =
      'adminUser=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

    router.push('/admin-login');
  };

  const navigationItems = [
    {
      name: 'Newsletter Management',
      href: '/admin/newsletter',
      icon: Mail,
      access: ['admin', 'super_admin'],
      description: 'Manage newsletter subscribers and campaigns',
    },
    {
      name: 'Strategy Meeting Inquiries',
      href: '/admin/strategy-meetings',
      icon: Calendar,
      access: ['employee', 'admin', 'super_admin'],
      description: 'View and respond to strategy meeting requests',
    },
    {
      name: 'Enterprise Service Inquiries',
      href: '/admin/enterprise-inquiries',
      icon: Building,
      access: ['admin', 'super_admin'],
      description:
        'Manage AI Automated Cold DM and AI Marketing Platform inquiries',
    },
    {
      name: 'GoHighLevel',
      href: 'https://app.gohighlevel.com',
      icon: ExternalLink,
      access: ['employee', 'admin', 'super_admin'],
      description: 'Redirect to GoHighLevel platform',
      external: true,
    },
    {
      name: 'User Management',
      href: '/admin/users',
      icon: Users,
      access: ['super_admin'],
      description: 'Manage admin users and permissions',
    },
    {
      name: 'Analytics Dashboard',
      href: '/admin/analytics',
      icon: BarChart3,
      access: ['admin', 'super_admin'],
      description: 'View system analytics and reports',
    },
    {
      name: 'System Settings',
      href: '/admin/settings',
      icon: Settings,
      access: ['super_admin'],
      description: 'Configure system settings and preferences',
    },
  ];

  const financialServices = [
    {
      name: 'Quickbooks',
      href: 'https://quickbooks.intuit.com/',
      icon: DollarSign,
      description: 'Accounting and bookkeeping software',
    },
    {
      name: 'Relay Bank',
      href: 'https://relayfi.com/',
      icon: Building,
      description: 'Business banking and financial services',
    },
    {
      name: 'Northwest',
      href: 'https://www.northwestregisteredagent.com/',
      icon: Shield,
      description: 'Business formation and compliance services',
    },
    {
      name: 'Vercel',
      href: 'https://vercel.com/',
      icon: ExternalLink,
      description: 'Web deployment and hosting platform',
    },
    {
      name: 'Github',
      href: 'https://github.com/',
      icon: ExternalLink,
      description: 'Code repository and version control',
    },
  ];

  const filteredNavigation = navigationItems.filter(item =>
    item.access.includes(adminUser?.role || '')
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading admin panel...</div>
      </div>
    );
  }

  if (!adminUser?.isAuthenticated) {
    return null;
  }

  const handleNavigation = (href: string, external: boolean = false) => {
    if (external) {
      window.open(href, '_blank');
    } else {
      router.push(href);
      setSidebarOpen(false);
    }
  };

  const containerClass = invertedMode
    ? 'min-h-screen relative bg-white text-black'
    : 'min-h-screen relative bg-gradient-to-br from-black via-[#0b0f1a] to-black text-white';

  return (
    <div className={containerClass}>
      {/* Ambient gradient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div className="absolute -top-24 -left-24 h-64 w-64 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 bg-emerald-500/20 rounded-full blur-3xl" />
      </div>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 bottom-0 left-0 lg:top-1/2 lg:-translate-y-1/2 lg:h-[72vh] lg:left-4 z-50 w-64 ${invertedMode ? 'bg-white/70 border-black/10' : 'bg-white/5 border-white/10'} backdrop-blur-xl border transform transition-transform duration-300 ease-in-out lg:rounded-2xl lg:shadow-2xl lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* User Info */}
        <div
          className={`px-6 py-4 ${invertedMode ? 'border-b border-black/10' : 'border-b border-white/10'}`}
        >
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${invertedMode ? 'bg-black text-white' : 'bg-gradient-to-br from-cyan-400 to-emerald-400 text-black shadow-lg shadow-cyan-500/20'}`}
            >
              <span className="font-bold text-sm">
                {adminUser.name
                  .split(' ')
                  .map(n => n[0])
                  .join('')}
              </span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{adminUser.name}</p>
              <div className="flex items-center">
                <Shield
                  className={`w-3 h-3 mr-1 ${invertedMode ? 'text-emerald-600' : 'text-emerald-400'}`}
                />
                <span
                  className={`text-xs capitalize ${invertedMode ? 'text-black/60' : 'text-white/60'}`}
                >
                  {adminUser.role.replace('_', ' ')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {filteredNavigation.map(item => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, item.external)}
                  className={`w-full group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? `${invertedMode ? 'bg-black text-white' : 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-white'} border border-white/10 shadow-[0_0_20px_rgba(34,211,238,0.25)]`
                      : `${invertedMode ? 'text-black/70 hover:bg-black/5' : 'text-white/70 hover:bg-white/10'}`
                  }`}
                >
                  <Icon
                    className={`mr-3 h-5 w-5 ${isActive ? '' : invertedMode ? 'text-black/50 group-hover:text-black' : 'text-white/50 group-hover:text-white'}`}
                  />
                  <div className="text-left">
                    <p
                      className={`${isActive ? 'font-semibold' : 'font-medium'}`}
                    >
                      {item.name}
                    </p>
                    <p
                      className={`text-xs ${isActive ? 'text-white/80' : invertedMode ? 'text-black/50' : 'text-white/50'}`}
                    >
                      {item.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Financial/Business Management Section - Super Admin Only */}
        {adminUser?.role === 'super_admin' && (
          <>
            <div className="absolute bottom-24 left-0 right-0 px-3">
              <button
                onClick={() => setFinancialDropdownOpen(!financialDropdownOpen)}
                className={`w-full group flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors relative ${invertedMode ? 'text-black/70 hover:bg-black/5' : 'text-white/70 hover:bg-white/10'}`}
              >
                <div className="flex items-center">
                  <DollarSign
                    className={`mr-3 h-5 w-5 ${invertedMode ? 'text-black/50 group-hover:text-black' : 'text-white/50 group-hover:text-white'}`}
                  />
                  Financial & Business
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${invertedMode ? 'text-black/50' : 'text-white/50'} ${
                    financialDropdownOpen ? 'rotate-180' : ''
                  }`}
                />

                {financialDropdownOpen && (
                  <div
                    className={`absolute left-full top-1/2 transform -translate-y-1/2 ml-2 ${invertedMode ? 'bg-white/80 border-black/10' : 'bg-white/5 border-white/10'} backdrop-blur-xl rounded-lg shadow-lg min-w-64 z-50`}
                  >
                    <div className="p-3">
                      <div className="grid grid-cols-3 gap-2">
                        {financialServices.map(service => {
                          const Icon = service.icon;

                          return (
                            <button
                              key={service.name}
                              onClick={() =>
                                window.open(service.href, '_blank')
                              }
                              className={`group flex flex-col items-center p-2 text-xs font-medium rounded-lg transition-colors text-center ${invertedMode ? 'text-black/70 hover:bg-black/5 hover:text-black' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
                            >
                              <Icon
                                className={`mb-1 h-4 w-4 ${invertedMode ? 'text-black/50 group-hover:text-black' : 'text-white/50 group-hover:text-white'}`}
                              />
                              <div className="text-center">
                                {service.name}
                                <ExternalLink
                                  className={`ml-1 h-2 w-2 inline ${invertedMode ? 'text-black/40' : 'text-white/40'}`}
                                />
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </button>
            </div>

            {/* Inverted Mode Toggle */}
            <div className="absolute bottom-16 left-0 right-0 p-4">
              <div
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg ${invertedMode ? 'bg-black/5' : 'bg-white/10'}`}
              >
                <div className="flex items-center gap-2 text-sm">
                  {invertedMode ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                  <span>Inverted Mode</span>
                </div>
                <button
                  onClick={() => setInvertedMode(v => !v)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${invertedMode ? 'bg-black/60' : 'bg-white/30'}`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ${invertedMode ? 'translate-x-5' : 'translate-x-1'}`}
                  />
                </button>
              </div>
            </div>
          </>
        )}

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
          >
            <LogOut className="mr-3 h-5 w-5 text-gray-400" />
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-[18rem]">
        {/* Top bar */}
        <div
          className={`sticky top-0 z-30 lg:hidden ${invertedMode ? 'bg-white/80 border-b border-black/10' : 'bg-white/5 border-b border-white/10 backdrop-blur-xl'}`}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className={`${invertedMode ? 'text-black/60 hover:text-black' : 'text-white/60 hover:text-white'}`}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${invertedMode ? 'bg-black text-white' : 'bg-gradient-to-br from-cyan-400 to-emerald-400 text-black'}`}
              >
                <span className="font-bold text-lg">⚡</span>
              </div>
              <span className="ml-2 font-semibold">ChargedUp Admin</span>
            </div>
            <div className="w-6" /> {/* Spacer for centering */}
          </div>
        </div>

        {/* Page content */}
        <main
          className={`${invertedMode ? 'filter invert hue-rotate-180' : ''}`}
        >
          <div className={`${invertedMode ? 'bg-white' : 'bg-transparent'}`}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
