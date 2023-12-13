import RegisterForm from "@/components/forms/register-form";
import Research from "@/assets/animations/reserach";
import FormLoading from "@/app/(auth)/FormLoading";

export const metadata = {
  title: "Register",
};

export default function Register() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-grow items-center justify-center space-x-16">
      <FormLoading>
        <Research />
        <div className="w-1/3">
          <h2 className="text-3xl font-bold tracking-tight text-text">
            Create an account
          </h2>
          <div className="mt-10 w-full max-w-sm">
            <RegisterForm />
          </div>
        </div>
      </FormLoading>
    </main>
  );
}
