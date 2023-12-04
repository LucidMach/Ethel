import { useEffect, useMemo, useState } from "react";
import Canvas from "./Canvas";
import Card from "./Card";

const Frames: React.FC = () => {
  const [stage, setStage] = useState(-1);

  const stageSize = useMemo(() => window.innerHeight / 5, []);

  const handleScroll = () => {
    const y = window.scrollY;
    const stageVal = Math.floor(y / stageSize);
    setStage(stageVal);
    console.log(stage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Card setStage={setStage} />
      {stage > -1 ? (
        <>
          <div className="fixed top-0 h-full w-full flex flex-col items-center">
            <Canvas stage={stage} />
            <button
              className="absolute bottom-10 bg-slate-900 text-yellow-400 w-fit rounded-lg px-6 py-1 font-mono tracking-widest"
              onClick={() => setStage((stage) => (stage < 4 ? ++stage : 0))}
            >
              CHANGE VIEW
            </button>
            {stage === 4 ? (
              <p className="lg:text-xl font-mono text-sm bg-transparent text-center">
                click, pinch and drag around to explore
              </p>
            ) : null}
          </div>
          <div className="bg-yellow-500 h-[500%]"></div>
        </>
      ) : null}
    </>
  );
};

export default Frames;
