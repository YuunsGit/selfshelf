import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

export function Dialog({
  content,
  confirmButton,
  title,
  type,
  onConfirm,
  onCancel,
  setDialogOpen,
}: {
  content: string;
  confirmButton: string;
  title: string;
  type: "warning" | "danger";
  onConfirm: () => void;
  onCancel: () => void;
  setDialogOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div
                  className={cn(
                    "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10",
                    type === "warning" && "bg-amber-50",
                    type === "danger" && "bg-red-100",
                  )}
                >
                  <ExclamationTriangleIcon
                    className={cn(
                      "h-6 w-6",
                      type === "warning" && "text-bronze",
                      type === "danger" && "text-red-600",
                    )}
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 className="text-base font-semibold leading-6 text-gray-900">
                    {title}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{content}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                onClick={onConfirm}
                type="button"
                className={cn(
                  "inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto",
                  type === "warning" && "bg-tangerine hover:bg-bronze",
                  type === "danger" && "bg-red-600 hover:bg-red-500",
                )}
              >
                {confirmButton}
              </button>
              <button
                onClick={onCancel}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
