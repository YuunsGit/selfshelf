import LoginForm from "@/components/forms/login-form";
import Link from "next/link";
import Reading from "@/assets/animations/reading";
import FormLoading from "@/app/(auth)/FormLoading";

export const metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-grow items-center justify-center">
      <FormLoading>
        <Reading />
        <div className="w-1/3">
          <h2 className="text-3xl font-bold tracking-tight text-text">
            Sign into your account
          </h2>
          <div className="mt-10 w-full max-w-sm">
            <LoginForm />
            <p className="mt-4 text-sm text-gray-500">
              Not registered?{" "}
              <Link
                href="/register"
                className="text-secondary-500 hover:text-secondary-600 font-semibold leading-6 transition-colors"
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
