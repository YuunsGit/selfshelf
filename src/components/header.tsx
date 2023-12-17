import User from "@/components/user";
import Link from "next/link";
import Search from "@/components/search";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-8 sm:px-12 sm:py-14 xl:px-0">
        <div className="flex-1">
          <Link href="/" className="inline-block">
            <Image
              priority
              src="/logo.svg"
              alt="Logo of Self Shelf"
              width={125}
              height={50}
              className="w-20 sm:w-auto"
            />
          </Link>
        </div>
        <Search className="hidden lg:block" />
        <User />
      </header>
      <Search className="block lg:hidden" />
    </>
  );
}
