"use client";

import Lottie from "lottie-react";
import reading from "./lottie/reading.json";

export default function Reading() {
  return (
    <div className="mx-12 sm:mx-0 sm:h-animation sm:w-animation">
      <Lottie animationData={reading} loop={true} />
    </div>
  );
}
