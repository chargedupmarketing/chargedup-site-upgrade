'use client';

import { useNewsletterPopup } from '@/lib/hooks/useNewsletterPopup';
import NewsletterPopup from './NewsletterPopup';

export default function NewsletterPopupWrapper() {
  const { isOpen, closePopup } = useNewsletterPopup();

  return <NewsletterPopup isOpen={isOpen} onClose={closePopup} />;
}
