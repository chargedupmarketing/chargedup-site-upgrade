'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { authService } from '@/lib/auth-service';
import { MessageSquare, Brain, ArrowRight, Zap } from 'lucide-react';

export default function ServiceLoginPage() {
  const [selectedService, setSelectedService] = useState<
    'colddm' | 'ai-platform' | null
  >(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleServiceSelect = (service: 'colddm' | 'ai-platform') => {
    setSelectedService(service);
    setError('');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) {
      setError('Please select a service first');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const user = await authService.loginWithService(
        email,
        password,
        selectedService
      );

      if (user) {
        router.push('/dashboard');
      } else {
        setError('Invalid credentials for the selected service');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  const serviceOptions = [
    {
      id: 'colddm' as const,
      name: 'AI-Powered ColdDM Services',
      description:
        'Automate customer service and capture leads 24/7 with intelligent AI chatbots',
      icon: MessageSquare,
      color: 'from-blue-500 to-blue-600',
      features: [
        'AI chatbot automation',
        'Social media integration',
        'Lead capture & CRM',
        '24/7 customer service',
      ],
    },
    {
      id: 'ai-platform' as const,
      name: 'AI Marketing Platform',
      description:
        'Access our advanced AI-powered marketing intelligence platform',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      features: [
        'AI marketing insights',
        'Content generation',
        'Strategy development',
        'Campaign optimization',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">ChargedUp</h1>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Choose Your Service
          </h2>
          <p className="text-white/60">
            Select the service you want to access and sign in to your account
          </p>
        </div>

        {/* Service Selection */}
        {!selectedService && (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {serviceOptions.map(service => (
              <button
                key={service.id}
                onClick={() => handleServiceSelect(service.id)}
                className="group text-left p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-white/80 text-sm"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-orange-400 font-medium">
                  Select Service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Login Form */}
        {selectedService && (
          <div className="max-w-md mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8">
              {/* Service Header */}
              <div className="text-center mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${
                    selectedService === 'colddm'
                      ? 'from-blue-500 to-blue-600'
                      : 'from-purple-500 to-purple-600'
                  } rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  {selectedService === 'colddm' ? (
                    <MessageSquare className="w-8 h-8 text-white" />
                  ) : (
                    <Brain className="w-8 h-8 text-white" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {selectedService === 'colddm'
                    ? 'ColdDM Services'
                    : 'AI Marketing Platform'}
                </h3>
                <p className="text-white/60 text-sm">Sign in to your account</p>
              </div>

              {/* Back Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="text-white/60 hover:text-white text-sm mb-6 transition-colors"
              >
                ← Choose different service
              </button>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all duration-300"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {error && (
                  <div className="text-red-400 text-sm text-center bg-red-400/10 border border-red-400/20 rounded-lg p-3">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </button>
              </form>

              {/* Additional Links */}
              <div className="mt-6 text-center space-y-2">
                <Link
                  href="/auth/forgot-password"
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  Forgot your password?
                </Link>
                <div className="text-sm text-white/40">
                  Don't have an account?{' '}
                  <Link
                    href="/contact"
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Contact us to get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-white/40 text-sm">
            Need help?{' '}
            <Link
              href="/contact"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
