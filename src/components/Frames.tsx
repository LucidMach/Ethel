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
          <div className="absolute top-0 h-full w-full flex flex-col items-center">
            <Canvas stage={stage} />
            <button
              className="absolute bottom-10 bg-slate-900 text-yellow-400 w-fit rounded-lg px-6 py-1 font-mono tracking-widest"
              onClick={() => setStage((stage) => (stage < 6 ? ++stage : 1))}
            >
              CHANGE VIEW
            </button>
            <p className="font-mono text-xl bg-transparent text-center">
              click and drag around to explore
            </p>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Frames;
