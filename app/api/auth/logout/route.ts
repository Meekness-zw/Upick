import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST() {
  const cookieStore = await cookies()
  
  // Clear the token cookie
  cookieStore.delete("token")

  return new NextResponse(
    JSON.stringify({ message: "Logged out successfully" }),
    { status: 200 }
  )
} 