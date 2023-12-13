"use client";

import Lottie from "lottie-react";
import reading from "./lottie/reading.json";

export default function Reading() {
  return (
    <div className="h-animation w-animation">
      <Lottie animationData={reading} loop={true} />
    </div>
  );
}
