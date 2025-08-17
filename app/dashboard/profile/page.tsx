'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Shield,
  CreditCard,
  MessageSquare,
  Video,
  Settings,
  Check,
  AlertCircle,
} from 'lucide-react';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setUser(user);
      setFormData(prev => ({ ...prev, name: user.name, email: user.email }));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSaveProfile = async () => {
    if (!formData.name.trim()) {
      setMessage({ type: 'error', text: 'Name is required' });
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/user/profile', {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name: formData.name })
      // })

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Update local user data
      const updatedUser = { ...user, name: formData.name };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);

      setMessage({ type: 'success', text: 'Profile updated successfully!' });
      setIsEditing(false);
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to update profile. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePassword = async () => {
    if (
      !formData.currentPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      setMessage({ type: 'error', text: 'All password fields are required' });
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match' });
      return;
    }

    if (formData.newPassword.length < 6) {
      setMessage({
        type: 'error',
        text: 'New password must be at least 6 characters',
      });
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/user/profile', {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     currentPassword: formData.currentPassword,
      //     newPassword: formData.newPassword
      //   })
      // })

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setMessage({ type: 'success', text: 'Password changed successfully!' });
      setFormData(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      }));
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to change password. Please check your current password.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <User className="w-4 h-4" />
            Profile Settings
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Manage Your Account
          </h1>
          <p className="text-gray-400 text-lg">
            Update your profile information and manage your account settings
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Basic Info */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">
                  Basic Information
                </h2>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Edit
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-200 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    disabled
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white opacity-50 cursor-not-allowed"
                  />
                  <p className="text-gray-500 text-sm mt-1">
                    Email cannot be changed
                  </p>
                </div>

                {isEditing && (
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={handleSaveProfile}
                      disabled={isLoading}
                      className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-200 disabled:opacity-50 flex items-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Saving...
                        </>
                      ) : (
                        <>
                          <Check className="w-4 h-4" />
                          Save Changes
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setFormData(prev => ({ ...prev, name: user.name }));
                      }}
                      className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Change Password */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-xl font-semibold text-white mb-6">
                Change Password
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-200"
                    placeholder="Enter your current password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-200"
                    placeholder="Enter your new password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-200"
                    placeholder="Confirm your new password"
                  />
                </div>

                <button
                  onClick={handleChangePassword}
                  disabled={
                    isLoading ||
                    !formData.currentPassword ||
                    !formData.newPassword ||
                    !formData.confirmPassword
                  }
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-lg font-medium transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Changing Password...
                    </>
                  ) : (
                    <>
                      <Shield className="w-5 h-5" />
                      Change Password
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Message Display */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border ${
                  message.type === 'success'
                    ? 'bg-green-500/10 border-green-500/20 text-green-400'
                    : 'bg-red-500/10 border-red-500/20 text-red-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  {message.type === 'success' ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  {message.text}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* User Card */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {user.name}
                </h3>
                <p className="text-gray-400 mb-4">{user.email}</p>
                <div className="inline-flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">{user.role}</span>
                </div>
              </div>
            </div>

            {/* Usage Stats */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">
                Usage Statistics
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">Credits</span>
                  </div>
                  <span className="text-white font-semibold">
                    {user.credits}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Chats</span>
                  </div>
                  <span className="text-white font-semibold">12</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Videos</span>
                  </div>
                  <span className="text-white font-semibold">5</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Actions
              </h3>

              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <Settings className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">Account Settings</span>
                  </div>
                </button>

                <button className="w-full text-left p-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">Privacy & Security</span>
                  </div>
                </button>

                <button className="w-full text-left p-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">Billing & Plans</span>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
