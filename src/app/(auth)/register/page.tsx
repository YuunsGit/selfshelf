import RegisterForm from "@/components/forms/register-form";
import Research from "@/assets/animations/reserach";
import FormLoading from "@/app/(auth)/FormLoading";

export const metadata = {
  title: "Register",
};

export default function Register() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col items-center justify-center md:flex-row md:space-x-16">
      <FormLoading>
        <Research />
        <div className="mt-8 w-full px-8 md:mt-0 md:w-1/3 md:px-0">
          <h2 className="text-center text-3xl font-bold tracking-tight text-text md:text-left">
            Create an account
          </h2>
          <div className="mx-auto mt-10 w-full max-w-sm md:mx-0">
            <RegisterForm />
          </div>
        </div>
      </FormLoading>
    </main>
  );
}
