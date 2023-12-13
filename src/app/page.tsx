import { listBooks } from "@/lib/book";
import Books from "@/components/books";

export default async function Home() {
  const books: Book[] | undefined = await listBooks();

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return <Books bookData={books} />;
}
