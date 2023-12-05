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
                setStage(1);
                audio.play();
                let count = 0;
                const interval = setInterval(() => {
                  if (++count === 4) window.clearInterval(interval);
                  window.addEventListener("scroll", () =>
                    window.clearInterval(interval)
                  );
                  setStage((stage) => (stage < 4 ? ++stage : 4));
                }, 1000);
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
              <a className="underline" target="_" href="https://lucidmach.tech">
                LUCIDMACH
              </a>
            </p>
            <br />
            <div className="flex gap-5">
              <a target="_" href="https://github.com/LucidMach/Ethel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#facc14"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a target="_" href="https://instagram.com/ziro2mach">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#facc14"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </>
        ) : null}
      </animated.div>
    </main>
  );
};

export default Card;
