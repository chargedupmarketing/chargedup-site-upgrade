import { ChatbotPricingTiers } from '@/components/ChatbotPricingTiers'
import { HighTechAIIcon } from '@/components/icons'

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="h1 mb-6">AI Chatbot Services & Pricing</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Automate your social media customer service with AI chatbots that work 24/7 across 
              Facebook Messenger, Instagram DMs, and more. Never miss a customer message again!
            </p>
          </div>

          {/* AI Chatbot Pricing */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="h2 mb-4 flex items-center gap-3">
                <HighTechAIIcon className="w-8 h-8" />
                AI-Powered Social Media Chatbots
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Automate your social media customer service with AI chatbots that work 24/7 across 
                Facebook Messenger, Instagram DMs, and more. Never miss a customer message again!
              </p>
            </div>
            
            <ChatbotPricingTiers />
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="enhanced-card p-12 max-w-4xl mx-auto">
              <h2 className="h2 mb-6">Ready to Get Started with AI Chatbots?</h2>
              <p className="text-xl mb-8 text-white/80">
                Let's discuss your chatbot needs and find the perfect solution to automate your customer service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="btn-primary px-8 py-4 text-lg font-semibold"
                >
                  Schedule Your Chatbot Consultation
                </a>
                <a 
                  href="mailto:social@chargedupmarketing.com" 
                  className="btn-secondary px-8 py-4 text-lg font-semibold"
                >
                  Email Us Directly
                </a>
              </div>
              <p className="text-white/60 text-sm mt-6">
                Contact us at social@chargedupmarketing.com to get started today.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
