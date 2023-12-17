import Image from "next/image";
import { useContext } from "react";
import { ProfileContext } from "@/context/profile-context";

export default function Badge({ books }: { books: Book[] | undefined }) {
  const { previouslyReadList } = useContext(ProfileContext);

  const getBadge = (num: number) => {
    if (num < 1 / 4) return "/silver.svg";
    else if (num < 2 / 4) return "/diamond.svg";
    else if (num < 3 / 4) return "/emerald.svg";
    return "/crown.svg";
  };

  return (
    <div className="flex items-center justify-center gap-x-5 rounded border-taupe border-opacity-40 px-4 py-4 shadow-search sm:px-6">
      <Image
        src={getBadge(previouslyReadList?.length / (books?.length || 0))}
        alt="Badge of the user"
        width={50}
        height={50}
        className="drop-shadow-lg"
      />
      <div className="flex flex-col justify-center gap-y-1">
        <div className="h-6 w-36 rounded border border-taupe border-opacity-40 bg-gray-100 p-1 shadow-search sm:w-64">
          <div
            className="h-full rounded"
            style={{
              width: `${
                ((previouslyReadList?.length || 0) / (books?.length || 1)) * 100
              }%`,
            }}
          >
            <div className="h-1/2 w-full rounded-t bg-tangerine" />
            <div className="h-1/2 w-full rounded-b bg-bronze" />
          </div>
        </div>
        <p>
          Read <b>{previouslyReadList?.length}</b> out of <b>{books?.length}</b>{" "}
          books
        </p>
      </div>
    </div>
  );
}
