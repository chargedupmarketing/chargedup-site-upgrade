'use client'

import Link from 'next/link'
import { LightningBoltIcon } from '@/components/icons'
import { LogoCloud } from '@/components/LogoCloud'
import { useState, useEffect } from 'react'
import FadeIn from '@/components/FadeIn'


export default function HomePage() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AI‑assisted campaigns, human strategy. Book a 15‑min audit—free.",
      button: "Book a Strategy Call",
      href: "/contact"
    },
    {
      title: "Try Our New ColdDM AI to generate 3x the Leads.",
      subtitle: "Free trial for first 14 days!",
      button: "Try ColdDM",
      href: "/our-chatbot"
    },
    {
      title: "Scale smarter with our AI Marketing Platform.",
      subtitle: "Strategy, content, and insights — powered by AI.",
      button: "AI Marketing",
      href: "/our-ai"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds (slower)

    return () => clearInterval(interval);
  }, [slides.length]);

  const steps = [
    {
      id: 1,
      title: "Audit & Analyze",
      description: "We dive deep into your current marketing to find opportunities.",
      detailedInfo: "Our comprehensive marketing audit examines your current strategies, audience insights, conversion funnels, and competitive landscape. We identify gaps, opportunities, and areas for optimization to create a solid foundation for growth."
    },
    {
      id: 2,
      title: "Strategize",
      description: "We craft a custom plan using AI, creativity, and data.",
      detailedInfo: "Using advanced AI tools and data-driven insights, we develop a customized marketing strategy tailored to your business goals. This includes audience targeting, channel selection, content planning, and performance metrics that align with your growth objectives."
    },
    {
      id: 3,
      title: "Execute",
      description: "Our team launches, manages, and optimizes your campaigns.",
      detailedInfo: "Our expert team implements your strategy across all selected channels, continuously monitoring performance and making real-time adjustments. We handle everything from content creation to campaign management, ensuring optimal results."
    },
    {
      id: 4,
      title: "Optimize & Report",
      description: "We continually improve and show you the results.",
      detailedInfo: "We provide detailed analytics and insights, showing you exactly how your campaigns are performing. Our team continuously optimizes based on data, improving ROI and scaling successful strategies while maintaining transparency."
    }
  ];

  return (
    <div className="relative overflow-hidden">

      
      {/* Video Background for Hero Section */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Lightning Video Background - Using a more reliable approach */}
        <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black relative">
          {/* Animated lightning effect using CSS */}
          <div className="absolute inset-0 lightning-effect"></div>
          
          {/* Lightning flash overlays */}
          <div className="absolute inset-0 lightning-flash-1"></div>
          <div className="absolute inset-0 lightning-flash-2"></div>
          <div className="absolute inset-0 lightning-flash-3"></div>
        </div>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <section className="section relative z-10">
        <div className="container grid gap-8 md:grid-cols-2 items-center">
          <FadeIn delay={200}>
            <div className="space-y-6 hero-text">
              <div className="relative">
                {/* Lightning Bolt Accent SVG behind headline */}
                <svg 
                  className="absolute -top-8 -left-8 w-32 h-32 text-[#fcb80a]/20 transform -rotate-12 z-0"
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                </svg>
                <h1 className="h1 relative z-10">Marketing that gets you <span className="text-[#fcb80a]">Charged‑Up</span> ⚡</h1>
              </div>
              
              {/* Slideshow */}
              <div className="relative min-h-[80px]">
                  {/* Progress Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 rounded-t-xl overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-100 ease-linear"
                      style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                    />
                  </div>
                
                {/* Slide Content */}
                <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-white/20 rounded-xl p-6 transition-all duration-500 ease-in-out">
                  <p className="p">{slides[currentSlide].title}</p>
                  {slides[currentSlide].subtitle && (
                    <p className="p text-lg font-semibold text-orange-400 mt-2">{slides[currentSlide].subtitle}</p>
                  )}
                </div>
                
                {/* Slide Bar */}
                <div className="mt-6 bg-white/10 rounded-full p-1 backdrop-blur-sm">
                  <div className="flex gap-1">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-orange-400 shadow-lg shadow-orange-400/50' 
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Link href={slides[currentSlide].href} className="btn-primary">{slides[currentSlide].button}</Link>
                <Link href="/pricing#ai-pricing" className="btn-outline">See Pricing</Link>
              </div>
              
              {/* Animated Text Container - Both sets positioned in same location */}
              <div className="mt-6 relative min-h-[60px]">
                {/* Animated Key Benefits for First Slide */}
                <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  currentSlide === 0 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}>
                  <ul className="text-white/60 text-sm grid grid-cols-3 gap-4 pt-4">
                    <li><strong className="text-white"><LightningBoltIcon className="inline h-4 w-4"/> 14d</strong> to launch</li>
                    <li><strong className="text-white">30–60%</strong> ops time saved</li>
                    <li><strong className="text-white">3–6x</strong> ROAS targets</li>
                  </ul>
                </div>
                
                {/* Animated ColdDM Benefits for Second Slide */}
                <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  currentSlide === 1 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}>
                  <ul className="text-white/60 text-sm grid grid-cols-3 gap-4 pt-4">
                    <li><strong className="text-white">AI</strong> Agent</li>
                    <li><strong className="text-white">AI</strong> Lead Capture</li>
                    <li><strong className="text-white">Multi</strong>-Platform</li>
                  </ul>
                </div>

                {/* Animated AI Marketing Benefits for Third Slide */}
                <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  currentSlide === 2 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}>
                  <ul className="text-white/60 text-sm grid grid-cols-3 gap-4 pt-4">
                    <li><strong className="text-white">AI</strong> Strategy</li>
                    <li><strong className="text-white">Content</strong> Automation</li>
                    <li><strong className="text-white">Insights</strong> & Analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="p-4">
              <div className="aspect-[16/10] rounded-xl overflow-hidden">
                <img 
                  src="/hero-visual.png" 
                  alt="Digital marketing funnel and analytics dashboard with lightning bolt motifs showing sales performance, audience triggers, and funnel optimization"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Formula for Success Section */}
      <section className="pt-6 pb-8 md:pt-8 md:pb-12 relative z-10 bg-gradient-to-br from-[color:var(--brand-primary,#fc5f17)] to-orange-500">
        <div className="container">
          <FadeIn delay={200}>
            <h2 className="text-white text-center mb-6 text-2xl md:text-4xl font-semibold tracking-tight">OUR FORMULA FOR SUCCESS</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {/* Interactive Cards */}
            {steps.map((step, index) => (
              <FadeIn key={step.id} delay={400 + (index * 100)}>
                <div
                  className="group cursor-pointer bg-white rounded-2xl text-center p-4 hover:scale-105 transition-transform duration-200"
                  onClick={() => setSelectedStep(step.id)}
                >
                  <div className="text-2xl font-bold text-[#e55a15] mb-2">{step.id}</div>
                  <h3 className="text-base font-bold text-black mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-xs">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 relative z-10">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left side - Mission content */}
            <FadeIn delay={200}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight leading-tight">
                  Our Mission
                </h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  At Charged-Up Marketing, our mission is to fuel the growth of SaaS companies with innovative, automated marketing solutions that deliver real, measurable results. We harness the power of AI technology and data-driven strategies to help you attract high-quality leads, convert them into loyal customers, and maximize your marketing ROI.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  We believe that your time is best spent building your product, not chasing prospects or juggling campaigns. That's why we create streamlined, scalable systems that work around the clock — so your business runs at full power even when you're off the clock. From startups looking to make their mark to established brands aiming to dominate their market, we provide the tools, strategies, and expertise to get you charged up for success.
                </p>
                <div className="pt-4 flex gap-4">
                  <Link href="/contact" className="px-8 py-2.5 bg-[color:var(--brand-primary,#fc5f17)] hover:bg-[color:var(--brand-primary,#e55a15)] text-black rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transform hover:-translate-y-0.5 border-0">
                    Book a Strategy Call Today!
                  </Link>
                  <Link href="/pricing" className="px-8 py-2.5 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:shadow-white/10 backdrop-blur-sm">
                    See Pricing
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            {/* Right side - Picture box */}
            <FadeIn delay={400}>
              <div className="flex justify-center">
                <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/misson-statement.png" 
                    alt="Charged-Up Marketing Mission Statement"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How ColdDM AI Works Section */}
      <section className="py-16 relative z-10 bg-black">
        <div className="container">
          <div className="text-center mb-12">
            <FadeIn delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                How <span className="text-brand-accent">ColdDM AI</span> ⚡ Works
              </h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                Transform your customer service with AI that never sleeps. Automate responses, 
                capture leads, and provide 24/7 support across all your social media platforms.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <FadeIn delay={300}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-6 text-center hover:border-orange-500/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Connect</h3>
                <p className="text-white/70 text-sm">
                  Link your social media accounts in minutes. Works with Facebook, Instagram, and more.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-6 text-center hover:border-orange-500/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Automate</h3>
                <p className="text-white/70 text-sm">
                  AI responds to customers 24/7, captures leads, and handles common inquiries automatically.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-6 text-center hover:border-orange-500/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Scale</h3>
                <p className="text-white/70 text-sm">
                  Grow your customer service without hiring more staff. Handle unlimited conversations.
                </p>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={600}>
            <div className="text-center">
              <Link 
                href="/pricing#colddm-pricing" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl shadow-orange-500/25"
              >
                View ColdDM Pricing
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Popup Modal for Detailed Step Information */}
      {selectedStep && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStep(null)}
        >
          <div 
            className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedStep(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
            
            {/* Step content */}
            <div className="text-center">
              <div className="text-4xl font-bold text-[#e55a15] mb-4">
                {steps.find(s => s.id === selectedStep)?.id}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {steps.find(s => s.id === selectedStep)?.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {steps.find(s => s.id === selectedStep)?.detailedInfo}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
