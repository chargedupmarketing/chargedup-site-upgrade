import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await getServerSession()
    if (!session?.user || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
    }

    const [
      totalUsers,
      activeUsers,
      totalChats,
      totalVideos,
      totalCredits
    ] = await Promise.all([
      prisma.user.count(),
      prisma.user.count({ where: { isActive: true } }),
      prisma.chat.count({ where: { isActive: true } }),
      prisma.video.count(),
      prisma.user.aggregate({
        _sum: { credits: true }
      })
    ])

    const stats = {
      totalUsers,
      activeUsers,
      totalChats,
      totalVideos,
      totalCredits: totalCredits._sum.credits || 0,
      monthlyGrowth: 15.2 // Mock data for now
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('Failed to fetch stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}
