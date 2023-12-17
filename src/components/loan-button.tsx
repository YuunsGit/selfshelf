"use client";

import { cn, formatDate } from "@/lib/utils";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { addLoan } from "@/lib/loan";
import { toast } from "react-toastify";

export default function LoanButton({
  reader,
  isbn,
}: {
  reader: Loan | undefined;
  isbn: string;
}) {
  const user = useContext(AuthContext);
  const router = useRouter();
  const [loan, setLoan] = useState<Loan>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoan(reader);
    setLoading(false);
  }, []);

  const handleLoan = async () => {
    if (user) {
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + 14);
      setLoading(true);
      const loan = await addLoan(user.id, isbn, new Date(), dueDate);
      if (loan) {
        toast.success("Book loaned successfully");
        setLoan(loan);
      }
      setLoading(false);
    } else router.push("/login");
  };

  return (
    <div key={loan?.id} className="group relative">
      <button
        onClick={handleLoan}
        disabled={!!loan || loading}
        className={cn(
          "mt-6 w-full rounded px-6 py-3 text-white shadow-search lg:mt-0 lg:w-48",
          loan ? "bg-gray-500" : "bg-tangerine hover:bg-bronze",
        )}
      >
        {loan ? "Unavailable" : loading ? "Loading..." : "Loan this book"}
      </button>

      {loan && (
        <div className="absolute bottom-full left-1/2 z-10 mb-4 hidden -translate-x-1/2 rounded border border-taupe border-opacity-40 bg-white p-2 shadow-search group-hover:block">
          <p className="whitespace-nowrap">
            <b>Loan date:</b> {formatDate(loan?.loanDate)}
          </p>
          <p className="whitespace-nowrap">
            <b>Estimated due date:</b> {formatDate(loan?.dueDate)}
          </p>
        </div>
      )}
    </div>
  );
}
