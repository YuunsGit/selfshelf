import { getBook } from "@/lib/book";
import { Metadata } from "next";
import "@/styles/book.css";
import Image from "next/image";
import Description from "@/components/description";
import { getReaders } from "@/lib/loan";
import Location from "@/components/location";
import LoanButton from "@/components/loan-button";
import BookDetails from "@/components/book-details";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const isbn = params.isbn;
  const book = await getBook(isbn);
  const images = book?.cover ? [book?.cover] : [];
  return {
    title: book?.title || "Book Not Found",
    openGraph: {
      images,
      type: "website",
      locale: "en_US",
      url: "https://ss.yunusemre.dev/book/" + isbn,
      title: book?.title,
      description:
        "Explore, borrow, and organize your books effortlessly with Self Shelf.",
      siteName: "Self Shelf",
    },
  };
}

export default async function Book({ params }: { params: { isbn: string } }) {
  const book = await getBook(params.isbn);

  if (!book) notFound();

  const readers = await getReaders(params.isbn);
  const reader = readers?.find((loan) => loan.active);

  return (
    <main className="relative mx-4 max-w-7xl flex-grow rounded-md border border-taupe border-opacity-40 bg-white p-8 text-text shadow-search lg:mx-12 lg:p-16 xl:mx-auto xl:w-full">
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
    </main>
  );
}
