import Link from 'next/link'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-black">
        <div className="container py-20">
          <FadeIn delay={200}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="h1 mb-6">
                AI <span className="text-[color:var(--brand-primary,#fc5f17)]">Automation</span> & Optimization
              </h1>
              <p className="p text-xl text-white/70 max-w-2xl mx-auto">
                Leverage the power of artificial intelligence to automate your marketing processes, 
                optimize campaigns in real-time, and achieve unprecedented efficiency and results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="/contact" className="btn-primary">
                  Get Started Today
                </Link>
                <Link href="/pricing" className="btn-outline">
                  View Pricing
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <FadeIn delay={200}>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="h2 mb-6">
                What We <span className="text-[color:var(--brand-primary,#fc5f17)]">Do</span>
              </h2>
              <p className="p text-lg text-white/70">
                Our AI-powered automation solutions transform your marketing from manual to intelligent, 
                ensuring every campaign runs at peak performance 24/7.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <FadeIn delay={400}>
              <div className="card p-6 text-center group hover-lift">
                <div className="w-20 h-20 bg-gradient-to-br from-[#fc5f17] to-[#e54d0e] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="h3 mb-3">Campaign Automation</h3>
                <p className="p">
                  Set up intelligent workflows that automatically trigger actions based on user behavior, 
                  ensuring timely and relevant communication with your audience.
                </p>
              </div>
            </FadeIn>

            {/* Service 2 */}
            <FadeIn delay={500}>
              <div className="card p-6 text-center group hover-lift">
                <div className="w-20 h-20 bg-gradient-to-br from-[#fcb80a] to-[#e6a600] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="h3 mb-3">Performance Optimization</h3>
                <p className="p">
                  AI algorithms continuously analyze campaign performance and automatically adjust 
                  targeting, bidding, and creative elements for maximum ROI.
                </p>
              </div>
            </FadeIn>

            {/* Service 3 */}
            <FadeIn delay={600}>
              <div className="card p-6 text-center group hover-lift">
                <div className="w-20 h-20 bg-gradient-to-br from-[#fc5f17] to-[#e54d0e] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <h3 className="h3 mb-3">Lead Nurturing</h3>
                <p className="p">
                  Intelligent lead scoring and automated nurturing sequences that guide prospects 
                  through your funnel with personalized content and timing.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <FadeIn delay={200}>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="h2 mb-6">
                Our <span className="text-[color:var(--brand-primary,#fc5f17)]">Process</span>
              </h2>
              <p className="p text-lg text-white/70">
                A systematic approach to implementing AI automation that delivers measurable results 
                and continuous improvement.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <FadeIn delay={400}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Assessment & Planning</h3>
                <p className="text-white/70 text-sm">
                  We analyze your current marketing operations, identify automation opportunities, 
                  and create a strategic roadmap for implementation.
                </p>
              </div>
            </FadeIn>

            {/* Step 2 */}
            <FadeIn delay={500}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Setup & Integration</h3>
                <p className="text-white/70 text-sm">
                  Our team configures AI tools, integrates with your existing systems, and sets up 
                  automated workflows tailored to your business needs.
                </p>
              </div>
            </FadeIn>

            {/* Step 3 */}
            <FadeIn delay={600}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Testing & Launch</h3>
                <p className="text-white/70 text-sm">
                  We thoroughly test all automation sequences, launch campaigns, and monitor 
                  performance to ensure optimal functionality.
                </p>
              </div>
            </FadeIn>

            {/* Step 4 */}
            <FadeIn delay={700}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Optimization & Scale</h3>
                <p className="text-white/70 text-sm">
                  Continuous monitoring, A/B testing, and optimization to improve performance 
                  and scale successful strategies across your business.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <FadeIn delay={200}>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="h2 mb-6">
                Key <span className="text-[color:var(--brand-primary,#fc5f17)]">Benefits</span>
              </h2>
              <p className="p text-lg text-white/70">
                Discover how AI automation transforms your marketing efficiency and results.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <FadeIn delay={400}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">24/7 Performance</h3>
                    <p className="text-white/70">
                      Your campaigns never sleep. AI continuously monitors and optimizes performance, 
                      ensuring maximum efficiency around the clock.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Benefit 2 */}
            <FadeIn delay={500}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Data-Driven Decisions</h3>
                    <p className="text-white/70">
                      Make informed marketing decisions based on real-time data and AI insights, 
                      eliminating guesswork and maximizing ROI.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Benefit 3 */}
            <FadeIn delay={600}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
                    <p className="text-white/70">
                      Automate repetitive tasks and scale your marketing efforts without proportionally 
                      increasing your team size or workload.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Benefit 4 */}
            <FadeIn delay={700}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Personalized Experiences</h3>
                    <p className="text-white/70">
                      Deliver highly personalized content and experiences to your audience, 
                      improving engagement and conversion rates significantly.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Technologies We Use Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <FadeIn delay={200}>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="h2 mb-6">
                Technologies We <span className="text-[color:var(--brand-primary,#fc5f17)]">Use</span>
              </h2>
              <p className="p text-lg text-white/70">
                Cutting-edge AI and automation tools that power our solutions and drive results.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Tech 1 */}
            <FadeIn delay={400}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                  <div className="text-white/60 text-sm font-medium">AI/ML</div>
                </div>
                <h3 className="text-sm font-medium text-white">Machine Learning</h3>
              </div>
            </FadeIn>

            {/* Tech 2 */}
            <FadeIn delay={500}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                  <div className="text-white/60 text-sm font-medium">Analytics</div>
                </div>
                <h3 className="text-sm font-medium text-white">Predictive Analytics</h3>
              </div>
            </FadeIn>

            {/* Tech 3 */}
            <FadeIn delay={600}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                  <div className="text-white/60 text-sm font-medium">Automation</div>
                </div>
                <h3 className="text-sm font-medium text-white">Workflow Automation</h3>
              </div>
            </FadeIn>

            {/* Tech 4 */}
            <FadeIn delay={700}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                  <div className="text-white/60 text-sm font-medium">Integration</div>
                </div>
                <h3 className="text-sm font-medium text-white">API Integration</h3>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <FadeIn delay={200}>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="h2 mb-6">
                Ready to <span className="text-[color:var(--brand-primary,#fc5f17)]">Automate</span>?
              </h2>
              <p className="p text-lg text-white/70 mb-8">
                Let's discuss how AI automation can transform your marketing operations and drive 
                unprecedented growth for your SaaS company.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="header-btn-primary">
                  Start Your Automation Journey
                </Link>
                <Link href="/pricing" className="header-btn-secondary">
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
