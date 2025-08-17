'use client'
import { useState } from 'react'

export function StrategyMeetingForm() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<boolean | null>(null)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [advertisingSpend, setAdvertisingSpend] = useState('')

  const services = [
    'AI Automation',
    'Email Marketing',
    'Paid Social Media',
    'Social Media Audit',
    'UGC Creation',
    'Web Design',
    'Something Else'
  ]

  const spendOptions = [
    '$0 - $9.9K USD',
    '$10K - $39.9K USD',
    '$40K - $99.9K USD',
    '$100K - $249.9K USD',
    '$250K+ USD'
  ]

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setOk(null)
    
    const form = new FormData(e.currentTarget)
    const formData = Object.fromEntries(form.entries())
    
    // Create payload with proper typing
    const payload: any = {
      ...formData,
      services: selectedServices.join(', '),
      advertisingSpend: advertisingSpend,
      newsletter: (e.currentTarget.querySelector('#newsletter') as HTMLInputElement)?.checked || false
    }
    
    // Store submission locally for admin panel
    const submission = {
      ...payload,
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    }
    
    try {
      const existingLeads = localStorage.getItem('leadSubmissions') || '[]'
      const leads = JSON.parse(existingLeads)
      leads.push(submission)
      localStorage.setItem('leadSubmissions', JSON.stringify(leads))
    } catch (error) {
      console.error('Error storing submission locally:', error)
    }
    
    const res = await fetch('/api/lead', { 
      method: 'POST', 
      body: JSON.stringify(payload) 
    })
    
    setOk(res.ok)
    setLoading(false)
    
    if (res.ok) window.location.href = '/thank-you'
  }

  return (
    <form 
      onSubmit={onSubmit} 
      className="space-y-6"
    >
      {/* Personal Information */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            First Name *
          </label>
          <input 
            name="firstName" 
            required 
            className="form-input"
            placeholder="Your first name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Last Name *
          </label>
          <input 
            name="lastName" 
            required 
            className="form-input"
            placeholder="Your last name"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">
          Work Email *
        </label>
        <input 
          type="email" 
          name="email" 
          required 
          className="form-input"
          placeholder="your.email@company.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">
          Company Name
        </label>
        <input 
          name="company" 
          className="form-input"
          placeholder="Your company name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">
          Website *
        </label>
        <input 
          name="website" 
          required 
          className="form-input"
          placeholder="https://yourwebsite.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">
          How did you hear about us?
        </label>
        <select 
          name="source" 
          className="form-select"
        >
          <option value="">Select an option</option>
          <option value="google">Google Search</option>
          <option value="social">Social Media</option>
          <option value="referral">Referral</option>
          <option value="advertisement">Advertisement</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Services Selection */}
      <div>
        <label className="block text-sm font-medium text-white/80 mb-3">
          What services are you interested in?
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {services.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => toggleService(service)}
              className={`service-button ${
                selectedServices.includes(service)
                  ? 'service-button-selected'
                  : 'service-button-unselected'
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      {/* Advertising Spend */}
      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">
          What is your monthly advertising spend?
        </label>
        <select 
          value={advertisingSpend}
          onChange={(e) => setAdvertisingSpend(e.target.value)}
          className="form-select"
        >
          <option value="">Select an option</option>
          {spendOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">
          Notes
        </label>
        <textarea 
          name="notes" 
          rows={4}
          className="form-input resize-none"
          placeholder="Tell us more about your goals, challenges, or any specific questions..."
        />
      </div>

      {/* Newsletter Signup */}
      <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
        <input 
          type="checkbox" 
          id="newsletter" 
          name="newsletter"
          className="mt-1 w-4 h-4 text-[#fc5f17] bg-white/5 border-white/20 rounded focus:ring-[#fc5f17] focus:ring-2"
        />
        <label htmlFor="newsletter" className="text-sm text-white/80">
          Join 1,500+ marketers getting smarter every other week - no fluff, just gold
        </label>
      </div>

      {/* Submit Button */}
      <button 
        disabled={loading} 
        className="w-full btn-primary py-4 text-lg font-semibold rounded-xl hover:scale-[1.02] transition-transform"
      >
        {loading ? 'Sending...' : 'Request Free Strategy Consultation'}
      </button>

      {/* Success/Error Messages */}
      {ok === true && (
        <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center">
          Thank you! You'll hear from ChargedUp in the next 24 hours!
        </div>
      )}
      
      {ok === false && (
        <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-center">
          Oops! Something went wrong while submitting the form.
        </div>
      )}
    </form>
  )
}
