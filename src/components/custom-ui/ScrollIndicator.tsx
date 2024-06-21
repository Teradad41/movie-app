"use client"

import { ChevronDown } from "lucide-react"
import React, { useState, useEffect } from "react"

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const hasScrolled = localStorage.getItem("hasScrolled") === "true"
    setIsVisible(!hasScrolled)

    const handleScroll = () => {
      if (window.scrollY > 0 && isVisible) {
        setIsVisible(false)
        localStorage.setItem("hasScrolled", "true")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-8 h-8 text-gray-600" />
    </div>
  )
}
