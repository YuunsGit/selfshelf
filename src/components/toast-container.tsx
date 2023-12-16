"use client";

import { ToastContainer } from "react-toastify";

export default function Container({ style }: { style: string }) {
  return (
    <ToastContainer
      position="top-center"
      theme="colored"
      newestOnTop={false}
      className={style}
    />
  );
}
