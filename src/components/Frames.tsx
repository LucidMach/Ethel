import { useState } from "react";
import Canvas from "./Canvas";
import Card from "./Card";

const Frames: React.FC = () => {
  const [stage, setStage] = useState(0);

  return (
    <>
      <Card setStage={setStage} />
      {stage > 0 ? (
        <>
          <div className="absolute top-0 h-full w-full">
            <Canvas stage={stage} />
          </div>
          <p className="absolute bottom-5 w-full font-mono text-center">
            click and drag around to explore
          </p>
        </>
      ) : null}
    </>
  );
};

export default Frames;
