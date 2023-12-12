"use client";

import Lottie from "lottie-react";
import notFound from "./not-found.json";

export default function NotFound404() {
  return (
    <div className="w-animation h-animation">
      <Lottie animationData={notFound} loop={true} />
    </div>
  );
}
