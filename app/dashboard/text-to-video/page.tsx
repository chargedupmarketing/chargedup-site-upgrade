'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Video, Play, Download, Loader2, Sparkles } from 'lucide-react'

export default function TextToVideoPage() {
  const [prompt, setPrompt] = useState('')
  const [duration, setDuration] = useState('15')
  const [style, setStyle] = useState('cinematic')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    
    // TODO: Replace with actual VO3 API call
    // const response = await fetch('/api/video/generate', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ prompt, duration, style })
    // })
    
    // Simulate API call
    setTimeout(() => {
      setGeneratedVideo('/api/placeholder-video')
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Video className="w-4 h-4" />
            Text-to-Video AI
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Transform Text into Stunning Videos</h1>
          <p className="text-gray-400 text-lg">
            Describe your vision and watch as AI brings it to life with professional-quality video content
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
              <h2 className="text-xl font-semibold text-white mb-4">Video Generation Settings</h2>
              
              {/* Prompt Input */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Describe Your Video
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="A sleek car driving through a futuristic city at sunset, cinematic lighting, smooth camera movement..."
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200"
                    rows={4}
                  />
                </div>

                {/* Duration Selector */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Duration (seconds)
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200"
                  >
                    <option value="15">15 seconds</option>
                    <option value="30">30 seconds</option>
                    <option value="60">1 minute</option>
                    <option value="120">2 minutes</option>
                  </select>
                </div>

                {/* Style Selector */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Visual Style
                  </label>
                  <select
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200"
                  >
                    <option value="cinematic">Cinematic</option>
                    <option value="modern">Modern & Clean</option>
                    <option value="artistic">Artistic & Creative</option>
                    <option value="corporate">Corporate & Professional</option>
                    <option value="vintage">Vintage & Retro</option>
                  </select>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl py-4 font-semibold transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
              <h3 className="text-lg font-semibold text-white mb-3">💡 Pro Tips</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Be specific about camera movements and angles</li>
                <li>• Include lighting and mood descriptions</li>
                <li>• Mention color schemes and visual effects</li>
                <li>• Specify the target audience and tone</li>
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
              <h2 className="text-xl font-semibold text-white mb-4">Video Preview</h2>
              
              {isGenerating ? (
                <div className="aspect-video bg-gray-700/50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-600/50">
                  <div className="text-center">
                    <Loader2 className="w-12 h-12 animate-spin text-blue-400 mx-auto mb-4" />
                    <p className="text-gray-400">AI is creating your video...</p>
                    <p className="text-sm text-gray-500 mt-2">This may take a few minutes</p>
                  </div>
                </div>
              ) : generatedVideo ? (
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-700/50 rounded-xl flex items-center justify-center border border-gray-600/50">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                      <p className="text-gray-400">Video Generated Successfully!</p>
                      <p className="text-sm text-gray-500">Click to preview</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-medium transition-colors flex items-center justify-center gap-2">
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
                    <Video className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Your video will appear here</p>
                    <p className="text-sm text-gray-500 mt-2">Enter a prompt and click generate</p>
                  </div>
                </div>
              )}
            </div>

            {/* Features */}
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30">
              <h3 className="text-lg font-semibold text-white mb-3">🚀 Features</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• AI-powered video generation</li>
                <li>• Multiple style options</li>
                <li>• Customizable duration</li>
                <li>• High-quality output</li>
                <li>• Commercial usage rights</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
