import clsx from "clsx";
import { useStateContext } from "../../utils/use-state-context";
import { useEffect } from "react";

function MultiPlayer() {
  const {
    numberOfPlayers,
    turn,
    setTurn,
    firstChoice,
    secondChoice,
    score,
    setScore,
  } = useStateContext();

  useEffect(() => {
    if (firstChoice && secondChoice) {
      if (
        (firstChoice.src &&
          secondChoice.src &&
          firstChoice.src === secondChoice.src) ||
        (firstChoice.number &&
          secondChoice.number &&
          firstChoice.number === secondChoice.number)
      ) {
        setScore((prevScores: number[]) => {
          const newScores = [...prevScores];
          newScores[turn - 1] += 1;
          return newScores;
        });
      }
    }
  }, [firstChoice, secondChoice, setScore, turn]);

  useEffect(() => {
    turn > numberOfPlayers && setTurn(1);
  }, [numberOfPlayers, setTurn, turn]);

  const players = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
  ];

  return (
    <>
      {numberOfPlayers !== 1 && (
        <div className="flex justify-center gap-[1.5rem] w-full">
          {players.slice(0, numberOfPlayers).map((player) => (
            <div
              key={player.id}
              className="lg:max-w-[16rem] md:max-w-[10rem] relative max-w-[4rem] w-full"
            >
              <span
                className={clsx(
                  turn === player.id ? "flex" : "hidden",
                  "lg:translate-x-[7.5rem] md:translate-x-[4.5rem] w-[1rem] h-[1rem] bg-[#FDA214] rotate-45 absolute translate-x-[1.5rem] translate-y-[-0.4rem]"
                )}
              ></span>
              <div
                className={clsx(
                  turn === player.id ? "bg-[#FDA214]" : "bg-[#DFE7EC]",
                  "lg:flex-row lg:items-center lg:max-w-[16rem] md:max-w-[10rem] md:justify-between md:items-start md:px-[1.5rem] md:py-[1.1rem] relative max-w-[4rem] flex flex-col items-center w-full p-[0.65rem] rounded-lg"
                )}
              >
                <h3
                  className={clsx(
                    turn === player.id ? "text-[#FCFCFC]" : "text-[#7191A5]",
                    "md:hidden flex text-[1rem] leading-[1.2rem] font-[700]"
                  )}
                >
                  P{player.name}
                </h3>
                <h3
                  className={clsx(
                    turn === player.id ? "text-[#FCFCFC]" : "text-[#7191A5]",
                    "lg:mb-0 md:flex hidden text-[1.15rem] leading-[1.2rem] font-[700] mb-[0.5rem]"
                  )}
                >
                  Player {player.name}
                </h3>
                <span
                  className={clsx(
                    turn === player.id ? "text-[#FCFCFC]" : "text-[#304859]",
                    "md:text-[2rem] text-[1.5rem] leading-[1.9rem] font-[700]"
                  )}
                >
                  {score[player.id - 1]}
                </span>
              </div>
              <span
                className={clsx(
                  turn === player.id ? "lg:flex" : "hidden",
                  "hidden text-[0.9rem] leading-[1rem] tracking-[0.3rem] font-[700] text-[#152938] mt-[1rem] translate-x-[3rem]"
                )}
              >
                CURRENT TURN
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default MultiPlayer;
