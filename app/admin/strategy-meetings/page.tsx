'use client'

import { useState, useEffect } from 'react'
import { 
  Calendar, 
  Clock, 
  User, 
  Building, 
  Mail, 
  Phone, 
  MessageSquare, 
  CheckCircle, 
  XCircle, 
  Clock3,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Send,
  Archive
} from 'lucide-react'

interface StrategyMeeting {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  company: string
  website?: string
  services: string[]
  advertisingSpend: string
  notes?: string
  newsletter: boolean
  status: 'pending' | 'scheduled' | 'completed' | 'cancelled' | 'no-show'
  submittedAt: string
  scheduledFor?: string
  assignedTo?: string
  responseNotes?: string
  source: string
  priority: 'low' | 'medium' | 'high'
}

export default function StrategyMeetings() {
  const [meetings, setMeetings] = useState<StrategyMeeting[]>([])
  const [activeTab, setActiveTab] = useState<'pending' | 'scheduled' | 'completed' | 'all'>('pending')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [filterPriority, setFilterPriority] = useState('')
  const [filterSource, setFilterSource] = useState('')
  const [selectedMeeting, setSelectedMeeting] = useState<StrategyMeeting | null>(null)
  const [showResponseModal, setShowResponseModal] = useState(false)
  const [responseText, setResponseText] = useState('')

  // Mock data - replace with actual API calls
  useEffect(() => {
    setMeetings([])
  }, [])

  const filteredMeetings = meetings.filter(meeting => {
    const matchesSearch = 
      `${meeting.firstName} ${meeting.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      meeting.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      meeting.company.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = !filterStatus || meeting.status === filterStatus
    const matchesPriority = !filterPriority || meeting.priority === filterPriority
    const matchesSource = !filterSource || meeting.source === filterSource
    
    const matchesTab = activeTab === 'all' || meeting.status === activeTab
    
    return matchesSearch && matchesStatus && matchesPriority && matchesSource && matchesTab
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-400 bg-yellow-400/10'
      case 'scheduled': return 'text-blue-400 bg-blue-400/10'
      case 'completed': return 'text-green-400 bg-green-400/10'
      case 'cancelled': return 'text-red-400 bg-red-400/10'
      case 'no-show': return 'text-gray-400 bg-gray-400/10'
      default: return 'text-gray-400 bg-gray-400/10'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-400/10'
      case 'medium': return 'text-yellow-400 bg-yellow-400/10'
      case 'low': return 'text-green-400 bg-green-400/10'
      default: return 'text-gray-400 bg-gray-400/10'
    }
  }

  const exportMeetings = () => {
    const csvContent = [
      ['Date', 'Name', 'Email', 'Company', 'Services', 'Budget', 'Status', 'Priority', 'Source'],
      ...filteredMeetings.map(meeting => [
        new Date(meeting.submittedAt).toLocaleDateString(),
        `"${meeting.firstName} ${meeting.lastName}"`,
        meeting.email,
        `"${meeting.company}"`,
        `"${meeting.services.join(', ')}"`,
        meeting.advertisingSpend,
        meeting.status,
        meeting.priority,
        meeting.source
      ])
    ].map(row => row.map(field => `"${field}"`).join(',')).join('\n')
    
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `strategy-meetings-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const handleStatusChange = (meetingId: string, newStatus: string) => {
    setMeetings(prev => prev.map(meeting => 
      meeting.id === meetingId 
        ? { ...meeting, status: newStatus as any }
        : meeting
    ))
  }

  const handleResponseSubmit = () => {
    if (selectedMeeting && responseText.trim()) {
      setMeetings(prev => prev.map(meeting => 
        meeting.id === selectedMeeting.id 
          ? { 
              ...meeting, 
              responseNotes: responseText,
              status: 'scheduled' as any,
              assignedTo: 'current_user' // Replace with actual user ID
            }
          : meeting
      ))
      setShowResponseModal(false)
      setResponseText('')
      setSelectedMeeting(null)
    }
  }

  const getTabCount = (status: string) => {
    if (status === 'all') return meetings.length
    return meetings.filter(m => m.status === status).length
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Strategy Meeting Inquiries</h1>
        <p className="text-gray-400">Manage and respond to strategy meeting requests from potential clients</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-500/10 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Pending</p>
              <p className="text-2xl font-bold text-white">
                {meetings.filter(m => m.status === 'pending').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Calendar className="w-6 h-6 text-blue-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Scheduled</p>
              <p className="text-2xl font-bold text-white">
                {meetings.filter(m => m.status === 'scheduled').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Completed</p>
              <p className="text-2xl font-bold text-white">
                {meetings.filter(m => m.status === 'completed').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <User className="w-6 h-6 text-orange-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Total</p>
              <p className="text-2xl font-bold text-white">{meetings.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 mb-6">
        <div className="flex border-b border-gray-700 overflow-x-auto">
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-6 py-3 text-sm font-medium rounded-t-xl transition-colors whitespace-nowrap ${
              activeTab === 'pending'
                ? 'text-white bg-gray-700 border-b-2 border-orange-500'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <Clock className="w-4 h-4 inline mr-2" />
            Pending ({getTabCount('pending')})
          </button>
          <button
            onClick={() => setActiveTab('scheduled')}
            className={`px-6 py-3 text-sm font-medium rounded-t-xl transition-colors whitespace-nowrap ${
              activeTab === 'scheduled'
                ? 'text-white bg-gray-700 border-b-2 border-orange-500'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <Calendar className="w-4 h-4 inline mr-2" />
            Scheduled ({getTabCount('scheduled')})
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-6 py-3 text-sm font-medium rounded-t-xl transition-colors whitespace-nowrap ${
              activeTab === 'completed'
                ? 'text-white bg-gray-700 border-b-2 border-orange-500'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <CheckCircle className="w-4 h-4 inline mr-2" />
            Completed ({getTabCount('completed')})
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 text-sm font-medium rounded-t-xl transition-colors whitespace-nowrap ${
              activeTab === 'all'
                ? 'text-white bg-gray-700 border-b-2 border-orange-500'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <Eye className="w-4 h-4 inline mr-2" />
            All ({getTabCount('all')})
          </button>
        </div>

        <div className="p-6">
          {/* Filters and Search */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
            <div className="flex flex-col lg:flex-row gap-4 flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search inquiries..."
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
                <option value="pending">Pending</option>
                <option value="scheduled">Scheduled</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
                <option value="no-show">No Show</option>
              </select>
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">All Priorities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <select
                value={filterSource}
                onChange={(e) => setFilterSource(e.target.value)}
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">All Sources</option>
                <option value="Website Contact Form">Website</option>
                <option value="Google Search">Google</option>
                <option value="Referral">Referral</option>
                <option value="Social Media">Social Media</option>
              </select>
            </div>
            <button
              onClick={exportMeetings}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
          </div>

          {/* Meetings List */}
          <div className="space-y-4">
            {filteredMeetings.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-xl">No meetings found</div>
                <p className="text-gray-500 text-sm mt-2">
                  {searchTerm || filterStatus || filterPriority || filterSource 
                    ? 'Try adjusting your filters' 
                    : 'Strategy meeting requests will appear here'
                  }
                </p>
              </div>
            ) : (
              filteredMeetings.map((meeting) => (
                <div key={meeting.id} className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-lg font-medium text-white">
                          {meeting.firstName} {meeting.lastName}
                        </h4>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(meeting.status)}`}>
                          {meeting.status}
                        </span>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(meeting.priority)}`}>
                          {meeting.priority}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400">Company:</span>
                          <span className="text-white">{meeting.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400">Email:</span>
                          <span className="text-white">{meeting.email}</span>
                        </div>
                        {meeting.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400">Phone:</span>
                            <span className="text-white">{meeting.phone}</span>
                          </div>
                        )}
                        {meeting.website && (
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400">Website:</span>
                            <span className="text-white">{meeting.website}</span>
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Services of Interest:</div>
                        <div className="flex flex-wrap gap-2">
                          {meeting.services.map((service, index) => (
                            <span key={index} className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                        <div>
                          <span className="text-gray-400">Budget:</span>
                          <span className="text-white ml-2">{meeting.advertisingSpend}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Source:</span>
                          <span className="text-white ml-2">{meeting.source}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Submitted:</span>
                          <span className="text-white ml-2">{new Date(meeting.submittedAt).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {meeting.notes && (
                        <div className="mb-4">
                          <div className="text-sm text-gray-400 mb-2">Notes:</div>
                          <p className="text-white text-sm">{meeting.notes}</p>
                        </div>
                      )}

                      {meeting.responseNotes && (
                        <div className="mb-4">
                          <div className="text-sm text-gray-400 mb-2">Response Notes:</div>
                          <p className="text-white text-sm">{meeting.responseNotes}</p>
                        </div>
                      )}

                      {meeting.scheduledFor && (
                        <div className="mb-4">
                          <div className="text-sm text-gray-400 mb-2">Scheduled For:</div>
                          <p className="text-white text-sm">
                            {new Date(meeting.scheduledFor).toLocaleString()}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 ml-4">
                      <button
                        onClick={() => {
                          setSelectedMeeting(meeting)
                          setShowResponseModal(true)
                        }}
                        className="px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors text-sm flex items-center"
                        disabled={meeting.status === 'completed'}
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        {meeting.status === 'pending' ? 'Respond' : 'Update'}
                      </button>
                      
                      <select
                        value={meeting.status}
                        onChange={(e) => handleStatusChange(meeting.id, e.target.value)}
                        className="px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="pending">Pending</option>
                        <option value="scheduled">Scheduled</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="no-show">No Show</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Response Modal */}
      {showResponseModal && selectedMeeting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-2xl mx-4">
            <h3 className="text-lg font-medium text-white mb-4">
              Respond to {selectedMeeting.firstName} {selectedMeeting.lastName}
            </h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Response Notes
              </label>
              <textarea
                value={responseText}
                onChange={(e) => setResponseText(e.target.value)}
                placeholder="Enter your response, meeting details, or next steps..."
                rows={4}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleResponseSubmit}
                disabled={!responseText.trim()}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 text-white rounded-lg transition-colors flex items-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Response
              </button>
              <button
                onClick={() => {
                  setShowResponseModal(false)
                  setResponseText('')
                  setSelectedMeeting(null)
                }}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
