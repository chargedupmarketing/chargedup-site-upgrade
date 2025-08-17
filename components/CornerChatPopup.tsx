'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Send,
  X,
  Zap,
  Bot,
  User,
  Loader2,
  Minimize2,
  Maximize2,
} from 'lucide-react';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface CornerChatPopupProps {
  className?: string;
}

export default function CornerChatPopup({
  className = '',
}: CornerChatPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1); // Start with 1 for the welcome message
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessage: Message = {
      id: 'welcome',
      content:
        "Hey there 👋 Welcome to Charged Up! I'm your AI assistant. Want to explore our services, check your dashboard, or need quick support? Just type below — I've got you covered ⚡",
      role: 'assistant',
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, []);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Get user data if available
      const userData = localStorage.getItem('user');
      const user = userData ? JSON.parse(userData) : null;

      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage.content,
          conversationHistory: messages,
          userId: user?.id,
          userName: user?.name,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get AI response');
      }

      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        content: data.response,
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);

      // Increment unread count if chat is closed or minimized
      if (!isOpen || isMinimized) {
        setUnreadCount(prev => prev + 1);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        content:
          "Sorry, I'm having trouble responding right now. Please try again or contact support if the issue persists.",
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openChat = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setUnreadCount(0); // Clear unread count when opening chat
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openChat}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative group w-16 h-16 bg-gradient-to-r from-[#fc5f17] to-[#fcb80a] rounded-full shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#fc5f17] to-[#fcb80a] opacity-75 blur-lg animate-pulse" />

            {/* Icon */}
            <Zap className="w-8 h-8 text-black relative z-10" />

            {/* Notification Badge */}
            {unreadCount > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg border-2 border-black"
              >
                {unreadCount > 9 ? '9+' : unreadCount}
              </motion.div>
            )}

            {/* Tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.8 }}
                  className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap border border-white/10"
                >
                  Chat with us
                  <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Popup Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute bottom-0 right-0 w-[350px] bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
            style={{ height: isMinimized ? '60px' : '520px' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#fc5f17] to-[#fcb80a] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#fc5f17]" />
                </div>
                <div>
                  <h3 className="text-black font-semibold text-sm">
                    Charged Up AI Assistant ⚡
                  </h3>
                  <p className="text-black/70 text-xs">
                    Ask me anything about our services
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMinimize}
                  className="p-1 rounded-lg hover:bg-black/10 transition-colors duration-200"
                >
                  {isMinimized ? (
                    <Maximize2 className="w-4 h-4 text-black" />
                  ) : (
                    <Minimize2 className="w-4 h-4 text-black" />
                  )}
                </button>
                <button
                  onClick={closeChat}
                  className="p-1 rounded-lg hover:bg-black/10 transition-colors duration-200"
                >
                  <X className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>

            {/* Chat Content - Only show when not minimized */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-col h-full"
                  style={{ height: '456px' }}
                >
                  {/* Messages Area */}
                  <div
                    className="flex-1 p-4 pt-8 space-y-4 overflow-y-auto"
                    style={{ paddingBottom: '80px' }}
                  >
                    {messages.map(message => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex gap-3 ${
                          message.role === 'user'
                            ? 'justify-end'
                            : 'justify-start'
                        }`}
                      >
                        {message.role === 'assistant' && (
                          <div className="w-8 h-8 bg-gradient-to-r from-[#fc5f17] to-[#fcb80a] rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-black" />
                          </div>
                        )}

                        <div
                          className={`max-w-[250px] rounded-2xl px-4 py-2 ${
                            message.role === 'user'
                              ? 'bg-[#fc5f17] text-black ml-auto'
                              : 'bg-white/5 text-white border border-white/10'
                          }`}
                        >
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">
                            {message.content}
                          </p>
                        </div>

                        {message.role === 'user' && (
                          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </motion.div>
                    ))}

                    {/* Loading indicator */}
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3 justify-start"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-[#fc5f17] to-[#fcb80a] rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-black" />
                        </div>
                        <div className="bg-white/5 rounded-2xl px-4 py-2 border border-white/10">
                          <div className="flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin text-[#fc5f17]" />
                            <span className="text-white/70 text-sm">
                              Thinking...
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input Area - Fixed at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-gray-900/95 backdrop-blur-sm">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        disabled={isLoading}
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-white/50 focus:border-[#fc5f17] focus:outline-none transition-all duration-200 text-sm"
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isLoading}
                        className="bg-gradient-to-r from-[#fc5f17] to-[#fcb80a] text-black p-2 rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
