'use client';

import Link from 'next/link';
import { useState } from 'react';
import FadeIn from '@/components/FadeIn';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: 'What services do you offer?',
      answer:
        'We offer comprehensive digital marketing services including AI automation & optimization, social media audit & strategy, email marketing, user-generated content (UGC), paid social media management, and web design & development. Each service is tailored to meet your specific business needs and goals.',
    },
    {
      question: 'How long does it take to see results?',
      answer:
        'Results vary depending on the service and your industry, but most clients see initial improvements within 30-60 days. For ongoing services like social media management and email marketing, we typically see consistent growth month-over-month. We provide regular reporting so you can track progress and ROI.',
    },
    {
      question: 'What is your pricing structure?',
      answer:
        'Our pricing is transparent and based on the scope of work, complexity of your project, and ongoing support needs. We offer both project-based pricing for one-time services and monthly retainers for ongoing management. Contact us for a custom quote tailored to your specific requirements.',
    },
    {
      question: 'Do you work with small businesses?',
      answer:
        'Absolutely! We work with businesses of all sizes, from startups to enterprise companies. We understand that small businesses have unique needs and budget constraints, so we offer scalable solutions that can grow with your business. Our flexible approach ensures you get the services you need at a price that works for you.',
    },
    {
      question: 'How do you measure success?',
      answer:
        'We use data-driven metrics and analytics to measure success across all campaigns. This includes tracking KPIs like conversion rates, engagement metrics, ROI, website traffic, lead generation, and revenue growth. We provide detailed monthly reports and are always available to discuss performance and optimization strategies.',
    },
    {
      question: 'What makes you different from other agencies?',
      answer:
        "We combine cutting-edge technology with proven marketing strategies to deliver exceptional results. Our team stays ahead of industry trends, we use AI-powered tools for optimization, and we maintain transparent communication throughout every project. We're not just a vendor - we're your strategic partner in growth.",
    },
    {
      question: 'Do you provide ongoing support?',
      answer:
        'Yes, we believe in building long-term partnerships with our clients. We offer ongoing support, maintenance, and optimization for all our services. This includes regular check-ins, performance reviews, strategy updates, and continuous improvement based on data and market changes.',
    },
    {
      question: 'Can you work with my existing team?',
      answer:
        "Absolutely! We're experienced in collaborating with in-house teams and can work alongside your existing staff. We can provide training, share best practices, and integrate our services seamlessly with your current operations. Our goal is to enhance your team's capabilities, not replace them.",
    },
    {
      question: 'What industries do you specialize in?',
      answer:
        'We have experience across various industries including e-commerce, B2B services, healthcare, real estate, technology, and professional services. Our diverse experience allows us to bring best practices from different sectors and adapt strategies that work for your specific industry and target audience.',
    },
    {
      question: 'How do I get started?',
      answer:
        "Getting started is easy! Simply contact us through our contact form or book a strategy call. We'll schedule a consultation to discuss your goals, challenges, and how we can help. From there, we'll create a customized proposal and timeline to get your project moving forward.",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-black">
        <div className="container py-20">
          <FadeIn delay={200}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="h1 mb-6">
                Frequently Asked{' '}
                <span className="text-[color:var(--brand-primary,#fc5f17)]">
                  Questions
                </span>
              </h1>
              <p className="p text-xl text-white/70 max-w-2xl mx-auto">
                Find answers to common questions about our services, processes,
                and how we can help your business grow. Can&apos;t find what
                you&apos;re looking for? Contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="/contact" className="header-btn-primary">
                  Contact Us
                </Link>
                <Link href="/pricing" className="header-btn-secondary">
                  View Pricing
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <FadeIn key={index} delay={400 + index * 50}>
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/20 transition-all duration-300"
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <svg
                          className={`w-6 h-6 text-white transition-transform duration-300 ${
                            openItems.includes(index) ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>

                    {openItems.includes(index) && (
                      <div className="px-8 pb-6">
                        <div className="border-t border-white/10 pt-4">
                          <p className="text-white/70 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-br from-gray-900/50 to-black border-t border-white/10">
        <div className="container py-20">
          <FadeIn delay={200}>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="h2 mb-6">
                Still Have{' '}
                <span className="text-[color:var(--brand-primary,#fc5f17)]">
                  Questions
                </span>
                ?
              </h2>
              <p className="p text-lg text-white/70 mb-8">
                Can&apos;t find the answer you&apos;re looking for? Our team is
                here to help. Contact us directly and we&apos;ll get back to you
                within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="header-btn-primary">
                  Get in Touch
                </Link>
                <Link href="/pricing" className="header-btn-secondary">
                  View Our Services
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
