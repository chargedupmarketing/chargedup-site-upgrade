import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();
    if (!session?.user || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 }
      );
    }

    const userId = params.id;
    const { isActive } = await request.json();

    const user = await prisma.user.update({
      where: { id: userId },
      data: { isActive },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        credits: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Failed to update user:', error);
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();
    if (!session?.user || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 }
      );
    }

    const userId = params.id;

    // Check if user is admin
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (user?.role === 'ADMIN') {
      return NextResponse.json(
        { error: 'Cannot delete admin users' },
        { status: 400 }
      );
    }

    // Soft delete by setting isActive to false
    await prisma.user.update({
      where: { id: userId },
      data: { isActive: false },
    });

    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Failed to delete user:', error);
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    );
  }
}
