import Link from 'next/link'
import Image from 'next/image'

export default function EmailMarketingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-black">
        <div className="container py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="h1 mb-6">
              E-Mail <span className="text-[color:var(--brand-primary,#fc5f17)]">Marketing</span>
            </h1>
            <p className="p text-xl text-white/70 max-w-2xl mx-auto">
              Convert leads into loyal customers with targeted, personalized email campaigns. 
              We create compelling content and automated sequences that drive engagement and sales.
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
              What We <span className="text-[color:var(--brand-primary,#fc5f17)]">Do</span>
            </h2>
            <p className="p text-lg text-white/70">
              Our comprehensive email marketing services deliver personalized campaigns that nurture 
              relationships, drive conversions, and maximize your ROI through strategic automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Campaign Creation</h3>
              <p className="text-white/70">
                Design compelling email campaigns with engaging content, eye-catching visuals, 
                and strategic messaging that resonates with your target audience.
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Automation Sequences</h3>
              <p className="text-white/70">
                Build intelligent email workflows that automatically nurture leads, welcome new 
                subscribers, and guide prospects through your conversion funnel.
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
              <p className="text-white/70">
                Continuously test, analyze, and optimize your email campaigns for maximum 
                open rates, click-through rates, and conversion performance.
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
              A systematic approach to email marketing that delivers measurable results 
              and builds lasting relationships with your audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Strategy & Planning</h3>
              <p className="text-white/70 text-sm">
                We analyze your audience, define campaign objectives, and create a strategic 
                roadmap for your email marketing success.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Content Creation</h3>
              <p className="text-white/70 text-sm">
                Our team crafts compelling email content, designs eye-catching templates, 
                and ensures your message resonates with your audience.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Setup & Launch</h3>
              <p className="text-white/70 text-sm">
                We configure your email platform, set up automation sequences, and launch 
                campaigns with proper testing and optimization.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Monitor & Optimize</h3>
              <p className="text-white/70 text-sm">
                Continuous monitoring, A/B testing, and performance optimization to improve 
                results and maximize your email marketing ROI.
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
              Discover how strategic email marketing transforms your customer relationships and drives revenue.
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
                  <h3 className="text-xl font-semibold text-white mb-3">High ROI</h3>
                  <p className="text-white/70">
                    Email marketing delivers an average ROI of $42 for every $1 spent, making it 
                    one of the most cost-effective marketing channels available.
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
                  <h3 className="text-xl font-semibold text-white mb-3">Personalized Engagement</h3>
                  <p className="text-white/70">
                    Deliver highly targeted content based on user behavior, preferences, and 
                    demographics to increase engagement and conversion rates.
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
                  <h3 className="text-xl font-semibold text-white mb-3">Automated Nurturing</h3>
                  <p className="text-white/70">
                    Set up intelligent email sequences that automatically nurture leads, 
                    welcome new subscribers, and guide prospects through your sales funnel.
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
                  <h3 className="text-xl font-semibold text-white mb-3">Measurable Results</h3>
                  <p className="text-white/70">
                    Track every aspect of your email performance with detailed analytics, 
                    A/B testing, and conversion tracking for continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Types Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="h2 mb-6">
              Email <span className="text-[color:var(--brand-primary,#fc5f17)]">Types</span> We Create
            </h2>
            <p className="p text-lg text-white/70">
              Comprehensive email marketing solutions covering every stage of the customer journey 
              to maximize engagement and drive conversions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email Type 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Welcome</div>
              </div>
              <h3 className="text-sm font-medium text-white">Welcome Series</h3>
            </div>

            {/* Email Type 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Newsletter</div>
              </div>
              <h3 className="text-sm font-medium text-white">Newsletter Campaigns</h3>
            </div>

            {/* Email Type 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Promotional</div>
              </div>
              <h3 className="text-sm font-medium text-white">Promotional Offers</h3>
            </div>

            {/* Email Type 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Abandoned</div>
              </div>
              <h3 className="text-sm font-medium text-white">Cart Recovery</h3>
            </div>

            {/* Email Type 5 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Nurture</div>
              </div>
              <h3 className="text-sm font-medium text-white">Lead Nurturing</h3>
            </div>

            {/* Email Type 6 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Re-engagement</div>
              </div>
              <h3 className="text-sm font-medium text-white">Re-engagement</h3>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="h2 mb-6">
              Ready to <span className="text-[color:var(--brand-primary,#fc5f17)]">Convert</span> More Leads?
            </h2>
            <p className="p text-lg text-white/70 mb-8">
              Let's create email campaigns that nurture relationships, drive engagement, 
              and convert your audience into loyal customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="header-btn-primary">
                Start Your Email Campaign
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
