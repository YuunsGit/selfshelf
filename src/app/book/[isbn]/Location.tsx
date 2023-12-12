"use client";

import { useEffect } from "react";
import Library from "@/app/book/[isbn]/Library";

export default function Location({ location }: { location: string }) {
  const patt1 = /[0-9]/g;
  const patt2 = /[a-zA-Z]/g;
  const letters = location.match(patt2);
  const digits = location.match(patt1);

  useEffect(() => {
    if (letters && digits) {
      document.getElementById(digits[0])?.setAttribute("fill", "green");
      document
        .getElementById(digits[0] as string)
        ?.setAttribute("fill", "green");
      document
        .getElementById(letters[0] as string)
        ?.setAttribute("fill", "green");
      document
        .getElementById(letters[0] as string)
        ?.setAttribute("strokeWidth", "8");
      document
        .getElementById(letters[0] as string)
        ?.setAttribute("stroke", "#786552");
    }
  }, []);

  return (
    <div className="mt-16 space-y-8 text-center text-text">
      <h2 className="text-2xl font-bold">Location in the library</h2>
      <Library />
    </div>
  );
}
