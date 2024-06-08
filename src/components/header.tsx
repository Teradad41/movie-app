import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-10">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold cursor-pointer">
          Movie Ratings App
        </Link>
        <div className="flex items-center space-x-8">
          <Button className="px-5 py-2 rounded-md">Login</Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
