"use client";

import { UserCircleIcon as UserSolid } from "@heroicons/react/24/solid";
import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { logout } from "@/api/auth";

export default function User() {
  const user = useContext(AuthContext);
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const goToProfile = () => {
    router.push(`/profile/${user?.id}`);
    setDropdownOpen(false);
  };

  const logoutFromAccount = () => {
    logout().then(() => {
      router.push("/");
      router.refresh();
    });
    setDropdownOpen(false);
  };

  const closeDropdownOnOutsideClick = (event: MouseEvent) => {
    // @ts-ignore
    if (dropdownRef.current && !dropdownRef.current.contains(event.target))
      setDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdownOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeDropdownOnOutsideClick);
    };
  }, []);

  return (
    <>
      {user ? (
        <div
          ref={dropdownRef}
          className="relative flex flex-1 justify-end text-left"
        >
          <button
            type="button"
            onClick={toggleDropdown}
            className="relative flex items-center gap-x-2 text-right text-text"
          >
            <UserSolid className="h-10 w-10" />
            <h2 className="font-semibold">{user.name}</h2>
          </button>
          {dropdownOpen && (
            <div
              onBlur={() => setDropdownOpen(false)}
              className="absolute right-0 top-full z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <button
                  onClick={goToProfile}
                  className="block w-full px-4 py-2 text-left text-sm text-text hover:bg-gray-100 hover:text-taupe"
                >
                  Profile
                </button>
                <button
                  onClick={logoutFromAccount}
                  className="block w-full px-4 py-2 text-left text-sm text-text hover:bg-gray-100 hover:text-taupe"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-end">
          <Link
            href="/login"
            className="mr-0 inline-flex items-center gap-x-2 text-text"
          >
            <UserSolid className="h-10 w-10" />
            <h2 className="text-lg font-semibold">Login</h2>
          </Link>
        </div>
      )}
    </>
  );
}
