'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Users,
  MessageSquare,
  Video,
  CreditCard,
  TrendingUp,
  Eye,
  Trash2,
  ToggleLeft,
  ToggleRight,
} from 'lucide-react';

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState({
    totalUsers: 156,
    activeUsers: 142,
    totalChats: 1247,
    totalVideos: 89,
    totalCredits: 2840,
    monthlyGrowth: 23,
  });
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'USER',
      credits: 15,
      status: 'active',
      lastActive: '2 hours ago',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'USER',
      credits: 8,
      status: 'active',
      lastActive: '1 day ago',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'USER',
      credits: 22,
      status: 'inactive',
      lastActive: '1 week ago',
    },
    {
      id: 4,
      name: 'Admin User',
      email: 'admin@chargedup.com',
      role: 'ADMIN',
      credits: 100,
      status: 'active',
      lastActive: 'Now',
    },
  ]);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setUser(user);

      // Redirect if not admin
      if (user.role !== 'ADMIN') {
        window.location.href = '/dashboard';
      }
    }
  }, []);

  const toggleUserStatus = async (userId: number) => {
    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      // const response = await fetch(`/api/admin/users/${userId}`, {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ isActive: !users.find(u => u.id === userId)?.status === 'active' })
      // })

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      setUsers(prev =>
        prev.map(u =>
          u.id === userId
            ? { ...u, status: u.status === 'active' ? 'inactive' : 'active' }
            : u
        )
      );
    } catch (error) {
      console.error('Failed to toggle user status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUser = async (userId: number) => {
    if (
      !confirm(
        'Are you sure you want to delete this user? This action cannot be undone.'
      )
    ) {
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      // const response = await fetch(`/api/admin/users/${userId}`, {
      //   method: 'DELETE'
      // })

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      setUsers(prev => prev.filter(u => u.id !== userId));
    } catch (error) {
      console.error('Failed to delete user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!user || user.role !== 'ADMIN') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Access Denied</p>
          <p className="text-gray-400 text-sm mt-2">
            Admin privileges required
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Admin Panel
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            System Administration
          </h1>
          <p className="text-gray-400 text-lg">
            Manage users, monitor system performance, and control platform
            features
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Users</p>
                <p className="text-2xl font-bold text-white">
                  {stats.totalUsers}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Chats</p>
                <p className="text-2xl font-bold text-white">
                  {stats.totalChats}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Videos</p>
                <p className="text-2xl font-bold text-white">
                  {stats.totalVideos}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Video className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Monthly Growth</p>
                <p className="text-2xl font-bold text-white">
                  +{stats.monthlyGrowth}%
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Users Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800/50 rounded-2xl border border-gray-700/50 overflow-hidden"
        >
          <div className="p-6 border-b border-gray-700/50">
            <h2 className="text-xl font-semibold text-white">
              User Management
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Manage user accounts, roles, and permissions
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700/30">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Credits
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Last Active
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700/50">
                {users.map(user => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-700/20 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-white">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          {user.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.role === 'ADMIN'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {user.credits}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      {user.lastActive}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedUser(user)}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        {user.role !== 'ADMIN' && (
                          <>
                            <button
                              onClick={() => toggleUserStatus(user.id)}
                              disabled={isLoading}
                              className="text-orange-400 hover:text-orange-300 transition-colors disabled:opacity-50"
                            >
                              {user.status === 'active' ? (
                                <ToggleLeft className="w-4 h-4" />
                              ) : (
                                <ToggleRight className="w-4 h-4" />
                              )}
                            </button>

                            <button
                              onClick={() => deleteUser(user.id)}
                              disabled={isLoading}
                              className="text-red-400 hover:text-red-300 transition-colors disabled:opacity-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* System Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 grid lg:grid-cols-2 gap-6"
        >
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">
              Feature Controls
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 font-medium">AI Chat</p>
                  <p className="text-gray-500 text-sm">
                    Enable/disable AI chat functionality
                  </p>
                </div>
                <button className="w-12 h-6 bg-green-500 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 transition-transform"></div>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 font-medium">Text-to-Video</p>
                  <p className="text-gray-500 text-sm">
                    Enable/disable video generation
                  </p>
                </div>
                <button className="w-12 h-6 bg-green-500 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 transition-transform"></div>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 font-medium">User Registration</p>
                  <p className="text-gray-500 text-sm">
                    Allow new user signups
                  </p>
                </div>
                <button className="w-12 h-6 bg-green-500 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 transition-transform"></div>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">
              System Health
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">API Status</span>
                <span className="text-green-400 text-sm">Healthy</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-300">Database</span>
                <span className="text-green-400 text-sm">Connected</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-300">Storage</span>
                <span className="text-yellow-400 text-sm">75% Used</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-300">Uptime</span>
                <span className="text-green-400 text-sm">99.9%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
