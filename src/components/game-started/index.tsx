import { useCallback, useEffect, useState } from "react";
import Timer from "../../utils/timer";
import Logo from "/src/assets/logo-dark.svg";
import clsx from "clsx";
import { useStateContext, GameItem } from "../../utils/use-state-context";
import Menu from "../menu";

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
  }, [firstChoice, secondChoice, items, setItems, resetTurns]);

  return (
    <div className="bg-[#FCFCFC] flex flex-col items-center h-[100vh] w-[100vw] px-[1rem] pt-[1.5rem] mb-[5rem]">
      <div className="flex items-center justify-between w-full mb-[5rem]">
        <img src={Logo} alt="Logo" />
        <Menu />
      </div>
      <div className="grid items-center grid-cols-4 gap-4 w-max mb-[6.5rem]">
        {items.map((item) => (
          <div
            onClick={() => handleClick(item)}
            key={item.id}
            className={clsx(
              item.matched && "bg-[#FDA214]",
              "sm:w-[4.5rem] sm:h-[4.5rem] flex justify-center items-center w-[3.5rem] h-[3.5rem] bg-[#BCCED9] rounded-full transition-all duration-500"
            )}
          >
            <span
              className={clsx(
                item === firstChoice || item === secondChoice || item.matched
                  ? "animate-shrink"
                  : "animate-expand",
                disabled && "cursor-default",
                "flex bg-[#304859] hover:bg-[#6395B8] sm:w-[4.5rem] sm:h-[4.5rem] w-[3.5rem] h-[3.5rem] absolute rounded-full cursor-pointer transition-all duration-300"
              )}
            ></span>
            {theme === "icons" && item.src ? (
              <img
                className="sm:w-[2.5rem] w-[2rem] h-[3rem]"
                src={item.src}
                alt="img"
              />
            ) : (
              <span className="sm:text-[2.5rem] text-[2rem] font-[700] leading-[2rem] text-[#FCFCFC] cursor-default">
                {item.number}
              </span>
            )}
          </div>
        ))}
      </div>
      <Timer />
    </div>
  );
}

export default GameStarted;
