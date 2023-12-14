import { listBooks } from "@/lib/book";
import Books from "@/components/books";

export default async function Home() {
  const books: Book[] | undefined = await listBooks();

  return <Books bookData={books} />;
}
