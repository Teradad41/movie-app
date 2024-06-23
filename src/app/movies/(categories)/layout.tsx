import { MyPagination } from "@/components/utils/MyPagination"
import type React from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="space-y-10">
        {children}
        <div className="pt-4 sm:pt-6 md:pt-8 pb-10 md:pb-0">
          <MyPagination />
        </div>
      </div>
    </>
  )
}
