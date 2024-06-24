"use client"

import { HeartIconForFavoriteTab, ReviewIcon } from "@/components/utils/Icons"
import type { Tab } from "@/lib/definitions"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function MovieTabs() {
  const currentPath = usePathname()
  const currentTab = (currentPath.split("/")[2] as Tab) || "now-playing"
  const [activeTab, setActiveTab] = useState<Tab>(currentTab)

  useEffect(() => {
    setActiveTab(currentTab)
  }, [currentTab])

  const tabClasses = (tab: Tab) =>
    `inline-block p-4 border-b-2 rounded-t-lg ${
      activeTab === tab
        ? "border-gray-700 text-gray-700 dark:text-white" +
          " dark:border-white font-bold"
        : "border-transparent hover:text-gray-600 hover:border-gray-300" +
          " dark:hover:text-gray-300"
    }`

  return (
    <div className="flex mb-4 border-b-2 border-gray-200 dark:border-gray-700 justify-between">
      <ul
        className="flex flex-wrap -mb-px text-sm font-medium text-center"
        id="default-tab"
        data-tabs-toggle="#default-tab-content"
        role="tablist"
      >
        <li className="me-2" role="presentation">
          <Link
            href="/movies/now-playing"
            className={tabClasses("now-playing")}
            aria-selected={activeTab === "now-playing"}
          >
            Now Playing
          </Link>
        </li>
        <li className="me-2" role="presentation">
          <Link
            href={"/movies/popular"}
            className={tabClasses("popular")}
            aria-selected={activeTab === "popular"}
          >
            Popular
          </Link>
        </li>
        <li className="me-2" role="presentation">
          <Link
            href="/movies/top-rated"
            className={tabClasses("top-rated")}
            aria-selected={activeTab === "top-rated"}
          >
            Top Rated
          </Link>
        </li>
        <li className="me-2" role="presentation">
          <Link
            href="/movies/upcoming"
            className={tabClasses("upcoming")}
            aria-selected={activeTab === "upcoming"}
          >
            Upcoming
          </Link>
        </li>
        <li className="me-2" role="presentation">
          <Link
            href="/movies/trending"
            className={tabClasses("trending")}
            aria-selected={activeTab === "trending"}
          >
            Trending
          </Link>
        </li>
      </ul>
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
        <li className="me-2" role="presentation">
          <Link
            href="/movies/favorites"
            className={tabClasses("favorites")}
            aria-selected={activeTab === "favorites"}
          >
            <div className="flex gap-x-1.5">
              <HeartIconForFavoriteTab />
              <p>Favorite</p>
            </div>
          </Link>
        </li>
        <li role="presentation">
          <Link
            href="/movies/reviews"
            className={tabClasses("reviews")}
            aria-selected={activeTab === "reviews"}
          >
            <div className="flex gap-x-1.5">
              <ReviewIcon />
              <p>Review</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}
