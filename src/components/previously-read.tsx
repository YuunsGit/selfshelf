import "swiper/css";
import "@/styles/swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useContext } from "react";
import { ProfileContext } from "@/context/profile-context";

export function PreviouslyRead() {
  const { previouslyReadList } = useContext(ProfileContext);

  return (
    <Swiper
      slidesPerView="auto"
      touchStartForcePreventDefault
      loop={false}
      className="relative mt-6"
    >
      {previouslyReadList?.map(
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
      {previouslyReadList?.length > 0 && (
        <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-transparent to-white"></div>
      )}
      {previouslyReadList?.length === 0 && (
        <div className="mr-8 w-fit rounded border border-dashed border-taupe border-opacity-40 p-4 shadow-search">
          <div className="flex h-[225px] w-[150px] flex-col items-center justify-center gap-y-1 rounded px-2 text-center">
            <p>Haven&apos;t read a book yet</p>
          </div>
        </div>
      )}
    </Swiper>
  );
}
