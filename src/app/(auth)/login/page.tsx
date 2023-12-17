import LoginForm from "@/components/forms/login-form";
import Link from "next/link";
import Reading from "@/assets/animations/reading";
import FormLoading from "@/app/(auth)/FormLoading";

export const metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col items-center justify-center md:flex-row">
      <FormLoading>
        <Reading />
        <div className="mt-8 w-full px-8 md:mt-0 md:w-1/3 md:px-0">
          <h2 className="text-center text-3xl font-bold tracking-tight text-text md:text-left">
            Sign into your account
          </h2>
          <div className="mx-auto mt-10 w-full max-w-sm md:mx-0">
            <LoginForm />
            <p className="mt-4 text-sm text-gray-500">
              Not registered?{" "}
              <Link
                href="/register"
                className="font-semibold leading-6 text-tangerine transition-colors hover:text-bronze"
              >
                Register now
              </Link>
            </p>
          </div>
        </div>
      </FormLoading>
    </main>
  );
}
