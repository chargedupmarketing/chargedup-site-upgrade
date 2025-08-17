'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AdminUser, clearAdminSession } from '@/lib/auth';

interface LeadSubmission {
  id: string;
  timestamp: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  website: string;
  source: string;
  services: string;
  advertisingSpend: string;
  notes: string;
  newsletter: boolean;
}

export default function AdminDashboard() {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSource, setFilterSource] = useState('');
  const [filterService, setFilterService] = useState('');
  const [sortBy, setSortBy] = useState<'timestamp' | 'name' | 'company'>(
    'timestamp'
  );
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const router = useRouter();

  useEffect(() => {
    // Check if admin is authenticated
    const storedAdmin = localStorage.getItem('adminUser');
    if (storedAdmin) {
      const admin = JSON.parse(storedAdmin);
      if (admin.isAuthenticated) {
        setAdminUser(admin);
        fetchLeads();
      } else {
        router.push('/admin-login');
      }
    } else {
      router.push('/admin-login');
    }
  }, [router]);

  const fetchLeads = async () => {
    try {
      // In a real app, this would fetch from your database
      // For now, we'll simulate with localStorage data
      const storedLeads = localStorage.getItem('leadSubmissions') || '[]';
      const parsedLeads = JSON.parse(storedLeads);
      setLeads(parsedLeads);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    const clearedAdmin = clearAdminSession();
    setAdminUser(clearedAdmin);
    localStorage.removeItem('adminUser');

    // Clear the cookie for middleware authentication
    document.cookie =
      'adminUser=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

    router.push('/admin-login');
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch =
      lead.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSource = !filterSource || lead.source === filterSource;
    const matchesService =
      !filterService || lead.services.includes(filterService);

    return matchesSearch && matchesSource && matchesService;
  });

  const sortedLeads = [...filteredLeads].sort((a, b) => {
    let aValue: string;
    let bValue: string;

    switch (sortBy) {
      case 'timestamp':
        aValue = a.timestamp;
        bValue = b.timestamp;
        break;
      case 'name':
        aValue = `${a.firstName} ${a.lastName}`;
        bValue = `${b.firstName} ${b.lastName}`;
        break;
      case 'company':
        aValue = a.company;
        bValue = b.company;
        break;
      default:
        aValue = a.timestamp;
        bValue = b.timestamp;
    }

    if (sortOrder === 'asc') {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  const exportToCSV = () => {
    const headers = [
      'Date',
      'Name',
      'Email',
      'Company',
      'Website',
      'Source',
      'Services',
      'Budget',
      'Notes',
      'Newsletter',
    ];
    const csvContent = [
      headers.join(','),
      ...sortedLeads.map(lead =>
        [
          new Date(lead.timestamp).toLocaleDateString(),
          `"${lead.firstName} ${lead.lastName}"`,
          lead.email,
          `"${lead.company}"`,
          lead.website,
          lead.source,
          `"${lead.services}"`,
          lead.advertisingSpend,
          `"${lead.notes}"`,
          lead.newsletter ? 'Yes' : 'No',
        ].join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading admin dashboard...</div>
      </div>
    );
  }

  if (!adminUser?.isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-white/5 border-b border-white/10">
        <div className="container max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">
                🔐 Admin Dashboard
              </h1>
              <p className="text-white/60 text-sm">
                Welcome back, {adminUser.name} ({adminUser.role})
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/60 text-sm">
                {leads.length} total submissions
              </span>
              <button
                onClick={exportToCSV}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                📊 Export CSV
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                🚪 Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Filters and Search */}
      <div className="bg-white/5 border-b border-white/10">
        <div className="container max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-[#fc5f17] placeholder-white/50 focus:border-[#fc5f17] focus:outline-none"
              />
            </div>
            <div>
              <select
                value={filterSource}
                onChange={e => setFilterSource(e.target.value)}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-[#fc5f17] focus:border-[#fc5f17] focus:outline-none"
              >
                <option value="">All Sources</option>
                <option value="google">Google Search</option>
                <option value="social">Social Media</option>
                <option value="referral">Referral</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <select
                value={filterService}
                onChange={e => setFilterService(e.target.value)}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-[#fc5f17] focus:border-[#fc5f17] focus:outline-none"
              >
                <option value="">All Services</option>
                <option value="AI Automation">AI Automation</option>
                <option value="Email Marketing">Email Marketing</option>
                <option value="Paid Social Media">Paid Social Media</option>
                <option value="Social Media Audit">Social Media Audit</option>
                <option value="UGC Creation">UGC Creation</option>
                <option value="Web Design">Web Design</option>
              </select>
            </div>
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="flex-1 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-[#fc5f17] focus:border-[#fc5f17] focus:outline-none"
              >
                <option value="timestamp">Sort by Date</option>
                <option value="name">Sort by Name</option>
                <option value="company">Sort by Company</option>
              </select>
              <button
                onClick={() =>
                  setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
                }
                className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="container max-w-7xl mx-auto px-4 py-6">
        {sortedLeads.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-white/60 text-xl">No leads found</div>
            <p className="text-white/40 text-sm mt-2">
              {searchTerm || filterSource || filterService
                ? 'Try adjusting your filters'
                : 'Strategy meeting form submissions will appear here'}
            </p>
          </div>
        ) : (
          <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/10">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">
                      Services
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">
                      Budget
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">
                      Source
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {sortedLeads.map((lead, index) => (
                    <tr
                      key={lead.id || index}
                      className="hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white/80">
                        {new Date(lead.timestamp).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-white">
                            {lead.firstName} {lead.lastName}
                          </div>
                          <div className="text-sm text-white/60">
                            {lead.email}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm text-white">
                            {lead.company || 'N/A'}
                          </div>
                          <div className="text-sm text-white/60">
                            {lead.website}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white/80">
                        {lead.services || 'None selected'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white/80">
                        {lead.advertisingSpend || 'Not specified'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white/80">
                        <span className="px-2 py-1 bg-white/10 rounded-full text-xs">
                          {lead.source || 'Unknown'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => {
                            // Show lead details in a modal or expand row
                            alert(
                              `Lead Details:\n\nName: ${lead.firstName} ${lead.lastName}\nEmail: ${lead.email}\nCompany: ${lead.company}\nWebsite: ${lead.website}\nServices: ${lead.services}\nBudget: ${lead.advertisingSpend}\nSource: ${lead.source}\nNotes: ${lead.notes}\nNewsletter: ${lead.newsletter ? 'Yes' : 'No'}`
                            );
                          }}
                          className="px-3 py-1 bg-[#fc5f17] hover:bg-[#e55a15] text-black rounded text-xs transition-colors"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
