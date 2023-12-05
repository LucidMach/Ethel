import { useState } from "react";
import Canvas from "./Canvas";
import Card from "./Card";
import StageBtn from "./StageBtn";

const Frames: React.FC = () => {
  const [stage, setStage] = useState(-1);

  return (
    <>
      <Card setStage={setStage} />
      {stage > -1 ? (
        <>
          <div className="fixed top-0 h-full w-full flex flex-col items-center">
            <Canvas stage={stage} />
            <div className="absolute bottom-10 flex text-white text-3xl">
              <StageBtn stage={stage} value={1} setStage={setStage} />
              <StageBtn stage={stage} value={2} setStage={setStage} />
              <StageBtn stage={stage} value={3} setStage={setStage} />
              <StageBtn stage={stage} value={4} setStage={setStage} />
            </div>
            <p className="lg:text-xl font-mono text-sm bg-transparent text-center">
              {stage === 4
                ? "click, pinch and drag around to explore"
                : "scroll to explore"}
            </p>
          </div>
          <div className="bg-yellow-500 h-full"></div>
        </>
      ) : null}
    </>
  );
};

export default Frames;
