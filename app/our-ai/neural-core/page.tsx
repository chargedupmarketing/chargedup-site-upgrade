'use client';

import { useState } from 'react';
import {
  Brain,
  Zap,
  Target,
  TrendingUp,
  BarChart3,
  Users,
  Shield,
  Cpu,
  Database,
  Network,
  Globe,
  Lock,
  Server,
  Code,
  Activity,
  Gauge,
  Award,
  Star,
  CheckCircle,
} from 'lucide-react';
import { AI_CONFIG, AI_CAPABILITIES, AI_METRICS } from '@/lib/constants/ai';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export default function NeuralCorePage() {
  const [activeSection, setActiveSection] = useState('overview');

  const technicalSpecs = [
    {
      category: 'AI Technology',
      specs: [
        { label: 'AI Model Type', value: 'Advanced AI-powered system' },
        {
          label: 'Processing Power',
          value: 'Multi-billion parameter AI models',
        },
        { label: 'Architecture', value: 'State-of-the-art AI technology' },
        { label: 'Training Method', value: 'Enhanced AI learning systems' },
      ],
    },
    {
      category: 'Performance Metrics',
      specs: [
        { label: 'Response Time', value: '< 2 seconds average' },
        { label: 'Throughput', value: '1000+ requests/second' },
        { label: 'Accuracy', value: '94.7% on marketing tasks' },
        { label: 'Uptime', value: '99.9% availability' },
      ],
    },
    {
      category: 'Data & Integration',
      specs: [
        { label: 'Training Data', value: 'Enhanced marketing dataset' },
        { label: 'Data Sources', value: 'Multi-channel marketing data' },
        { label: 'Update Frequency', value: 'Real-time learning' },
        { label: 'Domain Expertise', value: 'Marketing & business focused' },
      ],
    },
  ];

  const useCases = [
    {
      title: 'Marketing Strategy Development',
      description:
        'AI-powered analysis of market trends, competitor data, and audience behavior to create data-driven marketing strategies.',
      icon: Target,
      benefits: [
        'Real-time market analysis',
        'Predictive insights',
        'Competitor tracking',
        'ROI optimization',
      ],
    },
    {
      title: 'Content Creation & Optimization',
      description:
        'Generate high-quality marketing content, social media posts, and ad copy that resonates with your target audience.',
      icon: Code,
      benefits: [
        'Brand voice consistency',
        'SEO optimization',
        'A/B testing suggestions',
        'Performance prediction',
      ],
    },
    {
      title: 'Campaign Management',
      description:
        'Intelligent campaign optimization, budget allocation, and performance tracking across all marketing channels.',
      icon: BarChart3,
      benefits: [
        'Automated optimization',
        'Cross-channel coordination',
        'Budget management',
        'Performance forecasting',
      ],
    },
    {
      title: 'Customer Insights & Analytics',
      description:
        'Deep analysis of customer behavior, engagement patterns, and conversion optimization opportunities.',
      icon: Users,
      benefits: [
        'Behavioral analysis',
        'Segmentation insights',
        'Churn prediction',
        'Lifetime value calculation',
      ],
    },
  ];

  const competitiveAdvantages = [
    {
      title: 'Enhanced AI Integration',
      description:
        'Our platform integrates advanced AI technology with exclusive marketing domain expertise.',
      icon: Database,
    },
    {
      title: 'Domain-Specific Expertise',
      description:
        'Unlike general-purpose AI, our platform is specifically optimized for marketing and business applications.',
      icon: Target,
    },
    {
      title: 'Real-Time Learning',
      description:
        'Continuous improvement through live data and user interactions, making the platform smarter with every use.',
      icon: TrendingUp,
    },
    {
      title: 'Enterprise Security',
      description:
        'Bank-level security protocols and compliance standards for enterprise clients.',
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20"></div>
        <div className="container relative z-10">
          <FadeIn delay={200}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-purple-500 text-white px-4 py-2 rounded-full mb-6">
                <Brain className="w-5 h-5" />
                <span className="font-medium">
                  AI-Powered Marketing Platform
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
                  {AI_CONFIG.PLATFORM_NAME}
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                The world&apos;s most advanced AI-powered marketing intelligence
                platform. Built with cutting-edge AI technology and enhanced by
                our team of marketing experts. This isn&apos;t just another AI
                tool – it&apos;s the future of marketing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/dashboard/ai-chat"
                  className="btn-primary flex items-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Try AI Platform Now
                </Link>

                <Link href="/contact" className="btn-secondary">
                  <Target className="w-5 h-5" />
                  Schedule Demo
                </Link>
              </div>

              {/* AI Platform Badge */}
              <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">
                  AI Platform v{AI_CONFIG.PLATFORM_VERSION} Active
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-black/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FadeIn delay={300}>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">
                  {AI_METRICS.ACCURACY_RATE}
                </div>
                <div className="text-gray-400">Accuracy Rate</div>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {AI_METRICS.RESPONSE_TIME}
                </div>
                <div className="text-gray-400">Response Time</div>
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {AI_METRICS.USER_SATISFACTION}
                </div>
                <div className="text-gray-400">User Satisfaction</div>
              </div>
            </FadeIn>

            <FadeIn delay={600}>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {AI_METRICS.UPTIME}
                </div>
                <div className="text-gray-400">Uptime</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 border-b border-white/10">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'overview',
              'technology',
              'capabilities',
              'use-cases',
              'competitive',
              'pricing',
            ].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-orange-500 border-orange-500 text-black'
                    : 'border-gray-600 text-gray-400 hover:border-orange-500 hover:text-orange-400'
                }`}
              >
                {section
                  .replace('-', ' ')
                  .replace(/\b\w/g, l => l.toUpperCase())}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container">
          {activeSection === 'overview' && (
            <FadeIn>
              <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center">
                  <h2 className="h2 mb-6">
                    Revolutionary AI-Powered Marketing
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {AI_CONFIG.PLATFORM_DESCRIPTION}. Our platform leverages
                    advanced AI technology to process millions of marketing data
                    points and deliver insights that drive real business
                    results.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">
                      AI-Enhanced Intelligence
                    </h3>
                    <p className="text-gray-400">
                      Built on cutting-edge AI technology with specialized
                      marketing domain training, enabling context-aware
                      responses and strategic insights.
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Continuous Learning
                    </h3>
                    <p className="text-gray-400">
                      Our AI platform continuously learns from new marketing
                      trends, campaign data, and user interactions to improve
                      accuracy and relevance.
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Enterprise Security
                    </h3>
                    <p className="text-gray-400">
                      Bank-level security protocols, data encryption, and
                      compliance standards ensure your data and insights remain
                      protected.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {activeSection === 'technology' && (
            <FadeIn>
              <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center">
                  <h2 className="h2 mb-6">Technical Specifications</h2>
                  <p className="text-xl text-gray-300">
                    Deep dive into the advanced AI technology that powers our
                    platform.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {technicalSpecs.map((category, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/10 rounded-2xl p-8"
                    >
                      <h3 className="text-2xl font-semibold mb-6 text-white">
                        {category.category}
                      </h3>
                      <div className="space-y-4">
                        {category.specs.map((spec, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center py-3 border-b border-white/10"
                          >
                            <span className="text-gray-400">{spec.label}</span>
                            <span className="text-white font-medium">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-white">
                        Infrastructure & Scalability
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Server className="w-5 h-5 text-orange-400" />
                          <span className="text-gray-300">
                            Cloud-native architecture
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Globe className="w-5 h-5 text-purple-400" />
                          <span className="text-gray-300">
                            Global CDN distribution
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Gauge className="w-5 h-5 text-blue-400" />
                          <span className="text-gray-300">
                            Auto-scaling capabilities
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Lock className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">
                            End-to-end encryption
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Activity className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-gray-300">
                        Real-time performance monitoring and optimization
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {activeSection === 'capabilities' && (
            <FadeIn>
              <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center">
                  <h2 className="h2 mb-6">AI-Powered Capabilities</h2>
                  <p className="text-xl text-gray-300">
                    Discover the comprehensive range of AI capabilities that
                    make our platform the most advanced marketing intelligence
                    system available.
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
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Zap className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2 text-white">
                              {key
                                .replace(/_/g, ' ')
                                .replace(/\b\w/g, l => l.toUpperCase())}
                            </h3>
                            <p className="text-gray-400">{description}</p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </FadeIn>
          )}

          {activeSection === 'use-cases' && (
            <FadeIn>
              <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center">
                  <h2 className="h2 mb-6">Real-World Applications</h2>
                  <p className="text-xl text-gray-300">
                    See how our AI platform transforms marketing operations
                    across various industries and use cases.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {useCases.map((useCase, index) => {
                    const Icon = useCase.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-white">
                          {useCase.title}
                        </h3>
                        <p className="text-gray-400 mb-6">
                          {useCase.description}
                        </p>
                        <ul className="space-y-2">
                          {useCase.benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-gray-300"
                            >
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          )}

          {activeSection === 'competitive' && (
            <FadeIn>
              <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center">
                  <h2 className="h2 mb-6">Competitive Advantages</h2>
                  <p className="text-xl text-gray-300">
                    What sets our AI platform apart from generic AI solutions
                    and competitors.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {competitiveAdvantages.map((advantage, index) => {
                    const Icon = advantage.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-white">
                          {advantage.title}
                        </h3>
                        <p className="text-gray-400">{advantage.description}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 rounded-2xl p-8 text-center">
                  <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-semibold mb-6 text-white">
                      Industry Recognition
                    </h3>
                    <div className="grid grid-cols-3 gap-8">
                      <div className="text-center">
                        <Award className="w-12 h-12 text-orange-400 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-white">
                          Top 10
                        </div>
                        <div className="text-gray-400 text-sm">
                          AI Marketing Tools
                        </div>
                      </div>
                      <div className="text-center">
                        <Star className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-white">
                          4.9/5
                        </div>
                        <div className="text-gray-400 text-sm">User Rating</div>
                      </div>
                      <div className="text-center">
                        <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-white">
                          300%
                        </div>
                        <div className="text-gray-400 text-sm">
                          ROI Improvement
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {activeSection === 'pricing' && (
            <FadeIn>
              <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center">
                  <h2 className="h2 mb-6">
                    Access ChargedUp AI Marketing Platform
                  </h2>
                  <p className="text-xl text-gray-300">
                    Choose the plan that fits your business needs and start
                    leveraging the power of AI-powered marketing.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-semibold mb-4">Starter</h3>
                    <div className="text-4xl font-bold text-orange-400 mb-6">
                      $99<span className="text-lg text-gray-400">/month</span>
                    </div>
                    <ul className="space-y-3 text-left mb-8">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">
                          100 AI queries/month
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">
                          Basic marketing insights
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">Email support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">
                          Standard API access
                        </span>
                      </li>
                    </ul>
                    <Link href="/pricing" className="btn-secondary w-full">
                      Get Started
                    </Link>
                  </div>

                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 border-2 border-orange-500 rounded-2xl p-8 text-center relative transform scale-105">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-black">
                      Professional
                    </h3>
                    <div className="text-4xl font-bold text-black mb-6">
                      $299<span className="text-lg text-black/70">/month</span>
                    </div>
                    <ul className="space-y-3 text-left mb-8">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-black" />
                        <span className="text-black">
                          1,000 AI queries/month
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-black" />
                        <span className="text-black">Advanced analytics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-black" />
                        <span className="text-black">Priority support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-black" />
                        <span className="text-black">Custom integrations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-black" />
                        <span className="text-black">White-label options</span>
                      </li>
                    </ul>
                    <Link
                      href="/pricing"
                      className="btn-primary w-full bg-black text-white hover:bg-gray-800"
                    >
                      Get Started
                    </Link>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
                    <div className="text-4xl font-bold text-purple-400 mb-6">
                      Custom
                    </div>
                    <ul className="space-y-3 text-left mb-8">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">
                          Unlimited AI queries
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">
                          Custom AI training
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">Dedicated support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">
                          On-premise deployment
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">
                          Custom integrations
                        </span>
                      </li>
                    </ul>
                    <Link href="/contact" className="btn-secondary w-full">
                      Contact Sales
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}
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
              unprecedented growth. This isn&apos;t just another AI tool –
              it&apos;s the competitive advantage your business needs.
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
            <p className="text-sm text-gray-400 mt-6">
              * All plans include access to our AI-powered marketing platform
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
