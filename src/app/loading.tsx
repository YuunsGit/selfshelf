import LoadingAnimation from "@/assets/animations/loading";

export default function Loading() {
  return (
    <main className="mx-auto my-4 flex h-full max-w-6xl flex-grow items-center text-center">
      <LoadingAnimation />
    </main>
  );
}
