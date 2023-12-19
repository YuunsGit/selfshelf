import Image from "next/image";

export default function NotFound() {
  return (
    <main className="relative mx-4 max-w-7xl flex-grow divide-y rounded-md border border-taupe border-opacity-40 bg-white p-8 text-text shadow-search lg:mx-12 lg:p-16 xl:mx-auto xl:w-full">
      <div className="absolute left-0 right-0 top-1/2 flex h-full -translate-y-1/2 flex-col items-center justify-center">
        <Image
          src="/user-not-found.svg"
          alt="User not found"
          width={150}
          height={150}
        />
        <p className="w-56 text-center text-lg">
          We couldn&apos;t find the profile you are looking for
        </p>
      </div>
    </main>
  );
}
