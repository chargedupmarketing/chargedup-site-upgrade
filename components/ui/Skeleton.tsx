import React from 'react'
import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
  children?: React.ReactNode
}

export const Skeleton: React.FC<SkeletonProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-white/10',
        className
      )}
    >
      {children}
    </div>
  )
}

// Predefined skeleton components
export const SkeletonText = ({ className }: { className?: string }) => (
  <Skeleton className={cn('h-4', className)} />
)

export const SkeletonTitle = ({ className }: { className?: string }) => (
  <Skeleton className={cn('h-8 w-3/4', className)} />
)

export const SkeletonParagraph = ({ className }: { className?: string }) => (
  <Skeleton className={cn('h-4 w-full', className)} />
)

export const SkeletonCard = ({ className }: { className?: string }) => (
  <div className={cn('p-6 space-y-4', className)}>
    <Skeleton className="h-6 w-1/2" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-1/2" />
  </div>
)

export const SkeletonButton = ({ className }: { className?: string }) => (
  <Skeleton className={cn('h-10 w-32', className)} />
)

export const SkeletonAvatar = ({ className }: { className?: string }) => (
  <Skeleton className={cn('h-12 w-12 rounded-full', className)} />
)

export const SkeletonImage = ({ className }: { className?: string }) => (
  <Skeleton className={cn('h-48 w-full', className)} />
)

// Page skeleton components
export const PageSkeleton = () => (
  <div className="min-h-screen bg-black">
    {/* Hero Section Skeleton */}
    <section className="section">
      <div className="container">
        <div className="text-center space-y-6">
          <SkeletonTitle className="mx-auto" />
          <SkeletonParagraph className="mx-auto max-w-2xl" />
          <div className="flex justify-center gap-4">
            <SkeletonButton />
            <SkeletonButton />
          </div>
        </div>
      </div>
    </section>

    {/* Content Section Skeleton */}
    <section className="section bg-white/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </section>
  </div>
)

export const CardGridSkeleton = ({ count = 6 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[...Array(count)].map((_, i) => (
      <div key={i} className="card">
        <SkeletonCard />
      </div>
    ))}
  </div>
)
