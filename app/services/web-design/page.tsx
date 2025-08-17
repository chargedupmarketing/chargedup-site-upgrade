import Link from 'next/link'
import Image from 'next/image'

export default function WebDesignPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-black">
        <div className="container py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="h1 mb-6">
              <span className="text-[color:var(--brand-primary,#fc5f17)]">Web Design</span> & Development
            </h1>
            <p className="p text-xl text-white/70 max-w-2xl mx-auto">
              Create stunning, high-converting websites that engage visitors and drive business growth. 
              We design and develop custom websites that look amazing and perform even better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact" className="header-btn-primary">
                Start Your Project
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
              Our comprehensive web design and development services create digital experiences 
              that captivate your audience and convert visitors into customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Design</h3>
              <p className="text-white/70">
                Unique, brand-focused designs that reflect your business identity and 
                create memorable user experiences that set you apart from competitors.
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Responsive Development</h3>
              <p className="text-white/70">
                Mobile-first development ensuring your website looks and functions perfectly 
                across all devices, from smartphones to desktop computers.
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
                Fast-loading websites with optimized code, images, and hosting to ensure 
                excellent user experience and search engine rankings.
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
              A systematic approach to web design and development that delivers 
              stunning websites on time and within budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Discovery & Planning</h3>
              <p className="text-white/70 text-sm">
                We analyze your business goals, target audience, and requirements to create 
                a comprehensive project plan and site architecture.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Design & Wireframing</h3>
              <p className="text-white/70 text-sm">
                Create wireframes and visual designs that align with your brand identity 
                and provide an intuitive user experience for your visitors.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Development & Testing</h3>
              <p className="text-white/70 text-sm">
                Build your website using modern technologies, ensuring cross-browser 
                compatibility and thorough testing across all devices and platforms.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Launch & Support</h3>
              <p className="text-white/70 text-sm">
                Deploy your website with ongoing support, maintenance, and optimization 
                to ensure continued performance and success.
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
              Discover how professional web design transforms your online presence and drives business success.
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
                  <h3 className="text-xl font-semibold text-white mb-3">Professional Image</h3>
                  <p className="text-white/70">
                    A professionally designed website builds trust and credibility with your 
                    audience, making a strong first impression that converts visitors into customers.
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
                  <h3 className="text-xl font-semibold text-white mb-3">Better User Experience</h3>
                  <p className="text-white/70">
                    Intuitive navigation, fast loading times, and mobile responsiveness create 
                    a seamless user experience that keeps visitors engaged and encourages conversions.
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
                  <h3 className="text-xl font-semibold text-white mb-3">SEO Optimization</h3>
                  <p className="text-white/70">
                    Clean, semantic code and optimized content structure improve your search 
                    engine rankings, making it easier for potential customers to find you online.
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
                  <h3 className="text-xl font-semibold text-white mb-3">Increased Conversions</h3>
                  <p className="text-white/70">
                    Strategic design elements, clear calls-to-action, and optimized user flows 
                    guide visitors through your conversion funnel, increasing sales and leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Website Types Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="h2 mb-6">
              Website <span className="text-[color:var(--brand-primary,#fc5f17)]">Types</span> We Build
            </h2>
            <p className="p text-lg text-white/70">
              Comprehensive web design solutions for every business need, from simple landing pages 
              to complex e-commerce platforms and custom web applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Website Type 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Business</div>
              </div>
              <h3 className="text-sm font-medium text-white">Business Websites</h3>
            </div>

            {/* Website Type 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">E-commerce</div>
              </div>
              <h3 className="text-sm font-medium text-white">E-commerce Stores</h3>
            </div>

            {/* Website Type 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Landing</div>
              </div>
              <h3 className="text-sm font-medium text-white">Landing Pages</h3>
            </div>

            {/* Website Type 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Portfolio</div>
              </div>
              <h3 className="text-sm font-medium text-white">Portfolio Sites</h3>
            </div>

            {/* Website Type 5 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Blog</div>
              </div>
              <h3 className="text-sm font-medium text-white">Blog & Content</h3>
            </div>

            {/* Website Type 6 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Custom</div>
              </div>
              <h3 className="text-sm font-medium text-white">Custom Web Apps</h3>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="h2 mb-6">
              Ready to <span className="text-[color:var(--brand-primary,#fc5f17)]">Transform</span> Your Online Presence?
            </h2>
            <p className="p text-lg text-white/70 mb-8">
              Let's create a stunning website that captivates your audience, drives conversions, 
              and helps your business grow online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="header-btn-primary">
                Start Your Web Project
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
