export function AIPlatformPricingTiers() {
  const tiers = [
    {
      name: 'Free',
      subtitle: 'Perfect for trying out our AI platform',
      price: '$0',
      period: '/month',
      description: 'Access core AI features and explore the platform risk‑free',
      features: [
        '25 AI queries/month',
        'Basic marketing insights',
        'Content generation assistance',
        'Community support',
        'Standard API access'
      ],
      ctaLabel: 'Get Started Free',
      ctaHref: '/contact',
      popular: false,
      color: 'from-gray-500 to-gray-600',
    },
    {
      name: 'Enhanced',
      subtitle: 'Great for small businesses',
      price: '$49',
      period: '/month',
      description: 'Enhanced analytics and content generation capabilities',
      features: [
        '250 AI queries/month',
        'Enhanced marketing insights',
        'Advanced content generation',
        'Email support',
        'Priority API access'
      ],
      ctaLabel: 'Get Started',
      ctaHref: '/contact',
      popular: false,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Professional',
      subtitle: 'Ideal for growing businesses',
      price: '$199',
      period: '/month',
      description: 'Advanced analytics, priority support, and white‑label options',
      features: [
        '1,000 AI queries/month',
        'Advanced analytics & insights',
        'Priority support',
        'Custom integrations',
        'White-label options',
        'Advanced content generation'
      ],
      ctaLabel: 'Get Started',
      ctaHref: '/contact',
      popular: true,
      color: 'from-orange-500 to-orange-600',
    },
    {
      name: 'Enterprise',
      subtitle: 'Tailored for large organizations',
      price: 'Pricing on Request',
      period: '',
      description: 'Custom deployment, integrations, and SLA guarantees',
      features: [
        'Unlimited AI queries',
        'Custom AI training',
        'Dedicated support',
        'On‑premise deployment',
        'Custom integrations',
        'SLA guarantees'
      ],
      ctaLabel: 'Request Enterprise Quote',
      ctaHref: '/enterprise-inquiry',
      popular: false,
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {tiers.map((tier) => (
        <div key={tier.name} className={`relative ${tier.popular ? 'scale-105' : ''}`} style={{ zIndex: tier.popular ? 1 : 'auto' }}>
          {tier.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className={`bg-gradient-to-r ${tier.color} text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg`}>
                Most Popular
              </div>
            </div>
          )}
          <div className={`enhanced-card p-8 h-full flex flex-col ${tier.popular ? 'ring-2 ring-orange-400' : ''}`}>
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-4">{tier.name}</h3>
              <div className="mb-4">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl md:text-4xl font-bold text-white">{tier.price}</span>
                  {tier.period && <span className="text-white/80">{tier.period}</span>}
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">{tier.subtitle}</p>
            </div>
            <div className="flex-1 mb-6">
              <ul className="space-y-3 text-left">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${tier.color}`}></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <a
                href={tier.ctaHref}
                className={`w-full btn-primary py-3 rounded-xl font-semibold text-center block transition-all hover:scale-105 ${
                  tier.popular ? 'bg-black text-white hover:bg-gray-800' : ''
                }`}
              >
                {tier.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}


