import Link from 'next/link';
import Image from 'next/image';

export default function OurSocialsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-black">
        <div className="container py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="h1 mb-6">
              Connect With{' '}
              <span className="text-[color:var(--brand-primary,#fc5f17)]">
                Us
              </span>
            </h1>
            <p className="p text-xl text-white/70 max-w-2xl mx-auto">
              Stay connected with Charged-Up Marketing across all our social
              platforms. Get the latest marketing insights, tips, and updates
              from our team.
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Platforms Grid */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* LinkedIn */}
          <div className="group">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div className="text-white/60 text-sm">
                    LinkedIn Coming Soon
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  Follow us on LinkedIn for professional insights, industry
                  trends, and thought leadership content in the SaaS marketing
                  space.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 text-sm font-medium">
                    Coming Soon
                  </span>
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <svg
                      className="w-4 h-4 text-white/60 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Twitter/X */}
          <div className="group">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <div className="text-white/60 text-sm">
                    Twitter/X Coming Soon
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  Twitter/X
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  Get real-time updates, marketing tips, and industry news on
                  Twitter/X. Join the conversation and stay ahead of marketing
                  trends.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 text-sm font-medium">
                    Coming Soon
                  </span>
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <svg
                      className="w-4 h-4 text-white/60 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instagram */}
          <div className="group">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
                    </svg>
                  </div>
                  <div className="text-white/60 text-sm">
                    Instagram Coming Soon
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  Instagram
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  Follow our visual journey on Instagram for behind-the-scenes
                  content, team highlights, and creative marketing inspiration.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 text-sm font-medium">
                    Coming Soon
                  </span>
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <svg
                      className="w-4 h-4 text-white/60 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* YouTube */}
          <div className="group">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="aspect-video bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div className="text-white/60 text-sm">
                    YouTube Coming Soon
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  YouTube
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  Subscribe to our YouTube channel for video tutorials,
                  marketing tips, case studies, and expert insights from our
                  team.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 text-sm font-medium">
                    Coming Soon
                  </span>
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <svg
                      className="w-4 h-4 text-white/60 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Facebook */}
          <div className="group">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div className="text-white/60 text-sm">
                    Facebook Coming Soon
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  Facebook
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  Like our Facebook page for community updates, marketing
                  discussions, and to connect with other SaaS professionals and
                  entrepreneurs.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 text-sm font-medium">
                    Coming Soon
                  </span>
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <svg
                      className="w-4 h-4 text-white/60 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TikTok */}
          <div className="group">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="aspect-video bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </div>
                  <div className="text-white/60 text-sm">
                    TikTok Coming Soon
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  TikTok
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  Follow us on TikTok for quick marketing tips, trends, and
                  creative content that helps SaaS companies stay ahead of the
                  curve.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 text-sm font-medium">
                    Coming Soon
                  </span>
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <svg
                      className="w-4 h-4 text-white/60 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="h2 mb-6">
              Stay{' '}
              <span className="text-[color:var(--brand-primary,#fc5f17)]">
                Connected
              </span>
            </h2>
            <p className="p text-lg text-white/70 mb-8">
              Subscribe to our newsletter for exclusive marketing insights,
              industry updates, and tips delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto mb-8">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-orange-500/50 focus:bg-white/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
            <p className="text-sm text-white/50">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="h2 mb-6">
              Ready to{' '}
              <span className="text-[color:var(--brand-primary,#fc5f17)]">
                Connect
              </span>
              ?
            </h2>
            <p className="p text-lg text-white/70 mb-8">
              Follow us on social media and join our community of SaaS marketing
              professionals. Let&apos;s grow together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="header-btn-primary">
                Get In Touch
              </Link>
              <Link href="/case-studies" className="header-btn-secondary">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
