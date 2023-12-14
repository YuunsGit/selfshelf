export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-grow rounded-md border border-taupe border-opacity-40 bg-white p-16 text-text shadow-search">
      <div className="flex items-start space-x-24">
        <div className="flex flex-col space-y-16">
          <div className="h-[500px] w-[300px] animate-pulse rounded-md bg-gray-200" />
          <div>
            <div className="h-20 w-full animate-pulse rounded-md bg-gray-200" />
            <div className="mt-6 h-20 w-full animate-pulse rounded-md bg-gray-200" />
          </div>
        </div>
        <div className="w-full">
          <div className="h-12 w-1/2 animate-pulse rounded-md bg-gray-200" />
          <div className="mt-4 h-6 w-1/4 animate-pulse rounded-md bg-gray-200" />
          <div className="mt-6 h-56 w-full animate-pulse rounded-md bg-gray-200" />
        </div>
      </div>
    </main>
  );
}
