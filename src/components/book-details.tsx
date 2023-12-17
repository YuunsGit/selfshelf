import {
  BookOpenIcon,
  CalendarIcon,
  LanguageIcon,
} from "@heroicons/react/20/solid";
import Languages from "@/components/languages";

export default function BookDetails({
  book,
  readers,
  className,
}: {
  book: Book;
  readers: Loan[] | undefined;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="rounded-md border border-taupe border-opacity-40 py-4 text-center">
        <h3 className="flex items-center justify-center gap-x-1.5 font-bold text-taupe">
          <BookOpenIcon className="inline h-4 w-4 align-middle" /> Readers
        </h3>
        <p>{readers?.length || "0"} have read</p>
      </div>
      <div className="mt-6 rounded-md border border-taupe border-opacity-40 py-4 text-center">
        <h3 className="flex items-center justify-center gap-x-1.5 font-bold text-taupe">
          <CalendarIcon className="inline h-4 w-4 align-middle" /> Publish Date
        </h3>
        <p>{new Date(book.publishDate).getFullYear()}</p>
      </div>
      <div className="mt-6 rounded-md border border-taupe border-opacity-40 py-4 text-center">
        <h3 className="flex items-center justify-center gap-x-1.5 font-bold text-taupe">
          <LanguageIcon className="inline h-4 w-4 align-middle" /> Languages
        </h3>
        <Languages book={book} />
      </div>
    </div>
  );
}
