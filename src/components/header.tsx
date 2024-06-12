"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const handleLogin = (e: any) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  return (
    <header className="bg-gray-900 py-4 md:py-6">
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-white font-bold text-lg"
            prefetch={false}
          >
            Movie App
          </Link>
        </div>
        {!isLoggedIn && (
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-400 hover:text-white transition-colors"
              prefetch={false}
            >
              Sign Up
            </Link>
            <Button
              onClick={handleLogin}
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/80 focus:ring-2 focus:ring-primary focus:outline-none"
            >
              Login
            </Button>
            <ModeToggle />
          </div>
        )}
        {isLoggedIn && (
          <div className="flex items-center space-x-4">
            <Link
              href="/profile"
              className="text-gray-400 hover:text-white transition-colors"
              prefetch={false}
            >
              Profile
            </Link>
            <Button
              onClick={() => setIsLoggedIn(false)}
              className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-800 focus:outline-none"
            >
              Logout
            </Button>
            <ModeToggle />
          </div>
        )}
      </div>
    </header>
  )
}
