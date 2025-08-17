export function PricingTiers() {
  const tiers = [
    {
      name: 'Starter Package',
      subtitle: 'Early-stage SaaS startups',
      price: '$225',
      period: '/month for 3 months',
      normalPrice: 'Normal: $350-$750/month',
      description:
        'Perfect for solo founders and small teams ready to accelerate growth',
      features: [
        'Basic email marketing automation (3-part drip sequence)',
        'Basic personalization and lead tracking',
        'Social media audit & starter content strategy',
        '1-month content calendar',
        'Single landing page creation optimized for conversions',
        'Basic CRM setup with lead tagging and pipeline',
      ],
      outcomes: [
        'Generate leads faster with automation',
        'Improve brand visibility and engagement',
        'Save time with streamlined workflows',
      ],
      popular: false,
      color: 'from-[#fc5f17] to-[#e55a15]',
    },
    {
      name: 'Growth Package',
      subtitle: 'Mid-sized SaaS companies',
      price: '$750',
      period: '/month for 4 months',
      normalPrice: 'Normal: $850-$1400/month',
      description:
        'Ideal for companies looking to scale their marketing operations',
      features: [
        'Advanced email marketing with segmentation',
        'Advanced personalization capabilities',
        'Comprehensive social media strategy',
        'Monthly content calendar',
        'Paid ad management on 1-2 platforms',
        'LinkedIn, Facebook, or Google Ads',
        'Basic website conversion rate optimization (CRO)',
        'A/B testing implementation',
      ],
      outcomes: [
        'Scale lead acquisition campaigns',
        'Increase ROI from paid channels',
        'Enhance audience engagement and conversions',
      ],
      popular: true,
      color: 'from-[#fcb80a] to-[#f0b000]',
    },
    {
      name: 'Premium Package',
      subtitle: 'Established SaaS companies',
      price: '$1500',
      period: '/month for 6 months',
      normalPrice: 'Normal: $1750-$3000/month',
      description:
        'Full-service marketing for companies ready to dominate their market',
      features: [
        'Full AI automation & marketing workflow optimization',
        'Multi-platform paid social media management',
        'Ongoing optimization and performance tracking',
        'User-generated content (UGC) campaign creation',
        'UGC management and content curation',
        'Comprehensive CRO across entire website',
        'Regular performance reviews and strategic adjustments',
        'Priority support and dedicated account manager',
      ],
      outcomes: [
        'Maximize customer acquisition and retention',
        'Maintain consistent brand presence across all channels',
        'Drive measurable, long-term growth',
      ],
      popular: false,
      color: 'from-[#fc5f17] to-[#e55a15]',
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {tiers.map((tier, index) => (
        <div
          key={tier.name}
          className={`relative ${tier.popular ? 'scale-105' : ''}`}
          style={{ zIndex: tier.popular ? 1 : 'auto' }}
        >
          {/* Popular Badge */}
          {tier.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-[#fcb80a] to-[#f0b000] text-black px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                ⭐ MOST POPULAR
              </div>
            </div>
          )}

          {/* Package Card */}
          <div
            className={`enhanced-card p-8 h-full flex flex-col ${tier.popular ? 'ring-2 ring-[#fcb80a]' : ''}`}
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
                  <span className="text-white/80">{tier.period}</span>
                </div>
                <p className="text-[#fc5f17] text-sm font-medium mt-2">
                  {tier.normalPrice}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="flex-1 mb-6">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#fc5f17] rounded-full"></span>
                What&apos;s Included:
              </h4>
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-white/80"
                  >
                    <span className="text-[#fc5f17] mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#fcb80a] rounded-full"></span>
                Expected Outcomes:
              </h4>
              <ul className="space-y-2">
                {tier.outcomes.map((outcome, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-white/80"
                  >
                    <span className="text-[#fcb80a] mt-1">→</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
              <a
                href="/contact"
                className={`w-full btn-primary py-3 rounded-xl font-semibold text-center block transition-all hover:scale-105 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-[#fcb80a] to-[#f0b000] text-black hover:from-[#f0b000] hover:to-[#e5a500]'
                    : ''
                }`}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
