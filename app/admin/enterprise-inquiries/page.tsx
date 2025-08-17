'use client'

import { useState, useEffect } from 'react'
import { 
  Building, 
  MessageSquare, 
  Bot, 
  Search, 
  Filter,
  Download,
  Eye,
  Edit,
  Send,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Users,
  Calendar
} from 'lucide-react'

interface EnterpriseInquiry {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  company: string
  website?: string
  service: 'ai-cold-dm' | 'ai-marketing-platform'
  budget: string
  timeline: string
  teamSize: string
  currentChallenges: string
  goals: string
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'closed' | 'lost'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  source: string
  submittedAt: string
  assignedTo?: string
  notes?: string
  lastContact?: string
}

export default function EnterpriseInquiries() {
  const [inquiries, setInquiries] = useState<EnterpriseInquiry[]>([])
  const [activeTab, setActiveTab] = useState<'ai-cold-dm' | 'ai-marketing-platform' | 'all'>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [filterPriority, setFilterPriority] = useState('')
  const [filterService, setFilterService] = useState('')
  const [selectedInquiry, setSelectedInquiry] = useState<EnterpriseInquiry | null>(null)
  const [showNotesModal, setShowNotesModal] = useState(false)
  const [notesText, setNotesText] = useState('')
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  // Load inquiries from localStorage and API
  useEffect(() => {
    loadInquiries()
  }, [])

  const loadInquiries = () => {
    try {
      // Load from localStorage (client-side storage)
      const storedInquiries = localStorage.getItem('enterpriseInquiries')
      if (storedInquiries) {
        const parsed = JSON.parse(storedInquiries)
        setInquiries(Array.isArray(parsed) ? parsed : [])
      } else {
        setInquiries([])
      }
    } catch (error) {
      console.error('Error loading inquiries:', error)
      setInquiries([])
    }
  }

  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = 
      inquiry.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.company.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = !filterStatus || inquiry.status === filterStatus
    const matchesPriority = !filterPriority || inquiry.priority === filterPriority
    const matchesService = !filterService || inquiry.service === filterService
    const matchesTab = activeTab === 'all' || inquiry.service === activeTab
    
    return matchesSearch && matchesStatus && matchesPriority && matchesService && matchesTab
  })

  const isSelected = (id: string) => selectedIds.includes(id)
  const toggleSelect = (id: string) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }
  const toggleSelectAll = () => {
    const visibleIds = filteredInquiries.map(i => i.id)
    const allSelected = visibleIds.every(id => selectedIds.includes(id))
    setSelectedIds(allSelected ? selectedIds.filter(id => !visibleIds.includes(id)) : Array.from(new Set([...selectedIds, ...visibleIds])))
  }
  const clearSelection = () => setSelectedIds([])

  const getSelectedInquiries = () => inquiries.filter(i => selectedIds.includes(i.id))

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'text-blue-400 bg-blue-400/10'
      case 'contacted': return 'text-yellow-400 bg-yellow-400/10'
      case 'qualified': return 'text-green-400 bg-green-400/10'
      case 'proposal': return 'text-purple-400 bg-purple-400/10'
      case 'closed': return 'text-green-600 bg-green-600/10'
      case 'lost': return 'text-red-400 bg-red-400/10'
      default: return 'text-gray-400 bg-gray-400/10'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'text-gray-400 bg-gray-400/10'
      case 'medium': return 'text-yellow-400 bg-yellow-400/10'
      case 'high': return 'text-orange-400 bg-orange-400/10'
      case 'urgent': return 'text-red-400 bg-red-400/10'
      default: return 'text-gray-400 bg-gray-400/10'
    }
  }

  const getServiceIcon = (service: string) => {
    return service === 'ai-cold-dm' ? <MessageSquare className="w-4 h-4" /> : <Bot className="w-4 h-4" />
  }

  const getServiceName = (service: string) => {
    return service === 'ai-cold-dm' ? 'AI Automated Cold DM' : 'AI Marketing Platform'
  }

  const exportInquiries = () => {
    const csvContent = [
      ['Date', 'Name', 'Company', 'Service', 'Budget', 'Status', 'Priority', 'Source'],
      ...filteredInquiries.map(inquiry => [
        new Date(inquiry.submittedAt).toLocaleDateString(),
        `${inquiry.firstName} ${inquiry.lastName}`,
        inquiry.company,
        getServiceName(inquiry.service),
        inquiry.budget,
        inquiry.status,
        inquiry.priority,
        inquiry.source
      ])
    ].map(row => row.map(field => `"${field}"`).join(',')).join('\n')
    
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `enterprise-inquiries-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const exportSelected = () => {
    const selected = getSelectedInquiries()
    if (selected.length === 0) return
    const csvContent = [
      ['Date', 'Name', 'Email', 'Company', 'Service', 'Budget', 'Status', 'Priority', 'Source'],
      ...selected.map(inquiry => [
        new Date(inquiry.submittedAt).toLocaleDateString(),
        `${inquiry.firstName} ${inquiry.lastName}`,
        inquiry.email,
        inquiry.company,
        getServiceName(inquiry.service),
        inquiry.budget,
        inquiry.status,
        inquiry.priority,
        inquiry.source
      ])
    ].map(row => row.map(field => `"${field}"`).join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `enterprise-inquiries-selected-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const copySelectedToClipboard = async () => {
    const selected = getSelectedInquiries()
    if (selected.length === 0) return
    const lines = selected.map(i => `${i.firstName} ${i.lastName} <${i.email}> — ${i.company} — ${getServiceName(i.service)} — ${i.budget}`)
    try {
      await navigator.clipboard.writeText(lines.join('\n'))
      alert('Selected inquiries copied to clipboard')
    } catch (e) {
      console.error('Clipboard copy failed', e)
    }
  }

  const shareSelectedViaEmail = () => {
    const selected = getSelectedInquiries()
    if (selected.length === 0) return
    const subject = encodeURIComponent(`Enterprise inquiries (${selected.length} selected)`) 
    const bodyLines = selected.slice(0, 25).map(i => `• ${i.firstName} ${i.lastName} — ${i.company} — ${getServiceName(i.service)} — ${i.budget}`)
    const body = encodeURIComponent(`${bodyLines.join('\n')}\n\nGenerated from Admin Panel`)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  const getTabCount = (service: string) => {
    if (service === 'all') return inquiries.length
    return inquiries.filter(i => i.service === service).length
  }

  const handleAddNotes = (inquiry: EnterpriseInquiry) => {
    setSelectedInquiry(inquiry)
    setNotesText(inquiry.notes || '')
    setShowNotesModal(true)
  }

  const saveNotes = () => {
    if (selectedInquiry) {
      const updatedInquiries = inquiries.map(inquiry => 
        inquiry.id === selectedInquiry.id 
          ? { ...inquiry, notes: notesText, lastContact: new Date().toISOString() }
          : inquiry
      )
      setInquiries(updatedInquiries)
      
      // Save to localStorage
      try {
        localStorage.setItem('enterpriseInquiries', JSON.stringify(updatedInquiries))
      } catch (error) {
        console.error('Error saving notes:', error)
      }
    }
    setShowNotesModal(false)
    setSelectedInquiry(null)
    setNotesText('')
  }

  const updateInquiryStatus = (inquiryId: string, newStatus: string) => {
    const updatedInquiries = inquiries.map(inquiry => 
      inquiry.id === inquiryId 
        ? { ...inquiry, status: newStatus as any, lastContact: new Date().toISOString() }
        : inquiry
    )
    setInquiries(updatedInquiries)
    
    // Save to localStorage
    try {
      localStorage.setItem('enterpriseInquiries', JSON.stringify(updatedInquiries))
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const updateInquiryPriority = (inquiryId: string, newPriority: string) => {
    const updatedInquiries = inquiries.map(inquiry => 
      inquiry.id === inquiryId 
        ? { ...inquiry, priority: newPriority as any }
        : inquiry
    )
    setInquiries(updatedInquiries)
    
    // Save to localStorage
    try {
      localStorage.setItem('enterpriseInquiries', JSON.stringify(updatedInquiries))
    } catch (error) {
      console.error('Error updating priority:', error)
    }
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Enterprise Service Inquiries</h1>
            <p className="text-white/60">Manage high-value inquiries for AI Automated Cold DM and AI Marketing Platform services</p>
          </div>
          {inquiries.length > 0 && (
            <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
              <span className="text-xs text-white/60">Total</span>
              <span className="text-sm font-semibold text-white bg-[color:var(--brand-primary,#fc5f17)]/10 px-2 py-0.5 rounded-lg border border-[color:var(--brand-primary,#fc5f17)]/30">
                {inquiries.length}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-400/10">
              <Building className="w-6 h-6 text-blue-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-white/70">Total Inquiries</p>
              <p className="text-2xl font-bold text-white">{inquiries.length}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-400/10">
              <MessageSquare className="w-6 h-6 text-green-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-white/70">AI Cold DM</p>
              <p className="text-2xl font-bold text-white">
                {inquiries.filter(i => i.service === 'ai-cold-dm').length}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-400/10">
              <Bot className="w-6 h-6 text-purple-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-white/70">AI Marketing Platform</p>
              <p className="text-2xl font-bold text-white">
                {inquiries.filter(i => i.service === 'ai-marketing-platform').length}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-400/10">
              <DollarSign className="w-6 h-6 text-orange-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-white/70">High Priority</p>
              <p className="text-2xl font-bold text-white">
                {inquiries.filter(i => i.priority === 'high' || i.priority === 'urgent').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
        <div className="flex border-b border-white/10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 text-sm font-medium rounded-t-xl transition-colors ${
              activeTab === 'all'
                ? 'text-white bg-white/10 border-b-2 border-[color:var(--brand-primary,#fc5f17)]'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <Building className="w-4 h-4 inline mr-2" />
            All Services ({getTabCount('all')})
          </button>
          <button
            onClick={() => setActiveTab('ai-cold-dm')}
            className={`px-6 py-3 text-sm font-medium rounded-t-xl transition-colors ${
              activeTab === 'ai-cold-dm'
                ? 'text-white bg-white/10 border-b-2 border-[color:var(--brand-primary,#fc5f17)]'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <MessageSquare className="w-4 h-4 inline mr-2" />
            AI Cold DM ({getTabCount('ai-cold-dm')})
          </button>
          <button
            onClick={() => setActiveTab('ai-marketing-platform')}
            className={`px-6 py-3 text-sm font-medium rounded-t-xl transition-colors ${
              activeTab === 'ai-marketing-platform'
                ? 'text-white bg-white/10 border-b-2 border-[color:var(--brand-primary,#fc5f17)]'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <Bot className="w-4 h-4 inline mr-2" />
            AI Marketing Platform ({getTabCount('ai-marketing-platform')})
          </button>
        </div>

        <div className="p-6">
          {/* Filters and Search */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                <input
                  type="text"
                  placeholder="Search inquiries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary,#fc5f17)]/60 focus:border-transparent"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary,#fc5f17)]/60 focus:border-transparent"
              >
                <option value="">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="proposal">Proposal</option>
                <option value="closed">Closed</option>
                <option value="lost">Lost</option>
              </select>
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary,#fc5f17)]/60 focus:border-transparent"
              >
                <option value="">All Priorities</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
              <select
                value={filterService}
                onChange={(e) => setFilterService(e.target.value)}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary,#fc5f17)]/60 focus:border-transparent"
              >
                <option value="">All Services</option>
                <option value="ai-cold-dm">AI Cold DM</option>
                <option value="ai-marketing-platform">AI Marketing Platform</option>
              </select>
            </div>
            <button
              onClick={exportInquiries}
              className="px-4 py-2 rounded-xl transition-colors flex items-center bg-white/10 hover:bg-white/20 text-white border border-white/10"
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
          </div>

          {/* Bulk Actions Bar (visible when selection) */}
          {selectedIds.length > 0 && (
            <div className="sticky top-0 z-10 -mt-2 mb-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm px-4 py-3 flex items-center justify-between">
              <div className="text-sm text-white/80">{selectedIds.length} selected</div>
              <div className="flex gap-2">
                <button onClick={exportSelected} className="px-3 py-1.5 text-sm rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 text-white">Download CSV</button>
                <button onClick={copySelectedToClipboard} className="px-3 py-1.5 text-sm rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 text-white">Copy</button>
                <button onClick={shareSelectedViaEmail} className="px-3 py-1.5 text-sm rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 text-white">Share</button>
                <button onClick={clearSelection} className="px-3 py-1.5 text-sm rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white/80">Clear</button>
              </div>
            </div>
          )}

          {/* Inquiries List */}
          <div className="space-y-4">
            {/* Select All Row */}
            {filteredInquiries.length > 0 && (
              <div className="flex items-center gap-3 text-sm text-white/70">
                <input type="checkbox" checked={filteredInquiries.every(i => selectedIds.includes(i.id)) && filteredInquiries.length > 0} onChange={toggleSelectAll} className="h-4 w-4 rounded border-white/20 bg-white/5" />
                <span>Select all in view</span>
              </div>
            )}

            {filteredInquiries.map((inquiry) => (
              <div key={inquiry.id} className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-white/20 bg-white/5"
                        checked={isSelected(inquiry.id)}
                        onChange={() => toggleSelect(inquiry.id)}
                        aria-label="Select inquiry"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        {getServiceIcon(inquiry.service)}
                        <h4 className="text-lg font-medium text-white">
                          {inquiry.firstName} {inquiry.lastName}
                        </h4>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ring-1 ring-inset ring-white/10 ${getStatusColor(inquiry.status)}`}>
                        {inquiry.status}
                      </span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ring-1 ring-inset ring-white/10 ${getPriorityColor(inquiry.priority)}`}>
                        {inquiry.priority}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm mb-4">
                      <div>
                        <span className="text-white/60">Company:</span>
                        <span className="text-white ml-2">{inquiry.company}</span>
                      </div>
                      <div>
                        <span className="text-white/60">Service:</span>
                        <span className="text-white ml-2">{getServiceName(inquiry.service)}</span>
                      </div>
                      <div>
                        <span className="text-white/60">Budget:</span>
                        <span className="text-white ml-2">{inquiry.budget}</span>
                      </div>
                      <div>
                        <span className="text-white/60">Timeline:</span>
                        <span className="text-white ml-2">{inquiry.timeline}</span>
                      </div>
                      <div>
                        <span className="text-white/60">Team Size:</span>
                        <span className="text-white ml-2">{inquiry.teamSize}</span>
                      </div>
                      <div>
                        <span className="text-white/60">Source:</span>
                        <span className="text-white ml-2">{inquiry.source}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-white/60 text-sm mb-1">Current Challenges:</div>
                      <div className="text-white text-sm">{inquiry.currentChallenges}</div>
                    </div>

                    <div className="mb-4">
                      <div className="text-white/60 text-sm mb-1">Goals:</div>
                      <div className="text-white text-sm">{inquiry.goals}</div>
                    </div>

                    {inquiry.notes && (
                      <div className="mb-4">
                        <div className="text-white/60 text-sm mb-1">Notes:</div>
                        <div className="text-white text-sm bg-white/5 border border-white/10 p-3 rounded-xl">{inquiry.notes}</div>
                      </div>
                    )}

                    <div className="flex items-center gap-4 text-xs text-white/60">
                      <span>Submitted: {new Date(inquiry.submittedAt).toLocaleDateString()}</span>
                      {inquiry.lastContact && (
                        <span>Last Contact: {new Date(inquiry.lastContact).toLocaleDateString()}</span>
                      )}
                      {inquiry.assignedTo && (
                        <span>Assigned to: {inquiry.assignedTo}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 ml-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAddNotes(inquiry)}
                        className="p-2 text-white/60 hover:text-white transition-colors hover:bg-white/10 rounded-lg"
                        title="Add/Edit Notes"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        className="p-2 text-white/60 hover:text-white transition-colors hover:bg-white/10 rounded-lg" 
                        title="View Details"
                        onClick={() => {
                          const mailto = `mailto:${inquiry.email}?subject=RE: Enterprise Inquiry - ${getServiceName(inquiry.service)}&body=Hi ${inquiry.firstName},%0D%0A%0D%0AThank you for your interest in our ${getServiceName(inquiry.service)} service.%0D%0A%0D%0ABest regards,%0D%0AChargedUp Team`
                          window.open(mailto)
                        }}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        className="p-2 text-blue-300 hover:text-blue-200 transition-colors hover:bg-blue-500/10 rounded-lg" 
                        title="Contact Client"
                        onClick={() => {
                          const mailto = `mailto:${inquiry.email}?subject=RE: Enterprise Inquiry - ${getServiceName(inquiry.service)}&body=Hi ${inquiry.firstName},%0D%0A%0D%0AThank you for your interest in our ${getServiceName(inquiry.service)} service.%0D%0A%0D%0ABest regards,%0D%0AChargedUp Team`
                          window.open(mailto)
                        }}
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Quick Status Update */}
                    <select
                      value={inquiry.status}
                      onChange={(e) => updateInquiryStatus(inquiry.id, e.target.value)}
                      className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-white"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="qualified">Qualified</option>
                      <option value="proposal">Proposal</option>
                      <option value="closed">Closed</option>
                      <option value="lost">Lost</option>
                    </select>
                    
                    {/* Quick Priority Update */}
                    <select
                      value={inquiry.priority}
                      onChange={(e) => updateInquiryPriority(inquiry.id, e.target.value)}
                      className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-white"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredInquiries.length === 0 && (
            <div className="text-center py-12">
              <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">No inquiries found</h3>
              <p className="text-gray-400">
                {searchTerm || filterStatus || filterPriority || filterService 
                  ? 'Try adjusting your filters' 
                  : 'Enterprise service inquiries will appear here'
                }
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Notes Modal */}
      {showNotesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-medium text-white mb-4">Add/Edit Notes</h3>
            <textarea
              value={notesText}
              onChange={(e) => setNotesText(e.target.value)}
              className="w-full h-32 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-4"
              placeholder="Add your notes here..."
            />
            <div className="flex gap-2">
              <button
                onClick={saveNotes}
                className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
              >
                Save Notes
              </button>
              <button
                onClick={() => setShowNotesModal(false)}
                className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
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
