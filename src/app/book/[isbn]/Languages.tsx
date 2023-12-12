"use client";

import Image from "next/image";
import countries from "./countries.json";
import { SyntheticEvent } from "react";

export default function Languages({ book }: { book: Book }) {
  // @ts-ignore
  const hide = (event: SyntheticEvent) => (event.target.style.display = "none");
  return (
    <div className="mx-8 mt-2 flex flex-wrap items-center justify-center gap-2">
      {book.languages.map((lang) => {
        // @ts-ignore
        const langCode = countries[lang];
        return (
          <Image
            src={`https://flagcdn.com/24x18/${langCode ? langCode : lang}.png`}
            onError={(event) => hide(event)}
            key={lang}
            alt={lang}
            width={24}
            height={18}
          />
        );
      })}
    </div>
  );
}
