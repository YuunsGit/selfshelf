"use client";

import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";
import { useRouter } from "next/navigation";

export default function FormLoading({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const user = useContext(AuthContext);

  if (user) router.push("/");

  return <>{!user && children}</>;
}
