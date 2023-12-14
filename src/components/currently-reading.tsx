"use client";

import Link from "next/link";
import Image from "next/image";

import { register } from "swiper/element/bundle";
register();

export default function CurrentlyReading({
  books,
}: {
  books: (Book | undefined)[] | undefined;
}) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold">Currently reading:</h2>
      <div className="mt-6 flex gap-x-10 overflow-hidden">
        {books?.map(
          (book) =>
            book && (
              <Link
                className="book-container w-fit"
                href={`/book/${book.isbn}`}
                key={book.isbn}
              >
                <div className="book">
                  <Image
                    alt={book.title}
                    src={book.cover}
                    width={150}
                    height={250}
                    quality={50}
                  />
                </div>
              </Link>
            ),
        )}
      </div>
    </div>
  );
}
