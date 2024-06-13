import { StarIcon } from "@/components/icons"
import Image from "next/image"

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
          <div>
            <Image
              src="https://image.tmdb.org/t/p/w300"
              width={600}
              height={900}
              alt="poster-path"
              className="w-full max-w-[400px] mx-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">{}</h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">hhh</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
              </div>
              <span className="text-gray-500 dark:text-gray-400">4.5</span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Plot Summary
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                In the 1940s, a banker named Andy Dufresne is wrongfully
                convicted of murdering his wife and her lover. He is sentenced
                to life imprisonment at the Shawshank State Penitentiary.
                Despite the harsh conditions and abuse from the guards and other
                inmates, Andy befriends a fellow prisoner named Red and uses his
                banking skills to help the corrupt warden and guards embezzle
                money. Over the course of 20 years, Andy works to prove his
                innocence and eventually escapes, exposing the crimes in the
                process.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Cast & Crew
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <Image
                    src="/placeholder.svg"
                    width={100}
                    height={100}
                    alt="Tim Robbins"
                    className="rounded-full"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-medium">Tim Robbins</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      as Andy Dufresne
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Image
                    src="/placeholder.svg"
                    width={100}
                    height={100}
                    alt="Morgan Freeman"
                    className="rounded-full"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-medium">Morgan Freeman</h3>
                    <p className="text-gray-500 dark:text-gray-400">as Red</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Image
                    src="/placeholder.svg"
                    width={100}
                    height={100}
                    alt="Bob Gunton"
                    className="rounded-full"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-medium">Bob Gunton</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      as Warden Samuel Norton
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Image
                    src="/placeholder.svg"
                    width={100}
                    height={100}
                    alt="William Sadler"
                    className="rounded-full"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-medium">William Sadler</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      as Heywood
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Reviews</h2>
              <div className="grid gap-6">
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src="/placeholder.svg"
                      width={40}
                      height={40}
                      alt="User Avatar"
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-medium">John Doe</h3>
                      <div className="flex items-center gap-0.5">
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    The Shawshank Redemption is a true masterpiece of cinema.
                    The performances, the story, the themes - everything comes
                    together to create a truly unforgettable film. This is a
                    must-see for any fan of great storytelling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
