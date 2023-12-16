export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-grow divide-y rounded-md border border-taupe border-opacity-40 bg-white p-16 text-text shadow-search">
      <div className="flex justify-between pb-10">
        <div>
          <div className="h-8 w-96 animate-pulse rounded-md bg-gray-200" />
          <div className="mt-4 h-4 w-64 animate-pulse rounded-md bg-gray-200" />
        </div>
        <div className="h-20 w-96 animate-pulse rounded-md bg-gray-200" />
      </div>
      <div className="py-10">
        <div className="mt-10 h-6 w-1/4 animate-pulse rounded-md bg-gray-200" />
        <div className="flex space-x-8">
          <div className="mt-6 h-[250px] w-[175px] animate-pulse rounded-md bg-gray-200" />
          <div className="mt-6 h-[250px] w-[175px] animate-pulse rounded-md bg-gray-200" />
          <div className="mt-6 h-[250px] w-[175px] animate-pulse rounded-md bg-gray-200" />
          <div className="mt-6 h-[250px] w-[175px] animate-pulse rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="pt-10">
        <div className="mt-10 h-6 w-1/4 animate-pulse rounded-md bg-gray-200" />
        <div className="flex space-x-8">
          <div className="mt-6 h-[250px] w-[175px] animate-pulse rounded-md bg-gray-200" />
          <div className="mt-6 h-[250px] w-[175px] animate-pulse rounded-md bg-gray-200" />
          <div className="mt-6 h-[250px] w-[175px] animate-pulse rounded-md bg-gray-200" />
        </div>
      </div>
    </main>
  );
}
