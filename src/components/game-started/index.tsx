import { useCallback, useEffect, useState } from "react";
import Timer from "../../utils/timer";
import Logo from "/src/assets/logo-dark.svg";
import clsx from "clsx";
import { useStateContext, GameItem } from "../../utils/use-state-context";
import Menu from "../menu";
import GameOver from "../game-over";
import MultiPlayer from "../multiplayer";

function GameStarted() {
  const {
    items,
    setItems,
    turn,
    setTurn,
    firstChoice,
    setFirstChoice,
    secondChoice,
    setSecondChoice,
    theme,
    moves,
    setMoves,
    gridSize,
    numberOfPlayers,
  } = useStateContext();
  const [disabled, setDisabled] = useState(false);

  const handleChoice = (item: GameItem) => {
    if (firstChoice && firstChoice.id === item.id) {
      return;
    }
    firstChoice ? setSecondChoice(item) : setFirstChoice(item);
  };

  const handleClick = (item: GameItem) => {
    if (!disabled && !item.matched) {
      handleChoice(item);
    }
  };

  const resetTurns = useCallback(() => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurn(turn + 1);
    setDisabled(false);
  }, [setFirstChoice, setSecondChoice, setTurn, turn]);

  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      setMoves((preMoves: number) => preMoves + 1);
      if (
        (firstChoice.src &&
          secondChoice.src &&
          firstChoice.src === secondChoice.src) ||
        (firstChoice.number &&
          secondChoice.number &&
          firstChoice.number === secondChoice.number)
      ) {
        setItems((prevItems: GameItem[]) => {
          return prevItems.map((item) => {
            if (
              (item.src && item.src === firstChoice.src) ||
              (item.number && item.number === firstChoice.number)
            ) {
              return { ...item, matched: true };
            } else {
              return item;
            }
          });
        });
        resetTurns();
      } else {
        setTimeout(resetTurns, 1000);
      }
    }
  }, [firstChoice, secondChoice, resetTurns, setItems, setMoves]);

  return (
    <div className="md:px-[2.5rem] bg-[#FCFCFC] flex flex-col items-center h-[100vh] w-[100vw] px-[1rem] pt-[1.5rem] mb-[5rem]">
      <div className="flex items-center justify-between w-full max-w-[90rem] mb-[4rem]">
        <img src={Logo} alt="Logo" />
        <Menu />
      </div>
      <div
        className={clsx(
          gridSize === "4x4" ? "grid-cols-4 gap-4" : "grid-cols-6 gap-[0.5rem]",
          "grid items-center w-max mb-[5rem]"
        )}
      >
        {items.map((item) => (
          <div
            onClick={() => handleClick(item)}
            key={item.id}
            className={clsx(
              item.matched && "bg-[#FDA214]",
              gridSize === "4x4"
                ? "md:w-[7rem] md:h-[7rem] sm:w-[4.5rem] sm:h-[4.5rem] w-[3.5rem] h-[3.5rem]"
                : "md:w-[5rem] md:h-[5rem] sm:w-[3rem] sm:h-[3rem] w-[2.5rem] h-[2.5rem]",
              "flex justify-center items-center bg-[#BCCED9] rounded-full transition-all duration-500"
            )}
          >
            <span
              className={clsx(
                item === firstChoice || item === secondChoice || item.matched
                  ? "animate-shrink"
                  : "animate-expand",
                disabled ? "cursor-default " : " cursor-pointer",
                gridSize === "4x4"
                  ? "md:w-[7rem] md:h-[7rem] sm:w-[4.5rem] sm:h-[4.5rem] w-[3.5rem] h-[3.5rem]"
                  : "md:w-[5rem] md:h-[5rem] sm:w-[3rem] sm:h-[3rem] w-[2.5rem] h-[2.5rem]",
                "flex bg-[#304859] hover:bg-[#6395B8] absolute rounded-full transition-all duration-300"
              )}
            ></span>
            {theme === "icons" && item.src ? (
              <img
                className={clsx(
                  gridSize === "4x4"
                    ? "md:w-[3.5rem] sm:w-[2.5rem] w-[2rem] h-[3rem]"
                    : "md:w-[2.5rem] sm:w-[1.5rem] w-[1rem] h-[2rem]"
                )}
                src={item.src}
                alt="img"
              />
            ) : (
              <span
                className={clsx(
                  gridSize === "4x4"
                    ? "md:text-[3.5rem] sm:text-[2.5rem] text-[2rem]"
                    : "md:text-[2.5rem] sm:text-[1.5rem] text-[1rem]",
                  "font-[700] leading-[2rem] text-[#FCFCFC] cursor-default"
                )}
              >
                {item.number}
              </span>
            )}
          </div>
        ))}
      </div>
      {numberOfPlayers === 1 && (
        <div className="w-full flex justify-center gap-[1.5rem]">
          <Timer />
          <div className="md:max-w-[16rem] md:flex-row md:justify-between md:items-center md:px-[1.5rem] md:py-[1.1rem] max-w-[9.5rem] flex flex-col items-center w-full p-[0.65rem] rounded-lg bg-[#DFE7EC]">
            <h3 className="md:text-[1.15rem] text-[1rem] leading-[1.2rem] font-[700] text-[#7191A5]">
              Moves
            </h3>
            <span className="md:text-[2rem] text-[1.5rem] leading-[1.9rem] font-[700] text-[#304859]">
              {moves}
            </span>
          </div>
        </div>
      )}
      <MultiPlayer />
      <GameOver />
    </div>
  );
}

export default GameStarted;
