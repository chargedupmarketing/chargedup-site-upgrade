'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/lib/auth-service';
import { User } from '@/lib/types/auth';
import {
  User as UserIcon,
  Mail,
  Calendar,
  Shield,
  Package,
  Edit3,
  Save,
  X,
} from 'lucide-react';

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: '',
    email: '',
  });
  const router = useRouter();

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (!currentUser) {
      router.push('/auth/service-login');
      return;
    }
    setUser(currentUser);
    setEditForm({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [router]);

  const handleSave = () => {
    // In production, this would update the user profile via API
    if (user) {
      const updatedUser = { ...user, ...editForm };
      setUser(updatedUser);
      // Update localStorage
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({
      name: user?.name || '',
      email: user?.email || '',
    });
    setIsEditing(false);
  };

  if (!user) {
    return (
      <div className="p-6">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Loading your profile...</p>
        </div>
      </div>
    );
  }

  const isColdDM = user.serviceType === 'colddm';
  const isAIPlatform = user.serviceType === 'ai-platform';

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Profile Settings</h1>
          <p className="text-white/60">
            Manage your account information and preferences
          </p>
        </div>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Edit3 className="w-4 h-4" />
            Edit Profile
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <UserIcon className="w-5 h-5 text-orange-400" />
              Basic Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={e =>
                      setEditForm({ ...editForm, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all duration-300"
                  />
                ) : (
                  <p className="text-white text-lg">{user.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={editForm.email}
                    onChange={e =>
                      setEditForm({ ...editForm, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all duration-300"
                  />
                ) : (
                  <p className="text-white text-lg">{user.email}</p>
                )}
              </div>
            </div>
          </div>

          {/* Account Details */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-400" />
              Account Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${
                    isColdDM
                      ? 'from-blue-500 to-blue-600'
                      : 'from-purple-500 to-purple-600'
                  } rounded-xl flex items-center justify-center`}
                >
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Service Type</p>
                  <p className="text-white font-medium">
                    {isColdDM ? 'ColdDM Services' : 'AI Marketing Platform'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Package Level</p>
                  <p className="text-white font-medium capitalize">
                    {user.packageLevel}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Member Since</p>
                  <p className="text-white font-medium">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Last Login</p>
                  <p className="text-white font-medium">
                    {new Date(user.lastLoginAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Features */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Package className="w-5 h-5 text-orange-400" />
              Your Plan Features
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {isColdDM ? (
                <>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-medium text-white mb-2">
                      Message Limit
                    </h4>
                    <p className="text-white/60">
                      {user.features?.maxMessages === -1
                        ? 'Unlimited'
                        : `${user.features?.maxMessages?.toLocaleString()} messages/month`}
                    </p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-medium text-white mb-2">
                      Social Accounts
                    </h4>
                    <p className="text-white/60">
                      {user.features?.socialAccounts === -1
                        ? 'Unlimited'
                        : `${user.features?.socialAccounts} accounts`}
                    </p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-medium text-white mb-2">
                      Analytics Level
                    </h4>
                    <p className="text-white/60 capitalize">
                      {user.features?.analytics}
                    </p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-medium text-white mb-2">
                      Support Level
                    </h4>
                    <p className="text-white/60 capitalize">
                      {user.features?.support}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-medium text-white mb-2">AI Queries</h4>
                    <p className="text-white/60">
                      {user.features?.maxQueries === -1
                        ? 'Unlimited'
                        : `${user.features?.maxQueries?.toLocaleString()} queries/month`}
                    </p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-medium text-white mb-2">
                      Analytics Level
                    </h4>
                    <p className="text-white/60 capitalize">
                      {user.features?.analytics}
                    </p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-medium text-white mb-2">
                      Support Level
                    </h4>
                    <p className="text-white/60 capitalize">
                      {user.features?.support}
                    </p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-medium text-white mb-2">White Label</h4>
                    <p className="text-white/60">
                      {user.features?.whiteLabel
                        ? 'Available'
                        : 'Not Available'}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Profile Picture */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center">
            <div className="relative mx-auto mb-4">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center overflow-hidden">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-black font-bold text-3xl">
                    {user.name
                      .split(' ')
                      .map(n => n[0])
                      .join('')}
                  </span>
                )}
              </div>
              {isEditing && (
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Edit3 className="w-4 h-4 text-white" />
                </button>
              )}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {user.name}
            </h3>
            <p className="text-white/60 text-sm">{user.email}</p>
            <div className="mt-4">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  isColdDM
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                }`}
              >
                {user.packageLevel} Plan
              </span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => router.push('/dashboard/billing')}
                className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 border border-white/10 hover:border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Package className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">
                      Billing & Subscription
                    </p>
                    <p className="text-white/60 text-xs">Manage your plan</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => router.push('/help')}
                className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 border border-white/10 hover:border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">
                      Help & Support
                    </p>
                    <p className="text-white/60 text-xs">Get assistance</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
