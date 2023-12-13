"use server";

import bcrypt from "bcryptjs";
import { cookies } from "next/dist/client/components/headers";
import { userSchema } from "@/lib/joi";
import { kv } from "@vercel/kv";
import { addUser, getUser } from "@/lib/user";

export async function registerUser({
  name,
  email,
  password,
  confirmPwd,
  role = "member",
}: {
  name: string;
  email: string;
  password: string;
  confirmPwd: string;
  role?: string;
}) {
  const validate = userSchema.validate({
    name,
    email,
    password,
    confirmPwd,
  }).error;
  if (validate) {
    return { error: validate };
  }

  const existingEmail = await getUser(email);
  if (existingEmail) {
    return { error: "Email already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await addUser(email, hashedPassword, name, role);
    return { message: "Register successful", user };
  } catch (e) {
    return { error: "An error has occurred" };
  }
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await getUser(email);
  if (!user) {
    return { error: "Invalid email or password", user };
  }

  const result = await bcrypt.compare(password, user.password as string);
  if (!result) {
    return { error: "Invalid email or password" };
  }

  if (cookies().get("session")) {
    await kv.del(cookies().get("session")!.value);
  }

  const sessionId = crypto.randomUUID();
  await kv.set(sessionId, {
    id: user.id,
    email: (user.email as string).toString(),
    name: user.name,
    role: user.role,
  });

  cookies().set("session", sessionId, { secure: true, httpOnly: true });

  return {
    message: "Login successful",
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
  };
}

export async function logout() {
  if (cookies().get("session")) {
    await kv.del(cookies().get("session")!.value);
  }
  cookies().delete("session");

  return {
    message: "Logout successful",
  };
}

export async function authorize() {
  if (cookies().get("session")) {
    const user: User | null = await kv.get(cookies().get("session")!.value);
    if (user) return user;
  }

  return null;
}
