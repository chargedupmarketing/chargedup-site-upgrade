'use client'

import { useState, useRef } from 'react'
import { Camera, Upload, X, User } from 'lucide-react'

interface ProfilePictureProps {
  currentImage?: string | null
  onImageChange: (file: File) => void
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function ProfilePicture({ 
  currentImage, 
  onImageChange, 
  size = 'md',
  className = '' 
}: ProfilePictureProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  }

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file')
        return
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size must be less than 5MB')
        return
      }

      setIsUploading(true)
      
      // Simulate upload delay
      setTimeout(() => {
        onImageChange(file)
        setIsUploading(false)
      }, 1000)
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const removeImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    onImageChange(null as any)
  }

  return (
    <div className={`relative group ${className}`}>
      {/* Profile Picture Container */}
      <div
        className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gray-700 border-2 border-gray-600 cursor-pointer transition-all duration-200 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/25`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {currentImage ? (
          <img
            src={currentImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-700">
            <User className={`${iconSizes[size]} text-gray-400`} />
          </div>
        )}

        {/* Upload Overlay */}
        {isHovered && !isUploading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <Upload className={`${iconSizes[size]} text-white mx-auto mb-1`} />
              <p className="text-white text-xs">Click to upload</p>
            </div>
          </div>
        )}

        {/* Loading Overlay */}
        {isUploading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mx-auto mb-1"></div>
              <p className="text-white text-xs">Uploading...</p>
            </div>
          </div>
        )}
      </div>

      {/* Remove Button */}
      {currentImage && !isUploading && (
        <button
          onClick={removeImage}
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:opacity-100 opacity-0"
        >
          <X className="w-3 h-3 text-white" />
        </button>
      )}

      {/* Camera Icon Badge */}
      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-gray-900">
        <Camera className="w-3 h-3 text-white" />
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  )
}
