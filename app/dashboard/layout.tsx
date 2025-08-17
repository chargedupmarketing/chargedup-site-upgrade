'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Zap, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Home,
  Users,
  Target,
  Rocket,
  Shield,
  Globe,
  Bell,
  Search,
  User,
  ChevronDown,
  Edit3,
  CreditCard,
  Shield as SecurityIcon,
  Palette,
  HelpCircle,
  ExternalLink
} from 'lucide-react'

interface User {
  name: string
  email: string
  plan: string
  credits: number
  avatar?: string
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<User | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/auth/login')
      return
    }
    
    const userInfo = JSON.parse(userData)
    setUser(userInfo)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('isAuthenticated')
    router.push('/auth/login')
  }

  const navigation = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: Home,
      description: 'Overview and analytics'
    },
    {
      name: 'AI Chat',
      href: '/dashboard/ai-chat',
      icon: MessageSquare,
      description: 'Chat with AI assistant'
    },
    {
      name: 'Analytics',
      href: '/dashboard/analytics',
      icon: BarChart3,
      description: 'Performance metrics'
    },
    {
      name: 'Templates',
      href: '/dashboard/templates',
      icon: Target,
      description: 'Response templates'
    },
    {
      name: 'Settings',
      href: '/dashboard/settings',
      icon: Settings,
      description: 'Account preferences'
    }
  ]

  const profileMenuItems = [
    {
      name: 'Profile Settings',
      icon: User,
      href: '/dashboard/settings',
      description: 'Edit your profile information'
    },
    {
      name: 'Security',
      icon: SecurityIcon,
      href: '/dashboard/settings?tab=security',
      description: 'Password and security settings'
    },
    {
      name: 'Billing',
      icon: CreditCard,
      href: '/dashboard/settings?tab=billing',
      description: 'Manage your subscription'
    },
    {
      name: 'Appearance',
      icon: Palette,
      href: '/dashboard/settings?tab=appearance',
      description: 'Customize your dashboard'
    },
    {
      name: 'Help & Support',
      icon: HelpCircle,
      href: '/help',
      description: 'Get help and contact support'
    }
  ]

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex">
      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        transition={{ type: "spring", damping: 20 }}
        className={`fixed lg:relative top-0 left-0 h-full w-80 bg-white/5 backdrop-blur-xl border-r border-white/10 z-50 lg:z-auto ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">ChargedUp</h1>
                <p className="text-xs text-white/60">AI Marketing Platform</p>
              </div>
            </div>
          </div>

          {/* Enhanced User Profile Section */}
          <div className="p-6 border-b border-white/10">
            <div className="relative">
              {/* Profile Picture */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center overflow-hidden">
                    {user.avatar ? (
                      <img 
                        src={user.avatar} 
                        alt={user.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-black font-bold text-xl">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  {/* Edit Profile Picture Button */}
                  <button className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full flex items-center justify-center">
                    <Edit3 className="w-5 h-5 text-white" />
                  </button>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-lg truncate">{user.name}</h3>
                  <p className="text-white/60 text-sm truncate">{user.email}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-400 border border-orange-500/30">
                      {user.plan} Plan
                    </span>
                    <span className="text-xs text-white/40">•</span>
                    <span className="text-xs text-orange-400 font-medium">{user.credits} credits</span>
                  </div>
                </div>
              </div>

              {/* Profile Menu Toggle */}
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-200 border border-white/10 hover:border-white/20"
              >
                <span className="text-white/80 text-sm font-medium">Profile Menu</span>
                <ChevronDown 
                  className={`w-4 h-4 text-white/60 transition-transform duration-200 ${
                    profileMenuOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {/* Profile Menu Dropdown */}
              <AnimatePresence>
                {profileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 space-y-1 overflow-hidden"
                  >
                    {profileMenuItems.map((item) => {
                      const Icon = item.icon
                      return (
                        <motion.button
                          key={item.name}
                          onClick={() => {
                            router.push(item.href)
                            setProfileMenuOpen(false)
                            setSidebarOpen(false)
                          }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="w-full flex items-center gap-3 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-left group"
                        >
                          <Icon className="w-4 h-4 text-white/60 group-hover:text-white" />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm">{item.name}</div>
                            <div className="text-xs text-white/50 truncate">{item.description}</div>
                          </div>
                          <ExternalLink className="w-3 h-3 text-white/40 group-hover:text-white/60" />
                        </motion.button>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <div className="space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon
                
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => {
                      router.push(item.href)
                      setSidebarOpen(false)
                    }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-orange-500/20 border border-orange-500/30 text-white shadow-lg shadow-orange-500/25'
                        : 'text-white/70 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-orange-400' : 'text-white/60 group-hover:text-white'}`} />
                    <div className="text-left">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-white/50">{item.description}</div>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-white/10">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="border-b border-white/10 backdrop-blur-xl bg-white/5 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Page Title */}
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold text-white">
                {navigation.find(item => item.href === pathname)?.name || 'Dashboard'}
              </h1>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="relative p-2 text-white/60 hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></span>
              </button>

              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all duration-300 w-64"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
