import Logo from "@/assets/logo";
import User from "@/components/user";
import Link from "next/link";
import Search from "@/components/search";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between py-14">
      <div className="flex-1">
        <Link href="/" className="inline-block">
          <Logo className="shadow-taupe drop-shadow" />
        </Link>
      </div>
      <Search />
      <User />
    </header>
  );
}
