"use client";

import Lottie from "lottie-react";
import reading from "./reading.json";

export default function Reading() {
  return (
    <div className="w-animation h-animation">
      <Lottie animationData={reading} loop={true} />
    </div>
  );
}
