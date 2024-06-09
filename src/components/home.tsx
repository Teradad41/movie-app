import Search from "@/components/search"
import { StarIcon } from "@/components/star-icon"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-900 py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Discover the Best Movies
            </h1>
            <p className="text-gray-400 text-lg">
              Search for movies, read reviews, and share your thoughts.
            </p>
            <form className="flex items-center max-w-xl mx-auto">
              <Search placeholder="Search for a movie..." />
            </form>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl font-bold mb-2">Latest Movies</h2>
            <p className="text-gray-500">
              Check out the latest movie releases.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <Card key={index}>
                <Image
                  src="/placeholder.svg"
                  width={400}
                  height={600}
                  alt={`Movie ${index + 1}`}
                  className="rounded-t-md object-cover w-full h-64"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2">Movie {index + 1}</h3>
                  <p className="text-gray-500 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <StarIcon className="w-5 h-5" />
                      <span>4.5</span>
                    </div>
                    <Link
                      href="#"
                      className="text-primary hover:underline"
                      prefetch={false}
                    >
                      View More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl font-bold mb-2">Movie Reviews</h2>
            <p className="text-gray-500">
              Read reviews from other users and share your own thoughts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-10 h-10 mr-4">
                      <Image
                        src="/placeholder.svg"
                        width={300}
                        height={300}
                        alt={`User ${index + 1}`}
                      />
                      <AvatarFallback>U{index + 1}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-bold">User {index + 1}</h4>
                      <p className="text-gray-500">2 days ago</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus at augue eget arcu dictum varius duis at consectetur
                    lorem.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <StarIcon className="w-5 h-5" />
                      <span>4.5</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:bg-primary/10 focus:ring-2 focus:ring-primary focus:outline-none"
                    >
                      View Review
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 md:mt-12 text-center">
            <Button className="bg-primary font-bold py-3 rounded-md hover:bg-primary/80 focus:ring-2 focus:ring-primary focus:outline-none">
              Write a Review
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
