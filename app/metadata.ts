import type { Metadata } from 'next';

export const homeMetadata: Metadata = {
  title: 'ChargedUp — AI-Powered Marketing That Gets Results',
  description:
    'AI-assisted campaigns, human strategy. Transform your SaaS marketing with our intelligent automation platform. Book a free 15-min audit today.',
  keywords:
    'AI marketing, SaaS marketing, marketing automation, lead generation, digital marketing',
  openGraph: {
    title: 'ChargedUp — AI-Powered Marketing That Gets Results',
    description:
      'AI-assisted campaigns, human strategy. Transform your SaaS marketing with our intelligent automation platform.',
    type: 'website',
    url: 'https://chargedupmarketing.com',
    siteName: 'ChargedUp Marketing',
    images: [
      {
        url: '/hero-visual.png',
        width: 1200,
        height: 630,
        alt: 'ChargedUp Marketing - AI-Powered Marketing Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChargedUp — AI-Powered Marketing That Gets Results',
    description:
      'AI-assisted campaigns, human strategy. Transform your SaaS marketing with our intelligent automation platform.',
    images: ['/hero-visual.png'],
  },
};
