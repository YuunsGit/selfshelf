"use client";

import Lottie from "lottie-react";
import reading from "./reading.json";

export default function Reading() {
  return (
    <div style={{ height: "512px", width: "512px" }}>
      <Lottie animationData={reading} loop={true} />
    </div>
  );
}
