"use client";

import Lottie from "lottie-react";
import research from "./research.json";

export default function Research() {
  return (
    <div style={{ height: "512px", width: "512px" }}>
      <Lottie animationData={research} loop={true} />
    </div>
  );
}
