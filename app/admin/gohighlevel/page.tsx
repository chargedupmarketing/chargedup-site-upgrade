'use client'

import { useState, useEffect } from 'react'
import { ExternalLink, ArrowRight, Clock, Users, BarChart3, Settings, Zap } from 'lucide-react'

export default function GoHighLevelRedirect() {
  const [countdown, setCountdown] = useState(5)
  const [isRedirecting, setIsRedirecting] = useState(false)

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setIsRedirecting(true)
      // Redirect to GoHighLevel
      window.open('https://app.gohighlevel.com', '_blank')
    }
  }, [countdown])

  const handleRedirectNow = () => {
    setIsRedirecting(true)
    window.open('https://app.gohighlevel.com', '_blank')
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">GoHighLevel Platform</h1>
        <p className="text-gray-400">Redirecting to our external CRM and marketing automation platform</p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* Redirect Card */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 mb-8 text-center">
          <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ExternalLink className="w-10 h-10 text-blue-400" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4">
            Redirecting to GoHighLevel
          </h2>
          
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            You're being redirected to our GoHighLevel platform where you can manage clients, 
            campaigns, and marketing automation workflows.
          </p>

          {!isRedirecting ? (
            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                Automatic redirect in <span className="text-orange-400 font-bold text-xl">{countdown}</span> seconds
              </p>
              <button
                onClick={handleRedirectNow}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center mx-auto"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Go Now
              </button>
            </div>
          ) : (
            <div className="mb-6">
              <p className="text-green-400 font-semibold">
                ✓ Redirecting to GoHighLevel...
              </p>
            </div>
          )}

          <div className="text-sm text-gray-500">
            If you're not redirected automatically,{' '}
            <a 
              href="https://app.gohighlevel.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              click here
            </a>
          </div>
        </div>

        {/* Platform Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Client Management</h3>
            <p className="text-gray-400 text-sm">
              Manage client relationships, track interactions, and maintain detailed client profiles
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Marketing Automation</h3>
            <p className="text-gray-400 text-sm">
              Create automated email sequences, SMS campaigns, and marketing workflows
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Analytics & Reporting</h3>
            <p className="text-gray-400 text-sm">
              Track campaign performance, client engagement, and business metrics
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Appointment Scheduling</h3>
            <p className="text-gray-400 text-sm">
              Book strategy meetings, consultations, and follow-up calls with clients
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Workflow Management</h3>
            <p className="text-gray-400 text-sm">
              Streamline business processes with customizable workflows and automation
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
              <ExternalLink className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Integrations</h3>
            <p className="text-gray-400 text-sm">
              Connect with your favorite tools and platforms for seamless workflow
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://app.gohighlevel.com/contacts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
            >
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-white">Manage Contacts</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            </a>

            <a
              href="https://app.gohighlevel.com/calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
            >
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-white">View Calendar</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            </a>

            <a
              href="https://app.gohighlevel.com/campaigns"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
            >
              <div className="flex items-center">
                <Zap className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-white">Email Campaigns</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            </a>

            <a
              href="https://app.gohighlevel.com/analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
            >
              <div className="flex items-center">
                <BarChart3 className="w-5 h-5 text-orange-400 mr-3" />
                <span className="text-white">View Analytics</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Support Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-2">
            Need help with GoHighLevel? Contact your system administrator
          </p>
          <p className="text-sm text-gray-500">
            Platform access is managed by your team's super admin
          </p>
        </div>
      </div>
    </div>
  )
}
