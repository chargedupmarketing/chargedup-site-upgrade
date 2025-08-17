'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Send, Plus, Trash2, MessageSquare, Loader2, Copy, Check, LogOut } from 'lucide-react'

interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  createdAt: Date
}

interface Chat {
  id: string
  title: string
  messages: Message[]
  createdAt: Date
  updatedAt: Date
}

export default function SimpleDashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [chats, setChats] = useState<Chat[]>([])
  const [currentChat, setCurrentChat] = useState<Chat | null>(null)
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/auth/login')
      return
    }
    
    setUser(JSON.parse(userData))
    
    // Create a default chat
    const defaultChat: Chat = {
      id: 'default',
      title: 'Welcome Chat',
      messages: [
        {
          id: '1',
          content: `Hello ${JSON.parse(userData).name}! Welcome to ChargedUp AI Platform. How can I help you today?`,
          role: 'assistant',
          createdAt: new Date()
        }
      ],
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
    setChats([defaultChat])
    setCurrentChat(defaultChat)
  }, [router])

  const createNewChat = () => {
    const newChat: Chat = {
      id: `chat-${Date.now()}`,
      title: 'New Chat',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }
    setChats(prev => [newChat, ...prev])
    setCurrentChat(newChat)
  }

  const deleteChat = (chatId: string) => {
    if (chats.length <= 1) return // Keep at least one chat
    
    setChats(prev => prev.filter(chat => chat.id !== chatId))
    if (currentChat?.id === chatId) {
      setCurrentChat(chats.length > 1 ? chats[1] : null)
    }
  }

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading || !currentChat) return

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      content: content.trim(),
      role: 'user',
      createdAt: new Date()
    }

    // Update current chat with user message
    const updatedChat = {
      ...currentChat,
      messages: [...currentChat.messages, userMessage],
      updatedAt: new Date()
    }
    
    setCurrentChat(updatedChat)
    setChats(prev => prev.map(chat => 
      chat.id === currentChat.id ? updatedChat : chat
    ))
    
    setInputValue('')
    setIsLoading(true)

    try {
      // Simulate AI response for now
      setTimeout(() => {
        const aiMessage: Message = {
          id: `ai-${Date.now()}`,
          content: `I received your message: "${content.trim()}". This is a demo response. In the full version, this would connect to OpenAI's API.`,
          role: 'assistant',
          createdAt: new Date()
        }

        const finalChat = {
          ...updatedChat,
          messages: [...updatedChat.messages, aiMessage],
          updatedAt: new Date()
        }
        
        setCurrentChat(finalChat)
        setChats(prev => prev.map(chat => 
          chat.id === currentChat.id ? finalChat : chat
        ))
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Failed to send message:', error)
      setIsLoading(false)
    }
  }

  const copyMessage = async (content: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(content)
      setCopiedId(messageId)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (error) {
      console.error('Failed to copy message:', error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/auth/login')
  }

  if (!user) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold">ChargedUp AI Platform</h1>
            <div className="text-sm text-gray-400">
              Credits: {user.credits} | Role: {user.role}
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <div className="w-80 bg-gray-800 border-r border-gray-700 p-4">
          <button
            onClick={createNewChat}
            className="w-full flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors mb-4"
          >
            <Plus className="w-4 h-4" />
            New Chat
          </button>
          
          <div className="space-y-2">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                  currentChat?.id === chat.id ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}
                onClick={() => setCurrentChat(chat)}
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span className="truncate">{chat.title}</span>
                </div>
                {chats.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteChat(chat.id)
                    }}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {currentChat ? (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {currentChat.messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-700 text-gray-100'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="whitespace-pre-wrap">{message.content}</p>
                        <button
                          onClick={() => copyMessage(message.content, message.id)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {copiedId === message.id ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <Loader2 className="w-6 h-6 animate-spin" />
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-700">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    sendMessage(inputValue)
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className="px-6 py-3 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <MessageSquare className="w-16 h-16 mx-auto mb-4" />
                <p>Select a chat or create a new one to start</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
