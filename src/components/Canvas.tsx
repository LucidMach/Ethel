import { Canvas } from "@react-three/fiber";
import { Model } from "./Ethel";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

interface props {
  stage: number;
  enable: boolean;
}

const View: React.FC<props> = ({ stage, enable }) => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 5]} />
      <Model stage={stage} />
      {enable ? <OrbitControls /> : null}
    </Canvas>
  );
};

export default View;
