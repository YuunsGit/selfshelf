"use client";

import "swiper/css";
import "@/styles/swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export function PreviouslyRead({
  previouslyRead,
}: {
  previouslyRead: (Book | undefined)[] | undefined;
}) {
  const router = useRouter();

  return (
    <Swiper slidesPerView="auto" loop={false} className="mt-6">
      {previouslyRead?.map(
        (book) =>
          book && (
            <SwiperSlide
              key={book.isbn}
              className="mr-8 w-fit rounded border border-taupe border-opacity-40 bg-taupe bg-opacity-10 p-4 shadow-search"
            >
              <div className="group relative w-fit">
                <Image
                  alt={book.title}
                  src={book.cover}
                  width={150}
                  height={225}
                  quality={50}
                  className="h-[225px] w-[150px] rounded"
                />
                <div className="absolute top-0 flex h-full w-full flex-col items-stretch justify-around rounded font-bold text-white opacity-0 group-hover:divide-y group-hover:divide-gray-400 group-hover:divide-opacity-50 group-hover:bg-black group-hover:bg-opacity-70 group-hover:opacity-100 group-hover:transition-all">
                  <button
                    className="h-full hover:text-gray-300"
                    onClick={() => router.push(`/book/${book.isbn}`)}
                  >
                    <BookOpenIcon className="mx-auto h-8 w-8" /> View
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ),
      )}
    </Swiper>
  );
}
