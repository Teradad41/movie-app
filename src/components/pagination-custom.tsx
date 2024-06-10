"use client"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import type { MouseEvent } from "react"

export function PaginationCustom() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const currentPage = Number(searchParams.get("page")) || 1
  const totalPage = 20

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", String(pageNumber))
    return `${pathname}?${params.toString()}`
  }

  const handleURLChange = (
    e: MouseEvent<HTMLAnchorElement>,
    pageNumber: number,
  ) => {
    e.preventDefault()
    replace(createPageURL(pageNumber))
  }

  const range = 2
  const start = Math.max(1, currentPage - range)
  const end = Math.min(currentPage + range, totalPage)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageURL(currentPage - 1)}
            onClick={(e) => handleURLChange(e, currentPage - 1)}
            className={
              currentPage <= 1
                ? "pointer-events-none opacity-50 text-gray-500"
                : ""
            }
          />
        </PaginationItem>
        {[...Array(end - start + 1)].map((_, index) => (
          <PaginationItem key={String(start + index)}>
            <PaginationLink
              href={createPageURL(start + index)}
              onClick={(e) => {
                handleURLChange(e, index + start)
              }}
              isActive={start + index === currentPage}
            >
              {start + index}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href={createPageURL(currentPage + 1)}
            onClick={(e) => handleURLChange(e, currentPage + 1)}
            className={
              currentPage >= totalPage
                ? "pointer-events-none opacity-50 text-gray-500"
                : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
