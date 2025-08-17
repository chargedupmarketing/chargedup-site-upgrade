'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Copy, Check, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const SUGGESTED_PROMPTS = [
  'Help me create a social media strategy for my SaaS startup',
  'What are the best marketing channels for B2B software?',
  'How can I improve my email marketing conversion rates?',
  'Give me ideas for content marketing in the tech industry',
  "What's the best way to target enterprise customers?",
  'How do I optimize my Google Ads for SaaS products?',
];

export default function AIChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content:
        "Hello! I'm your AI marketing assistant. I can help you with marketing strategies, content ideas, campaign optimization, and more. What would you like to know about today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Call the real AI API
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content.trim(),
          conversationHistory: messages.slice(-10), // Send last 10 messages for context
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get AI response');
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error('AI Chat Error:', error);

      // Show error message to user
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I apologize, but I encountered an error: ${error.message}. Please try again or contact our team if the issue persists.`,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyMessage = async (content: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedId(messageId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleSuggestedPrompt = (prompt: string) => {
    setInputValue(prompt);
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-6 text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">ChargedUp AI Assistant</h3>
            <p className="text-white/80 text-sm">
              Powered by advanced AI for marketing excellence
            </p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="h-96 overflow-y-auto p-6 space-y-6">
        <AnimatePresence>
          {messages.map(message => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}

              <div
                className={`max-w-[80%] ${message.role === 'user' ? 'order-2' : 'order-1'}`}
              >
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                      : 'bg-gray-800/50 text-gray-100 border border-gray-700/50'
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {message.content}
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-gray-500">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                  {message.role === 'assistant' && (
                    <button
                      onClick={() =>
                        handleCopyMessage(message.content, message.id)
                      }
                      className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
                    >
                      {copiedId === message.id ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
              </div>

              {message.role === 'user' && (
                <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-white" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Loading Indicator */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4 justify-start"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-gray-800/50 rounded-2xl px-4 py-3 border border-gray-700/50">
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-orange-500 animate-spin" />
                <span className="text-gray-300 text-sm">AI is thinking...</span>
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Prompts */}
      <div className="p-6 border-t border-gray-700/50 bg-gray-900/30">
        <div className="mb-4">
          <p className="text-gray-400 text-sm mb-3">Try asking about:</p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_PROMPTS.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedPrompt(prompt)}
                className="px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 text-xs rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-all duration-200"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-gray-700/50 bg-gray-900/30">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about marketing strategies, content ideas, or campaign optimization..."
              className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-500 resize-none focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all duration-200"
              rows={1}
              style={{ minHeight: '48px', maxHeight: '120px' }}
            />
          </div>
          <button
            onClick={() => handleSendMessage(inputValue)}
            disabled={!inputValue.trim() || isLoading}
            className="px-4 py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl font-medium transition-all duration-200 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-gray-500 text-xs mt-3 text-center">
          This is a demo AI assistant. For real AI-powered marketing services,{' '}
          <a
            href="/contact"
            className="text-orange-500 hover:text-orange-400 underline"
          >
            contact our team
          </a>
        </p>
      </div>
    </div>
  );
}
