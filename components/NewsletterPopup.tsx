'use client'

import { useState, useEffect } from 'react'
import { X, Mail, Zap, Gift } from 'lucide-react'
import FadeIn from './FadeIn'

interface NewsletterPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setIsSubmitting(false)
        
        // Close popup after 2 seconds
        setTimeout(() => {
          onClose()
        }, 2000)
      } else {
        const error = await response.json()
        console.error('Newsletter signup failed:', error)
        alert('Failed to subscribe. Please try again.')
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error('Newsletter signup error:', error)
      alert('Failed to subscribe. Please try again.')
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <FadeIn>
        <div className="relative bg-black border-2 border-orange-500/30 rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-orange-400 hover:text-orange-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Get Exclusive AI Marketing Tips!
            </h2>
            <p className="text-orange-200 text-sm">
              Join 10,000+ marketers getting weekly insights on AI-powered marketing strategies
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm text-white">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              <span>Weekly AI marketing case studies</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              <span>Exclusive templates & tools</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              <span>Early access to new features</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              <span>Free AI marketing strategy session</span>
            </div>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
                             <div>
                 <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                   Email Address
                 </label>
                 <div className="relative">
                   <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-400" />
                   <input
                     type="email"
                     id="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Enter your email"
                     className="w-full pl-10 pr-4 py-3 bg-white/5 border border-orange-500/30 rounded-xl text-white placeholder-orange-300/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                     required
                   />
                 </div>
               </div>
              
                             <button
                 type="submit"
                 disabled={isSubmitting || !email}
                 className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg"
               >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Subscribing...
                  </div>
                ) : (
                  'Get Free Access Now!'
                )}
              </button>
              
                             <p className="text-xs text-orange-200/70 text-center">
                 No spam, unsubscribe at any time. We respect your privacy.
               </p>
            </form>
          ) : (
                         <div className="text-center py-4">
               <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                 <Mail className="w-8 h-8 text-white" />
               </div>
               <h3 className="text-xl font-semibold text-white mb-2">
                 Welcome to the Community! 🎉
               </h3>
               <p className="text-orange-200 text-sm">
                 Check your email for your first AI marketing tip!
               </p>
             </div>
          )}
        </div>
      </FadeIn>
    </div>
  )
}
