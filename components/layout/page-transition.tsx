"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Loader2 } from "lucide-react"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)

  // Update children when pathname changes
  useEffect(() => {
    if (pathname) {
      setIsLoading(true)

      // Simulate loading time
      const timer = setTimeout(() => {
        setDisplayChildren(children)
        setIsLoading(false)
      }, 800) // Adjust loading time as needed

      return () => clearTimeout(timer)
    }
  }, [pathname, children])

  return (
    <div className="flex-1 pt-20">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50"
          >
            <motion.div
              animate={{
                rotate: 360,
                transition: {
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
              }}
            >
              <Loader2 className="h-12 w-12 text-primary" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {displayChildren}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
