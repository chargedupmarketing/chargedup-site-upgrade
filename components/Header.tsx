'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Zap,
  MessageSquare,
  Brain,
  ChevronDown,
  User,
  LogOut,
  Settings,
  HelpCircle,
} from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('serviceType');
    window.location.href = '/';
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'Our AI', href: '/our-ai' },
    { name: 'Our Chatbot', href: '/our-chatbot' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Our Team', href: '/our-team' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDashboard ? 'lg:left-80 lg:right-0 lg:absolute' : ''
      }`}
    >
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2 px-4">
        <p className="text-sm font-medium">
          🚀 Limited Time: Get 50% off your first month! Use code:{' '}
          <span className="font-bold">FIRST50</span>
        </p>
      </div>

      {/* Main Header */}
      <div className="bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                ChargedUp
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-orange-400'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* User Menu (if logged in) */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="flex items-center gap-2 p-2 text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center">
                      {user.avatar ? (
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <span className="text-black font-bold text-sm">
                          {user.name
                            .split(' ')
                            .map((n: string) => n[0])
                            .join('')}
                        </span>
                      )}
                    </div>
                    <span className="hidden sm:block text-sm font-medium">
                      {user.name}
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Profile Dropdown */}
                  <AnimatePresence>
                    {isProfileMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-56 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl overflow-hidden"
                      >
                        <div className="p-4 border-b border-white/10">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center">
                              {user.avatar ? (
                                <img
                                  src={user.avatar}
                                  alt={user.name}
                                  className="w-full h-full object-cover rounded-full"
                                />
                              ) : (
                                <span className="text-black font-bold text-sm">
                                  {user.name
                                    .split(' ')
                                    .map((n: string) => n[0])
                                    .join('')}
                                </span>
                              )}
                            </div>
                            <div>
                              <p className="text-white font-medium">
                                {user.name}
                              </p>
                              <p className="text-white/60 text-sm">
                                {user.email}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <span
                                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                    user.serviceType === 'colddm'
                                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                      : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                  }`}
                                >
                                  {user.packageLevel} Plan
                                </span>
                                <span
                                  className={`text-xs font-medium ${
                                    user.serviceType === 'colddm'
                                      ? 'text-blue-400'
                                      : 'text-purple-400'
                                  }`}
                                >
                                  {user.serviceType === 'colddm'
                                    ? 'ColdDM'
                                    : 'AI Platform'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-2">
                          <Link
                            href="/dashboard"
                            className="flex items-center gap-3 w-full p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
                            onClick={() => setIsProfileMenuOpen(false)}
                          >
                            <MessageSquare className="w-4 h-4" />
                            <span>Dashboard</span>
                          </Link>

                          <Link
                            href="/dashboard/profile"
                            className="flex items-center gap-3 w-full p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
                            onClick={() => setIsProfileMenuOpen(false)}
                          >
                            <User className="w-4 h-4" />
                            <span>Profile Settings</span>
                          </Link>

                          <Link
                            href="/dashboard/billing"
                            className="flex items-center gap-3 w-full p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
                            onClick={() => setIsProfileMenuOpen(false)}
                          >
                            <Settings className="w-4 h-4" />
                            <span>Billing</span>
                          </Link>

                          <Link
                            href="/help"
                            className="flex items-center gap-3 w-full p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
                            onClick={() => setIsProfileMenuOpen(false)}
                          >
                            <HelpCircle className="w-4 h-4" />
                            <span>Help & Support</span>
                          </Link>

                          <div className="border-t border-white/10 my-2" />

                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full p-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors duration-300"
                          >
                            <LogOut className="w-4 h-4" />
                            <span>Logout</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                /* Login/Register Buttons */
                <div className="hidden lg:flex items-center gap-4">
                  <Link
                    href="/auth/service-login"
                    className="text-white/70 hover:text-white transition-colors duration-300 font-medium"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-white/70 hover:text-white transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-base font-medium transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-orange-400'
                      : 'text-white/70 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {!user && (
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <Link
                    href="/auth/service-login"
                    className="block text-base font-medium text-white/70 hover:text-white transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/contact"
                    className="block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
