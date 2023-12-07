import { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import Card from "./Card";
import StageBtn from "./StageBtn";

const Frames: React.FC = () => {
  const [stage, setStage] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Card setStage={setStage} />
      {stage > -1 ? (
        <>
          <div className="fixed top-0 h-full w-full flex flex-col items-center">
            <Canvas stage={stage} />
            <div className="absolute bottom-10 flex-col text-3xl">
              <p className="text-center text-base m-3">CAMERA ANGLES</p>
              <div className="flex">
                <StageBtn stage={stage} value={1} setStage={setStage} />
                <StageBtn stage={stage} value={2} setStage={setStage} />
                <StageBtn stage={stage} value={3} setStage={setStage} />
                <StageBtn stage={stage} value={4} setStage={setStage} />
                <StageBtn stage={stage} value={5} setStage={setStage} />
              </div>
            </div>
          </div>
          <div ref={ref} className="bg-yellow-500 h-full"></div>
        </>
      ) : null}
    </>
  );
};

export default Frames;
