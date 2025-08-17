import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { name, currentPassword, newPassword } = await request.json();

    // Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters long' },
        { status: 400 }
      );
    }

    // Get current user
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // If changing password, verify current password
    if (newPassword) {
      if (!currentPassword) {
        return NextResponse.json(
          { error: 'Current password is required to set a new password' },
          { status: 400 }
        );
      }

      const isCurrentPasswordValid = await bcrypt.compare(
        currentPassword,
        user.password || ''
      );
      if (!isCurrentPasswordValid) {
        return NextResponse.json(
          { error: 'Current password is incorrect' },
          { status: 400 }
        );
      }

      if (newPassword.length < 6) {
        return NextResponse.json(
          { error: 'New password must be at least 6 characters long' },
          { status: 400 }
        );
      }
    }

    // Update user
    const updateData: any = { name: name.trim() };

    if (newPassword) {
      updateData.password = await bcrypt.hash(newPassword, 12);
    }

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        credits: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({
      message: 'Profile updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    console.error('Profile update error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
