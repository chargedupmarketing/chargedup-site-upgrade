'use client';

import { useState } from 'react';
import {
  Brain,
  Zap,
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Globe,
  Shield,
  Cpu,
  Database,
  Network,
} from 'lucide-react';
import { AI_CONFIG, AI_CAPABILITIES, AI_METRICS } from '@/lib/constants/ai';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export default function OurAIPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isDemoRunning, setIsDemoRunning] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Brain },
    { id: 'capabilities', label: 'Capabilities', icon: Zap },
    { id: 'performance', label: 'Performance', icon: BarChart3 },
    { id: 'technology', label: 'Technology', icon: Cpu },
    { id: 'pricing', label: 'Pricing', icon: Target },
  ];

  const runAIDemo = () => {
    setIsDemoRunning(true);
    // Simulate AI processing
    setTimeout(() => setIsDemoRunning(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20"></div>
        <div className="container relative z-10">
          <FadeIn delay={200}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
                <Brain className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-medium">
                  AI-Powered Marketing Platform
                </span>
              </div>

              <h1 className="h1 mb-6">
                Meet{' '}
                <span className="text-brand-accent">
                  {AI_CONFIG.PLATFORM_NAME}
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our revolutionary AI-powered marketing intelligence platform
                that transforms how businesses approach digital marketing. Built
                with cutting-edge AI technology and enhanced by our team of
                marketing experts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={runAIDemo}
                  disabled={isDemoRunning}
                  className="btn-primary flex items-center gap-2"
                >
                  {isDemoRunning ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      Try AI Platform Demo
                    </>
                  )}
                </button>

                <Link href="/dashboard/ai-chat" className="btn-secondary">
                  <Brain className="w-5 h-5" />
                  Access AI Platform
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* AI Platform Stats */}
      <section className="py-16 bg-black/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FadeIn delay={300}>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  {AI_METRICS.ACCURACY_RATE}
                </div>
                <div className="text-gray-400">Accuracy Rate</div>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {AI_METRICS.RESPONSE_TIME}
                </div>
                <div className="text-gray-400">Response Time</div>
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {AI_METRICS.USER_SATISFACTION}
                </div>
                <div className="text-gray-400">User Satisfaction</div>
              </div>
            </FadeIn>

            <FadeIn delay={600}>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {AI_METRICS.UPTIME}
                </div>
                <div className="text-gray-400">Uptime</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="py-20">
        <div className="container">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-orange-500 border-orange-500 text-black'
                      : 'border-gray-600 text-gray-400 hover:border-orange-500 hover:text-orange-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'overview' && (
              <FadeIn>
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="h2 mb-6">
                      The Future of AI-Powered Marketing
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {AI_CONFIG.PLATFORM_DESCRIPTION}. Our platform leverages
                      advanced AI technology to process millions of marketing
                      data points and deliver insights that drive real business
                      results.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        AI-Enhanced Intelligence
                      </h3>
                      <p className="text-gray-400">
                        Built on cutting-edge AI technology with specialized
                        marketing domain training, enabling context-aware
                        responses and strategic insights.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        Continuous Learning
                      </h3>
                      <p className="text-gray-400">
                        Our AI platform continuously learns from new marketing
                        trends, campaign data, and user interactions to improve
                        accuracy and relevance.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )}

            {activeTab === 'capabilities' && (
              <FadeIn>
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="h2 mb-6">
                      AI-Powered Marketing Capabilities
                    </h2>
                    <p className="text-lg text-gray-300">
                      Discover what makes our AI platform the most advanced
                      marketing intelligence system available.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(AI_CAPABILITIES).map(
                      ([key, description], index) => (
                        <div
                          key={key}
                          className="bg-white/5 border border-white/10 rounded-xl p-6"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Zap className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold mb-2 text-white">
                                {key
                                  .replace(/_/g, ' ')
                                  .replace(/\b\w/g, l => l.toUpperCase())}
                              </h3>
                              <p className="text-gray-400 text-sm">
                                {description}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </FadeIn>
            )}

            {activeTab === 'performance' && (
              <FadeIn>
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="h2 mb-6">
                      Performance Metrics & Benchmarks
                    </h2>
                    <p className="text-lg text-gray-300">
                      See how our AI platform outperforms industry standards and
                      delivers measurable results.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-white">
                        Speed & Efficiency
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Response Time</span>
                          <span className="text-orange-400 font-semibold">
                            {AI_METRICS.RESPONSE_TIME}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">
                            Processing Power
                          </span>
                          <span className="text-purple-400 font-semibold">
                            {AI_METRICS.PROCESSING_POWER}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Uptime</span>
                          <span className="text-green-400 font-semibold">
                            {AI_METRICS.UPTIME}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-white">
                        Quality & Reliability
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Accuracy Rate</span>
                          <span className="text-blue-400 font-semibold">
                            {AI_METRICS.ACCURACY_RATE}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">
                            User Satisfaction
                          </span>
                          <span className="text-green-400 font-semibold">
                            {AI_METRICS.USER_SATISFACTION}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">AI Technology</span>
                          <span className="text-purple-400 font-semibold">
                            {AI_METRICS.TRAINING_DATA}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )}

            {activeTab === 'technology' && (
              <FadeIn>
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="h2 mb-6">
                      Advanced AI Technology Integration
                    </h2>
                    <p className="text-lg text-gray-300">
                      Built with cutting-edge AI technologies and enhanced by
                      our marketing expertise.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-white">
                        AI Technology Stack
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Cpu className="w-5 h-5 text-orange-400" />
                          <span className="text-gray-300">
                            Advanced AI Models
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Database className="w-5 h-5 text-purple-400" />
                          <span className="text-gray-300">
                            Enhanced Training Data
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Network className="w-5 h-5 text-blue-400" />
                          <span className="text-gray-300">
                            Real-time Learning Systems
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-white">
                        Security & Infrastructure
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Shield className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">
                            Enterprise-Grade Security
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Globe className="w-5 h-5 text-orange-400" />
                          <span className="text-gray-300">
                            Global CDN Infrastructure
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-purple-400" />
                          <span className="text-gray-300">
                            Multi-tenant Architecture
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )}

            {activeTab === 'pricing' && (
              <FadeIn>
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="h2 mb-6">AI Platform Pricing Overview</h2>
                    <p className="text-lg text-gray-300">
                      Get started with AI-powered marketing intelligence. View
                      detailed pricing and features on our main pricing page.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Free Plan */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                      <h3 className="text-lg font-semibold mb-3">Free</h3>
                      <div className="text-2xl font-bold text-gray-400 mb-3">
                        $0<span className="text-sm text-gray-500">/month</span>
                      </div>
                      <p className="text-gray-400 text-xs mb-3">
                        Perfect for trying out our AI platform
                      </p>
                      <ul className="space-y-1 text-left mb-4">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="text-gray-400 text-xs">
                            25 AI queries/month
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="text-gray-400 text-xs">
                            Basic insights
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="text-gray-400 text-xs">
                            Community support
                          </span>
                        </li>
                      </ul>
                      <Link
                        href="/pricing#ai-pricing"
                        className="btn-secondary w-full text-xs py-2"
                      >
                        Get Started
                      </Link>
                    </div>

                    {/* Enhanced Plan */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                      <h3 className="text-lg font-semibold mb-3">Enhanced</h3>
                      <div className="text-2xl font-bold text-blue-400 mb-3">
                        $49<span className="text-sm text-gray-500">/month</span>
                      </div>
                      <p className="text-gray-400 text-xs mb-3">
                        Great for small businesses
                      </p>
                      <ul className="space-y-1 text-left mb-4">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-300 text-xs">
                            250 AI queries/month
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-300 text-xs">
                            Enhanced insights
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-300 text-xs">
                            Email support
                          </span>
                        </li>
                      </ul>
                      <Link
                        href="/pricing#ai-pricing"
                        className="btn-secondary w-full text-xs py-2"
                      >
                        View Details
                      </Link>
                    </div>

                    {/* Professional Plan */}
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 border-2 border-orange-500 rounded-2xl p-4 text-center relative">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-black">
                        Professional
                      </h3>
                      <div className="text-2xl font-bold text-black mb-3">
                        $199
                        <span className="text-sm text-black/70">/month</span>
                      </div>
                      <p className="text-black/80 text-xs mb-3">
                        Ideal for growing businesses
                      </p>
                      <ul className="space-y-1 text-left mb-4">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                          <span className="text-black text-xs">
                            1,000 AI queries/month
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                          <span className="text-black text-xs">
                            Advanced analytics
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                          <span className="text-black text-xs">
                            Priority support
                          </span>
                        </li>
                      </ul>
                      <Link
                        href="/pricing#ai-pricing"
                        className="btn-primary w-full bg-black text-white hover:bg-gray-800 text-xs py-2"
                      >
                        View Details
                      </Link>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                      <h3 className="text-lg font-semibold mb-3">Enterprise</h3>
                      <div className="text-2xl font-bold text-purple-400 mb-3">
                        Pricing on Request
                      </div>
                      <p className="text-gray-400 text-xs mb-3">
                        Tailored for large organizations
                      </p>
                      <ul className="space-y-1 text-left mb-4">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300 text-xs">
                            Unlimited AI queries
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300 text-xs">
                            Custom AI training
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300 text-xs">
                            Dedicated support
                          </span>
                        </li>
                      </ul>
                      <Link
                        href="/enterprise-inquiry"
                        className="btn-secondary w-full text-xs py-2"
                      >
                        Request Enterprise Quote
                      </Link>
                    </div>
                  </div>

                  <div className="text-center">
                    <Link href="/pricing#ai-pricing" className="btn-primary">
                      View Complete AI Pricing Details
                    </Link>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/20 to-purple-500/20">
        <div className="container text-center">
          <FadeIn>
            <h2 className="h2 mb-6">
              Ready to Experience the Future of AI-Powered Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our AI-powered
              platform to transform their marketing strategies and drive
              unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard/ai-chat" className="btn-primary">
                <Brain className="w-5 h-5" />
                Start Using AI Platform
              </Link>
              <Link href="/contact" className="btn-secondary">
                <Target className="w-5 h-5" />
                Schedule Demo
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
