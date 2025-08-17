import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black'
    
    const variants = {
      primary: 'bg-[#fc5f17] hover:bg-[#e54d0e] text-white focus:ring-[#fc5f17] shadow-lg hover:shadow-xl',
      secondary: 'bg-[#fcb80a] hover:bg-[#e6a600] text-black focus:ring-[#fcb80a] shadow-lg hover:shadow-xl',
      outline: 'border-2 border-[#fc5f17] text-[#fc5f17] hover:bg-[#fc5f17] hover:text-white focus:ring-[#fc5f17]',
      ghost: 'text-white hover:bg-white/10 focus:ring-white/20'
    }
    
    const sizes = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    }
    
    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
