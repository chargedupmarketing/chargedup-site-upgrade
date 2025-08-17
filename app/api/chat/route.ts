import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client with the API key
const openai = new OpenAI({
  apiKey:
    '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',
});

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json();

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Prepare conversation messages for OpenAI
    const messages = [
      {
        role: 'system',
        content: `You are ChargedUp AI, a professional marketing and business AI assistant. You help users with:
        - Marketing strategies and campaigns
        - Business growth and development
        - Content creation and social media
        - Brand building and positioning
        - Customer engagement and retention
        - Digital marketing tools and techniques
        
        Always provide practical, actionable advice with examples when possible. Be professional yet friendly, and focus on helping businesses succeed.`,
      },
      ...conversationHistory.map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content,
      })),
      { role: 'user', content: message.trim() },
    ];

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Using the more affordable model
      messages,
      temperature: 0.7,
      max_tokens: 1000,
      stream: false,
    });

    const aiResponse =
      completion.choices[0]?.message?.content ||
      'I apologize, but I encountered an error. Please try again.';

    return NextResponse.json({
      response: aiResponse,
      usage: completion.usage,
    });
  } catch (error: any) {
    console.error('OpenAI API error:', error);

    if (error.status === 401) {
      return NextResponse.json(
        { error: 'Authentication failed. Please check your API key.' },
        { status: 401 }
      );
    } else if (error.status === 429) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    } else if (error.status === 500) {
      return NextResponse.json(
        { error: 'OpenAI service error. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
