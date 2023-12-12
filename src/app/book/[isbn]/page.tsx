// @ts-ignore
import { getBook } from "@/api/book";
import { Metadata } from "next";
import "./book.css";
import Image from "next/image";
import Description from "@/app/book/[isbn]/Description";
import {
  BookOpenIcon,
  CalendarIcon,
  LanguageIcon,
} from "@heroicons/react/20/solid";
import { getReaders } from "@/api/loan";
import Languages from "@/app/book/[isbn]/Languages";
import Location from "@/app/book/[isbn]/Location";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const isbn = params.isbn;
  const book = await getBook(isbn);
  const imgs = book?.cover ? [book?.cover] : [];
  return {
    title: book?.title || "Unknown Book",
    openGraph: {
      images: imgs,
    },
  };
}

export default async function Book({ params }: { params: { isbn: string } }) {
  const book = await getBook(params.isbn);
  const readers = await getReaders(params.isbn);

  return (
    <main className="mx-auto w-full max-w-7xl flex-grow rounded-md border border-taupe border-opacity-40 bg-white p-16 text-text shadow-search">
      {book ? (
        <div className="flex items-start space-x-24">
          <div className="flex flex-col space-y-16">
            <div className="book-container-page w-fit">
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
            <div>
              <div className="rounded-md border border-taupe border-opacity-40 py-4 text-center">
                <h3 className="flex items-center justify-center gap-x-1.5 font-bold text-taupe">
                  <BookOpenIcon className="inline h-4 w-4 align-middle" />{" "}
                  Readers
                </h3>
                <p>{readers?.length || "0"} have read</p>
              </div>
              <div className="mt-6 rounded-md border border-taupe border-opacity-40 py-4 text-center">
                <h3 className="flex items-center justify-center gap-x-1.5 font-bold text-taupe">
                  <CalendarIcon className="inline h-4 w-4 align-middle" />{" "}
                  Publish Date
                </h3>
                <p>{new Date(book.publishDate).getFullYear()}</p>
              </div>
              <div className="mt-6 rounded-md border border-taupe border-opacity-40 py-4 text-center">
                <h3 className="flex items-center justify-center gap-x-1.5 font-bold text-taupe">
                  <LanguageIcon className="inline h-4 w-4 align-middle" />{" "}
                  Languages
                </h3>
                <Languages book={book} />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-4xl font-bold text-text">{book.title}</h1>
              <p>by {book.author}</p>
            </div>
            <Description content={book.description} />
            <Location location={book.location} />
          </div>
        </div>
      ) : (
        <div>Book not found</div>
      )}
    </main>
  );
}
