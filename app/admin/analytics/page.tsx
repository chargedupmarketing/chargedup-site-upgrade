'use client';

import { useState, useEffect } from 'react';
import {
  BarChart3,
  TrendingUp,
  Users,
  Mail,
  Calendar,
  DollarSign,
  Eye,
  MousePointer,
  Clock,
  Activity,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';

interface AnalyticsData {
  newsletter: {
    totalSubscribers: number;
    newSubscribersThisMonth: number;
    openRate: number;
    clickRate: number;
    emailsSent: number;
    growthRate: number;
  };
  strategyMeetings: {
    totalInquiries: number;
    pendingMeetings: number;
    completedMeetings: number;
    conversionRate: number;
    avgResponseTime: number;
    growthRate: number;
  };
  website: {
    totalVisitors: number;
    uniqueVisitors: number;
    pageViews: number;
    bounceRate: number;
    avgSessionDuration: number;
    topPages: Array<{ page: string; views: number; conversion: number }>;
  };
  revenue: {
    totalRevenue: number;
    monthlyRevenue: number;
    growthRate: number;
    topServices: Array<{ service: string; revenue: number; clients: number }>;
  };
}

export default function AnalyticsDashboard() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(
    null
  );
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>(
    '30d'
  );
  const [loading, setLoading] = useState(true);

  // Mock data - replace with actual API calls
  useEffect(() => {
    setAnalyticsData({
      newsletter: {
        totalSubscribers: 0,
        newSubscribersThisMonth: 0,
        openRate: 0,
        clickRate: 0,
        emailsSent: 0,
        growthRate: 0,
      },
      strategyMeetings: {
        totalInquiries: 0,
        pendingMeetings: 0,
        completedMeetings: 0,
        conversionRate: 0,
        avgResponseTime: 0,
        growthRate: 0,
      },
      website: {
        totalVisitors: 0,
        uniqueVisitors: 0,
        pageViews: 0,
        bounceRate: 0,
        avgSessionDuration: 0,
        topPages: [],
      },
      revenue: {
        totalRevenue: 0,
        monthlyRevenue: 0,
        growthRate: 0,
        topServices: [],
      },
    });
    setLoading(false);
  }, []);

  const getGrowthIcon = (rate: number) => {
    if (rate > 0) {
      return <ArrowUp className="w-4 h-4 text-green-400" />;
    } else if (rate < 0) {
      return <ArrowDown className="w-4 h-4 text-red-400" />;
    }
    return null;
  };

  const getGrowthColor = (rate: number) => {
    if (rate > 0) return 'text-green-400';
    if (rate < 0) return 'text-red-400';
    return 'text-gray-400';
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <div className="text-white text-xl">Loading analytics...</div>
        </div>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <div className="text-red-400 text-xl">
            Failed to load analytics data
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Analytics Dashboard
        </h1>
        <p className="text-gray-400">
          Track performance metrics and business insights
        </p>
      </div>

      {/* Time Range Selector */}
      <div className="mb-6">
        <div className="flex gap-2">
          {(['7d', '30d', '90d', '1y'] as const).map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                timeRange === range
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {range === '7d'
                ? '7 Days'
                : range === '30d'
                  ? '30 Days'
                  : range === '90d'
                    ? '90 Days'
                    : '1 Year'}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">
                Newsletter Subscribers
              </p>
              <p className="text-2xl font-bold text-white">
                {analyticsData.newsletter.totalSubscribers.toLocaleString()}
              </p>
            </div>
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <div className="flex items-center mt-2">
            {getGrowthIcon(analyticsData.newsletter.growthRate)}
            <span
              className={`text-sm font-medium ml-1 ${getGrowthColor(analyticsData.newsletter.growthRate)}`}
            >
              {analyticsData.newsletter.growthRate > 0 ? '+' : ''}
              {analyticsData.newsletter.growthRate}%
            </span>
            <span className="text-sm text-gray-400 ml-2">vs last period</span>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">
                Strategy Meetings
              </p>
              <p className="text-2xl font-bold text-white">
                {analyticsData.strategyMeetings.totalInquiries}
              </p>
            </div>
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Calendar className="w-6 h-6 text-green-400" />
            </div>
          </div>
          <div className="flex items-center mt-2">
            {getGrowthIcon(analyticsData.strategyMeetings.growthRate)}
            <span
              className={`text-sm font-medium ml-1 ${getGrowthColor(analyticsData.strategyMeetings.growthRate)}`}
            >
              {analyticsData.strategyMeetings.growthRate > 0 ? '+' : ''}
              {analyticsData.strategyMeetings.growthRate}%
            </span>
            <span className="text-sm text-gray-400 ml-2">vs last period</span>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">
                Website Visitors
              </p>
              <p className="text-2xl font-bold text-white">
                {analyticsData.website.totalVisitors.toLocaleString()}
              </p>
            </div>
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Eye className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          <div className="text-sm text-gray-400 mt-2">
            {analyticsData.website.uniqueVisitors.toLocaleString()} unique
            visitors
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">
                Monthly Revenue
              </p>
              <p className="text-2xl font-bold text-white">
                ${analyticsData.revenue.monthlyRevenue.toLocaleString()}
              </p>
            </div>
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <DollarSign className="w-6 h-6 text-orange-400" />
            </div>
          </div>
          <div className="flex items-center mt-2">
            {getGrowthIcon(analyticsData.revenue.growthRate)}
            <span
              className={`text-sm font-medium ml-1 ${getGrowthColor(analyticsData.revenue.growthRate)}`}
            >
              {analyticsData.revenue.growthRate > 0 ? '+' : ''}
              {analyticsData.revenue.growthRate}%
            </span>
            <span className="text-sm text-gray-400 ml-2">vs last month</span>
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Newsletter Performance */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Mail className="w-5 h-5 mr-2 text-blue-400" />
            Newsletter Performance
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Open Rate</span>
              <span className="text-white font-semibold">
                {analyticsData.newsletter.openRate}%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Click Rate</span>
              <span className="text-white font-semibold">
                {analyticsData.newsletter.clickRate}%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Emails Sent</span>
              <span className="text-white font-semibold">
                {analyticsData.newsletter.emailsSent}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">New This Month</span>
              <span className="text-white font-semibold">
                {analyticsData.newsletter.newSubscribersThisMonth}
              </span>
            </div>
          </div>
        </div>

        {/* Strategy Meeting Metrics */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-green-400" />
            Strategy Meeting Metrics
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Conversion Rate</span>
              <span className="text-white font-semibold">
                {analyticsData.strategyMeetings.conversionRate}%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Avg Response Time</span>
              <span className="text-white font-semibold">
                {analyticsData.strategyMeetings.avgResponseTime} hours
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Pending</span>
              <span className="text-white font-semibold">
                {analyticsData.strategyMeetings.pendingMeetings}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Completed</span>
              <span className="text-white font-semibold">
                {analyticsData.strategyMeetings.completedMeetings}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Website Analytics */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <Activity className="w-5 h-5 mr-2 text-purple-400" />
          Website Analytics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              {analyticsData.website.pageViews.toLocaleString()}
            </div>
            <div className="text-sm text-gray-400">Total Page Views</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              {analyticsData.website.bounceRate}%
            </div>
            <div className="text-sm text-gray-400">Bounce Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              {analyticsData.website.avgSessionDuration} min
            </div>
            <div className="text-sm text-gray-400">Avg Session Duration</div>
          </div>
        </div>

        <h4 className="text-md font-medium text-white mb-3">
          Top Performing Pages
        </h4>
        <div className="space-y-3">
          {analyticsData.website.topPages.map((page, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-700 rounded-lg"
            >
              <div className="flex items-center">
                <span className="text-gray-400 text-sm w-6">{index + 1}</span>
                <span className="text-white font-medium">{page.page}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">
                  {page.views.toLocaleString()} views
                </span>
                <span className="text-green-400 text-sm">
                  {page.conversion}% conversion
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Analytics */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <DollarSign className="w-5 h-5 mr-2 text-orange-400" />
          Revenue Analytics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              ${analyticsData.revenue.totalRevenue.toLocaleString()}
            </div>
            <div className="text-sm text-gray-400">Total Revenue</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              ${analyticsData.revenue.monthlyRevenue.toLocaleString()}
            </div>
            <div className="text-sm text-gray-400">Monthly Revenue</div>
          </div>
        </div>

        <h4 className="text-md font-medium text-white mb-3">
          Top Revenue Services
        </h4>
        <div className="space-y-3">
          {analyticsData.revenue.topServices.map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-700 rounded-lg"
            >
              <div className="flex items-center">
                <span className="text-gray-400 text-sm w-6">{index + 1}</span>
                <span className="text-white font-medium">
                  {service.service}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">
                  {service.clients} clients
                </span>
                <span className="text-green-400 font-medium">
                  ${service.revenue.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-left">
            <div className="flex items-center mb-2">
              <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-white font-medium">Export Report</span>
            </div>
            <p className="text-sm text-gray-400">
              Download detailed analytics report
            </p>
          </button>

          <button className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-left">
            <div className="flex items-center mb-2">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-white font-medium">Set Goals</span>
            </div>
            <p className="text-sm text-gray-400">
              Configure performance targets
            </p>
          </button>

          <button className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-left">
            <div className="flex items-center mb-2">
              <Clock className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-white font-medium">Schedule Report</span>
            </div>
            <p className="text-sm text-gray-400">Set up automated reporting</p>
          </button>
        </div>
      </div>
    </div>
  );
}
