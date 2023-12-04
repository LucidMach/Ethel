import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

const audio = new Audio("/bababa.mp3");
audio.loop = true;

interface props {
  setStage: React.Dispatch<React.SetStateAction<number>>;
}

const Card: React.FC<props> = ({ setStage }) => {
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
          <>
            <button
              className="bg-yellow-400 animate-pulse text-gray-900 w-fit rounded-lg px-6 py-1 font-mono tracking-widest"
              onClick={() => {
                setClicked(true);
                setStage((stage) => ++stage);
                audio.play();
                api.start({
                  from: { y: 300 },
                  to: { y: 0 },
                });
              }}
            >
              START
            </button>
            <br />
            <p className="font-mono text-sm tracking-widest text-yellow-500">
              A PROJECT BY{" "}
              <a className="underline" href="https://lucidmach.tech">
                LUCIDMACH
              </a>
            </p>
          </>
        ) : null}
      </animated.div>
    </main>
  );
};

export default Card;
