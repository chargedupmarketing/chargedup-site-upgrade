'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/lib/auth-service';
import { getToolsForUser } from '@/lib/constants/dashboard-tools';
import { User } from '@/lib/types/auth';
import {
  MessageSquare,
  Brain,
  BarChart3,
  Users,
  TrendingUp,
  Target,
  Globe,
  Calendar,
  Zap,
  Rocket,
  Shield,
  Star,
  Clock,
} from 'lucide-react';

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [availableTools, setAvailableTools] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (!currentUser) {
      router.push('/auth/service-login');
      return;
    }
    setUser(currentUser);

    // Get available tools for the user
    const tools = getToolsForUser(
      currentUser.serviceType,
      currentUser.packageLevel
    );
    setAvailableTools(tools);
  }, [router]);

  if (!user) {
    return (
      <div className="p-6">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const isColdDM = user.serviceType === 'colddm';
  const isAIPlatform = user.serviceType === 'ai-platform';

  // Mock data based on service type
  const getServiceMetrics = () => {
    if (isColdDM) {
      return [
        {
          name: 'Total Messages',
          value: '2,847',
          change: '+12.5%',
          icon: MessageSquare,
          color: 'from-blue-500 to-blue-600',
        },
        {
          name: 'Active Chats',
          value: '23',
          change: '+8.2%',
          icon: Users,
          color: 'from-green-500 to-green-600',
        },
        {
          name: 'Response Rate',
          value: '94.2%',
          change: '+5.1%',
          icon: TrendingUp,
          color: 'from-purple-500 to-purple-600',
        },
        {
          name: 'Lead Captures',
          value: '156',
          change: '+18.7%',
          icon: Target,
          color: 'from-orange-500 to-orange-600',
        },
      ];
    } else {
      return [
        {
          name: 'AI Queries',
          value: '847',
          change: '+15.3%',
          icon: Brain,
          color: 'from-purple-500 to-purple-600',
        },
        {
          name: 'Content Generated',
          value: '234',
          change: '+22.1%',
          icon: Target,
          color: 'from-green-500 to-green-600',
        },
        {
          name: 'Strategy Insights',
          value: '89',
          change: '+8.9%',
          icon: TrendingUp,
          color: 'from-blue-500 to-blue-600',
        },
        {
          name: 'Campaign ROI',
          value: '312%',
          change: '+45.2%',
          icon: BarChart3,
          color: 'from-orange-500 to-orange-600',
        },
      ];
    }
  };

  const getQuickActions = () => {
    if (isColdDM) {
      return [
        {
          name: 'View Chat Analytics',
          description: 'Monitor chatbot performance',
          icon: BarChart3,
          href: '/dashboard/chatbot/analytics',
          color: 'from-blue-500 to-blue-600',
        },
        {
          name: 'Manage Templates',
          description: 'Update AI response templates',
          icon: Target,
          href: '/dashboard/chatbot/templates',
          color: 'from-green-500 to-green-600',
        },
        {
          name: 'Social Integrations',
          description: 'Connect social media accounts',
          icon: Globe,
          href: '/dashboard/chatbot/integrations',
          color: 'from-purple-500 to-purple-600',
        },
        {
          name: 'Lead Management',
          description: 'View captured leads',
          icon: Users,
          href: '/dashboard/chatbot/leads',
          color: 'from-orange-500 to-orange-600',
        },
      ];
    } else {
      return [
        {
          name: 'AI Marketing Insights',
          description: 'Get AI-powered recommendations',
          icon: Brain,
          href: '/dashboard/ai-insights',
          color: 'from-purple-500 to-purple-600',
        },
        {
          name: 'Content Generator',
          description: 'Create AI-enhanced content',
          icon: Target,
          href: '/dashboard/content-generator',
          color: 'from-green-500 to-green-600',
        },
        {
          name: 'Strategy Planner',
          description: 'Develop marketing strategies',
          icon: TrendingUp,
          href: '/dashboard/strategy-planner',
          color: 'from-blue-500 to-blue-600',
        },
        {
          name: 'Campaign Optimizer',
          description: 'Optimize campaign performance',
          icon: BarChart3,
          href: '/dashboard/campaign-optimizer',
          color: 'from-orange-500 to-orange-600',
        },
      ];
    }
  };

  const getRecentActivity = () => {
    if (isColdDM) {
      return [
        {
          action: 'New customer inquiry',
          time: '2 minutes ago',
          type: 'chat',
          status: 'pending',
        },
        {
          action: 'Chat session completed',
          time: '15 minutes ago',
          type: 'chat',
          status: 'completed',
        },
        {
          action: 'New lead captured',
          time: '1 hour ago',
          type: 'lead',
          status: 'new',
        },
        {
          action: 'Template updated',
          time: '2 hours ago',
          type: 'template',
          status: 'updated',
        },
      ];
    } else {
      return [
        {
          action: 'AI strategy generated',
          time: '5 minutes ago',
          type: 'strategy',
          status: 'completed',
        },
        {
          action: 'Content created',
          time: '25 minutes ago',
          type: 'content',
          status: 'completed',
        },
        {
          action: 'Campaign optimized',
          time: '1 hour ago',
          type: 'campaign',
          status: 'optimized',
        },
        {
          action: 'Insights report ready',
          time: '2 hours ago',
          type: 'insights',
          status: 'ready',
        },
      ];
    }
  };

  const metrics = getServiceMetrics();
  const quickActions = getQuickActions();
  const recentActivity = getRecentActivity();

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, {user.name}! 👋
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          {isColdDM
            ? `Your AI chatbot is actively serving customers and capturing leads. You're on the ${user.packageLevel} plan with advanced automation capabilities.`
            : `Your AI marketing platform is ready to transform your business. You're on the ${user.packageLevel} plan with cutting-edge AI intelligence.`}
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-green-400">
                  {metric.change}
                </span>
              </div>
              <h3 className="text-white/60 text-sm font-medium mb-1">
                {metric.name}
              </h3>
              <p className="text-2xl font-bold text-white">{metric.value}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-400" />
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={() => router.push(action.href)}
                  className="group text-left p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20"
                >
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">
                    {action.name}
                  </h4>
                  <p className="text-white/60 text-xs">{action.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-400" />
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 bg-white/5 rounded-lg"
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    activity.status === 'completed'
                      ? 'bg-green-500'
                      : activity.status === 'pending'
                        ? 'bg-yellow-500'
                        : activity.status === 'new'
                          ? 'bg-blue-500'
                          : activity.status === 'updated'
                            ? 'bg-purple-500'
                            : activity.status === 'optimized'
                              ? 'bg-orange-500'
                              : 'bg-gray-500'
                  }`}
                />
                <span className="text-white/80 flex-1 text-sm">
                  {activity.action}
                </span>
                <span className="text-white/40 text-xs">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service-Specific Features */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <Star className="w-5 h-5 text-orange-400" />
          {isColdDM ? 'ColdDM Features' : 'AI Platform Features'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableTools.slice(0, 6).map((tool, index) => (
            <div
              key={tool.id}
              className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-8 h-8 bg-gradient-to-r ${
                    isColdDM
                      ? 'from-blue-500 to-blue-600'
                      : 'from-purple-500 to-purple-600'
                  } rounded-lg flex items-center justify-center`}
                >
                  <span className="text-white text-sm">✨</span>
                </div>
                <h4 className="font-medium text-white text-sm">{tool.name}</h4>
              </div>
              <p className="text-white/60 text-xs">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Upgrade CTA */}
      {user.packageLevel !== 'enterprise' && (
        <div className="bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/20 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">
            Unlock More Features
          </h3>
          <p className="text-white/60 mb-4">
            {isColdDM
              ? 'Upgrade your ColdDM plan to access advanced analytics, unlimited integrations, and multi-client management.'
              : 'Upgrade your AI platform plan to access custom AI training, white-label options, and on-premise deployment.'}
          </p>
          <button
            onClick={() => router.push('/pricing')}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View Upgrade Options
          </button>
        </div>
      )}
    </div>
  );
}
