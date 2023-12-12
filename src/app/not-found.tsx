import NotFound404 from "@/animations/NotFound404";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex flex-grow items-center">
      <div className="rounded-xl bg-white text-center shadow-search">
        <NotFound404 />
        <div className="mb-12">
          <p className="mb-4">
            We couldn&apos;t find the page you are looking for
          </p>
          <Link
            href="/"
            className="rounded-md bg-tangerine px-3 py-1.5 leading-6 text-white shadow-sm transition-colors hover:bg-bronze focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
          >
            Take me back home
          </Link>
        </div>
      </div>
    </main>
  );
}
