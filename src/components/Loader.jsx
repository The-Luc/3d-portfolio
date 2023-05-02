import { Html, useProgress } from "@react-three/drei";
import React from "react";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-loader">{progress.toFixed(2)}%</span>
    </Html>
  );
};

export default Loader;
