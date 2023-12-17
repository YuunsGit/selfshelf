"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { SearchContext } from "@/context/search-context";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Search({ className }: { className?: string }) {
  const { setSearch } = useContext(SearchContext);
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" && (
        <div
          className={cn(
            "mx-auto flex h-fit max-w-md space-x-4 rounded-md border-taupe border-opacity-60 bg-white px-4 py-2 text-text shadow-search sm:w-full",
            className,
          )}
        >
          <MagnifyingGlassIcon className="inline h-6 w-6" />
          <input
            type="search"
            placeholder="Search for a book"
            className="flex-1 outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}
    </>
  );
}
