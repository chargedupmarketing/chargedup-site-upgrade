export interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  createdAt: Date
}

export interface Chat {
  id: string
  title: string
  messages: Message[]
  createdAt: Date
  updatedAt: Date
}

export interface User {
  id: string
  name: string
  email: string
  role: 'USER' | 'ADMIN'
  credits: number
}

export interface ChatRequest {
  message: string
  conversationHistory: Message[]
  userId: string
  userName: string
}

export interface ChatResponse {
  response: string
  usage: {
    total_tokens: number
  }
}
