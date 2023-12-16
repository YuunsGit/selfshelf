import { Metadata } from "next";
import { getUser } from "@/lib/user";
import { getLoans } from "@/lib/loan";
import { listBooks } from "@/lib/book";
import Image from "next/image";
import UserDetails from "@/components/user-details";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const id = params.id;
  const user = await getUser(id);
  return {
    title: user?.name || "User Not Found",
  };
}

export default async function User({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);
  const userLoans = await getLoans(params.id);
  const books = await listBooks();

  return (
    <main className="relative mx-auto w-full max-w-7xl flex-grow divide-y rounded-md border border-taupe border-opacity-40 bg-white p-16 text-text shadow-search">
      {user ? (
        <UserDetails books={books} userLoans={userLoans} user={user} />
      ) : (
        <div className="absolute left-0 right-0 top-1/2 flex h-full -translate-y-1/2 flex-col items-center justify-center">
          <Image
            src="/user-not-found.svg"
            alt="User not found"
            width={350}
            height={350}
          />
          <p className="w-56 text-center text-lg">
            We couldn&apos;t find the user you are looking for
          </p>
        </div>
      )}
    </main>
  );
}
