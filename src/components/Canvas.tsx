import { Canvas } from "@react-three/fiber";
import { Model } from "./Ethel";
import { OrbitControls } from "@react-three/drei";

const View = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 5]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default View;
