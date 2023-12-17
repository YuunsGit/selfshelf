"use client";

import Lottie from "lottie-react";
import research from "./lottie/research.json";

export default function Research() {
  return (
    <div className="mx-12 sm:mx-0 sm:h-animation sm:w-animation">
      <Lottie animationData={research} loop={true} />
    </div>
  );
}
