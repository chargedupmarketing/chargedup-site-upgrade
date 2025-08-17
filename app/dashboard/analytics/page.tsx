'use client';

import { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Users,
  MessageSquare,
  Eye,
  MousePointer,
  Calendar,
} from 'lucide-react';

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('7d');

  const metrics = [
    {
      title: 'Total Visitors',
      value: '12,847',
      change: '+12.5%',
      changeType: 'positive',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Page Views',
      value: '34,291',
      change: '+8.2%',
      changeType: 'positive',
      icon: Eye,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Engagement Rate',
      value: '68.4%',
      change: '+5.1%',
      changeType: 'positive',
      icon: MousePointer,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+2.8%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const chartData = [
    { date: 'Mon', visitors: 1200, conversions: 45 },
    { date: 'Tue', visitors: 1350, conversions: 52 },
    { date: 'Wed', visitors: 1100, conversions: 38 },
    { date: 'Thu', visitors: 1600, conversions: 61 },
    { date: 'Fri', visitors: 1400, conversions: 53 },
    { date: 'Sat', visitors: 900, conversions: 32 },
    { date: 'Sun', visitors: 800, conversions: 28 },
  ];

  const topPages = [
    { page: '/dashboard', views: 2847, change: '+15.2%' },
    { page: '/ai-chat', views: 1923, change: '+8.7%' },
    { page: '/settings', views: 1247, change: '+3.4%' },
    { page: '/templates', views: 892, change: '+12.1%' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Analytics Dashboard</h1>
          <p className="text-white/60">Track your performance and insights</p>
        </div>

        {/* Time Range Selector */}
        <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1 border border-white/10">
          {['1d', '7d', '30d', '90d'].map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                timeRange === range
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map(metric => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.title}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span
                  className={`text-sm font-medium ${
                    metric.changeType === 'positive'
                      ? 'text-green-400'
                      : 'text-red-400'
                  }`}
                >
                  {metric.change}
                </span>
              </div>
              <h3 className="text-white/60 text-sm font-medium mb-1">
                {metric.title}
              </h3>
              <p className="text-2xl font-bold text-white">{metric.value}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visitors Chart */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Visitor Trends</h3>
            <Calendar className="w-5 h-5 text-white/40" />
          </div>
          <div className="space-y-4">
            {chartData.map((data, index) => (
              <div key={data.date} className="flex items-center gap-4">
                <div className="w-12 text-sm text-white/60">{data.date}</div>
                <div className="flex-1 bg-white/10 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(data.visitors / 1600) * 100}%` }}
                  />
                </div>
                <div className="w-16 text-right text-sm text-white/60">
                  {data.visitors}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Top Pages</h3>
            <BarChart3 className="w-5 h-5 text-white/40" />
          </div>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div
                key={page.page}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {index + 1}
                  </div>
                  <span className="text-white/80 font-medium">{page.page}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white/60 text-sm">
                    {page.views} views
                  </span>
                  <span className="text-green-400 text-sm font-medium">
                    {page.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">
          Recent Activity
        </h3>
        <div className="space-y-4">
          {[
            {
              action: 'New user registered',
              time: '2 minutes ago',
              type: 'user',
            },
            {
              action: 'AI chat session completed',
              time: '15 minutes ago',
              type: 'chat',
            },
            {
              action: 'Template updated',
              time: '1 hour ago',
              type: 'template',
            },
            {
              action: 'Analytics report generated',
              time: '2 hours ago',
              type: 'analytics',
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 bg-white/5 rounded-lg"
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <span className="text-white/80 flex-1">{activity.action}</span>
              <span className="text-white/40 text-sm">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
