import { NextRequest, NextResponse } from 'next/server';

export interface EnterpriseInquiry {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  website?: string;
  service: 'ai-cold-dm' | 'ai-marketing-platform';
  budget: string;
  timeline: string;
  teamSize: string;
  currentChallenges: string;
  goals: string;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'closed' | 'lost';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  source: string;
  submittedAt: string;
  assignedTo?: string;
  notes?: string;
  lastContact?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'company',
      'service',
      'budget',
      'timeline',
      'teamSize',
      'currentChallenges',
      'goals',
    ];

    for (const field of requiredFields) {
      if (!body[field] || !body[field].toString().trim()) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate service type
    if (!['ai-cold-dm', 'ai-marketing-platform'].includes(body.service)) {
      return NextResponse.json(
        { error: 'Invalid service type' },
        { status: 400 }
      );
    }

    // Create the enterprise inquiry object
    const inquiry: EnterpriseInquiry = {
      id:
        body.id ||
        `ent_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      firstName: body.firstName.trim(),
      lastName: body.lastName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim() || undefined,
      company: body.company.trim(),
      website: body.website?.trim() || undefined,
      service: body.service,
      budget: body.budget.trim(),
      timeline: body.timeline.trim(),
      teamSize: body.teamSize.trim(),
      currentChallenges: body.currentChallenges.trim(),
      goals: body.goals.trim(),
      status: body.status || 'new',
      priority: body.priority || 'medium',
      source: body.source || 'Enterprise Inquiry Form',
      submittedAt: body.submittedAt || new Date().toISOString(),
      assignedTo: body.assignedTo,
      notes: body.notes,
      lastContact: body.lastContact,
    };

    // Store in a way that admin panel can access
    // In a production environment, this would be stored in a database
    console.log('Enterprise Inquiry Received:', {
      id: inquiry.id,
      company: inquiry.company,
      service: inquiry.service,
      submittedAt: inquiry.submittedAt,
    });

    // For demonstration, we'll return the full inquiry object so the client can store it
    // In production, you'd save to a database here

    // Also send to webhook if configured
    const webhookUrl =
      process.env.HIGHLEVEL_WEBHOOK_URL || process.env.ENTERPRISE_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'enterprise_inquiry',
            data: inquiry,
            timestamp: new Date().toISOString(),
          }),
        });
        console.log('Enterprise inquiry sent to webhook successfully');
      } catch (webhookError) {
        console.error('Failed to send to webhook:', webhookError);
        // Don't fail the request if webhook fails
      }
    }

    // Return success response with the full inquiry data for client-side storage
    return NextResponse.json({
      success: true,
      inquiry: inquiry, // Return full inquiry for client-side storage
    });
  } catch (error: any) {
    console.error('Error processing enterprise inquiry:', error);

    return NextResponse.json(
      { error: 'Failed to process inquiry. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // This endpoint allows the admin panel to fetch inquiries
    // In a real app, this would query a database
    // For now, return empty array as inquiries are stored client-side

    return NextResponse.json({
      success: true,
      inquiries: [],
      message:
        'Inquiries are currently stored in browser localStorage. Check the admin panel for client-side data.',
    });
  } catch (error: any) {
    console.error('Error fetching enterprise inquiries:', error);

    return NextResponse.json(
      { error: 'Failed to fetch inquiries' },
      { status: 500 }
    );
  }
}
