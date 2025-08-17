import Link from 'next/link'
import Image from 'next/image'

export default function SocialMediaAuditPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-black">
        <div className="container py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="h1 mb-6">
              Social Media <span className="text-[color:var(--brand-primary,#fc5f17)]">Audit</span> & Strategy
            </h1>
            <p className="p text-xl text-white/70 max-w-2xl mx-auto">
              Transform your social media presence with data-driven insights and strategic planning. 
              We analyze, optimize, and create winning strategies that drive engagement and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact" className="header-btn-primary">
                Get Your Free Audit
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
              What We <span className="text-[color:var(--brand-primary,#fc5f17)]">Do</span>
            </h2>
            <p className="p text-lg text-white/70">
              Our comprehensive social media audit and strategy services identify opportunities, 
              optimize performance, and create actionable plans for sustainable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Comprehensive Audits</h3>
              <p className="text-white/70">
                Deep-dive analysis of your current social media performance, content quality, 
                audience engagement, and competitive positioning across all platforms.
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Strategic Planning</h3>
              <p className="text-white/70">
                Data-driven strategy development including content planning, posting schedules, 
                platform-specific approaches, and growth objectives aligned with business goals.
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
              <p className="text-white/70">
                Continuous monitoring and optimization of content performance, engagement rates, 
                and audience growth to maximize your social media ROI.
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
              Our <span className="text-[color:var(--brand-primary,#fc5f17)]">Process</span>
            </h2>
            <p className="p text-lg text-white/70">
              A systematic approach to auditing and strategizing your social media presence 
              that delivers measurable improvements and sustainable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Discovery & Analysis</h3>
              <p className="text-white/70 text-sm">
                We examine your current social media presence, analyze competitors, and identify 
                key opportunities for improvement and growth.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Audit Report</h3>
              <p className="text-white/70 text-sm">
                Comprehensive report detailing current performance, strengths, weaknesses, 
                and specific recommendations for improvement.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Strategy Development</h3>
              <p className="text-white/70 text-sm">
                Custom strategy creation including content themes, posting schedules, 
                platform-specific tactics, and growth objectives.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Implementation & Monitoring</h3>
              <p className="text-white/70 text-sm">
                Support with strategy implementation and ongoing monitoring to ensure 
                continuous improvement and goal achievement.
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
              Key <span className="text-[color:var(--brand-primary,#fc5f17)]">Benefits</span>
            </h2>
            <p className="p text-lg text-white/70">
              Discover how our social media audit and strategy services transform your online presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Data-Driven Insights</h3>
                  <p className="text-white/70">
                    Make informed decisions based on comprehensive analytics, audience insights, 
                    and performance metrics that reveal what's working and what isn't.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Competitive Advantage</h3>
                  <p className="text-white/70">
                    Understand your competitive landscape and identify unique opportunities 
                    to differentiate your brand and capture market share.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Increased Engagement</h3>
                  <p className="text-white/70">
                    Optimize your content strategy to boost engagement rates, build stronger 
                    relationships with your audience, and increase brand loyalty.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Measurable Growth</h3>
                  <p className="text-white/70">
                    Track progress with clear KPIs and metrics that demonstrate ROI, 
                    audience growth, and the impact of your social media strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Audit Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="h2 mb-6">
              What We <span className="text-[color:var(--brand-primary,#fc5f17)]">Audit</span>
            </h2>
            <p className="p text-lg text-white/70">
              Comprehensive analysis covering every aspect of your social media presence 
              to identify opportunities for improvement and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Audit Item 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Content</div>
              </div>
              <h3 className="text-sm font-medium text-white">Content Quality & Strategy</h3>
            </div>

            {/* Audit Item 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Audience</div>
              </div>
              <h3 className="text-sm font-medium text-white">Audience Analysis</h3>
            </div>

            {/* Audit Item 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Performance</div>
              </div>
              <h3 className="text-sm font-medium text-white">Performance Metrics</h3>
            </div>

            {/* Audit Item 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Competition</div>
              </div>
              <h3 className="text-sm font-medium text-white">Competitive Analysis</h3>
            </div>

            {/* Audit Item 5 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Branding</div>
              </div>
              <h3 className="text-sm font-medium text-white">Brand Consistency</h3>
            </div>

            {/* Audit Item 6 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Platforms</div>
              </div>
              <h3 className="text-sm font-medium text-white">Platform Optimization</h3>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="h2 mb-6">
              Ready to <span className="text-[color:var(--brand-primary,#fc5f17)]">Transform</span> Your Social Media?
            </h2>
            <p className="p text-lg text-white/70 mb-8">
              Let's analyze your current social media presence and create a winning strategy 
              that drives engagement, builds your brand, and grows your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="header-btn-primary">
                Get Your Free Audit
              </Link>
              <Link href="/pricing" className="header-btn-secondary">
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
