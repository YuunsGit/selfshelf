export default function Loading() {
  return (
    <main className="mx-4 w-auto max-w-7xl flex-grow rounded-md border border-taupe border-opacity-40 bg-white p-8 shadow-search lg:mx-12 lg:p-16 xl:mx-auto xl:w-full">
      <div className="flex flex-col items-start space-x-0 lg:flex-row lg:space-x-24">
        <div className="mx-auto flex w-full flex-col space-y-8 lg:mx-0 lg:w-auto lg:space-y-16">
          <div className="mx-auto h-[350px] w-[250px] animate-pulse rounded-md bg-gray-200 md:h-[450px] md:w-[300px] lg:mx-0" />
          <div>
            <div className="h-20 w-full animate-pulse rounded-md bg-gray-200" />
            <div className="mt-6 h-20 w-full animate-pulse rounded-md bg-gray-200" />
          </div>
        </div>
        <div className="hidden w-full lg:block">
          <div className="h-12 w-1/2 animate-pulse rounded-md bg-gray-200" />
          <div className="mt-4 h-6 w-1/4 animate-pulse rounded-md bg-gray-200" />
          <div className="mt-6 h-56 w-full animate-pulse rounded-md bg-gray-200" />
        </div>
      </div>
    </main>
  );
}
