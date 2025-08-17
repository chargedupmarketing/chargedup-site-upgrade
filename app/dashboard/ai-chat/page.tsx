'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Plus,
  Trash2,
  MessageSquare,
  Loader2,
  Copy,
  Check,
  Search,
  ChevronDown,
} from 'lucide-react';
import VoiceRecorder from '@/components/ui/VoiceRecorder';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  createdAt: Date;
}

interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export default function AIChatPage() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState<any>(null);
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
    loadChats();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [currentChat?.messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadChats = async () => {
    try {
      // Create a default chat for new users
      const defaultChat: Chat = {
        id: 'default',
        title: 'New Chat',
        messages: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      setChats([defaultChat]);
      setCurrentChat(defaultChat);
    } catch (error) {
      console.error('Failed to load chats:', error);
    }
  };

  const createNewChat = () => {
    const newChat: Chat = {
      id: `chat-${Date.now()}`,
      title: 'New Chat',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setChats(prev => [newChat, ...prev]);
    setCurrentChat(newChat);
    setInputValue('');
  };

  const deleteChat = (chatId: string) => {
    if (chats.length <= 1) return; // Keep at least one chat

    setChats(prev => prev.filter(chat => chat.id !== chatId));
    if (currentChat?.id === chatId) {
      setCurrentChat(chats.length > 1 ? chats[1] : null);
    }
  };

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading || !currentChat) return;

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      content: content.trim(),
      role: 'user',
      createdAt: new Date(),
    };

    // Update current chat with user message
    const updatedChat = {
      ...currentChat,
      messages: [...currentChat.messages, userMessage],
      title:
        currentChat.messages.length === 0
          ? content.trim().slice(0, 30) + '...'
          : currentChat.title,
      updatedAt: new Date(),
    };

    setCurrentChat(updatedChat);
    setChats(prev =>
      prev.map(chat => (chat.id === currentChat.id ? updatedChat : chat))
    );
    setInputValue('');
    setIsLoading(true);

    try {
      console.log('Making API call to /api/ai-chat');
      console.log('Request payload:', {
        message: content.trim(),
        conversationHistory: currentChat.messages.length,
        userId: user?.id,
        userName: user?.name,
      });

      // Call the personalized AI API
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: content.trim(),
          conversationHistory: currentChat.messages,
          userId: user?.id,
          userName: user?.name,
        }),
      });

      console.log('API response status:', response.status);
      console.log('API response ok:', response.ok);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get AI response');
      }

      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        content: data.response,
        role: 'assistant',
        createdAt: new Date(),
      };

      const finalChat = {
        ...updatedChat,
        messages: [...updatedChat.messages, aiMessage],
        updatedAt: new Date(),
      };

      setCurrentChat(finalChat);
      setChats(prev =>
        prev.map(chat => (chat.id === currentChat.id ? finalChat : chat))
      );
    } catch (error: any) {
      console.error('Chat error:', error);

      let errorContent = 'An error occurred. Please try again.';

      if (error.message.includes('Rate limit exceeded')) {
        errorContent =
          'OpenAI rate limit reached. This is a temporary restriction that usually resolves in 1-2 minutes. Please wait and try again.';
      } else if (error.message.includes('Failed to fetch')) {
        errorContent =
          'Network error. Please check your connection and try again.';
      } else if (error.message.includes('Unauthorized')) {
        errorContent =
          'Authentication error. Please refresh the page and try again.';
      }

      const errorMessage: Message = {
        id: `ai-${Date.now()}`,
        content: errorContent,
        role: 'assistant',
        createdAt: new Date(),
      };

      const errorChat = {
        ...updatedChat,
        messages: [...updatedChat.messages, errorMessage],
        updatedAt: new Date(),
      };

      setCurrentChat(errorChat);
      setChats(prev =>
        prev.map(chat => (chat.id === currentChat.id ? errorChat : chat))
      );
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  const filteredChats = chats.filter(chat =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!currentChat) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">
            No Chat Selected
          </h2>
          <p className="text-gray-400 mb-6">
            Start a new conversation to begin
          </p>
          <button
            onClick={createNewChat}
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-200 flex items-center gap-2 mx-auto"
          >
            <Plus className="w-5 h-5" />
            New Chat
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full">
      {/* Left Sidebar - Chat List */}
      <div className="w-80 bg-gray-900/95 border-r border-gray-700/50 flex flex-col">
        {/* New Chat Button */}
        <div className="p-4 border-b border-gray-700/50">
          <button
            onClick={createNewChat}
            className="w-full flex items-center gap-3 px-4 py-3 bg-gray-800/50 hover:bg-gray-800 text-white rounded-xl transition-all duration-200"
          >
            <Plus className="w-5 h-5" />
            New Chat
          </button>
        </div>

        {/* Search Chats */}
        <div className="p-4 border-b border-gray-700/50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search chats..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50"
            />
          </div>
        </div>

        {/* Chats List */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
              Chats
            </h3>
            <div className="space-y-1">
              {filteredChats.map(chat => (
                <div
                  key={chat.id}
                  className={`group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    currentChat?.id === chat.id
                      ? 'bg-gray-800/70 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                  onClick={() => setCurrentChat(chat)}
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{chat.title}</p>
                    <p className="text-xs text-gray-500 truncate">
                      {chat.messages.length} messages
                    </p>
                  </div>
                  {filteredChats.length > 1 && (
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        deleteChat(chat.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-400 transition-all duration-200"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="p-4 border-t border-gray-700/50">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">
                {user?.name?.charAt(0) || 'U'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium truncate">
                {user?.name || 'User'}
              </p>
              <p className="text-gray-400 text-sm">Personal AI</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700/50 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-white">
                ChargedUp AI (Clarifai)
              </h1>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={createNewChat}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {currentChat.messages.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Ready when you are.
                </h2>
                <p className="text-gray-400">
                  Your personalized AI assistant is ready to help!
                </p>
              </div>
            </div>
          ) : (
            <AnimatePresence>
              {currentChat.messages.map(message => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
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
                        {new Date(message.createdAt).toLocaleTimeString([], {
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
                </motion.div>
              ))}
            </AnimatePresence>
          )}

          {/* Loading Indicator */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4 justify-start"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Loader2 className="w-5 h-5 text-white animate-spin" />
              </div>
              <div className="bg-gray-800/50 rounded-2xl px-4 py-3 border border-gray-700/50">
                <span className="text-gray-300 text-sm">AI is thinking...</span>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-700/50 bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <textarea
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask anything..."
                className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-500 resize-none focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all duration-200"
                rows={1}
                style={{ minHeight: '48px', maxHeight: '120px' }}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-gray-300 transition-colors duration-200">
                  <Search className="w-4 h-4" />
                </button>
                <VoiceRecorder
                  onTranscription={text => setInputValue(text)}
                  isRecording={isRecording}
                  onRecordingChange={setIsRecording}
                  className="flex-shrink-0"
                />
                <button
                  onClick={() => sendMessage(inputValue)}
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Voice Recording Status */}
            {isRecording && (
              <div className="flex items-center justify-center mt-3 text-sm text-blue-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse mr-2"></div>
                <span>
                  Voice recording in progress... Click the stop button to
                  transcribe
                </span>
              </div>
            )}

            <p className="text-gray-500 text-xs mt-3 text-center">
              Powered by Clarifai GPT-OSS-120B • Your conversations are
              personalized and secure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
