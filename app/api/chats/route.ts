import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const chats = await prisma.chat.findMany({
      where: {
        userId: session.user.id,
        isActive: true,
      },
      include: {
        messages: {
          orderBy: { createdAt: 'asc' },
        },
      },
      orderBy: { updatedAt: 'desc' },
    });

    return NextResponse.json({ chats });
  } catch (error) {
    console.error('Failed to fetch chats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch chats' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const chatData = await request.json();

    // Create new chat
    const chat = await prisma.chat.create({
      data: {
        title: chatData.title,
        userId: session.user.id,
        messages: {
          create: chatData.messages.map((msg: any) => ({
            content: msg.content,
            role: msg.role === 'user' ? 'USER' : 'ASSISTANT',
          })),
        },
      },
      include: {
        messages: true,
      },
    });

    return NextResponse.json({ chat }, { status: 201 });
  } catch (error) {
    console.error('Failed to create chat:', error);
    return NextResponse.json(
      { error: 'Failed to create chat' },
      { status: 500 }
    );
  }
}
