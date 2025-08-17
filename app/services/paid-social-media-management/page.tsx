import Link from 'next/link';
import Image from 'next/image';

export default function PaidSocialMediaManagementPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-black">
        <div className="container py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="h1 mb-6">
              Paid{' '}
              <span className="text-[color:var(--brand-primary,#fc5f17)]">
                Social Media
              </span>{' '}
              Management
            </h1>
            <p className="p text-xl text-white/70 max-w-2xl mx-auto">
              Maximize your ROI with data-driven paid social media campaigns. We
              create, optimize, and scale your advertising across all major
              platforms to drive targeted traffic and conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact" className="header-btn-primary">
                Start Your Campaign
              </Link>
              <Link href="/pricing" className="header-btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="h2 mb-6">
              What We{' '}
              <span className="text-[color:var(--brand-primary,#fc5f17)]">
                Do
              </span>
            </h2>
            <p className="p text-lg text-white/70">
              Our comprehensive paid social media management services deliver
              targeted campaigns that generate leads, increase brand awareness,
              and drive measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Campaign Strategy
              </h3>
              <p className="text-white/70">
                Data-driven campaign planning, audience targeting, and budget
                allocation across multiple social media platforms for maximum
                impact.
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Creative Development
              </h3>
              <p className="text-white/70">
                Eye-catching ad creatives, compelling copy, and A/B testing to
                optimize performance and increase click-through rates.
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Performance Optimization
              </h3>
              <p className="text-white/70">
                Continuous monitoring, real-time optimization, and scaling
                strategies to maximize ROI and achieve your business objectives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="h2 mb-6">
              Our{' '}
              <span className="text-[color:var(--brand-primary,#fc5f17)]">
                Process
              </span>
            </h2>
            <p className="p text-lg text-white/70">
              A systematic approach to paid social media management that
              delivers measurable results and maximizes your advertising ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Research & Strategy
              </h3>
              <p className="text-white/70 text-sm">
                We analyze your target audience, competitors, and platform
                opportunities to develop a comprehensive paid social media
                strategy.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Campaign Setup
              </h3>
              <p className="text-white/70 text-sm">
                Create compelling ad creatives, set up targeting parameters, and
                configure campaigns across multiple social media platforms.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Launch & Monitor
              </h3>
              <p className="text-white/70 text-sm">
                Launch campaigns with real-time monitoring, performance
                tracking, and immediate optimization based on data insights.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Optimize & Scale
              </h3>
              <p className="text-white/70 text-sm">
                Continuous optimization, A/B testing, and strategic scaling to
                improve performance and maximize your advertising budget.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="h2 mb-6">
              Key{' '}
              <span className="text-[color:var(--brand-primary,#fc5f17)]">
                Benefits
              </span>
            </h2>
            <p className="p text-lg text-white/70">
              Discover how strategic paid social media management transforms
              your advertising and drives business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Targeted Reach
                  </h3>
                  <p className="text-white/70">
                    Precise audience targeting ensures your ads reach the right
                    people at the right time, maximizing your advertising
                    efficiency and reducing wasted spend.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Measurable Results
                  </h3>
                  <p className="text-white/70">
                    Real-time tracking and detailed analytics provide complete
                    visibility into campaign performance, allowing for
                    data-driven optimization and improved ROI.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Scalable Growth
                  </h3>
                  <p className="text-white/70">
                    Proven strategies and optimization techniques allow for
                    systematic scaling of successful campaigns, driving
                    sustainable business growth and market expansion.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Cost Control
                  </h3>
                  <p className="text-white/70">
                    Advanced bidding strategies and budget management ensure
                    optimal cost-per-click and cost-per-acquisition, maximizing
                    your advertising budget efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platforms Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="h2 mb-6">
              Social Media{' '}
              <span className="text-[color:var(--brand-primary,#fc5f17)]">
                Platforms
              </span>
            </h2>
            <p className="p text-lg text-white/70">
              Comprehensive paid advertising solutions across all major social
              media platforms to maximize your reach and engagement with target
              audiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Platform 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Meta</div>
              </div>
              <h3 className="text-sm font-medium text-white">
                Facebook & Instagram
              </h3>
            </div>

            {/* Platform 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">
                  LinkedIn
                </div>
              </div>
              <h3 className="text-sm font-medium text-white">LinkedIn Ads</h3>
            </div>

            {/* Platform 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Twitter</div>
              </div>
              <h3 className="text-sm font-medium text-white">Twitter Ads</h3>
            </div>

            {/* Platform 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">TikTok</div>
              </div>
              <h3 className="text-sm font-medium text-white">TikTok Ads</h3>
            </div>

            {/* Platform 5 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">YouTube</div>
              </div>
              <h3 className="text-sm font-medium text-white">YouTube Ads</h3>
            </div>

            {/* Platform 6 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">
                  Pinterest
                </div>
              </div>
              <h3 className="text-sm font-medium text-white">Pinterest Ads</h3>
            </div>
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
                Scale
              </span>{' '}
              Your Business?
            </h2>
            <p className="p text-lg text-white/70 mb-8">
              Let&apos;s create data-driven paid social media campaigns that
              generate leads, increase brand awareness, and drive measurable
              business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="header-btn-primary">
                Start Your Paid Campaign
              </Link>
              <Link href="/pricing" className="header-btn-secondary">
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
