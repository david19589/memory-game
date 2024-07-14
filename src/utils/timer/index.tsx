import { useEffect } from "react";
import { useStateContext } from "../use-state-context";

function Timer() {
  const { time, setTime, gameIsOver, showMenu } = useStateContext();

  useEffect(() => {
    let timer: number | undefined;

    if (!gameIsOver && !showMenu) {
      timer = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [gameIsOver, setTime, showMenu, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="md:max-w-[16rem] md:flex-row md:justify-between md:items-center md:px-[1.5rem] md:py-[1.1rem] max-w-[9.5rem] flex flex-col items-center w-full p-[0.65rem] rounded-lg bg-[#DFE7EC]">
      <h3 className="md:text-[1.15rem] text-[1rem] leading-[1.2rem] font-[700] text-[#7191A5]">
        Time
      </h3>
      <span className="md:text-[2rem] text-[1.5rem] leading-[1.9rem] font-[700] text-[#304859]">
        {String(minutes).padStart(1, "0")}:{String(seconds).padStart(2, "0")}
      </span>
    </div>
  );
}

export default Timer;
