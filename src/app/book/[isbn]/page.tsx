import { getBook } from "@/lib/book";
import { Metadata } from "next";
import "@/styles/book.css";
import Image from "next/image";
import Description from "@/components/description";
import {
  BookOpenIcon,
  CalendarIcon,
  LanguageIcon,
} from "@heroicons/react/20/solid";
import { getReaders } from "@/lib/loan";
import Languages from "@/components/languages";
import Location from "@/components/location";
import LoanButton from "@/components/loan-button";
import BookDetails from "@/components/book-details";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const isbn = params.isbn;
  const book = await getBook(isbn);
  const images = book?.cover ? [book?.cover] : [];
  return {
    title: book?.title || "Book Not Found",
    openGraph: {
      images,
    },
  };
}

export default async function Book({ params }: { params: { isbn: string } }) {
  const book = await getBook(params.isbn);
  const readers = await getReaders(params.isbn);
  const reader = readers?.find((loan) => loan.active);

  return (
    <main className="relative mx-4 max-w-7xl flex-grow rounded-md border border-taupe border-opacity-40 bg-white p-8 text-text shadow-search lg:mx-12 lg:p-16 xl:mx-auto xl:w-full">
      {book ? (
        <div className="flex flex-col items-start lg:flex-row lg:space-x-24">
          <div className="mx-auto mb-8 flex flex-col space-y-16 lg:mb-0">
            <div className="book-container-page mx-auto my-6 w-fit">
              <div className="book-page">
                <Image
                  priority
                  alt={book.cover}
                  height={300}
                  width={200}
                  src={book.cover}
                />
              </div>
            </div>
            <BookDetails
              book={book}
              readers={readers}
              className="hidden lg:block"
            />
          </div>
          <div>
            <div className="flex flex-col justify-between lg:flex-row">
              <div>
                <h1 className="text-4xl font-bold text-text">{book.title}</h1>
                <p>by {book.author}</p>
              </div>
              <LoanButton reader={reader} isbn={book.isbn} />
            </div>
            <Description content={book.description} />
            <BookDetails
              book={book}
              readers={readers}
              className="blkoc lg:hidden"
            />
            <Location location={book.location} />
          </div>
        </div>
      ) : (
        <div className="absolute left-0 right-0 top-1/2 flex h-full -translate-y-1/2 flex-col items-center justify-center">
          <Image
            src="/book-not-found.svg"
            alt="Book not found"
            width={350}
            height={350}
          />
          <p className="w-56 text-center text-lg">
            We couldn&apos;t find the book you are looking for
          </p>
        </div>
      )}
    </main>
  );
}
