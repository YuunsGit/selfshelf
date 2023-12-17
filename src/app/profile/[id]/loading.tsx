export default function Loading() {
  return (
    <main className="relative mx-4 max-w-7xl flex-grow divide-y rounded-md border border-taupe border-opacity-40 bg-white p-8 shadow-search lg:mx-12 lg:p-16 xl:mx-auto xl:w-full">
      <div className="flex flex-col justify-between gap-y-10 pb-10 lg:flex-row">
        <div>
          <div className="h-8 w-full animate-pulse rounded-md bg-gray-200 sm:w-80 lg:w-96" />
          <div className="mt-4 h-4 w-full animate-pulse rounded-md bg-gray-200 sm:w-56 lg:w-64" />
        </div>
        <div className="h-20 w-full animate-pulse rounded-md bg-gray-200 lg:w-96" />
      </div>
      <div className="py-10">
        <div className="h-6 w-full animate-pulse rounded-md bg-gray-200 lg:w-1/4" />
        <div className="flex space-x-8">
          <div className="mt-6 h-[250px] w-[175px] animate-pulse rounded-md bg-gray-200" />
          <div className="mt-6 hidden h-[250px] w-[175px] animate-pulse rounded-md bg-gray-200 lg:block" />
          <div className="mt-6 hidden h-[250px] w-[175px] animate-pulse rounded-md bg-gray-200 lg:block" />
          <div className="mt-6 hidden h-[250px] w-[175px] animate-pulse rounded-md bg-gray-200 lg:block" />
        </div>
      </div>
      <div className="hidden pt-10 lg:block">
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
