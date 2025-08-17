'use client'
import { useState } from 'react'

export function LeadForm(){
  const [loading,setLoading] = useState(false)
  const [ok,setOk] = useState<boolean|null>(null)
  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setLoading(true); setOk(null)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    const res = await fetch('/api/lead', { method:'POST', body: JSON.stringify(payload) })
    setOk(res.ok)
    setLoading(false)
    if(res.ok) window.location.href = '/thank-you'
  }
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input 
        name="name" 
        placeholder="Your name" 
        required 
        className="form-input" 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        required 
        className="form-input" 
      />
      <input 
        name="company" 
        placeholder="Company" 
        className="form-input" 
      />
      <textarea 
        name="message" 
        placeholder="Goals / challenges" 
        rows={5} 
        className="form-input resize-none" 
      />
      <button disabled={loading} className="btn-primary">
        {loading? 'Sending…' : 'Send & Book'}
      </button>
      {ok === false && (
        <p className="text-red-400 text-sm flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Something went wrong. Try again.
        </p>
      )}
    </form>
  )
}
