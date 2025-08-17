import { useState, useEffect } from 'react'

export function useNewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem('newsletter-popup-shown')
    
    if (!hasSeenPopup) {
      // Show popup after 3 seconds on first visit
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasShown(true)
        // Mark as shown in localStorage
        localStorage.setItem('newsletter-popup-shown', 'true')
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const openPopup = () => {
    setIsOpen(true)
  }

  const closePopup = () => {
    setIsOpen(false)
  }

  const resetPopup = () => {
    localStorage.removeItem('newsletter-popup-shown')
    setHasShown(false)
    setIsOpen(false)
  }

  // Listen for custom event to manually open popup
  useEffect(() => {
    const handleManualOpen = () => {
      openPopup()
    }

    window.addEventListener('open-newsletter-popup', handleManualOpen)
    
    return () => {
      window.removeEventListener('open-newsletter-popup', handleManualOpen)
    }
  }, [])

  return {
    isOpen,
    hasShown,
    openPopup,
    closePopup,
    resetPopup
  }
}
