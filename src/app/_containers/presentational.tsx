import { Suspense } from "react";

import { Footer } from "@/components/customs/Footer";
import Search from "@/components/utils/Search";
import type { Topic } from "../_types";
import { MovieSection } from "../_components/_list/MovieSection";

type Props = {
  topics: Topic[];
};

export function PagePresentational({ topics }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-[#141e30] to-[#243b55] py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Discover the Best Movies
            </h1>
            <p className="text-gray-400 text-lg">
              Search for movies, read reviews, and share your thoughts.
            </p>
            <div className="flex justify-center">
              <Suspense>
                <div className="w-full max-w-md">
                  <Search placeholder="Search for a movie..." />
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </section>
      {topics.map((topic, index) => (
        <MovieSection key={`${topic.title}-${index}`} topic={topic} />
      ))}
      <div className="pt-32">
        <Footer />
      </div>
    </div>
  );
}
