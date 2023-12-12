"use client";

import Lottie from "lottie-react";
import notFound from "./not-found.json";

export default function NotFound404() {
  return (
    <div style={{ height: "512px", width: "512px" }}>
      <Lottie animationData={notFound} loop={true} />
    </div>
  );
}
