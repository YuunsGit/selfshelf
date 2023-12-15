"use client";

import "swiper/css";
import "@/styles/swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/auth-context";
import { BookOpenIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { Dialog } from "@/components/dialog";
import { returnBook } from "@/lib/loan";
import { toast } from "react-toastify";

export function CurrentlyReading({
  currentlyReading,
  userId,
  activeLoans,
}: {
  currentlyReading: (Book | undefined)[] | undefined;
  userId: string;
  activeLoans: Loan[] | undefined;
}) {
  const [books, setBooks] = useState<Book[] | null>(null);
  const [returningBook, setReturningBook] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const user = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    setBooks(currentlyReading as Book[]);
  }, [currentlyReading]);

  const handleReturn = async () => {
    if (returningBook) {
      const loanId =
        activeLoans?.find(
          (loan) => loan.bookId === returningBook && loan.userId === user?.id,
        )?.id || null;
      if (loanId) {
        const result = await returnBook(loanId);
        if (result) {
          toast.success("Book returned successfully!");
          setBooks(
            (prev) => prev?.filter((book) => book.isbn !== returningBook) || [],
          );
        } else {
          toast.error("Something went wrong!");
        }
      } else {
        toast.error("Something went wrong!");
      }
      setReturningBook(null);
    }
  };

  return (
    <>
      <Swiper slidesPerView="auto" loop={false} className="mt-6">
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
                    <button
                      className="h-full hover:text-gray-300"
                      onClick={() => router.push(`/book/${book.isbn}`)}
                    >
                      <BookOpenIcon className="mx-auto h-8 w-8" /> View
                    </button>
                    {user?.id === userId && (
                      <button
                        disabled={!!returningBook}
                        onClick={() => {
                          setReturningBook(book?.isbn);
                          setDialogOpen(true);
                        }}
                        className="h-full hover:text-red-400"
                      >
                        <ArrowUturnLeftIcon className="mx-auto h-8 w-8" />
                        Return
                      </button>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ),
        )}
      </Swiper>
      {dialogOpen && (
        <Dialog
          title="Returning the book"
          content="Are you sure you want to return this book?"
          confirmButton="Return"
          type="danger"
          onConfirm={() => {
            handleReturn();
            setDialogOpen(false);
          }}
          onCancel={() => {
            setDialogOpen(false);
            setReturningBook(null);
          }}
          setDialogOpen={setDialogOpen}
        />
      )}
    </>
  );
}
