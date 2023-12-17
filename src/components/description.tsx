"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function Description({ content }: { content: string }) {
  const [extended, setExtended] = useState<boolean | null>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descRef.current && descRef.current.clientHeight > 144)
      setExtended(false);
  }, [descRef.current]);

  return (
    <div className="mb-10 lg:mb-0">
      <div className="relative mt-6 overflow-hidden">
        <p
          ref={descRef}
          className={cn(extended === false && "line-clamp-6", "duration-300")}
          dangerouslySetInnerHTML={{
            __html: content.replaceAll(
              /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*)[-A-Z0-9+&@#\/%=~_|])/gi,
              "<a href='$1' target='_blank' rel='noopener noreferrer' class='text-tangerine hover:text-bronze'>$3</a>",
            ),
          }}
        />
        <div className="absolute bottom-0 w-full items-end align-bottom">
          {extended === false && (
            <div className="h-16 w-full bg-gradient-to-b from-transparent to-white" />
          )}
        </div>
      </div>
      {extended !== null && (
        <button
          onClick={() => setExtended(!extended)}
          className="mt-2 bg-white text-left text-bronze ring-0"
        >
          Read {extended ? "less ▴" : "more ▾"}
        </button>
      )}
    </div>
  );
}
