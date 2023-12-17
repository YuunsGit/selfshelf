"use client";

import { formatDate } from "@/lib/utils";
import { ProfileContext } from "@/context/profile-context";
import Badge from "@/components/badge";
import { useEffect, useState } from "react";
import { CurrentlyReading } from "@/components/currently-reading";
import { PreviouslyRead } from "@/components/previously-read";

export default function UserDetails({
  books,
  userLoans,
  user,
}: {
  books: Book[] | undefined;
  userLoans: Loan[] | undefined;
  user: User;
}) {
  const [currentlyReadingList, setCurrentlyReadingList] = useState<
    (Book | undefined)[]
  >([]);
  const [previouslyReadList, setPreviouslyReadList] = useState<
    (Book | undefined)[]
  >([]);

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

  useEffect(() => {
    setCurrentlyReadingList(currentlyReading || []);
    setPreviouslyReadList(previouslyRead || []);
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        currentlyReadingList,
        setCurrentlyReadingList,
        previouslyReadList,
        setPreviouslyReadList,
      }}
    >
      <div className="flex flex-col justify-between gap-y-10 pb-10 lg:flex-row">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            {user.name}
          </h1>
          <p className="mt-3">Member since {formatDate(user.createdAt)}</p>
        </div>
        <Badge books={books} />
      </div>
      <div className="py-10">
        <h2 className="text-xl font-bold">Currently reading:</h2>
        <CurrentlyReading activeLoans={activeLoans} userId={user.id} />
      </div>
      <div className="pt-10">
        <h2 className="text-xl font-bold">Previously read:</h2>
        <PreviouslyRead />
      </div>
    </ProfileContext.Provider>
  );
}
