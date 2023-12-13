"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export const SearchContext = createContext<{
  search: string | null;
  setSearch: Dispatch<SetStateAction<string | null>>;
}>({
  search: null,
  setSearch: () => {},
});

export default function SearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState<string | null>(null);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
