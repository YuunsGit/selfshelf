"use client";

import Lottie from "lottie-react";
import notFound from "./lottie/not-found.json";

export default function NotFound404() {
  return (
    <div className="h-animation w-animation">
      <Lottie animationData={notFound} loop={true} />
    </div>
  );
}
