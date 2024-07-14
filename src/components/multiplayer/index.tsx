import clsx from "clsx";
import { useStateContext } from "../../utils/use-state-context";


function MultiPlayer() {
  const {
    numberOfPlayers,
    turn,
   
    score,

  } = useStateContext();

  

  const players = [
    { id: 1, name: "P1" },
    { id: 2, name: "P2" },
    { id: 3, name: "P3" },
    { id: 4, name: "P4" },
  ];

  return (
    <>
      {numberOfPlayers !== 1 && (
        <div className="flex justify-center gap-[1.5rem] w-full">
          {players.slice(0, numberOfPlayers).map((player) => (
            <div key={player.id} className="relative max-w-[4rem] w-full">
              <span
                className={clsx(
                  turn === player.id ? "flex" : "hidden",
                  "w-[1rem] h-[1rem] bg-[#FDA214] rotate-45 absolute translate-x-[1.5rem] translate-y-[-0.4rem]"
                )}
              ></span>
              <div
                className={clsx(
                  turn === player.id ? "bg-[#FDA214]" : "bg-[#DFE7EC]",
                  "md:max-w-[4rem] md:justify-between md:items-center md:px-[1.5rem] md:py-[1.1rem] relative max-w-[4rem] flex flex-col items-center w-full p-[0.65rem] rounded-lg"
                )}
              >
                <h3
                  className={clsx(
                    turn === player.id ? "text-[#FCFCFC]" : "text-[#7191A5]",
                    "md:text-[1.15rem] text-[1rem] leading-[1.2rem] font-[700]"
                  )}
                >
                  {player.name}
                </h3>
                <span
                  className={clsx(
                    turn === player.id ? "text-[#FCFCFC]" : "text-[#304859]",
                    "md:text-[2rem] text-[1.5rem] leading-[1.9rem] font-[700]"
                  )}
                >
                  {score}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default MultiPlayer;
