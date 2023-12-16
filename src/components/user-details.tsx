"use client";

import { formatDate } from "@/lib/utils";
import Image from "next/image";
import ReadingList from "@/components/reading-list";

export default function UserDetails({
  books,
  userLoans,
  user,
}: {
  books: Book[] | undefined;
  userLoans: Loan[] | undefined;
  user: User;
}) {
  const sortLoanDate = (a: Loan, b: Loan) => {
    if (a.loanDate && b.loanDate) return a.loanDate > b.loanDate ? -1 : 1;
    else return 0;
  };

  const findBooks = (loan: Loan) =>
    books?.find((book) => book.isbn === loan.bookId);

  const activeLoans = userLoans
    ?.filter((loan) => loan.active)
    .sort(sortLoanDate);
  const deactivateLoans = userLoans
    ?.filter((loan) => !loan.active)
    .sort(sortLoanDate);

  const currentlyReading = activeLoans?.map(findBooks);
  const previouslyRead = Array.from(new Set(deactivateLoans?.map(findBooks)));

  const getBadge = (num: number) => {
    if (num < 1 / 4) return "/silver.svg";
    else if (num < 2 / 4) return "/diamond.svg";
    else if (num < 3 / 4) return "/emerald.svg";
    return "/crown.svg";
  };

  return (
    <>
      <div className="flex justify-between pb-10">
        <div>
          <h1 className="text-4xl font-bold">{user.name}</h1>
          <p className="mt-3">Member since {formatDate(user.createdAt)}</p>
        </div>
        <div className="flex items-center justify-center gap-x-5 rounded border-taupe border-opacity-40 px-6 py-4 shadow-search">
          <Image
            src={getBadge(previouslyRead?.length / (books?.length || 0))}
            alt="Badge of the user"
            width={50}
            height={50}
            className="drop-shadow-lg"
          />
          <div className="flex flex-col justify-center gap-y-1">
            <div className="h-6 w-64 rounded border border-taupe border-opacity-40 bg-gray-100 p-1 shadow-search">
              <div
                className="h-full rounded"
                style={{
                  width: `${
                    ((previouslyRead?.length || 0) / (books?.length || 1)) * 100
                  }%`,
                }}
              >
                <div className="h-1/2 w-full rounded-t bg-tangerine" />
                <div className="h-1/2 w-full rounded-b bg-bronze" />
              </div>
            </div>
            <p>
              Read <b>{previouslyRead?.length}</b> out of <b>{books?.length}</b>{" "}
              books
            </p>
          </div>
        </div>
      </div>
      <ReadingList
        currentlyReading={currentlyReading}
        previouslyRead={previouslyRead}
        activeLoans={activeLoans}
        userId={user.id}
      />
    </>
  );
}
