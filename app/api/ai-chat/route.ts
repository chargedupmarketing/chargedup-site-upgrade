import { NextRequest, NextResponse } from 'next/server'
import { ClarifaiClient } from '@/lib/api/clarifai'
import { ChatRequest, ChatResponse } from '@/lib/types/chat'
import { AI_CONFIG, ERROR_MESSAGES } from '@/lib/constants/ai'

export async function POST(request: NextRequest) {
  try {
    console.log('=== AI CHAT API CALLED ===')
    
    // Debug environment variables
    console.log('Environment check:')
    console.log('- process.env.CLARIFAI_API_KEY exists:', !!process.env.CLARIFAI_API_KEY)
    console.log('- process.env.CLARIFAI_API_KEY length:', process.env.CLARIFAI_API_KEY?.length || 0)
    console.log('- process.env.CLARIFAI_API_KEY first 10 chars:', process.env.CLARIFAI_API_KEY?.substring(0, 10) + '...' || 'undefined')
    console.log('- All env vars starting with CLARIFAI:', Object.keys(process.env).filter(key => key.startsWith('CLARIFAI')))
    
    const { message, conversationHistory, userId, userName }: ChatRequest = await request.json()
    console.log('Request data:', { message: message?.substring(0, 50) + '...', userId, userName })

    if (!message || !message.trim()) {
      console.log('Error: No message provided')
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Check if we have a valid API key
    const apiKey = process.env.CLARIFAI_API_KEY || 'd0a1e2fb8c164b0a909189ee221f886e'
    console.log('API Key check:')
    console.log('- apiKey variable length:', apiKey.length)
    console.log('- apiKey first 10 chars:', apiKey.substring(0, 10) + '...')
    console.log('- apiKey matches fallback:', apiKey === 'd0a1e2fb8c164b0a909189ee221f886e')
    console.log('- process.env.CLARIFAI_API_KEY matches apiKey:', process.env.CLARIFAI_API_KEY === apiKey)
    
    if (!apiKey || apiKey === 'd0a1e2fb8c164b0a909189ee221f886e') {
      console.log('Error: Using fallback API key - environment variable not loaded!')
      return NextResponse.json(
        { error: ERROR_MESSAGES.API_KEY_MISSING },
        { status: 500 }
      )
    }

    // Create personalized system prompt
    const personalizedSystemPrompt = AI_CONFIG.SYSTEM_PROMPT.replace('the user', userName || 'the user')

    // Prepare conversation messages for Clarifai
    const conversationText = conversationHistory
      .map((msg) => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
      .join('\n\n')
    
    const fullPrompt = `${personalizedSystemPrompt}\n\nConversation History:\n${conversationText}\n\nUser: ${message.trim()}\n\nAssistant:`

    console.log('Messages prepared:', conversationHistory.length + 1, 'total messages')
    console.log('System prompt length:', personalizedSystemPrompt.length)
    console.log('Full prompt length:', fullPrompt.length)

    // Initialize Clarifai client
    const clarifaiClient = new ClarifaiClient({ apiKey })
    console.log('Making Clarifai API call with official client')
    console.log('Using API key (first 10 chars):', apiKey.substring(0, 10) + '...')

    // Generate text response (placeholder for now)
    console.log('Clarifai API call would be made here')
    
    // Mock response for now since Clarifai integration is not yet implemented
    const aiResponse = `Hello! I'm your AI assistant. You said: "${message.trim()}". This is a placeholder response while we complete the Clarifai integration.`

    console.log('=== AI CHAT API SUCCESS ===')
    
    const response: ChatResponse = {
      response: aiResponse,
      usage: {
        total_tokens: 0 // Placeholder since we're not actually calling Clarifai yet
      }
    }
    
    return NextResponse.json(response)

  } catch (error: any) {
    console.error('=== AI CHAT API ERROR ===')
    console.error('Error type:', typeof error)
    console.error('Error message:', error.message)
    console.error('Error stack:', error.stack)

    if (error.message.includes('authentication')) {
      return NextResponse.json(
        { error: ERROR_MESSAGES.AUTHENTICATION_FAILED },
        { status: 401 }
      )
    } else if (error.message.includes('rate limit')) {
      return NextResponse.json(
        { error: ERROR_MESSAGES.RATE_LIMIT },
        { status: 429 }
      )
    } else if (error.message.includes('Clarifai API error')) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: ERROR_MESSAGES.GENERIC_ERROR },
      { status: 500 }
    )
  }
}
