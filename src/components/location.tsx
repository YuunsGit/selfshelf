"use client";

import { useEffect } from "react";
import Library from "@/components/library";

export default function Location({ location }: { location: string }) {
  const patt1 = /[0-9]+/g;
  const patt2 = /[A-Z]/g;
  const letters = location.match(patt2);
  const digits = location.match(patt1);
  const letter = letters ? letters[0].replace("Y", "X").replace("Z", "X") : "";

  useEffect(() => {
    if (letters && digits) {
      document.getElementById(digits[0])?.setAttribute("fill", "#00A36C");
      document.getElementById(letter)?.setAttribute("fill", "#00A36C");
      document.getElementById(letter)?.setAttribute("stroke-width", "8");
      document.getElementById(letter)?.setAttribute("stroke", "#786552");
    }
  }, []);

  return (
    <div className="mt-16 space-y-8 text-center text-text">
      <h2 className="text-2xl font-bold">
        Location in the library: <b className="text-bronze">{location}</b>
      </h2>
      <Library />
    </div>
  );
}
