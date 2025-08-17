import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import { HighTechAIIcon } from '@/components/icons'

export default function OurChatbotPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-black">
        <div className="container py-20">
          <FadeIn delay={200}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="h1 mb-6">
                <span className="text-[color:var(--brand-primary,#fc5f17)]">ColdDM</span> - Your AI Chatbot
              </h1>
              <p className="p text-xl text-white/70 max-w-2xl mx-auto">
                Automate customer service across all your social media platforms with intelligent AI chatbots. 
                Respond to customers 24/7, capture leads, and never miss a message again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="/ai-services" className="header-btn-primary">
                  View Pricing Plans
                </Link>
                <Link href="/contact" className="header-btn-secondary">
                  Start Free Trial
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* What ColdDM Does Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <FadeIn delay={200}>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="h2 mb-6">
                What <span className="text-[color:var(--brand-primary,#fc5f17)]">ColdDM</span> Does
              </h2>
              <p className="p text-lg text-white/70">
                ColdDM is your AI-powered chatbot that automatically handles customer inquiries, 
                captures leads, and provides instant support across all your social media channels.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <FadeIn delay={400}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Customer Support</h3>
                <p className="text-white/70">
                  Your chatbot never sleeps! Provide instant responses to customer questions 
                  at any time of day or night, even when your team is offline.
                </p>
              </div>
            </FadeIn>

            {/* Feature 2 */}
            <FadeIn delay={500}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <HighTechAIIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Smart AI Responses</h3>
                <p className="text-white/70">
                  Advanced AI that understands customer questions and provides helpful, 
                  brand-consistent responses. Learns from interactions to improve over time.
                </p>
              </div>
            </FadeIn>

            {/* Feature 3 */}
            <FadeIn delay={600}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Multi-Platform Support</h3>
                <p className="text-white/70">
                  Works seamlessly across Facebook Messenger, Instagram DMs, and other 
                  social platforms. Manage all conversations from one dashboard.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <FadeIn delay={200}>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="h2 mb-6">
                How <span className="text-[color:var(--brand-primary,#fc5f17)]">ColdDM</span> Works
              </h2>
              <p className="p text-lg text-white/70">
                Get your AI chatbot up and running in just a few simple steps. 
                Start with a free trial and see the results immediately.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <FadeIn delay={400}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Sign Up & Connect</h3>
                <p className="text-white/70 text-sm">
                  Create your account and connect your social media profiles. 
                  We'll guide you through the setup process step by step.
                </p>
              </div>
            </FadeIn>

            {/* Step 2 */}
            <FadeIn delay={500}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Customize Your Bot</h3>
                <p className="text-white/70 text-sm">
                  Set up your brand voice, common responses, and automated workflows. 
                  Train the AI on your products and services.
                </p>
              </div>
            </FadeIn>

            {/* Step 3 */}
            <FadeIn delay={600}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Go Live</h3>
                <p className="text-white/70 text-sm">
                  Activate your chatbot and start serving customers immediately. 
                  Monitor conversations and performance from your dashboard.
                </p>
              </div>
            </FadeIn>

            {/* Step 4 */}
            <FadeIn delay={700}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Scale & Optimize</h3>
                <p className="text-white/70 text-sm">
                  Add more platforms, customize responses, and scale your 
                  customer service as your business grows.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Real Examples Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <FadeIn delay={200}>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="h2 mb-6">
                How <span className="text-[color:var(--brand-primary,#fc5f17)]">Customers</span> Use ColdDM
              </h2>
              <p className="p text-lg text-white/70">
                See real examples of how businesses are using ColdDM to automate customer interactions 
                and capture leads across social media platforms.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Example 1 */}
            <FadeIn delay={400}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📚</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Course Creator Lead Capture</h3>
                    <p className="text-white/70 mb-4">
                      When someone comments "CHARGEDUP" on your social media post, ColdDM automatically:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <span className="text-green-400">✓</span>
                        <span>Detects the keyword "CHARGEDUP"</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <span className="text-green-400">✓</span>
                        <span>Sends them your secret course link</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <span className="text-green-400">✓</span>
                        <span>Captures their contact information</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <span className="text-green-400">✓</span>
                        <span>Adds them to your email list</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Example 2 */}
            <FadeIn delay={500}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🛒</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">E-commerce Customer Support</h3>
                    <p className="text-white/70 mb-4">
                      ColdDM handles common customer questions automatically:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <span className="text-green-400">✓</span>
                        <span>"What's your return policy?" → Instant answer</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <span className="text-green-400">✓</span>
                        <span>"Do you ship to Canada?" → Location check</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <span className="text-green-400">✓</span>
                        <span>"Size chart?" → Product link + sizing guide</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <span className="text-green-400">✓</span>
                        <span>Complex issues → Human agent handoff</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Example 3 */}
            <FadeIn delay={600}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Service Business Booking</h3>
                    <p className="text-white/70 mb-4">
                      Automate appointment scheduling and consultations:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <span className="text-green-400">✓</span>
                        <span>"Book consultation" → Calendar integration</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <span className="text-green-400">✓</span>
                        <span>"Pricing info" → Service packages + rates</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <span className="text-green-400">✓</span>
                        <span>"Available times" → Real-time calendar check</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <span className="text-green-400">✓</span>
                        <span>Confirmation → Email + SMS reminders</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Example 4 */}
            <FadeIn delay={700}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🔥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Social Media Engagement</h3>
                    <p className="text-white/70 mb-4">
                      Boost engagement with automated responses:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <span className="text-green-400">✓</span>
                        <span>"DM me for details" → Instant product info</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <span className="text-green-400">✓</span>
                        <span>"Comment 'YES' for exclusive offer" → Special deal</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <span className="text-green-400">✓</span>
                        <span>"Tag a friend" → Referral program activation</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <span className="text-green-400">✓</span>
                        <span>Follow-up sequences → Nurture relationships</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <FadeIn delay={200}>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="h2 mb-6">
                Key <span className="text-[color:var(--brand-primary,#fc5f17)]">Features</span>
              </h2>
              <p className="p text-lg text-white/70">
                Everything you need to provide exceptional automated customer service.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <FadeIn delay={400}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Analytics Dashboard</h3>
                    <p className="text-white/70">
                      Track customer interactions, response times, and satisfaction metrics. 
                      Monitor which questions are asked most and optimize your responses.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Feature 2 */}
            <FadeIn delay={500}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Lead Capture</h3>
                    <p className="text-white/70">
                      Automatically collect customer information and qualify leads through 
                      intelligent conversation flows. Never miss a potential customer again.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Feature 3 */}
            <FadeIn delay={600}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🔗</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">CRM Integration</h3>
                    <p className="text-white/70">
                      Seamlessly integrate with your existing CRM tools like Shopify, 
                      Salesforce, and more. Keep all customer data in one place.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Feature 4 */}
            <FadeIn delay={700}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Multi-Language Support</h3>
                    <p className="text-white/70">
                      Serve customers in their preferred language. Support multiple 
                      languages to reach a broader audience and improve customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Platform Capabilities Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <FadeIn delay={200}>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="h2 mb-6">
                Platform <span className="text-[color:var(--brand-primary,#fc5f17)]">Capabilities</span>
              </h2>
              <p className="p text-lg text-white/70">
                Advanced features that make ColdDM powerful, flexible, and easy to use.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Capability 1 */}
            <FadeIn delay={400}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                  <div className="text-white/60 text-sm font-medium">Templates</div>
                </div>
                <h3 className="text-sm font-medium text-white">Custom Response Templates</h3>
              </div>
            </FadeIn>

            {/* Capability 2 */}
            <FadeIn delay={500}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                  <div className="text-white/60 text-sm font-medium">Automation</div>
                </div>
                <h3 className="text-sm font-medium text-white">Workflow Automation</h3>
              </div>
            </FadeIn>

            {/* Capability 3 */}
            <FadeIn delay={600}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                  <div className="text-white/60 text-sm font-medium">Campaigns</div>
                </div>
                <h3 className="text-sm font-medium text-white">Scheduled Campaigns</h3>
              </div>
            </FadeIn>

            {/* Capability 4 */}
            <FadeIn delay={700}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                  <div className="text-white/60 text-sm font-medium">Zapier</div>
                </div>
                <h3 className="text-sm font-medium text-white">Zapier Integration</h3>
              </div>
            </FadeIn>

            {/* Capability 5 */}
            <FadeIn delay={800}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                  <div className="text-white/60 text-sm font-medium">White-Label</div>
                </div>
                <h3 className="text-sm font-medium text-white">White-Label Options</h3>
              </div>
            </FadeIn>

            {/* Capability 6 */}
            <FadeIn delay={900}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                  <div className="text-white/60 text-sm font-medium">API</div>
                </div>
                <h3 className="text-sm font-medium text-white">API Access</h3>
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
                Ready to <span className="text-[color:var(--brand-primary,#fc5f17)]">Automate</span> Your Customer Service?
              </h2>
              <p className="p text-lg text-white/70 mb-8">
                Start with a 14-day free trial and see how ColdDM can transform your customer 
                interactions. No credit card required to get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ai-services" className="header-btn-primary">
                  View All Pricing Plans
                </Link>
                <Link href="/contact" className="header-btn-secondary">
                  Start Free Trial
                </Link>
              </div>
              <p className="text-white/60 text-sm mt-6">
                Start with 250 messages/month free, then choose the plan that fits your business
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
