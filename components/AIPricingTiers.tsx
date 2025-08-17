export function AIPricingTiers() {
  const aiTiers = [
    {
      name: 'AI Starter',
      subtitle: 'Individual creators & social media managers',
      price: '$10',
      period: '/month',
      normalPrice: 'Normal: $20/month',
      credits: 1000,
      description:
        'Perfect for creating engaging content for Instagram, Twitter, Facebook, and more',
      features: [
        '💬 Chat AI Assistant (500 messages/month)',
        '📱 Social Media Ready Formats',
        '📧 Email Support',
        '📊 Basic Analytics Dashboard',
      ],
      outcomes: [
        'Create viral social media content in minutes',
        'Post daily on Instagram, Twitter, Facebook',
        'Generate engaging content for all platforms',
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600',
      badge: null,
    },
    {
      name: 'AI Professional',
      subtitle: 'Growing brands & content creators',
      price: '$50',
      period: '/month',
      normalPrice: 'Normal: $100/month',
      credits: 5500,
      description:
        'Advanced AI tools for teams creating content across all major social platforms',
      features: [
        '💬 Chat AI Assistant (2000 messages/month)',
        '📱 Multi-Platform Social Media Formats',
        '🚀 Priority Support',
        '📊 Advanced Analytics & Performance Tracking',
        '👥 Team Collaboration Tools',
        '🔌 API Access for Automation',
        '📈 Content Performance Insights',
      ],
      outcomes: [
        'Scale content production 10x faster',
        'Dominate Instagram, YouTube, TikTok feeds',
        'Create platform-specific content automatically',
      ],
      popular: true,
      color: 'from-purple-500 to-purple-600',
      badge: '⭐ MOST POPULAR',
    },
    {
      name: 'AI Enterprise',
      subtitle: 'Large brands & marketing agencies',
      price: 'Pricing on Request',
      period: '',
      normalPrice: '',
      credits: 25000,
      description:
        'Enterprise-grade AI solutions for agencies managing multiple brand accounts',
      features: [
        '💬 Unlimited Chat AI Assistant',
        '📱 All Social Media Platform Formats',
        '🏷️ White-label Solutions',
        '👨‍💼 Dedicated Account Manager',
        '🆘 24/7 Priority Support',
        '🔒 Advanced Security & Compliance',
        '🔗 Custom Platform Integrations',
        '📚 Training & Onboarding',
        '✅ Performance Guarantees',
      ],
      outcomes: [
        'Manage 100+ social media accounts',
        'Achieve 95% content automation',
        'Scale operations without additional staff',
      ],
      popular: false,
      color: 'from-indigo-500 to-indigo-600',
      badge: '🚀 ENTERPRISE',
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {aiTiers.map((tier, index) => (
        <div
          key={tier.name}
          className={`relative ${tier.popular ? 'scale-105' : ''}`}
          style={{ zIndex: tier.popular ? 1 : 'auto' }}
        >
          {/* Badge */}
          {tier.badge && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div
                className={`bg-gradient-to-r ${tier.color} text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg`}
              >
                {tier.badge}
              </div>
            </div>
          )}

          {/* Package Card */}
          <div
            className={`enhanced-card p-8 h-full flex flex-col ${tier.popular ? 'ring-2 ring-purple-500' : ''}`}
          >
            {/* Header */}
            <div className="text-center mb-6">
              <h3 className="h3 mb-2">{tier.name}</h3>
              <p className="text-white/60 text-sm mb-4">{tier.subtitle}</p>
              <p className="text-white/80 text-sm mb-6">{tier.description}</p>

              {/* Pricing */}
              <div className="mb-4">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-white">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-white/80">{tier.period}</span>
                  )}
                </div>
                {tier.normalPrice && (
                  <p className="text-blue-400 text-sm font-medium mt-2">
                    {tier.normalPrice}
                  </p>
                )}

                {/* Credits Display */}
                <div className="mt-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-blue-400">
                      {tier.credits.toLocaleString()}
                    </span>
                    <span className="text-white/80 text-sm ml-2">Credits</span>
                    <p className="text-white/60 text-xs mt-1">
                      1 Credit = $0.01
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex-1 mb-6">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                What&apos;s Included:
              </h4>
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-white/80"
                  >
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
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-white/80"
                  >
                    <span className="text-purple-400 mt-1">→</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
              <a
                href={
                  tier.name === 'AI Enterprise'
                    ? '/enterprise-inquiry'
                    : '/contact'
                }
                className={`w-full btn-primary py-3 rounded-xl font-semibold text-center block transition-all hover:scale-105 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700'
                    : ''
                }`}
              >
                {tier.name === 'AI Enterprise'
                  ? 'Request Enterprise Quote'
                  : 'Get Started'}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
