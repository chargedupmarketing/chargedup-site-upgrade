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
  Download,
  Share2,
  Play,
} from 'lucide-react';
import { AI_CONFIG, AI_CAPABILITIES, AI_METRICS } from '@/lib/constants/ai';
import Link from 'next/link';

export default function AIModelBrochure() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const technicalSpecs = [
    { label: 'AI Platform Architecture', value: 'Advanced AI-powered system' },
    {
      label: 'Processing Capabilities',
      value: 'Multi-billion parameter AI models',
    },
    { label: 'Training Data', value: 'Enhanced marketing dataset' },
    { label: 'Learning Systems', value: 'Real-time AI learning' },
    { label: 'Response Time', value: '< 2 seconds average' },
    { label: 'Accuracy Rate', value: '94.7% on marketing tasks' },
  ];

  const keyFeatures = [
    'AI-powered marketing strategy development',
    'Intelligent content creation and optimization',
    'Advanced social media management',
    'Real-time market analysis and insights',
    'Predictive campaign optimization',
    'Customer behavior analysis',
    'Competitive intelligence gathering',
    'ROI optimization and tracking',
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      description:
        'AI-powered product recommendations, customer segmentation, and conversion optimization',
      icon: ShoppingBag,
    },
    {
      industry: 'B2B Marketing',
      description:
        'Lead generation, account-based marketing, and sales enablement through AI insights',
      icon: Building2,
    },
    {
      industry: 'SaaS',
      description:
        'User onboarding optimization, feature adoption, and retention strategies',
      icon: Cloud,
    },
    {
      industry: 'Agency Services',
      description:
        'Client campaign management, performance optimization, and strategic planning',
      icon: Users,
    },
  ];

  const testimonials = [
    {
      quote:
        'This AI platform has transformed how we approach marketing. The insights are incredible.',
      author: 'Sarah Johnson',
      company: 'TechStart Inc.',
      rating: 5,
    },
    {
      quote:
        "We've seen a 300% improvement in our marketing ROI since implementing this platform.",
      author: 'Mike Chen',
      company: 'GrowthCo',
      rating: 5,
    },
    {
      quote:
        "The AI-powered recommendations are spot-on. It's like having a marketing expert on demand.",
      author: 'Lisa Rodriguez',
      company: 'Digital Dynamics',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
            <Brain className="w-5 h-5" />
            <span className="font-medium">AI-Powered Marketing Platform</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {AI_CONFIG.PLATFORM_NAME}
          </h1>

          <p className="text-xl mb-8 max-w-3xl mx-auto">
            The world&apos;s most advanced AI-powered marketing intelligence
            platform. Built with cutting-edge AI technology and enhanced by our
            team of marketing experts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>

            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Key Stats */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                {AI_METRICS.ACCURACY_RATE}
              </div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">
                {AI_METRICS.RESPONSE_TIME}
              </div>
              <div className="text-gray-600">Response Time</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">
                {AI_METRICS.USER_SATISFACTION}
              </div>
              <div className="text-gray-600">User Satisfaction</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">
                {AI_METRICS.UPTIME}
              </div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              What Makes Our AI Platform Different?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike generic AI solutions, our platform combines advanced AI
              technology with exclusive marketing domain expertise to deliver
              results that drive real business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                AI-Enhanced Intelligence
              </h3>
              <p className="text-gray-600">
                Built on cutting-edge AI technology with specialized marketing
                domain training, enabling context-aware responses and strategic
                insights.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Continuous Learning
              </h3>
              <p className="text-gray-600">
                Our AI platform continuously learns from new marketing trends,
                campaign data, and user interactions to improve accuracy and
                relevance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Enterprise Security
              </h3>
              <p className="text-gray-600">
                Bank-level security protocols, data encryption, and compliance
                standards ensure your data and insights remain protected.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600">
              Deep dive into the advanced AI technology that powers our
              platform.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {technicalSpecs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-200"
                  >
                    <span className="text-gray-600 font-medium">
                      {spec.label}
                    </span>
                    <span className="text-gray-900 font-semibold">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Key Features</h2>
            <p className="text-xl text-gray-600">
              Discover the comprehensive range of AI capabilities that make our
              platform the most advanced marketing intelligence system
              available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases by Industry */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Use Cases by Industry</h2>
            <p className="text-xl text-gray-600">
              See how our AI platform transforms marketing operations across
              various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {useCase.industry}
                  </h3>
                  <p className="text-gray-600 text-sm">{useCase.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses using our AI-powered platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Pricing Plans</h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business needs and start leveraging
              the power of AI-powered marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Starter</h3>
              <div className="text-4xl font-bold text-orange-500 mb-6">
                $99<span className="text-lg text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">100 AI queries/month</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">
                    Basic marketing insights
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
              <Link
                href="/pricing"
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors w-full block"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl shadow-lg p-8 text-center relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-semibold mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-6">
                $299<span className="text-lg text-orange-100">/month</span>
              </div>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>1,000 AI queries/month</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>Custom integrations</span>
                </li>
              </ul>
              <Link
                href="/pricing"
                className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors w-full block"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-500 mb-6">
                Custom
              </div>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Unlimited AI queries</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Custom AI training</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Dedicated support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">White-label options</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="bg-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-600 transition-colors w-full block"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gradient-to-r from-orange-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the Future of AI-Powered Marketing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already leveraging our AI-powered
            platform to transform their marketing strategies and drive
            unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard/ai-chat"
              className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Using AI Platform
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
          <p className="text-sm text-orange-100 mt-6">
            * All plans include access to our AI-powered marketing platform
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-orange-400" />
            <span className="text-xl font-semibold">
              {AI_CONFIG.PLATFORM_NAME}
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            Built with cutting-edge AI technology and enhanced by marketing
            expertise
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <span>© 2024 ChargedUp Marketing</span>
            <span>•</span>
            <span>AI-Powered Platform</span>
            <span>•</span>
            <span>v{AI_CONFIG.PLATFORM_VERSION}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Icon components for use cases
function ShoppingBag(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );
}

function Building2(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 21h18"></path>
      <path d="M5 21V7l8-4v18"></path>
      <path d="M19 21V11l-6-4"></path>
      <path d="M9 9h.01"></path>
      <path d="M9 12h.01"></path>
      <path d="M9 15h.01"></path>
      <path d="M9 18h.01"></path>
    </svg>
  );
}

function Cloud(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </svg>
  );
}
