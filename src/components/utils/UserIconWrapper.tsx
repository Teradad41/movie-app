"use client"

import { SignOut } from "@/app/login/action"
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
    await SignOut()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserIcon className="mr-6 w-6 h-6 text-gray-400" />
      </DropdownMenuTrigger>
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
          <span className="text-gray-500">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
