'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Zap, 
  MessageSquare, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Calendar,
  Settings,
  LogOut,
  Bell,
  Search,
  Plus,
  ArrowRight,
  Sparkles,
  Target,
  Rocket,
  Shield,
  Globe,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

interface User {
  name: string
  email: string
  plan: string
  credits: number
  joinDate: string
}

interface DashboardStats {
  totalMessages: number
  activeChats: number
  responseRate: number
  customerSatisfaction: number
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [stats, setStats] = useState<DashboardStats>({
    totalMessages: 0,
    activeChats: 0,
    responseRate: 0,
    customerSatisfaction: 0
  })
  const [recentActivity, setRecentActivity] = useState<any[]>([])
  const [quickActions, setQuickActions] = useState<any[]>([])

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/auth/login')
      return
    }
    
    const userInfo = JSON.parse(userData)
    setUser(userInfo)
    
    // Simulate loading dashboard data
    loadDashboardData()
  }, [router])

  const loadDashboardData = async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock data - replace with actual API calls
    setStats({
      totalMessages: 0,
      activeChats: 0,
      responseRate: 0,
      customerSatisfaction: 0
    })

    setRecentActivity([
      {
        id: 1,
        type: 'message',
        title: 'New customer inquiry',
        description: 'Sarah M. asked about pricing plans',
        time: '2 minutes ago',
        status: 'pending'
      },
      {
        id: 2,
        type: 'chat',
        title: 'Chat session ended',
        description: 'Resolved: Product compatibility question',
        time: '15 minutes ago',
        status: 'completed'
      },
      {
        id: 3,
        type: 'lead',
        title: 'New lead captured',
        description: 'Mike R. from TechCorp',
        time: '1 hour ago',
        status: 'new'
      }
    ])

    setQuickActions([
      {
        id: 1,
        title: 'Start New Chat',
        description: 'Begin a new customer conversation',
        icon: MessageSquare,
        action: () => router.push('/dashboard/ai-chat'),
        color: 'from-blue-500 to-cyan-500'
      },
      {
        id: 2,
        title: 'View Analytics',
        description: 'Check your performance metrics',
        icon: BarChart3,
        action: () => router.push('/dashboard/analytics'),
        color: 'from-purple-500 to-pink-500'
      },
      {
        id: 3,
        title: 'Manage Templates',
        description: 'Update response templates',
        icon: Settings,
        action: () => router.push('/dashboard/templates'),
        color: 'from-orange-500 to-red-500'
      },
      {
        id: 4,
        title: 'Export Data',
        description: 'Download your chat history',
        icon: TrendingUp,
        action: () => router.push('/dashboard/export'),
        color: 'from-green-500 to-emerald-500'
      }
    ])
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('isAuthenticated')
    router.push('/auth/login')
  }

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
    <div className="w-full h-full">
      {/* Main Content */}
      <div className="px-6 py-8 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">
                  Welcome back, {user.name}! 👋
                </h1>
                <p className="text-white/80">
                  Your AI marketing platform is ready to help you scale. You have <span className="text-orange-400 font-semibold">{user.credits}</span> credits remaining.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {/* Total Messages */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stats.totalMessages.toLocaleString()}</h3>
            <p className="text-white/60 text-sm">Total Messages</p>
          </div>

          {/* Active Chats */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stats.activeChats}</h3>
            <p className="text-white/60 text-sm">Active Chats</p>
          </div>

          {/* Response Rate */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stats.responseRate}%</h3>
            <p className="text-white/60 text-sm">Response Rate</p>
          </div>

          {/* Customer Satisfaction */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < Math.floor(stats.customerSatisfaction) ? 'bg-yellow-400' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stats.customerSatisfaction}</h3>
            <p className="text-white/60 text-sm">Customer Rating</p>
          </div>
        </motion.div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-orange-400" />
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickActions.map((action) => (
                <motion.button
                  key={action.id}
                  onClick={action.action}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-white/5 border border-white/10 rounded-xl p-4 text-left hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{action.title}</h3>
                  <p className="text-white/60 text-sm">{action.description}</p>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 mt-2" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-400" />
              Recent Activity
            </h2>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      activity.type === 'message' ? 'bg-blue-500/20 text-blue-400' :
                      activity.type === 'chat' ? 'bg-green-500/20 text-green-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {activity.type === 'message' && <MessageSquare className="w-4 h-4" />}
                      {activity.type === 'chat' && <Users className="w-4 h-4" />}
                      {activity.type === 'lead' && <Target className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white mb-1">{activity.title}</h4>
                      <p className="text-white/60 text-sm mb-2">{activity.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-white/40 text-xs">{activity.time}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          activity.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                          activity.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {activity.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* AI Insights Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-orange-500/5 to-purple-500/5 border border-orange-500/20 rounded-2xl p-6 backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">AI Insights</h2>
              <p className="text-white/60">Your AI assistant has some recommendations</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-white">Response Time</span>
              </div>
              <p className="text-white/80 text-sm">Your average response time is 2.3 minutes - excellent!</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-white">Template Update</span>
              </div>
              <p className="text-white/80 text-sm">Consider updating your FAQ templates for better accuracy</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-white">Growth Opportunity</span>
              </div>
              <p className="text-white/80 text-sm">Peak hours are 2-4 PM - consider scheduling campaigns then</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
