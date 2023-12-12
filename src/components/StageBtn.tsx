import { useEffect, useState } from "react";

interface props {
  value: number;
  stage: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
}

const StageBtn: React.FC<props> = ({ value, setStage, stage }) => {
  const stages = 5;
  const stageSize = window.innerHeight / stages;

  const [stagePercent, setStagePercent] = useState(0);

  const handleScroll = () => {
    const y = window.scrollY;
    const stageVal = Math.floor(y / stageSize);
    const scrollPercent = (y / stageSize) * 100;

    setStage(stageVal);
    setStagePercent(scrollPercent - stageVal * 100);
    console.log(scrollPercent - stageVal * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center text-white">
      <div className="h-2 w-10 bg-slate-900 rounded-full">
        {stage === value - 1 ? (
          <div
            className="h-2 w-2 bg-blue-700 rounded-full"
            style={{ width: stagePercent + "%" }}
          ></div>
        ) : stage > value - 1 ? (
          <div className="h-2 w-full bg-blue-700 rounded-full"></div>
        ) : null}
      </div>
      <div
        className={`hover:bg-slate-700 h-10 w-10 text-base rounded-full flex justify-center items-center 
            ${stage > value - 1 ? "bg-blue-900" : "bg-slate-900"}`}
        onClick={() => setStage(value)}
      >
        {value === 4 ? "360°" : value === 5 ? "FREE" : value}
      </div>
    </div>
  );
};

export default StageBtn;
