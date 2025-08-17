'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Image,
  Upload,
  Play,
  Download,
  Loader2,
  Sparkles,
  X,
} from 'lucide-react';

export default function PhotoToVideoPage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [animationStyle, setAnimationStyle] = useState('smooth');
  const [duration, setDuration] = useState('10');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = e => setImagePreview(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage) return;

    setIsGenerating(true);

    // TODO: Replace with actual API call
    // const formData = new FormData()
    // formData.append('image', selectedImage)
    // formData.append('animationStyle', animationStyle)
    // formData.append('duration', duration)

    // const response = await fetch('/api/video/photo-to-video', {
    //   method: 'POST',
    //   body: formData
    // })

    // Simulate API call
    setTimeout(() => {
      setGeneratedVideo('/api/placeholder-video');
      setIsGenerating(false);
    }, 3000);
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Image className="w-4 h-4" />
            Photo-to-Video AI
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Transform Photos into Dynamic Videos
          </h1>
          <p className="text-gray-400 text-lg">
            Upload any photo and watch as AI brings it to life with stunning
            animations and effects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-xl font-semibold text-white mb-4">
                Video Generation Settings
              </h2>

              {/* Image Upload */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Upload Photo
                  </label>

                  {!imagePreview ? (
                    <div
                      onClick={triggerFileUpload}
                      className="w-full h-48 border-2 border-dashed border-gray-600/50 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-gray-500/50 transition-colors"
                    >
                      <Upload className="w-12 h-12 text-gray-500 mb-3" />
                      <p className="text-gray-400 font-medium">
                        Click to upload or drag & drop
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        Supports JPG, PNG, WebP (Max 10MB)
                      </p>
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-xl"
                      />
                      <button
                        onClick={removeImage}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>

                {/* Animation Style */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Animation Style
                  </label>
                  <select
                    value={animationStyle}
                    onChange={e => setAnimationStyle(e.target.value)}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all duration-200"
                  >
                    <option value="smooth">Smooth & Elegant</option>
                    <option value="dynamic">Dynamic & Energetic</option>
                    <option value="cinematic">Cinematic & Dramatic</option>
                    <option value="subtle">Subtle & Refined</option>
                    <option value="creative">Creative & Artistic</option>
                  </select>
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Duration (seconds)
                  </label>
                  <select
                    value={duration}
                    onChange={e => setDuration(e.target.value)}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all duration-200"
                  >
                    <option value="5">5 seconds</option>
                    <option value="10">10 seconds</option>
                    <option value="15">15 seconds</option>
                    <option value="20">20 seconds</option>
                    <option value="30">30 seconds</option>
                  </select>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  disabled={!selectedImage || isGenerating}
                  className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl py-4 font-semibold transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Generating Video...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate Video
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30">
              <h3 className="text-lg font-semibold text-white mb-3">
                💡 Pro Tips
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Use high-quality, clear images for best results</li>
                <li>• Images with good contrast work better</li>
                <li>• Avoid images with too many small details</li>
                <li>• Consider the animation style that fits your image</li>
              </ul>
            </div>
          </motion.div>

          {/* Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-xl font-semibold text-white mb-4">
                Video Preview
              </h2>

              {isGenerating ? (
                <div className="aspect-video bg-gray-700/50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-600/50">
                  <div className="text-center">
                    <Loader2 className="w-12 h-12 animate-spin text-green-400 mx-auto mb-4" />
                    <p className="text-gray-400">
                      AI is animating your photo...
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      This may take a few minutes
                    </p>
                  </div>
                </div>
              ) : generatedVideo ? (
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-700/50 rounded-xl flex items-center justify-center border border-gray-600/50">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <p className="text-gray-400">
                        Video Generated Successfully!
                      </p>
                      <p className="text-sm text-gray-500">Click to preview</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 font-medium transition-colors flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Preview
                    </button>
                    <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white rounded-lg py-3 font-medium transition-colors flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-gray-700/50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-600/50">
                  <div className="text-center">
                    <Image className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Your video will appear here</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Upload a photo and click generate
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Features */}
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30">
              <h3 className="text-lg font-semibold text-white mb-3">
                🚀 Features
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• AI-powered photo animation</li>
                <li>• Multiple animation styles</li>
                <li>• Customizable duration</li>
                <li>• High-quality video output</li>
                <li>• Commercial usage rights</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
