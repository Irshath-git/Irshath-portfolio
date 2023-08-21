import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import Lottie from "react-lottie";
import animationData from "../../assets/lottie-1.json";

const Computers = ({ isMobile }) => {
  // Lottie File Inseration
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="w-96 h-96 flex float-right lg:mt-24 mt-96">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Computers;
