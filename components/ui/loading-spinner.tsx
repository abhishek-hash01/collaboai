'use client'

import { Loader } from 'lucide-react'

interface LoadingSpinnerProps {
  size?: number
  className?: string
}

export const LoadingSpinner = ({ size = 24, className }: LoadingSpinnerProps) => {
  return (
    <Loader
      style={{ width: size, height: size }}
      className={`animate-spin text-primary ${className}`}
    />
  )
}

export const FullPageLoader = () => {
  return (
    <div className='flex h-screen w-full items-center justify-center bg-background'>
      <LoadingSpinner size={48} />
    </div>
  )
}
