"use client";

import Lottie from "lottie-react";
import research from "./research.json";

export default function Research() {
  return (
    <div className="w-animation h-animation">
      <Lottie animationData={research} loop={true} />
    </div>
  );
}
