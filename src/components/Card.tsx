import { useSpring, animated } from "@react-spring/web";
import Canvas from "../components/Canvas";
import { useState } from "react";

const audio = new Audio("/oneMoreTime.mp3");
audio.loop = true;

const Card: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const [transitions, api] = useSpring(
    () => ({
      from: { y: 300 },
    }),
    []
  );

  return (
    <main
      className={`h-full transition-all duration-200
    ${!clicked ? "bg-gray-900" : "bg-yellow-500"}`}
    >
      <animated.div
        style={transitions}
        className="w-full flex flex-col absolute items-center p-5 drop-shadow-xl z-10 "
      >
        <h3 className="font-mono tracking-[2rem] text-yellow-600">CONCEPT</h3>
        <h1 className="font-bold text-9xl text-yellow-400">ETHEL</h1>
        <br />
        {!clicked ? (
          <button
            className="bg-yellow-400 text-gray-900 w-fit rounded-lg px-6 py-1 font-mono tracking-widest"
            onClick={() => {
              setClicked(true);
              audio.play();
              api.start({
                from: { y: 300 },
                to: { y: 0 },
              });
            }}
          >
            START
          </button>
        ) : null}
      </animated.div>
      {clicked ? (
        <>
          <Canvas />
          <p className="absolute bottom-5 w-full font-mono text-center">
            click and drag around to explore
          </p>
        </>
      ) : null}
    </main>
  );
};

export default Card;
