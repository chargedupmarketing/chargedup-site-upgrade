'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Video,
  Image,
  Settings,
  Shield,
  Menu,
  X,
  Plus,
  LogOut,
  User,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

const sidebarItems = [
  {
    id: 'chat',
    label: 'OpenAI Chat',
    icon: MessageSquare,
    href: '/dashboard/simple-page',
    description: 'AI-powered conversations',
  },
  {
    id: 'text-to-video',
    label: 'Text-to-Video AI',
    icon: Video,
    href: '/dashboard/text-to-video',
    description: 'Generate videos from text',
  },
  {
    id: 'photo-to-video',
    label: 'Photo-to-Video AI',
    icon: Image,
    href: '/dashboard/photo-to-video',
    description: 'Transform photos to videos',
  },
  {
    id: 'profile',
    label: 'Profile Settings',
    icon: User,
    href: '/dashboard/profile',
    description: 'Manage your account',
  },
];

export default function SimpleDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSidebarOpen(window.innerWidth >= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/auth/login');
      return;
    }

    setUser(JSON.parse(userData));
  }, [router]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  const handleSignOut = () => {
    localStorage.removeItem('user');
    router.push('/auth/login');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="fixed md:static inset-y-0 left-0 z-40 w-80 bg-gray-800 border-r border-gray-700"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">ChargedUp AI</h1>
                    <p className="text-sm text-gray-400">AI Platform</p>
                  </div>
                </div>

                {/* User Info */}
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-gray-400">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Credits:</span>
                    <span className="font-medium text-orange-400">
                      {user.credits}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Role:</span>
                    <span
                      className={`font-medium ${user.role === 'ADMIN' ? 'text-purple-400' : 'text-blue-400'}`}
                    >
                      {user.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4 space-y-2">
                {sidebarItems.map(item => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors group"
                  >
                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-orange-400" />
                    <div className="flex-1">
                      <div className="font-medium">{item.label}</div>
                      <div className="text-sm text-gray-500">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                ))}

                {/* Admin Panel (only for admin users) */}
                {user.role === 'ADMIN' && (
                  <Link
                    href="/dashboard/admin"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors group"
                  >
                    <Shield className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
                    <div className="flex-1">
                      <div className="font-medium">Admin Panel</div>
                      <div className="text-sm text-gray-500">
                        Manage users & system
                      </div>
                    </div>
                  </Link>
                )}
              </nav>

              {/* Sign Out */}
              <div className="p-4 border-t border-gray-700">
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-600/20 text-red-400 hover:text-red-300 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  Sign Out
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${isSidebarOpen ? 'md:ml-80' : ''}`}
      >
        {children}
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
