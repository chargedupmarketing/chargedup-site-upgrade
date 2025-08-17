export function Footer(){
  return (
    <footer className="border-t border-white/10">
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 w-full" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem'}}>
          {/* Company Section */}
          <div className="min-w-0 flex-shrink-0" style={{minWidth: '200px'}}>
            <div className="font-bold text-white text-lg mb-4">ChargedUp</div>
            <div className="text-white/60 text-sm space-y-2">
              <div>AI‑assisted campaigns, human strategy.</div>
              <div>Your SUPERCHARGED SaaS Marketing Solution.</div>
            </div>
          </div>

          {/* Services Section */}
          <div className="min-w-0 flex-shrink-0" style={{minWidth: '200px'}}>
            <div className="font-semibold text-white mb-4">Services</div>
            <div className="text-white/60 text-sm space-y-2">
              <a href="/services/ai-automation" className="hover:text-white transition-colors block">AI Automation</a>
              <a href="/services/email-marketing" className="hover:text-white transition-colors block">Email Marketing</a>
              <a href="/services/paid-social-media-management" className="hover:text-white transition-colors block">Paid Social Media</a>
              <a href="/services/social-media-audit" className="hover:text-white transition-colors block">Social Media Audit</a>
              <a href="/services/ugc" className="hover:text-white transition-colors block">UGC</a>
              <a href="/services/web-design" className="hover:text-white transition-colors block">Web Design</a>
            </div>
          </div>

          {/* Resources Section */}
          <div className="min-w-0 flex-shrink-0" style={{minWidth: '200px'}}>
            <div className="font-semibold text-white mb-4">Resources</div>
            <div className="text-white/60 text-sm space-y-2">
              <a href="/case-studies" className="hover:text-white transition-colors block">Case Studies</a>
              <a href="/our-team" className="hover:text-white transition-colors block">Our Team</a>
              <a href="/our-socials" className="hover:text-white transition-colors block">Our Socials</a>
              <a href="/faq" className="hover:text-white transition-colors block">FAQ</a>
              <a href="/pricing" className="hover:text-white transition-colors block">Pricing</a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="min-w-0 flex-shrink-0" style={{minWidth: '200px'}}>
            <div className="font-semibold text-white mb-4">Contact</div>
            <div className="text-white/60 text-sm space-y-2">
              <a href="mailto:social@chargedupmarketing.com" className="hover:text-white transition-colors block">social@chargedupmarketing.com</a>
              <a href="/contact" className="hover:text-white transition-colors block">Contact Us</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <div>© {new Date().getFullYear()} ChargedUp - All rights reserved</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Hidden Admin Access - Only visible to those who know where to look */}
        <div className="mt-4 text-center">
          <a 
            href="/admin-login" 
            className="inline-block text-xs text-white/20 hover:text-white/40 transition-colors cursor-pointer select-none"
            style={{ userSelect: 'none' }}
            title="Admin Access"
          >
            ⚙️
          </a>
        </div>
      </div>
    </footer>
  )
}
