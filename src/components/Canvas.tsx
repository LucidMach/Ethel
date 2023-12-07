import { Canvas } from "@react-three/fiber";
import { Model } from "./Ethel";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

interface props {
  stage: number;
}

const View: React.FC<props> = ({ stage }) => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 5]} />
      <Model stage={stage} />
      <OrbitControls />
    </Canvas>
  );
};

export default View;
