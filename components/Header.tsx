'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check if we're on the dashboard page
  const isDashboard = pathname?.startsWith('/dashboard');

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-orange-500 text-white text-center py-2 px-4 text-sm">
        <span className="font-bold">ChargedUp!</span> Your SUPERCHARGED SaaS
        Marketing Solution ⚡
      </div>

      <header
        className={`sticky top-0 z-50 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 shadow-xl border-white/20'
            : 'bg-black/90 shadow-lg'
        } ${isDashboard ? 'lg:left-80 lg:right-0 lg:absolute' : ''}`}
      >
        <div className="container flex items-center justify-between h-16 px-4">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="ChargedUp"
                width={145}
                height={58}
                className="h-16 w-auto"
                priority
              />
            </Link>

            {/* Navigation Links - Next to logo */}
            <nav
              className="hidden md:flex items-center gap-4 text-sm"
              role="navigation"
              aria-label="Main navigation"
            >
              {/* About Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    if (!document.querySelector('.about-dropdown:hover')) {
                      setAboutOpen(false);
                    }
                  }, 100);
                }}
              >
                <button
                  className="nav-link-hover flex items-center gap-1"
                  aria-expanded={aboutOpen}
                  aria-haspopup="true"
                  aria-label="About Us menu"
                >
                  About Us
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </button>

                {/* Dropdown Menu */}
                {aboutOpen && (
                  <div
                    className="about-dropdown absolute top-full left-0 mt-3 w-64 bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-xl py-4"
                    onMouseEnter={() => setAboutOpen(true)}
                    onMouseLeave={() => setAboutOpen(false)}
                    role="menu"
                    aria-label="About Us submenu"
                  >
                    <Link
                      href="/case-studies"
                      className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-300 mx-3 rounded-xl"
                      role="menuitem"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Case Studies
                        </div>
                        <div className="text-sm text-gray-500">
                          See our success stories
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/our-team"
                      className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-300 mx-3 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Our Team
                        </div>
                        <div className="text-sm text-gray-500">
                          Meet the experts
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/our-socials"
                      className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-300 mx-3 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Our Socials
                        </div>
                        <div className="text-sm text-gray-500">
                          Connect with us
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/our-ai"
                      className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-300 mx-3 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Our AI
                        </div>
                        <div className="text-sm text-gray-500">
                          Discover our AI capabilities
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    if (!document.querySelector('.services-dropdown:hover')) {
                      setServicesOpen(false);
                    }
                  }, 100);
                }}
              >
                <button className="nav-link-hover flex items-center gap-1">
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                {servicesOpen && (
                  <div
                    className="services-dropdown absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-xl py-4"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href="/our-chatbot"
                      className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-300 mx-3 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">💬</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          ColdDM Services
                        </div>
                        <div className="text-sm text-gray-500">
                          AI-powered social media chatbots
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/services/ai-automation"
                      className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-300 mx-3 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          AI Automation
                        </div>
                        <div className="text-sm text-gray-500">
                          Streamline your marketing
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/services/email-marketing"
                      className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-300 mx-3 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Email Marketing
                        </div>
                        <div className="text-sm text-gray-500">
                          Build lasting relationships
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/services/paid-social-media-management"
                      className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-300 mx-3 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5 15a4 4 0 00-4 4v1a1 1 0 001 1h18a1 1 0 001-1v-1a4 4 0 00-4-4H5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Paid Social Media
                        </div>
                        <div className="text-sm text-gray-500">
                          Targeted advertising campaigns
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/services/social-media-audit"
                      className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-300 mx-3 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Social Media Audit
                        </div>
                        <div className="text-sm text-gray-500">
                          Optimize your strategy
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/services/ugc"
                      className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-300 mx-3 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
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
                      <div>
                        <div className="font-semibold text-gray-900">
                          UGC Creation
                        </div>
                        <div className="text-sm text-gray-500">
                          Authentic content from users
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/services/web-design"
                      className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-300 mx-3 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.400l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Web Design Strategy
                        </div>
                        <div className="text-sm text-gray-500">
                          Convert visitors into customers
                        </div>
                      </div>
                    </Link>
                    <div className="border-t border-gray-200 my-2 mx-3"></div>
                    <Link
                      href="/enterprise-inquiry"
                      className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 transition-all duration-300 mx-3 rounded-xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-orange-100"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🏢</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Enterprise Solutions
                        </div>
                        <div className="text-sm text-orange-600">
                          AI Enterprise Inquiry Form
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/faq" className="nav-link-hover">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Action Buttons - Right */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="header-btn-primary">
              Book a Strategy Call
            </Link>
            <Link href="/pricing" className="header-btn-secondary">
              See Pricing
            </Link>
            <Link href="/auth/login" className="header-btn-secondary">
              Login
            </Link>
            <button
              onClick={() => {
                // Trigger newsletter popup manually
                window.dispatchEvent(new CustomEvent('open-newsletter-popup'));
              }}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="Subscribe to Newsletter"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur"
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <div className="container py-4 px-4 space-y-4">
              <nav className="space-y-3">
                <div className="space-y-2">
                  <div className="text-white/80 font-medium">About Us</div>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/case-studies"
                      onClick={() => setOpen(false)}
                      className="block text-white/60 hover:text-white"
                    >
                      Case Studies
                    </Link>
                    <Link
                      href="/our-team"
                      onClick={() => setOpen(false)}
                      className="block text-white/60 hover:text-white"
                    >
                      Our Team
                    </Link>
                    <Link
                      href="/our-socials"
                      onClick={() => setOpen(false)}
                      className="block text-white/60 hover:text-white"
                    >
                      Our Socials
                    </Link>
                    <Link
                      href="/our-ai"
                      onClick={() => setOpen(false)}
                      className="block text-white/60 hover:text-white"
                    >
                      Our AI
                    </Link>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-white/80 font-medium">Services</div>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/marketing"
                      onClick={() => setOpen(false)}
                      className="block text-white/60 hover:text-white"
                    >
                      Marketing Strategy
                    </Link>
                    <Link
                      href="/campaigns"
                      onClick={() => setOpen(false)}
                      className="block text-white/60 hover:text-white"
                    >
                      Campaign Management
                    </Link>
                    <Link
                      href="/analytics"
                      onClick={() => setOpen(false)}
                      className="block text-white/60 hover:text-white"
                    >
                      Analytics & Reporting
                    </Link>
                    <Link
                      href="/consulting"
                      onClick={() => setOpen(false)}
                      className="block text-white/60 hover:text-white"
                    >
                      Consulting
                    </Link>
                    <Link
                      href="/enterprise-inquiry"
                      onClick={() => setOpen(false)}
                      className="block text-orange-400 hover:text-orange-300 font-medium"
                    >
                      🏢 Enterprise Solutions
                    </Link>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-white/80 font-medium">Our ChatBot</div>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/ai-services"
                      onClick={() => setOpen(false)}
                      className="block text-white/60 hover:text-white"
                    >
                      AI Chatbot Pricing
                    </Link>
                    <Link
                      href="/dashboard/ai-chat"
                      onClick={() => setOpen(false)}
                      className="block text-white/60 hover:text-white"
                    >
                      Try Chat AI
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className="block text-white/60 hover:text-white"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
                <Link
                  href="/faq"
                  className="block py-2 text-white hover:text-orange-400 transition-colors"
                >
                  FAQ
                </Link>
              </nav>
              <div className="space-y-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    window.dispatchEvent(
                      new CustomEvent('open-newsletter-popup')
                    );
                    setOpen(false);
                  }}
                  className="block w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg text-center transition-colors font-medium"
                >
                  📧 Subscribe to Newsletter
                </button>
                <Link
                  href="/auth/login"
                  className="block w-full px-4 py-2 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-lg text-center transition-colors font-medium"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/contact"
                  className="block w-full px-4 py-2 bg-[color:var(--brand-primary,#fc5f17)] hover:bg-[color:var(--brand-primary,#e55a15)] text-black rounded-lg text-center transition-colors font-medium"
                  onClick={() => setOpen(false)}
                >
                  Book a Strategy Call
                </Link>
                <Link
                  href="/pricing"
                  className="block w-full px-4 py-2 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-lg text-center transition-colors font-medium"
                  onClick={() => setOpen(false)}
                >
                  See Pricing
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
