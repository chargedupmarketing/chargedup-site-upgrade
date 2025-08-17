export function ChatbotPricingTiers() {
  const chatbotTiers = [
    {
      name: 'Starter',
      subtitle: '14-day free trial, then $19.99 first month',
      firstMonthPrice: 'Free',
      regularPrice: '$19.99',
      description: 'Try our chatbot for 14 days, then automatically get charged $19.99 for your first month',
      features: [
        'Up to 1,000 messages/month',
        'Connect 1 social media account (FB Messenger or IG DMs)',
        'Basic AI responses (FAQs & templates)',
        'Simple analytics dashboard',
        'Standard email support',
        'First month bonus: +500 extra messages & free AI setup',
        'Up to 250 messages/month (trial period)',
        'Limited AI responses (basic templates only)',
        'Simple dashboard',
        'Email support only'
      ],
      outcomes: [
        'Automate basic customer inquiries',
        'Reduce response time to customer messages',
        'Focus on growing your business',
        'Test chatbot functionality risk-free'
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Professional',
      subtitle: 'Advanced features for growing businesses',
      firstMonthPrice: '$99',
      regularPrice: '$199/month',
      description: 'Professional chatbot solution with advanced features and automation',
      features: [
        'Up to 10,000 messages/month',
        'Connect up to 3 social media accounts (FB, IG, +1 via Zapier)',
        'AI chatbot with keyword triggers & customizable templates',
        'Automated lead capture & CRM integration',
        'Advanced analytics (top questions, engagement tracking)',
        'Scheduled campaigns & autoresponders',
        'Priority email + chat support',
        'Bonus first month: +2,000 extra messages & free AI setup/training',
        'Multi-language support',
        'Advanced CRM & third-party integrations'
      ],
      outcomes: [
        'Scale customer service operations',
        'Capture and nurture leads automatically',
        'Provide 24/7 customer support',
        'Integrate with your existing business tools'
      ],
      popular: true,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Enterprise',
      subtitle: 'Full-featured platform for large organizations',
      firstMonthPrice: '$299',
      regularPrice: '$499/month',
      description: 'Enterprise-grade chatbot platform with unlimited capabilities',
      features: [
        'Unlimited messages/month',
        'Connect unlimited social media accounts (native + Zapier/Make)',
        'Fully customizable AI responses with brand voice',
        'Multi-language support',
        'Advanced CRM & third-party integrations (Shopify, Salesforce, etc.)',
        'Comprehensive analytics & reporting dashboards',
        'Dedicated account manager',
        '24/7 priority support',
        'Bonus first month: +5,000 extra messages & free AI setup/training',
        'Multi-client management (perfect for agencies)',
        'Custom AI responses & workflows per client',
        'White-label reporting & dashboards',
        'Dedicated AI strategist & account manager',
        'Advanced analytics & automation consulting'
      ],
      outcomes: [
        'Handle unlimited customer interactions',
        'Integrate with your existing business tools',
        'Maintain consistent brand voice across all channels',
        'Manage multiple client accounts efficiently',
        'Offer chatbot services as part of your agency package'
      ],
      popular: false,
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {chatbotTiers.map((tier, index) => (
        <div 
          key={tier.name} 
          className={`relative ${tier.popular ? 'scale-105' : ''}`}
          style={{ zIndex: tier.popular ? 1 : 'auto' }}
        >
          {/* Popular Badge */}
          {tier.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                ⭐ MOST POPULAR
              </div>
            </div>
          )}

          {/* Package Card */}
          <div className={`enhanced-card p-8 h-full flex flex-col ${tier.popular ? 'ring-2 ring-purple-500' : ''}`}>
            {/* Header */}
            <div className="text-center mb-6">
              <h3 className="h3 mb-2">{tier.name}</h3>
              <p className="text-white/60 text-sm mb-4">{tier.subtitle}</p>
              <p className="text-white/80 text-sm mb-6">{tier.description}</p>
              
              {/* Pricing */}
              <div className="mb-4">
                {tier.name === 'Enterprise' ? (
                  <div className="text-center">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-white">Pricing on Request</span>
                    </div>
                    <div className="text-center">
                      <span className="text-white/60 text-sm">Contact us for a tailored quote</span>
                    </div>
                  </div>
                ) : tier.name === 'Starter' ? (
                  <div className="text-center">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-white">{tier.firstMonthPrice}</span>
                      <span className="text-white/80 text-lg">for 14 days</span>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-white">{tier.regularPrice}</span>
                      <span className="text-white/60 text-sm"> first month after trial</span>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-xl font-bold text-white">$39/month</span>
                      <span className="text-white/60 text-sm"> after first month</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-white">{tier.firstMonthPrice}</span>
                      <span className="text-white/80 text-lg">
                        {tier.name === 'Professional' ? 'first month' : 'first 2 months'}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-2xl font-bold text-white">{tier.regularPrice}</span>
                      <span className="text-white/60 text-sm">
                        {tier.name === 'Professional' ? 'after first month' : 'after first 2 months'}
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Bonus for paid plans (exclude Enterprise) */}
                {tier.name === 'Professional' && (
                  <div className="mt-3 p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/30">
                    <p className="text-yellow-400 text-sm font-medium">
                      🎁 <strong>First Month Bonus:</strong> 
                      +2,000 extra messages & free AI setup/training
                    </p>
                  </div>
                )}

                {/* Special note for Starter */}
                {tier.name === 'Starter' && (
                  <div className="mt-3 p-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg border border-blue-500/30">
                    <p className="text-blue-400 text-sm font-medium">
                      🎁 <strong>First Month Bonus:</strong> +500 extra messages & free AI setup
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="flex-1 mb-6">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                What's Included:
              </h4>
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="text-blue-400 mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Expected Outcomes:
              </h4>
              <ul className="space-y-2">
                {tier.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="text-purple-400 mt-1">→</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
              <a 
                href={tier.name === 'Enterprise' ? '/enterprise-inquiry' : '/contact'} 
                className={`w-full btn-primary py-3 rounded-xl font-semibold text-center block transition-all hover:scale-105 ${
                  tier.popular ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700' : ''
                }`}
              >
                {tier.name === 'Starter' ? 'Start Free Trial' : tier.name === 'Enterprise' ? 'Request Enterprise Quote' : 'Get Started'}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
