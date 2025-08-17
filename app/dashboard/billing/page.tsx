'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/lib/auth-service';
import { User } from '@/lib/types/auth';
import {
  CreditCard,
  Package,
  Calendar,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Zap,
} from 'lucide-react';

export default function BillingPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (!currentUser) {
      router.push('/auth/service-login');
      return;
    }
    setUser(currentUser);
  }, [router]);

  if (!user) {
    return (
      <div className="p-6">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Loading your billing information...</p>
        </div>
      </div>
    );
  }

  const isColdDM = user.serviceType === 'colddm';
  const isAIPlatform = user.serviceType === 'ai-platform';

  // Mock billing data - in production this would come from your billing system
  const getBillingData = () => {
    if (isColdDM) {
      const plans = {
        starter: { price: 19.99, nextBilling: '2024-02-20', status: 'active' },
        professional: {
          price: 199,
          nextBilling: '2024-02-20',
          status: 'active',
        },
        enterprise: { price: 499, nextBilling: '2024-02-20', status: 'active' },
      };
      return plans[user.packageLevel as keyof typeof plans] || plans.starter;
    } else {
      const plans = {
        free: { price: 0, nextBilling: null, status: 'active' },
        enhanced: { price: 49, nextBilling: '2024-02-20', status: 'active' },
        professional: {
          price: 199,
          nextBilling: '2024-02-20',
          status: 'active',
        },
        enterprise: { price: null, nextBilling: null, status: 'custom' },
      };
      return plans[user.packageLevel as keyof typeof plans] || plans.free;
    }
  };

  const getUsageData = () => {
    if (isColdDM) {
      return [
        {
          name: 'Messages Used',
          current: 2847,
          limit: user.features?.maxMessages || 1000,
          unit: 'messages',
        },
        {
          name: 'Social Accounts',
          current: 1,
          limit: user.features?.socialAccounts || 1,
          unit: 'accounts',
        },
        { name: 'AI Responses', current: 100, limit: 100, unit: '%' },
        { name: 'Analytics Access', current: 100, limit: 100, unit: '%' },
      ];
    } else {
      return [
        {
          name: 'AI Queries Used',
          current: 847,
          limit: user.features?.maxQueries || 25,
          unit: 'queries',
        },
        {
          name: 'Content Generated',
          current: 234,
          limit: 1000,
          unit: 'pieces',
        },
        {
          name: 'Strategy Insights',
          current: 89,
          limit: 200,
          unit: 'insights',
        },
        {
          name: 'Campaign Optimizations',
          current: 45,
          limit: 100,
          unit: 'optimizations',
        },
      ];
    }
  };

  const billingData = getBillingData();
  const usageData = getUsageData();

  const getPlanFeatures = () => {
    if (isColdDM) {
      const features = {
        starter: [
          'Up to 1,000 messages/month',
          'Connect 1 social media account',
          'Basic AI responses',
          'Simple analytics dashboard',
          'Email support',
        ],
        professional: [
          'Up to 10,000 messages/month',
          'Connect up to 3 social media accounts',
          'AI chatbot with keyword triggers',
          'Automated lead capture',
          'Advanced analytics',
          'Priority support',
        ],
        enterprise: [
          'Unlimited messages/month',
          'Connect unlimited social media accounts',
          'Fully customizable AI responses',
          'Multi-language support',
          'Advanced CRM integrations',
          'Dedicated account manager',
          '24/7 priority support',
        ],
      };
      return (
        features[user.packageLevel as keyof typeof features] || features.starter
      );
    } else {
      const features = {
        free: [
          '25 AI queries/month',
          'Basic marketing insights',
          'Content generation assistance',
          'Community support',
        ],
        enhanced: [
          '250 AI queries/month',
          'Enhanced marketing insights',
          'Advanced content generation',
          'Email support',
        ],
        professional: [
          '1,000 AI queries/month',
          'Advanced analytics & insights',
          'Priority support',
          'Custom integrations',
          'White-label options',
        ],
        enterprise: [
          'Unlimited AI queries',
          'Custom AI training',
          'Dedicated support',
          'On-premise deployment',
          'Custom integrations',
          'SLA guarantees',
        ],
      };
      return (
        features[user.packageLevel as keyof typeof features] || features.free
      );
    }
  };

  const planFeatures = getPlanFeatures();

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Billing & Subscription
        </h1>
        <p className="text-white/60">
          Manage your subscription and view billing information
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Plan */}
        <div className="lg:col-span-2 space-y-6">
          {/* Plan Overview */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Package className="w-5 h-5 text-orange-400" />
              Current Plan
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${
                    isColdDM
                      ? 'from-blue-500 to-blue-600'
                      : 'from-purple-500 to-purple-600'
                  } rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2 capitalize">
                  {user.packageLevel} Plan
                </h4>
                <p className="text-white/60 mb-4">
                  {isColdDM ? 'ColdDM Services' : 'AI Marketing Platform'}
                </p>
                <div className="text-3xl font-bold text-white mb-2">
                  {billingData.price === 0
                    ? 'Free'
                    : billingData.price === null
                      ? 'Custom'
                      : `$${billingData.price}`}
                  {billingData.price && billingData.price > 0 && (
                    <span className="text-lg text-white/60">/month</span>
                  )}
                </div>
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    billingData.status === 'active'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}
                >
                  {billingData.status === 'active'
                    ? 'Active'
                    : 'Custom Pricing'}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-white/60" />
                    <span className="text-white/80">Next Billing</span>
                  </div>
                  <span className="text-white font-medium">
                    {billingData.nextBilling
                      ? new Date(billingData.nextBilling).toLocaleDateString()
                      : 'N/A'}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white/80">Status</span>
                  </div>
                  <span className="text-green-400 font-medium capitalize">
                    {billingData.status}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-white/60" />
                    <span className="text-white/80">Billing Cycle</span>
                  </div>
                  <span className="text-white font-medium">Monthly</span>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Statistics */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-400" />
              Usage This Month
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {usageData.map((item, index) => {
                const percentage =
                  item.limit > 0 ? (item.current / item.limit) * 100 : 0;
                const isOverLimit = item.current > item.limit;

                return (
                  <div
                    key={index}
                    className="p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white text-sm">
                        {item.name}
                      </h4>
                      <span
                        className={`text-sm font-medium ${
                          isOverLimit ? 'text-red-400' : 'text-green-400'
                        }`}
                      >
                        {item.current.toLocaleString()} /{' '}
                        {item.limit === -1 ? '∞' : item.limit.toLocaleString()}{' '}
                        {item.unit}
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          isOverLimit
                            ? 'bg-red-500'
                            : percentage > 80
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                        }`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      {isOverLimit ? (
                        <AlertCircle className="w-4 h-4 text-red-400" />
                      ) : percentage > 80 ? (
                        <AlertCircle className="w-4 h-4 text-yellow-400" />
                      ) : (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      )}
                      <span
                        className={`text-xs ${
                          isOverLimit
                            ? 'text-red-400'
                            : percentage > 80
                              ? 'text-yellow-400'
                              : 'text-green-400'
                        }`}
                      >
                        {isOverLimit
                          ? 'Over limit'
                          : percentage > 80
                            ? 'Near limit'
                            : 'Good usage'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Plan Features */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-400" />
              Your Plan Features
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {planFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => router.push('/pricing')}
                className="w-full text-left p-4 bg-gradient-to-r from-orange-500/10 to-purple-500/10 hover:from-orange-500/20 hover:to-purple-500/20 rounded-lg transition-all duration-300 border border-orange-500/20 hover:border-orange-500/40"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">
                      Upgrade Plan
                    </p>
                    <p className="text-white/60 text-xs">Get more features</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => router.push('/contact')}
                className="w-full text-left p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 border border-white/10 hover:border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">
                      Contact Support
                    </p>
                    <p className="text-white/60 text-xs">Billing questions?</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Billing History */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Recent Invoices
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="text-white text-sm font-medium">January 2024</p>
                  <p className="text-white/60 text-xs">Monthly subscription</p>
                </div>
                <div className="text-right">
                  <p className="text-white text-sm font-medium">
                    {billingData.price === 0
                      ? 'Free'
                      : billingData.price === null
                        ? 'Custom'
                        : `$${billingData.price}`}
                  </p>
                  <p className="text-green-400 text-xs">Paid</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="text-white text-sm font-medium">
                    December 2023
                  </p>
                  <p className="text-white/60 text-xs">Monthly subscription</p>
                </div>
                <div className="text-right">
                  <p className="text-white text-sm font-medium">
                    {billingData.price === 0
                      ? 'Free'
                      : billingData.price === null
                        ? 'Custom'
                        : `$${billingData.price}`}
                  </p>
                  <p className="text-green-400 text-xs">Paid</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Payment Method
            </h3>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <CreditCard className="w-5 h-5 text-white/60" />
                <span className="text-white text-sm font-medium">
                  •••• •••• •••• 4242
                </span>
              </div>
              <p className="text-white/60 text-xs">Expires 12/25</p>
            </div>
            <button className="w-full mt-3 p-2 text-white/60 hover:text-white text-sm transition-colors">
              Update Payment Method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
