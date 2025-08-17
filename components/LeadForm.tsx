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
      <input name="name" placeholder="Your name" required className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3" />
      <input type="email" name="email" placeholder="Email" required className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3" />
      <input name="company" placeholder="Company" className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3" />
      <textarea name="message" placeholder="Goals / challenges" rows={5} className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3" />
      <button disabled={loading} className="btn-primary">{loading? 'Sending…' : 'Send & Book'}</button>
      {ok === false && <p className="text-red-400 text-sm">Something went wrong. Try again.</p>}
    </form>
  )
}
