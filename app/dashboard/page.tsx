"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/check", {
          method: "GET",
          credentials: "include",
        })

        if (!response.ok) {
          router.push("/login")
          return
        }

        setIsLoading(false)
      } catch (error) {
        console.error("Auth check failed:", error)
        router.push("/login")
      }
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <main className="container mx-auto py-10">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Welcome to your dashboard
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Add your dashboard content here */}
          <div className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
            <p className="text-gray-500 dark:text-gray-400">
              No orders yet
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold">Profile</h2>
            <p className="text-gray-500 dark:text-gray-400">
              View and edit your profile
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold">Settings</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Manage your account settings
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 