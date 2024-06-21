import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-8 mt-auto">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} Movie App</p>
        <nav className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link
            href="#"
            className="hover:text-gray-400 transition-colors"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="hover:text-gray-400 transition-colors"
            prefetch={false}
          >
            Contact
          </Link>
          <Link
            href="#"
            className="hover:text-gray-400 transition-colors"
            prefetch={false}
          >
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  )
}
