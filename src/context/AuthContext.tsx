"use client";

import React, { createContext } from "react";

export const AuthContext = createContext<User | null>(null);

export default function AuthProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
