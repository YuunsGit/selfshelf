"use client";

import { toast } from "react-toastify";
import { FormEvent, useState } from "react";
import { login } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    const loginSubmit = await login({ email, password });

    if (loginSubmit?.error) {
      setLoading(false);
      return toast.error(loginSubmit.error);
    }
    toast.success(loginSubmit?.message);

    router.push("/");
    router.refresh();
  };

  return (
    <form className="mt-4 space-y-6" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label
          htmlFor="email"
          className="block text-lg font-medium leading-6 text-text"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-md border-0 px-2 py-1.5 text-sm leading-6 text-text shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bronze"
          />
        </div>
      </div>

      <div>
        <div>
          <label
            htmlFor="password"
            className="block text-lg font-medium leading-6 text-text"
          >
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-md border-0 px-2 py-1.5 text-sm leading-6 text-text shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bronze"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-tangerine px-3 py-1.5 leading-6 text-white shadow-sm transition-colors hover:bg-bronze focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
        >
          {loading ? "Loading…" : "Sign in"}
        </button>
      </div>
    </form>
  );
}
