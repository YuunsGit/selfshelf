"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/auth-context";
import {
  CheckIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";
import { updateBook } from "@/lib/book";
import { toast } from "react-toastify";

export default function BookTitle({ book }: { book: Book }) {
  const user = useContext(AuthContext);
  const [editedData, setEditedData] = useState({
    title: book.title,
    author: book.author,
  });
  const [data, setData] = useState({
    title: book.title,
    author: book.author,
  });
  const [editable, setEditable] = useState(false);
  const [invalid, setInvalid] = useState(true);
  const [loading, setLoading] = useState(false);
  const isAdmin = user?.role === "admin";

  useEffect(() => {
    setInvalid(
      (editedData.title === data.title && editedData.author === data.author) ||
        editedData.author === "" ||
        editedData.title === "",
    );
  }, [editedData]);

  useEffect(() => {
    setData({ title: book.title, author: book.author });
  }, [book]);

  const handleSave = async () => {
    setLoading(true);
    await updateBook(book.isbn, {
      title: editedData.title,
      author: editedData.author,
    });
    setData({
      title: editedData.title,
      author: editedData.author,
    });
    setInvalid(true);
    setLoading(false);
    setEditable(false);
    toast.success("Book updated successfully");
  };

  return (
    <div>
      {isAdmin && editable ? (
        <>
          <input
            value={editedData.title}
            onChange={(e) =>
              setEditedData((prev) => ({ ...prev, title: e.target.value }))
            }
            className="w-72 rounded border border-b-4 border-taupe border-opacity-40 bg-transparent px-2 text-4xl font-bold text-text focus:border-tangerine"
          />
          {editable && (
            <>
              <button
                onClick={handleSave}
                disabled={invalid}
                className={cn(
                  "ml-4 inline-flex items-center justify-center gap-x-1 rounded border border-green-700 px-1 text-green-700",
                  invalid &&
                    "cursor-not-allowed border-text text-text opacity-70",
                )}
              >
                <CheckIcon className="inline h-5 w-5 align-middle" />
                {loading ? "Saving..." : "Save"}
              </button>
              <button
                onClick={() => {
                  setEditable(false);
                  setEditedData({ title: book.title, author: book.author });
                }}
                className="ml-2 inline-flex items-center justify-center gap-x-1 rounded border border-red-500 px-1 text-red-500"
              >
                <XMarkIcon className="inline h-5 w-5 align-middle" />
                Cancel
              </button>
            </>
          )}
        </>
      ) : (
        <>
          <h1 className="inline text-4xl font-bold text-text">{data.title}</h1>
          {!editable && isAdmin && (
            <button
              onClick={() => setEditable(true)}
              className="ml-4 inline-flex items-center justify-center gap-x-1 rounded border border-text px-1 text-text"
            >
              <PencilSquareIcon className="inline h-5 w-5 align-middle" />
              Edit
            </button>
          )}
        </>
      )}
      <p>
        by{" "}
        {isAdmin && editable ? (
          <input
            value={editedData.author}
            disabled={!editable}
            onChange={(e) =>
              setEditedData((prev) => ({ ...prev, author: e.target.value }))
            }
            className="mt-2 w-72 rounded border border-b-4 border-taupe border-opacity-40 bg-transparent px-2 text-text focus:border-tangerine"
          />
        ) : (
          <span>{data.author}</span>
        )}
      </p>
    </div>
  );
}
