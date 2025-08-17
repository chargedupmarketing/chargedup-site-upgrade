'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Mail, Lock, ArrowRight, Sparkles, Shield } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/simple-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('isAuthenticated', 'true');

        // Redirect to dashboard
        router.push('/dashboard');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Logo and Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mx-auto h-20 w-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-orange-500/25"
          >
            <Zap className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-white mb-3"
          >
            Welcome Back
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/60 text-lg"
          >
            Sign in to your ChargedUp AI account
          </motion.p>
        </motion.div>

        {/* Login Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 space-y-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/50"
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/80 mb-3 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 backdrop-blur-sm"
                placeholder="Enter your email"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white/80 mb-3 flex items-center gap-2"
              >
                <Lock className="w-4 h-4" />
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 backdrop-blur-sm"
                placeholder="Enter your password"
              />
            </motion.div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-500/20 border border-red-500/30 rounded-2xl p-4 text-red-400 text-center text-sm backdrop-blur-sm"
            >
              <p>{error}</p>
            </motion.div>
          )}

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            type="submit"
            disabled={isLoading}
            className="group w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 px-4 rounded-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 flex items-center justify-center gap-3"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Signing In...
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                Sign In
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center space-y-4"
        >
          <div className="text-sm">
            <span className="text-white/60">Don&apos;t have an account? </span>
            <Link
              href="/auth/register"
              className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-200 hover:underline"
            >
              Sign up here
            </Link>
          </div>

          <div className="text-sm">
            <Link
              href="/"
              className="text-white/60 hover:text-white/80 transition-colors duration-200 hover:underline flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Home
            </Link>
          </div>
        </motion.div>

        {/* Security Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-3">
            <Shield className="w-4 h-4 text-orange-400" />
            <p className="text-xs text-white/60">
              Your data is protected with enterprise-grade security
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
