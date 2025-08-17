'use client'

import { PricingTiers } from '@/components/PricingTiers'
import { ChatbotPricingTiers } from '@/components/ChatbotPricingTiers'
import { AIPlatformPricingTiers } from '@/components/AIPlatformPricingTiers'
import { useEffect } from 'react'
import { HighTechAIIcon } from '@/components/icons'

export default function PricingPage() {
  const scrollToColdDM = () => {
    const coldDMSection = document.getElementById('colddm-pricing');
    if (coldDMSection) {
      // Scroll to center with some offset to position it higher
      const elementRect = coldDMSection.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
      const offset = 100; // Adjust this value to move it higher (increase) or lower (decrease)
      
      window.scrollTo({
        top: middle - offset,
        behavior: 'smooth'
      });
    }
  };

  const scrollToAI = () => {
    const aiSection = document.getElementById('ai-pricing');
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Center the target section if arriving with a hash (e.g., /pricing#ai-pricing)
  useEffect(() => {
    const centerFromHash = () => {
      const hash = window.location.hash?.replace('#', '');
      if (!hash) return;
      const target = document.getElementById(hash);
      if (target) {
        // Delay slightly to ensure layout is ready
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 50);
      }
    };

    centerFromHash();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="h1 mb-6">Complete Services Pricing</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Choose the perfect plan for your business. From marketing services to AI-powered 
              chatbots, we have solutions for every budget and need.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToColdDM}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                🚀 Jump to ColdDM Pricing
              </button>
              <button 
                onClick={scrollToAI}
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 flex items-center gap-3"
              >
                <HighTechAIIcon className="w-6 h-6" />
                View AI Platform Pricing
              </button>
            </div>
          </div>

          {/* Marketing Services Pricing */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="h2 mb-4">📈 Marketing Services</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive digital marketing solutions including social media management, 
                email marketing, and paid advertising to grow your business.
              </p>
            </div>
            
            <PricingTiers />
          </div>

          {/* AI Services Pricing */}
          <div id="colddm-pricing" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="h2 mb-4">AI-Powered ColdDM Services!</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Automate customer service and capture leads 24/7 with intelligent AI chatbots 
                that work across all your social media platforms.
              </p>
            </div>
            
            <ChatbotPricingTiers />
          </div>

          {/* AI Marketing Platform Pricing */}
          <div id="ai-pricing" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="h2 mb-4 flex items-center justify-center gap-3">
                <HighTechAIIcon className="w-8 h-8" />
                AI Marketing Platform
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Access our advanced AI-powered marketing intelligence platform. Get AI-enhanced insights, 
                content generation, and strategic recommendations to transform your marketing.
              </p>
            </div>
            <AIPlatformPricingTiers />
          </div>

          {/* AI Platform Features */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-6">AI Platform Features</h3>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Our AI platform delivers comprehensive marketing intelligence and automation capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <h4 className="font-semibold mb-2">Strategy Development</h4>
                <p className="text-sm text-gray-400">AI-powered marketing strategy and planning</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">✍️</span>
                </div>
                <h4 className="font-semibold mb-2">Content Creation</h4>
                <p className="text-sm text-gray-400">AI-enhanced content generation and optimization</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">📊</span>
                </div>
                <h4 className="font-semibold mb-2">Analytics & Insights</h4>
                <p className="text-sm text-gray-400">Advanced marketing analytics and reporting</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <h4 className="font-semibold mb-2">Campaign Optimization</h4>
                <p className="text-sm text-gray-400">AI-driven campaign performance optimization</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="h2 mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-white/80">
                Choose the services that fit your business needs and start growing today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary">
                  Schedule a Consultation
                </a>
                <a href="/our-chatbot" className="btn-outline">
                  Learn More About ColdDM
                </a>
                <a href="/our-ai" className="btn-outline">
                  Learn More About Our AI
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
