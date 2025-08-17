export function LogoCloud(){
  return (
    <section className="py-16 border-t border-b border-white/10">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight leading-tight mb-6">
            PROGRAMS<br />WE USE:
          </h2>
        </div>
        
        {/* Single Row of Logos */}
        <div className="flex justify-center items-center space-x-16 md:space-x-20 lg:space-x-24">
          {/* HighLevel */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl flex items-center justify-center mb-3 shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <span className="text-white text-base font-bold tracking-wide">HighLevel</span>
          </div>

          {/* HubSpot */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-orange-500 rounded-3xl flex items-center justify-center mb-3 shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <span className="text-white text-base font-bold tracking-wide">HubSpot</span>
          </div>

          {/* Jasper */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-300 rounded-3xl flex items-center justify-center mb-3 shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-white text-base font-bold tracking-wide">Jasper</span>
          </div>

          {/* SURFER */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-red-500 rounded-3xl flex items-center justify-center mb-3 shadow-2xl">
              <span className="text-white text-3xl font-bold">S</span>
            </div>
            <span className="text-white text-base font-bold tracking-wide">SURFER</span>
          </div>

          {/* PICTORY */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-purple-500 rounded-3xl flex items-center justify-center mb-3 shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
              </svg>
            </div>
            <span className="text-white text-base font-bold tracking-wide">PICTORY</span>
          </div>

          {/* Canva */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mb-3 shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-white text-base font-bold tracking-wide">Canva</span>
          </div>

          {/* Mailchimp */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-yellow-500 rounded-3xl flex items-center justify-center mb-3 shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <span className="text-white text-base font-bold tracking-wide">Mailchimp</span>
          </div>

          {/* Google Ads */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl flex items-center justify-center mb-3 shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span className="text-white text-base font-bold tracking-wide">Google Ads</span>
          </div>

          {/* Facebook Ads */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center mb-3 shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <span className="text-white text-base font-bold tracking-wide">Facebook Ads</span>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl flex items-center justify-center mb-3 shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
              </svg>
            </div>
            <span className="text-white text-base font-bold tracking-wide">Instagram</span>
          </div>

          {/* TikTok */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center mb-3 shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.05-2.83-.14-4.08-.72-2.31-1.09-3.98-3.16-4.11-5.6-.05-1.78.31-3.49 1.14-5.09.83-1.59 2.12-2.91 3.79-3.65 1.66-.74 3.49-.96 5.29-.54 0-.01-.01-.01-.01-.02z"/>
              </svg>
            </div>
            <span className="text-white text-base font-bold tracking-wide">TikTok</span>
          </div>
        </div>
      </div>
    </section>
  )
}
