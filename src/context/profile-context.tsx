"use client";

import React, { createContext, Dispatch, SetStateAction } from "react";

export const ProfileContext = createContext<{
  currentlyReadingList: (Book | undefined)[];
  setCurrentlyReadingList: Dispatch<SetStateAction<(Book | undefined)[]>>;
  previouslyReadList: (Book | undefined)[];
  setPreviouslyReadList: Dispatch<SetStateAction<(Book | undefined)[]>>;
}>({
  currentlyReadingList: [],
  setCurrentlyReadingList: () => {},
  previouslyReadList: [],
  setPreviouslyReadList: () => {},
});
