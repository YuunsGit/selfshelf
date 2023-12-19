"use client";

import { toast } from "react-toastify";
import { useState } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { userSchema } from "@/lib/joi";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { registerUser } from "@/lib/auth";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPwd: string;
};

export default function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: joiResolver(userSchema) });

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    setLoading(true);
    const registerSubmit = await registerUser(data);

    if (registerSubmit?.error) {
      setLoading(false);
      return toast.error(registerSubmit.error.toString());
    }
    toast.success(registerSubmit?.message);

    router.push("/login");
    router.refresh();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="name"
          className="relative flex justify-between text-lg font-medium leading-6 text-text"
        >
          <p>Name</p>
          {errors.name && (
            <div className="absolute right-0 flex items-center gap-x-1 rounded-md bg-red-100 px-2 text-sm font-semibold text-red-500">
              <ExclamationCircleIcon className="h-4 w-4" />
              {errors.name.message?.toString()}
            </div>
          )}
        </label>
        <div className="mt-2">
          <input
            id="name"
            type="name"
            autoComplete="name"
            required
            {...register("name")}
            className="block w-full rounded-md border-0 px-2 py-1.5 leading-6 text-text shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bronze"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="relative flex justify-between text-lg font-medium leading-6 text-text"
        >
          <p>Email address</p>
          {errors.email && (
            <div className="absolute right-0 flex items-center gap-x-1 rounded-md bg-red-100 px-2 text-sm font-semibold text-red-500">
              <ExclamationCircleIcon className="h-4 w-4" />
              {errors.email.message?.toString()}
            </div>
          )}
        </label>
        <div className="mt-2">
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            {...register("email")}
            className="block w-full rounded-md border-0 px-2 py-1.5 leading-6 text-text shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bronze"
          />
        </div>
      </div>

      <div>
        <div>
          <label
            htmlFor="password"
            className="relative flex justify-between text-lg font-medium leading-6 text-text"
          >
            <p>Password</p>
            {errors.password && (
              <div className="absolute right-0 flex items-center gap-x-1 rounded-md bg-red-100 px-2 text-sm font-semibold text-red-500">
                <ExclamationCircleIcon className="h-4 w-4" />
                {errors.password.message?.toString()}
              </div>
            )}
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            {...register("password")}
            className="block w-full rounded-md border-0 px-2 py-1.5 leading-6 text-text shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bronze"
          />
        </div>
      </div>

      <div>
        <div>
          <label
            htmlFor="confirmPwd"
            className="relative flex justify-between text-lg font-medium leading-6 text-text"
          >
            <p>Confirm password</p>
            {errors.confirmPwd && (
              <div className="absolute right-0 flex items-center gap-x-1 rounded-md bg-red-100 px-2 text-sm font-semibold text-red-500">
                <ExclamationCircleIcon className="h-4 w-4" />
                {errors.confirmPwd.message?.toString()}
              </div>
            )}
          </label>
        </div>
        <div className="mt-2">
          <input
            id="confirmPwd"
            type="password"
            autoComplete="off"
            required
            {...register("confirmPwd")}
            className="block w-full rounded-md border-0 px-2 py-1.5 leading-6 text-text shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bronze"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-tangerine px-3 py-1.5 leading-6 text-white shadow-sm transition-colors hover:bg-bronze focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
      >
        {loading ? "Loading…" : "Register"}
      </button>
    </form>
  );
}
