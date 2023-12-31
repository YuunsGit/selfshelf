"use client";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/context/search-context";
import Link from "next/link";

export default function Books({ bookData }: { bookData: Book[] | undefined }) {
  const [displayedBooks, setDisplayedBooks] = useState<
    (Book | null)[] | undefined
  >(undefined);
  const { search } = useContext(SearchContext);

  useEffect(() => {
    const toDisplay: (Book | null)[] | undefined = bookData?.filter((book) =>
      book.title.toLowerCase().includes(search?.toLowerCase() || ""),
    );
    if (toDisplay && toDisplay.length % 4 !== 0) {
      for (let i = 0; i < toDisplay.length % 4; i++) {
        toDisplay.push(null);
      }
    }
    setDisplayedBooks(toDisplay);
  }, [search]);

  useEffect(() => {
    if (bookData) setDisplayedBooks(bookData);
  }, [bookData]);

  return (
    <main className="mx-auto my-12 max-w-6xl flex-grow text-center lg:my-4">
      <h1 className="text-4xl font-bold text-text">&bull; Library &bull;</h1>
      <div className="mt-16 grid grid-cols-2 place-items-center gap-x-10 gap-y-12 px-8 sm:grid-cols-3 md:grid-cols-4 md:gap-x-0">
        {displayedBooks?.map((book, index) => (
          <>
            {book ? (
              <Link
                className="book-container w-fit"
                href={`/book/${book.isbn}`}
                key={book.isbn}
              >
                <div className="book">
                  <Image
                    priority={index < 10}
                    alt={book.title}
                    src={book.cover}
                    width={150}
                    height={250}
                    quality={50}
                  />
                </div>
              </Link>
            ) : (
              <div />
            )}
            {(index + 1) % 4 === 0 && (
              <Image
                priority={index < 10}
                src="/shelf.png"
                width={1400}
                height={50}
                alt="Shelf"
                className="-z-10 col-span-4 hidden -translate-y-16 md:block"
                style={{
                  filter: "drop-shadow(0px 20px 15px #222)",
                }}
              />
            )}
          </>
        ))}
      </div>
      {displayedBooks?.length === 0 && (
        <div className="flex h-full flex-col justify-center">
          <Image
            src="/book-not-found.svg"
            alt="Book not found"
            width={350}
            height={350}
          />
          <p className="text-lg">Searched book not found</p>
        </div>
      )}
    </main>
  );
}
