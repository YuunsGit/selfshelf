import { listBooks } from "@/api/book";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Loading from "@/animations/Loading";
import { SearchContext } from "@/context/SearchContext";
import Link from "next/link";

export default function Books() {
  const [books, setBooks] = useState<Book[] | undefined>(undefined);
  const [displayedBooks, setDisplayedBooks] = useState<
    (Book | null)[] | undefined
  >(undefined);
  const { search } = useContext(SearchContext);

  useEffect(() => {
    const toDisplay: (Book | null)[] | undefined = books?.filter((book) =>
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
    listBooks().then((books) => setBooks(books));
  }, []);

  useEffect(() => {
    if (books) setDisplayedBooks(books);
  }, [books]);

  return (
    <main className="mx-auto my-4 max-w-6xl flex-grow text-center">
      <h1 className="text-4xl font-bold text-text">&bull; Library &bull;</h1>
      {displayedBooks ? (
        <div className="mt-16 grid grid-cols-4 place-items-center gap-y-12">
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
                  className="-z-10 col-span-4 -translate-y-16"
                  style={{
                    filter: "drop-shadow(0px 20px 15px #222)",
                  }}
                />
              )}
            </>
          ))}
        </div>
      ) : (
        <div className="mt-24">
          <Loading />
        </div>
      )}
    </main>
  );
}
