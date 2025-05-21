import { NextResponse } from "next/server"
import { verify } from "jsonwebtoken"
import { cookies } from "next/headers"

export async function GET() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get("token")

    if (!token) {
      return new NextResponse(
        JSON.stringify({ error: "Not authenticated" }),
        { status: 401 }
      )
    }

    // Verify the token
    const decoded = verify(token.value, process.env.JWT_SECRET || "your-secret-key")

    return new NextResponse(
      JSON.stringify({ user: decoded }),
      { status: 200 }
    )
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Invalid token" }),
      { status: 401 }
    )
  }
} 