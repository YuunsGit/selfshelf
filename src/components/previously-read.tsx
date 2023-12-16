import "swiper/css";
import "@/styles/swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export function PreviouslyRead({
  books,
}: {
  books: (Book | undefined)[] | undefined;
}) {
  return (
    <Swiper
      slidesPerView="auto"
      touchStartForcePreventDefault
      loop={false}
      className="mt-6"
    >
      {books?.map(
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
                  <Link
                    href={`/book/${book.isbn}`}
                    draggable={false}
                    className="flex h-full flex-col items-center justify-center hover:text-cream"
                  >
                    <BookOpenIcon className="mx-auto h-8 w-8" /> View
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ),
      )}
    </Swiper>
  );
}
