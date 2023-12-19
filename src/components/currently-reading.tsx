import "swiper/css";
import "@/styles/swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/auth-context";
import { BookOpenIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { Dialog } from "@/components/dialog";
import { returnBook } from "@/lib/loan";
import { toast } from "react-toastify";
import Link from "next/link";
import { ProfileContext } from "@/context/profile-context";

export function CurrentlyReading({
  userId,
  activeLoans,
}: {
  userId: string;
  activeLoans: Loan[] | undefined;
}) {
  const {
    currentlyReadingList,
    setCurrentlyReadingList,
    setPreviouslyReadList,
  } = useContext(ProfileContext);
  const user = useContext(AuthContext);

  const [returningBook, setReturningBook] = useState<Book | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleReturn = async () => {
    const loanId =
      activeLoans?.find(
        (loan) =>
          loan.bookId === returningBook?.isbn && loan.userId === user?.id,
      )?.id || null;

    if (loanId) {
      const result = await returnBook(loanId);
      if (result) {
        setCurrentlyReadingList(
          (prev) =>
            prev?.filter((book) => book?.isbn !== returningBook?.isbn) || [],
        );
        setPreviouslyReadList((prev) => {
          const newPrev = [...prev].filter(
            (b) => b?.isbn !== returningBook?.isbn,
          );
          newPrev.unshift(returningBook as Book);
          return newPrev;
        });
        toast.success("Book returned successfully");
      } else {
        toast.error("Something went wrong");
      }
    } else {
      toast.error("Something went wrong");
    }
    setReturningBook(null);
  };

  return (
    <>
      <Swiper slidesPerView="auto" loop={false} className="relative mt-6">
        {currentlyReadingList?.map(
          (book) =>
            book && (
              <SwiperSlide
                key={book.isbn}
                className="mr-8 w-fit rounded border border-taupe border-opacity-40 bg-taupe bg-opacity-10 p-4 shadow-search"
              >
                <div className="group relative w-fit">
                  <Image
                    priority
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
                    {user?.id === userId && (
                      <button
                        disabled={!!returningBook}
                        onClick={() => {
                          setReturningBook(book);
                          setDialogOpen(true);
                        }}
                        draggable={false}
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
        {currentlyReadingList?.length > 0 && (
          <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-transparent to-white"></div>
        )}
        {currentlyReadingList?.length === 0 && (
          <div className="mr-8 w-fit rounded border border-dashed border-taupe border-opacity-40 p-4 shadow-search">
            <div className="flex h-[225px] w-[150px] flex-col items-center justify-center gap-y-1 rounded text-center">
              <p>Not reading a book currently</p>
              {user?.id === userId && (
                <Link
                  href="/"
                  className="font-bold text-bronze underline hover:text-tangerine"
                >
                  Loan a book
                </Link>
              )}
            </div>
          </div>
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
        />
      )}
    </>
  );
}
