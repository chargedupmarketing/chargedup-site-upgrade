'use client'

import { useState, useEffect } from 'react'
import { 
  Mail, 
  Users, 
  Send, 
  Calendar, 
  BarChart3, 
  Plus, 
  Search, 
  Filter,
  Download,
  Edit,
  Trash2,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

interface NewsletterSubscriber {
  id: string
  email: string
  firstName?: string
  lastName?: string
  subscribedAt: string
  lastEmailSent?: string
  openRate: number
  clickRate: number
  status: 'active' | 'unsubscribed' | 'bounced'
  tags: string[]
}

interface EmailCampaign {
  id: string
  name: string
  subject: string
  status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed'
  scheduledFor?: string
  sentAt?: string
  recipientCount: number
  openRate: number
  clickRate: number
  createdAt: string
}

export default function NewsletterManagement() {
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([])
  const [campaigns, setCampaigns] = useState<EmailCampaign[]>([])
  const [activeTab, setActiveTab] = useState<'subscribers' | 'campaigns' | 'automation'>('subscribers')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [showNewCampaignModal, setShowNewCampaignModal] = useState(false)
  const [showNewSubscriberModal, setShowNewSubscriberModal] = useState(false)

  // Mock data - replace with actual API calls
  useEffect(() => {
    setSubscribers([])
    setCampaigns([])
  }, [])

  const filteredSubscribers = subscribers.filter(sub => {
    const matchesSearch = 
      sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (sub.firstName && sub.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (sub.lastName && sub.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesStatus = !filterStatus || sub.status === filterStatus
    
    return matchesSearch && matchesStatus
  })

  const exportSubscribers = () => {
    const csvContent = [
      ['Email', 'First Name', 'Last Name', 'Subscribed Date', 'Status', 'Open Rate', 'Click Rate'],
      ...filteredSubscribers.map(sub => [
        sub.email,
        sub.firstName || '',
        sub.lastName || '',
        new Date(sub.subscribedAt).toLocaleDateString(),
        sub.status,
        `${sub.openRate}%`,
        `${sub.clickRate}%`
      ])
    ].map(row => row.map(field => `"${field}"`).join(',')).join('\n')
    
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `newsletter-subscribers-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/10'
      case 'unsubscribed': return 'text-red-400 bg-red-400/10'
      case 'bounced': return 'text-yellow-400 bg-yellow-400/10'
      default: return 'text-gray-400 bg-gray-400/10'
    }
  }

  const getCampaignStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'text-gray-400 bg-gray-400/10'
      case 'scheduled': return 'text-blue-400 bg-blue-400/10'
      case 'sending': return 'text-yellow-400 bg-yellow-400/10'
      case 'sent': return 'text-green-400 bg-green-400/10'
      case 'failed': return 'text-red-400 bg-red-400/10'
      default: return 'text-gray-400 bg-gray-400/10'
    }
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Newsletter Management</h1>
        <p className="text-gray-400">Manage subscribers, create campaigns, and automate your email marketing</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Total Subscribers</p>
              <p className="text-2xl font-bold text-white">{subscribers.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Mail className="w-6 h-6 text-green-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Active Campaigns</p>
              <p className="text-2xl font-bold text-white">
                {campaigns.filter(c => c.status === 'draft' || c.status === 'scheduled').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <BarChart3 className="w-6 h-6 text-orange-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Avg Open Rate</p>
              <p className="text-2xl font-bold text-white">
                {Math.round(subscribers.reduce((acc, sub) => acc + sub.openRate, 0) / subscribers.length)}%
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Send className="w-6 h-6 text-purple-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Emails Sent</p>
              <p className="text-2xl font-bold text-white">
                {campaigns.filter(c => c.status === 'sent').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 mb-6">
        <div className="flex border-b border-gray-700">
          <button
            onClick={() => setActiveTab('subscribers')}
            className={`px-6 py-3 text-sm font-medium rounded-t-xl transition-colors ${
              activeTab === 'subscribers'
                ? 'text-white bg-gray-700 border-b-2 border-orange-500'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <Users className="w-4 h-4 inline mr-2" />
            Subscribers ({subscribers.length})
          </button>
          <button
            onClick={() => setActiveTab('campaigns')}
            className={`px-6 py-3 text-sm font-medium rounded-t-xl transition-colors ${
              activeTab === 'campaigns'
                ? 'text-white bg-gray-700 border-b-2 border-orange-500'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <Mail className="w-4 h-4 inline mr-2" />
            Campaigns ({campaigns.length})
          </button>
          <button
            onClick={() => setActiveTab('automation')}
            className={`px-6 py-3 text-sm font-medium rounded-t-xl transition-colors ${
              activeTab === 'automation'
                ? 'text-white bg-gray-700 border-b-2 border-orange-500'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <Calendar className="w-4 h-4 inline mr-2" />
            Automation
          </button>
        </div>

        <div className="p-6">
          {/* Subscribers Tab */}
          {activeTab === 'subscribers' && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search subscribers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">All Statuses</option>
                    <option value="active">Active</option>
                    <option value="unsubscribed">Unsubscribed</option>
                    <option value="bounced">Bounced</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowNewSubscriberModal(true)}
                    className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Subscriber
                  </button>
                  <button
                    onClick={exportSubscribers}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </button>
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Subscriber</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Performance</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Tags</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-600">
                    {filteredSubscribers.map((subscriber) => (
                      <tr key={subscriber.id} className="hover:bg-gray-600 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-white">
                              {subscriber.firstName && subscriber.lastName 
                                ? `${subscriber.firstName} ${subscriber.lastName}`
                                : 'Unknown'
                              }
                            </div>
                            <div className="text-sm text-gray-400">{subscriber.email}</div>
                            <div className="text-xs text-gray-500">
                              Joined {new Date(subscriber.subscribedAt).toLocaleDateString()}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(subscriber.status)}`}>
                            {subscriber.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-300">
                            <div>Open: {subscriber.openRate}%</div>
                            <div>Click: {subscriber.clickRate}%</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {subscriber.tags.map((tag, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button className="p-1 text-gray-400 hover:text-white transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-white transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-red-400 hover:text-red-300 transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Campaigns Tab */}
          {activeTab === 'campaigns' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-white">Email Campaigns</h3>
                <button
                  onClick={() => setShowNewCampaignModal(true)}
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors flex items-center"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  New Campaign
                </button>
              </div>

              <div className="grid gap-4">
                {campaigns.map((campaign) => (
                  <div key={campaign.id} className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-medium text-white">{campaign.name}</h4>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCampaignStatusColor(campaign.status)}`}>
                            {campaign.status}
                          </span>
                        </div>
                        <p className="text-gray-400 mb-3">{campaign.subject}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Recipients:</span>
                            <span className="text-white ml-2">{campaign.recipientCount.toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Open Rate:</span>
                            <span className="text-white ml-2">{campaign.openRate}%</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Click Rate:</span>
                            <span className="text-white ml-2">{campaign.clickRate}%</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Created:</span>
                            <span className="text-white ml-2">{new Date(campaign.createdAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-400 hover:text-red-300 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Automation Tab */}
          {activeTab === 'automation' && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">Automation Coming Soon</h3>
              <p className="text-gray-400 mb-6">
                Set up automated email sequences, welcome series, and trigger-based campaigns.
              </p>
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors">
                Get Notified
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modals would go here - placeholder for now */}
      {showNewCampaignModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-medium text-white mb-4">New Campaign</h3>
            <p className="text-gray-400 mb-4">Campaign creation form will be implemented here.</p>
            <button
              onClick={() => setShowNewCampaignModal(false)}
              className="w-full px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showNewSubscriberModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-medium text-white mb-4">Add Subscriber</h3>
            <p className="text-gray-400 mb-4">Subscriber form will be implemented here.</p>
            <button
              onClick={() => setShowNewSubscriberModal(false)}
              className="w-full px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
