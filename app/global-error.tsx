'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="container max-w-2xl text-center">
            {/* Error Icon */}
            <div className="mb-8">
              <svg 
                className="w-24 h-24 text-red-500 mx-auto"
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>

            {/* Error Message */}
            <h1 className="h1 mb-6">
              Something went <span className="text-red-500">wrong</span>
            </h1>
            
            <p className="p text-lg mb-8 max-w-lg mx-auto">
              We're experiencing some technical difficulties. Don't worry, our team has been notified 
              and is working to get everything back up and running smoothly.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={reset}
                className="btn-primary"
              >
                Try Again
              </button>
              
              <Link 
                href="/" 
                className="btn-outline"
              >
                ⚡ Back to Home
              </Link>
            </div>

            {/* Contact Support */}
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="h3 mb-4">Still having issues?</h3>
              <p className="p mb-4">
                Our support team is here to help you get back on track.
              </p>
              <Link 
                href="/contact" 
                className="text-[#fcb80a] hover:text-[#fc5f17] transition-colors font-medium"
              >
                Contact Support →
              </Link>
            </div>

            {/* Error Details for Development */}
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-[#fcb80a] mb-2">
                  Error Details (Development)
                </summary>
                <pre className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300 overflow-auto">
                  {error.message}
                  {error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      </body>
    </html>
  )
}
