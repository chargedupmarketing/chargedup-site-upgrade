import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import NewsletterPopupWrapper from '@/components/NewsletterPopupWrapper'
import CornerChatPopup from '@/components/CornerChatPopup'

export const metadata: Metadata = {
  title: 'ChargedUp — Marketing that gets you Charged‑Up',
  description: 'AI‑assisted campaigns, human strategy. Book a 15‑min audit — free.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <NewsletterPopupWrapper />
        <CornerChatPopup />
      </body>
    </html>
  )
}
