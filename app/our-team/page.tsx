import Link from 'next/link';
import Image from 'next/image';

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-black">
        <div className="container py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="h1 mb-6">
              Meet Our{' '}
              <span className="text-[color:var(--brand-primary,#fc5f17)]">
                Team
              </span>
            </h1>
            <p className="p text-xl text-white/70 max-w-2xl mx-auto">
              The passionate professionals behind Charged-Up Marketing.
              We&apos;re dedicated to helping SaaS companies achieve remarkable
              growth through innovative marketing strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Team Member 1 - Dominic Engrassia */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
                <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="text-white/60 text-sm">
                      Photo Coming Soon
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
              Dominic Engrassia
            </h3>
            <p className="text-orange-400 font-semibold mb-4">
              Co-CEO / Co-Founder
            </p>
            <p className="text-white/70 text-lg leading-relaxed max-w-sm mx-auto">
              Dominic brings strategic vision and entrepreneurial expertise to
              Charged-Up Marketing. With a passion for innovation and growth, he
              leads our mission to transform how SaaS companies approach
              marketing.
            </p>
          </div>

          {/* Team Member 2 - Ty Jones */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="text-white/60 text-sm">
                      Photo Coming Soon
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
              Ty Jones
            </h3>
            <p className="text-orange-400 font-semibold mb-4">
              Co-CEO / Co-Founder
            </p>
            <p className="text-white/70 text-lg leading-relaxed max-w-sm mx-auto">
              Ty drives operational excellence and client success at Charged-Up
              Marketing. His expertise in scaling businesses and building
              high-performing teams ensures our clients receive world-class
              service and results.
            </p>
          </div>

          {/* Team Member 3 - Ellouise Moore */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="text-white/60 text-sm">
                      Photo Coming Soon
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
              Ellouise Moore
            </h3>
            <p className="text-orange-400 font-semibold mb-4">
              Head Of Accounting
            </p>
            <p className="text-white/70 text-lg leading-relaxed max-w-sm mx-auto">
              Ellouise ensures financial excellence and operational efficiency
              at Charged-Up Marketing. Her meticulous attention to detail and
              financial expertise keeps our business running smoothly while we
              focus on client success.
            </p>
          </div>
        </div>
      </div>

      {/* Company Values Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="h2 mb-6">
              Our{' '}
              <span className="text-[color:var(--brand-primary,#fc5f17)]">
                Values
              </span>
            </h2>
            <p className="p text-lg text-white/70">
              The principles that guide everything we do at Charged-Up Marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Excellence
              </h3>
              <p className="text-white/70">
                We strive for excellence in every campaign, strategy, and client
                interaction.
              </p>
            </div>

            {/* Value 2 */}
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
                Innovation
              </h3>
              <p className="text-white/70">
                We embrace cutting-edge technology and creative solutions to
                drive results.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Partnership
              </h3>
              <p className="text-white/70">
                We build lasting partnerships with our clients, working together
                for mutual success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="h2 mb-6">
              Ready to Work with Our{' '}
              <span className="text-[color:var(--brand-primary,#fc5f17)]">
                Team
              </span>
              ?
            </h2>
            <p className="p text-lg text-white/70 mb-8">
              Let&apos;s discuss how our team can help transform your SaaS
              company&apos;s marketing and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="header-btn-primary">
                Book a Strategy Call
              </Link>
              <Link href="/case-studies" className="header-btn-secondary">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
