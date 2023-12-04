import { Canvas } from "@react-three/fiber";
import { Model } from "./Ethel";
import { OrbitControls } from "@react-three/drei";

interface props {
  stage: number;
}

const View: React.FC<props> = ({ stage }) => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 5]} />
      <Model stage={stage} />
      {stage === 4 ? <OrbitControls /> : null}
    </Canvas>
  );
};

export default View;
