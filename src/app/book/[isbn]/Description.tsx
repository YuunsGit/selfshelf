"use client";

import { useEffect, useRef, useState } from "react";

export default function Description({ content }: { content: string }) {
  const [extended, setExtended] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [descriptionHeight, setDescriptionHeight] = useState<number>(0);

  useEffect(() => {
    if (descriptionRef.current)
      setDescriptionHeight(descriptionRef.current.offsetHeight);
  }, [descriptionRef.current]);

  return (
    <>
      <div
        className="relative max-h-44 overflow-hidden duration-300"
        style={{
          maxWidth: descriptionHeight > 176 ? (extended ? "600px" : "") : "",
        }}
      >
        <p
          className="mt-6"
          ref={descriptionRef}
          dangerouslySetInnerHTML={{
            __html: content.replaceAll(
              /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*)[-A-Z0-9+&@#\/%=~_|])/gi,
              "<a href='$1' target='_blank' rel='noopener noreferrer' class='text-tangerine hover:text-bronze'>$3</a>",
            ),
          }}
        />
        <div className="absolute bottom-0 flex w-full flex-col items-end align-bottom">
          {!extended && descriptionHeight > 176 && (
            <div className="h-16 w-full bg-gradient-to-b from-transparent to-white" />
          )}
        </div>
      </div>
      {descriptionHeight > 176 && (
        <button
          onClick={() => setExtended(!extended)}
          className="mt-2 w-full bg-white text-left text-bronze ring-0"
        >
          Read more {extended ? "▴" : "▾"}
        </button>
      )}
    </>
  );
}
