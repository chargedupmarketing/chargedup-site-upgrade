import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Store the email in your database
    // 2. Add to your email marketing service (Mailchimp, ConvertKit, etc.)
    // 3. Send a welcome email
    // 4. Log the lead for follow-up

    // For now, we'll just log it and return success
    console.log('New newsletter signup:', {
      email,
      timestamp: new Date().toISOString(),
      source: 'newsletter-popup',
      userAgent: request.headers.get('user-agent'),
      referer: request.headers.get('referer'),
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      email,
    });
  } catch (error) {
    console.error('Newsletter signup error:', error);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
