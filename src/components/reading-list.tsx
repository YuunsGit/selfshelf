"use client";

import { CurrentlyReading } from "@/components/currently-reading";
import { PreviouslyRead } from "@/components/previously-read";
import { useEffect, useState } from "react";

export default function ReadingList({
  currentlyReading,
  previouslyRead,
  activeLoans,
  userId,
}: {
  currentlyReading: (Book | undefined)[] | undefined;
  previouslyRead: (Book | undefined)[] | undefined;
  activeLoans: Loan[] | undefined;
  userId: string | undefined;
}) {
  const [currentlyReadingList, setCurrentlyReadingList] = useState<
    (Book | undefined)[]
  >([]);
  const [previouslyReadList, setPreviouslyReadList] = useState<
    (Book | undefined)[]
  >([]);

  useEffect(() => {
    setCurrentlyReadingList(currentlyReading || []);
    setPreviouslyReadList(previouslyRead || []);
  }, [currentlyReading, previouslyRead]);

  const updatePreviouslyRead = (book: Book) => {
    setPreviouslyReadList((prev) => {
      const newPrev = [...prev].filter((b) => b?.isbn !== book.isbn);
      newPrev.unshift(book);
      return newPrev;
    });
  };

  return (
    <>
      <div className="py-10">
        <h2 className="text-xl font-bold">Currently reading:</h2>
        <CurrentlyReading
          books={currentlyReadingList}
          setBooks={setCurrentlyReadingList}
          updatePreviouslyRead={updatePreviouslyRead}
          activeLoans={activeLoans}
          userId={userId || ""}
        />
      </div>
      <div className="pt-10">
        <h2 className="text-xl font-bold">Previously read:</h2>
        <PreviouslyRead books={previouslyReadList} />
      </div>
    </>
  );
}
