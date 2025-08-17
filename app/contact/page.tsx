import { StrategyMeetingForm } from '@/components/StrategyMeetingForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="section">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="h1 mb-6">Let's Power Up Your Business... Together.</h1>
            <p className="p text-xl max-w-3xl mx-auto">
              See how we can take your digital marketing to new heights - fast, easy, and no-pressure.
            </p>
          </div>

          {/* What to Expect Section */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="h2 mb-6">What to expect:</h2>
              <div className="space-y-4">
                <p className="p">
                  After submitting the form and selecting a time for our call, one of our strategists will reach out to confirm your meeting within 24 hours
                </p>
                <p className="p">
                  You'll hop on Zoom with our strategists and the real fun begins! We'll chat about:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#fc5f17] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Your challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#fc5f17] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Your goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#fc5f17] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Strategic planning custom to your situation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#fc5f17] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80">Our solutions and transparent pricing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="enhanced-card p-8 hover-lift">
              <h3 className="h2 mb-6">Not ready for a call just yet?</h3>
              <p className="p mb-6">
                That's ok! Feel free to contact us if you have any questions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#fc5f17] rounded-full"></div>
                  <span className="text-white">hello@chargedup.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#fc5f17] rounded-full"></div>
                  <span className="text-white">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="h2 mb-4">Fill out the form to request your free strategy consultation.</h3>
            </div>
            <StrategyMeetingForm />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white/5">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Loved by businesses currently scaling up their digital presence.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="enhanced-card p-8 hover-lift">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-[#fc5f17] rounded-sm"></div>
                ))}
              </div>
              <p className="p mb-4">
                "The ChargedUp team is incredibly professional, responsive, attentive, and results-oriented at all times."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#fc5f17] rounded-full"></div>
                <div>
                  <p className="font-semibold text-white">Sarah Johnson</p>
                  <p className="text-sm text-white/60">CEO, TechStart Solutions</p>
                </div>
              </div>
            </div>

            <div className="enhanced-card p-8 hover-lift">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-[#fc5f17] rounded-sm"></div>
                ))}
              </div>
              <p className="p mb-4">
                "The thing I find most impressive about ChargedUp is their attention to detail and emphasis on data."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#fc5f17] rounded-full"></div>
                <div>
                  <p className="font-semibold text-white">Mike Chen</p>
                  <p className="text-sm text-white/60">Founder, GrowthLab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
