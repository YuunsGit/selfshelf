import Image from "next/image";

export default function NotFound() {
  return (
    <main className="relative mx-4 max-w-7xl flex-grow rounded-md border border-taupe border-opacity-40 bg-white p-8 text-text shadow-search lg:mx-12 lg:p-16 xl:mx-auto xl:w-full">
      <div className="absolute left-0 right-0 top-1/2 flex h-full -translate-y-1/2 flex-col items-center justify-center">
        <Image
          src="/book-not-found.svg"
          alt="Book not found"
          width={350}
          height={350}
        />
        <p className="w-56 text-center text-lg">
          We couldn&apos;t find the book you are looking for
        </p>
      </div>
    </main>
  );
}
