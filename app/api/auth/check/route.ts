import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export const dynamic = 'force-dynamic'
export const runtime = 'edge'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    return NextResponse.json({ 
      authenticated: !!session,
      user: session?.user || null 
    })
  } catch (error) {
    console.error('Auth check error:', error)
    return NextResponse.json({ 
      authenticated: false,
      error: 'Authentication check failed'
    }, { status: 500 })
  }
} 