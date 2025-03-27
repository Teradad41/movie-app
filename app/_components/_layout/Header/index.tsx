import Link from "next/link";
import { AuthButton } from "@/components/customs/AuthButton";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-[#141e30] to-[#243b55] py-4 md:py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-white font-bold text-lg md:text-xl transition-colors hover:text-blue-200"
          >
            Movie App
          </Link>
          <div className="flex items-center gap-4">
            <AuthButton />
            {/*<ModeToggle />*/}
          </div>
        </div>
      </div>
    </header>
  );
}
