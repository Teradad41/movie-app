"use client"

import { signOut } from "@/app/login/action"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserIcon } from "@/components/utils/Icons"
import Link from "next/link"

export const UserIconWrapper = () => {
  const handleSignOutClick = async () => {
    await signOut()
  }

  return (
    <DropdownMenu>
      <div className="mr-6">
        <DropdownMenuTrigger>
          <UserIcon className="w-6 h-6 text-gray-400" />
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent>
        <DropdownMenuLabel className="font-bold text-center">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={"/profile"}>
          <DropdownMenuItem className="cursor-pointer">
            Profile
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={handleSignOutClick}
        >
          <span className="text-red-500">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
