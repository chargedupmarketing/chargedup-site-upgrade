import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | ChargedUp Marketing',
  description:
    "Oops! The page you're looking for seems to have gone missing. Let's get you back on track to powering up your business.",
  robots: 'noindex, nofollow',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="container max-w-2xl text-center">
        {/* Lightning Bolt Icon */}
        <div className="mb-8">
          <svg
            className="w-24 h-24 text-[#fc5f17] mx-auto"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7 2v11h3v9l7-12h-4l4-8z" />
          </svg>
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-bold text-[#fc5f17] mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="h2 mb-6">
          Oops! This page got{' '}
          <span className="text-[#fcb80a]">disconnected</span>
        </h2>

        <p className="p text-lg mb-8 max-w-lg mx-auto">
          Don&apos;t worry, it happens to the best of us! The page you&apos;re
          looking for seems to have taken a detour. Let&apos;s get you back on
          track to powering up your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            ⚡ Back to Home
          </Link>

          <Link href="/contact" className="btn-outline">
            Get Help
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
          <h3 className="h3 mb-4">Need to find something specific?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <Link
              href="/services"
              className="text-[#fcb80a] hover:text-[#fc5f17] transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/pricing"
              className="text-[#fcb80a] hover:text-[#fc5f17] transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/case-studies"
              className="text-[#fcb80a] hover:text-[#fc5f17] transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/our-team"
              className="text-[#fcb80a] hover:text-[#fc5f17] transition-colors"
            >
              Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
