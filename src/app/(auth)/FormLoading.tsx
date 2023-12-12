"use client";

import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function FormLoading({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const user = useContext(AuthContext);

  if (user) router.push("/");

  return <div>{!user && children}</div>;
}
