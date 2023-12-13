"use client";

import Image from "next/image";
import countries from "../config/countries.json";
import { SyntheticEvent } from "react";

export default function Languages({ book }: { book: Book }) {
  const hide = (event: SyntheticEvent) =>
    ((event.target as HTMLElement).style.display = "none");
  return (
    <div className="mx-8 mt-2 flex flex-wrap items-center justify-center gap-2">
      {book.languages.map((lang) => {
        const langCode = countries[lang as keyof typeof countries];
        return (
          <Image
            src={`https://flagcdn.com/32x24/${langCode ? langCode : lang}.png`}
            onError={(event) => hide(event)}
            key={lang}
            alt={lang}
            quality={100}
            width={24}
            height={18}
          />
        );
      })}
    </div>
  );
}
