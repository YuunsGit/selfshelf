export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-grow rounded-md border border-taupe border-opacity-40 bg-white p-16 text-text shadow-search">
      <div>
        <div className="h-8 w-1/2 animate-pulse rounded-md bg-gray-200" />
        <div className="mt-4 h-4 w-1/4 animate-pulse rounded-md bg-gray-200" />
        <div className="mt-10 h-6 w-1/4 animate-pulse rounded-md bg-gray-200" />
        <div className="flex space-x-8">
          <div className="mt-6 h-[250px] w-[175px] animate-pulse rounded-md bg-gray-200" />
          <div className="mt-6 h-[250px] w-[175px] animate-pulse rounded-md bg-gray-200" />
          <div className="mt-6 h-[250px] w-[175px] animate-pulse rounded-md bg-gray-200" />
          <div className="mt-6 h-[250px] w-[175px] animate-pulse rounded-md bg-gray-200" />
        </div>
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
