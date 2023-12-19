import { Metadata } from "next";
import { getUser } from "@/lib/user";
import { getLoans } from "@/lib/loan";
import { listBooks } from "@/lib/book";
import UserDetails from "@/components/user-details";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const id = params.id;
  const user = await getUser(id);
  return {
    title: user?.name || "User Not Found",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://ss.yunusemre.dev/profile/" + id,
      title: user?.name + "'s Profile",
      description:
        "Explore, borrow, and organize your books effortlessly with Self Shelf.",
      images: "/og.jpg",
      siteName: "Self Shelf",
    },
  };
}

export default async function User({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);

  if (!user) notFound();

  const userLoans = await getLoans(params.id);
  const books = await listBooks();

  return (
    <main className="relative mx-4 max-w-7xl flex-grow divide-y rounded-md border border-taupe border-opacity-40 bg-white p-8 text-text shadow-search lg:mx-12 lg:p-16 xl:mx-auto xl:w-full">
      <UserDetails books={books} userLoans={userLoans} user={user} />
    </main>
  );
}
