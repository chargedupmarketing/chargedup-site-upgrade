import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

export default function UGCPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-black">
        <div className="container py-20">
          <FadeIn delay={200}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="h1 mb-6">
                User Generated{' '}
                <span className="text-[color:var(--brand-primary,#fc5f17)]">
                  Content
                </span>{' '}
                (UGC)
              </h1>
              <p className="p text-xl text-white/70 max-w-2xl mx-auto">
                Harness the power of authentic customer content to build trust,
                increase engagement, and drive conversions. We help you collect,
                curate, and amplify your customers&apos; voices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="/contact" className="header-btn-primary">
                  Start Your UGC Campaign
                </Link>
                <Link href="/pricing" className="header-btn-secondary">
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
                What We{' '}
                <span className="text-[color:var(--brand-primary,#fc5f17)]">
                  Do
                </span>
              </h2>
              <p className="p text-lg text-white/70">
                Our comprehensive UGC services help you collect authentic
                customer content, strategically curate it, and leverage it
                across all your marketing channels.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <FadeIn delay={400}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Content Collection
                </h3>
                <p className="text-white/70">
                  Strategic campaigns to encourage customers to share reviews,
                  photos, videos, and testimonials about your products and
                  services.
                </p>
              </div>
            </FadeIn>

            {/* Service 2 */}
            <FadeIn delay={500}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Content Curation
                </h3>
                <p className="text-white/70">
                  Expert selection and optimization of the best user-generated
                  content to ensure quality, relevance, and alignment with your
                  brand message.
                </p>
              </div>
            </FadeIn>

            {/* Service 3 */}
            <FadeIn delay={600}>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Strategic Amplification
                </h3>
                <p className="text-white/70">
                  Multi-channel distribution of curated UGC across social media,
                  websites, email campaigns, and advertising to maximize reach
                  and impact.
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
                Our{' '}
                <span className="text-[color:var(--brand-primary,#fc5f17)]">
                  Process
                </span>
              </h2>
              <p className="p text-lg text-white/70">
                A systematic approach to collecting, curating, and leveraging
                user-generated content that builds authentic connections with
                your audience.
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
                <h3 className="text-lg font-semibold text-white mb-3">
                  Strategy & Planning
                </h3>
                <p className="text-white/70 text-sm">
                  We develop a comprehensive UGC strategy, identify content
                  goals, and create campaigns to encourage customer
                  participation.
                </p>
              </div>
            </FadeIn>

            {/* Step 2 */}
            <FadeIn delay={500}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Content Collection
                </h3>
                <p className="text-white/70 text-sm">
                  Launch targeted campaigns across multiple channels to collect
                  authentic customer content, reviews, and testimonials.
                </p>
              </div>
            </FadeIn>

            {/* Step 3 */}
            <FadeIn delay={600}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Curation & Optimization
                </h3>
                <p className="text-white/70 text-sm">
                  Expert selection of the best content, ensuring quality,
                  relevance, and alignment with your brand messaging and goals.
                </p>
              </div>
            </FadeIn>

            {/* Step 4 */}
            <FadeIn delay={700}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Distribution & Amplification
                </h3>
                <p className="text-white/70 text-sm">
                  Strategic deployment of curated UGC across all marketing
                  channels to maximize reach, engagement, and conversion impact.
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
                Key{' '}
                <span className="text-[color:var(--brand-primary,#fc5f17)]">
                  Benefits
                </span>
              </h2>
              <p className="p text-lg text-white/70">
                Discover how user-generated content transforms your marketing
                and builds authentic customer relationships.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <FadeIn delay={400}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Authentic Trust
                    </h3>
                    <p className="text-white/70">
                      Customer-generated content builds genuine trust and
                      credibility, as prospects see real people sharing
                      authentic experiences with your brand.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Higher Engagement
                  </h3>
                  <p className="text-white/70">
                    UGC typically generates 6.9x higher engagement than
                    brand-generated content, as customers are more likely to
                    interact with content from their peers.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Cost-Effective Content
                  </h3>
                  <p className="text-white/70">
                    Reduce content creation costs while maintaining high
                    quality, as your customers provide authentic, diverse
                    content that resonates with your audience.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Increased Conversions
                  </h3>
                  <p className="text-white/70">
                    UGC can increase conversion rates by up to 161%, as social
                    proof from real customers significantly influences
                    purchasing decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UGC Types Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="h2 mb-6">
              UGC{' '}
              <span className="text-[color:var(--brand-primary,#fc5f17)]">
                Types
              </span>{' '}
              We Collect
            </h2>
            <p className="p text-lg text-white/70">
              Comprehensive user-generated content solutions covering various
              formats and platforms to maximize your brand&apos;s authentic
              reach and engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* UGC Type 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Photos</div>
              </div>
              <h3 className="text-sm font-medium text-white">
                Customer Photos
              </h3>
            </div>

            {/* UGC Type 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Videos</div>
              </div>
              <h3 className="text-sm font-medium text-white">User Videos</h3>
            </div>

            {/* UGC Type 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Reviews</div>
              </div>
              <h3 className="text-sm font-medium text-white">
                Customer Reviews
              </h3>
            </div>

            {/* UGC Type 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">
                  Testimonials
                </div>
              </div>
              <h3 className="text-sm font-medium text-white">Testimonials</h3>
            </div>

            {/* UGC Type 5 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Social</div>
              </div>
              <h3 className="text-sm font-medium text-white">
                Social Media Posts
              </h3>
            </div>

            {/* UGC Type 6 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-orange-500/30 transition-all duration-300">
                <div className="text-white/60 text-sm font-medium">Blogs</div>
              </div>
              <h3 className="text-sm font-medium text-white">
                Customer Blog Posts
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="h2 mb-6">
              Ready to{' '}
              <span className="text-[color:var(--brand-primary,#fc5f17)]">
                Amplify
              </span>{' '}
              Your Brand?
            </h2>
            <p className="p text-lg text-white/70 mb-8">
              Let&apos;s collect authentic customer content that builds trust,
              drives engagement, and converts prospects into loyal customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="header-btn-primary">
                Start Your UGC Campaign
              </Link>
              <Link href="/pricing" className="header-btn-secondary">
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
