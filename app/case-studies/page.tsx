import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-black">
        <div className="container py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="h1 mb-6">
              What Our{' '}
              <span className="text-[color:var(--brand-primary,#fc5f17)]">
                Clients
              </span>{' '}
              Say
            </h1>
            <p className="p text-xl text-white/70 max-w-2xl mx-auto">
              Read what our clients have to say about working with Charged-Up
              Marketing. We&apos;ve helped SaaS companies transform their
              marketing and achieve remarkable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Case Study 1 */}
          <div className="group">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-white/60 text-sm">
                    Case Study Coming Soon
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  SaaS Company Success Story
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  We helped this innovative SaaS company transform their
                  marketing strategy, resulting in significant growth and
                  improved customer acquisition.
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="group">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div className="text-white/60 text-sm">
                    Case Study Coming Soon
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  Marketing Automation Transformation
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  Discover how we implemented AI-powered marketing automation
                  that increased lead generation by 300% while reducing manual
                  workload.
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="group">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="text-white/60 text-sm">
                    Case Study Coming Soon
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  Email Marketing Campaign Success
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  Learn how our targeted email marketing strategy helped a B2B
                  SaaS company achieve a 25% increase in customer retention and
                  revenue growth.
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 4 */}
          <div className="group">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="aspect-video bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-white/60 text-sm">
                    Case Study Coming Soon
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  Social Media Strategy Overhaul
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  See how we completely transformed a company&apos;s social
                  media presence, resulting in 150% increase in engagement and
                  brand awareness.
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 5 */}
          <div className="group">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div className="text-white/60 text-sm">
                    Case Study Coming Soon
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  Paid Advertising ROI Boost
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  Discover how our paid social media management increased
                  conversion rates by 200% while reducing cost per acquisition
                  by 40%.
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 6 */}
          <div className="group">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-white/60 text-sm">
                    Case Study Coming Soon
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  Website Conversion Optimization
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  Learn how our web design strategy and conversion optimization
                  increased website conversions by 180% in just 6 months.
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="h2 mb-6">
              Ready to Become Our Next{' '}
              <span className="text-[color:var(--brand-primary,#fc5f17)]">
                Success Story
              </span>
              ?
            </h2>
            <p className="p text-lg text-white/70 mb-8">
              Join the growing list of SaaS companies that have transformed
              their marketing and achieved remarkable growth with Charged-Up
              Marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="header-btn-primary">
                Book a Strategy Call
              </Link>
              <Link href="/pricing" className="header-btn-secondary">
                See Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
