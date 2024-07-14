import { useCallback, useEffect } from "react";
import { useStateContext } from "../../utils/use-state-context";
import { useShuffle } from "../../utils/useShuffle";

function GameOver() {
  const {
    setTheme,
    setNumberOfPlayers,
    SetGridSize,
    setStartGame,
    time,
    setTime,
    setFirstChoice,
    items,
    gameIsOver,
    setGameIsOver,
    moves,
    setMoves,
    setTurn,
  } = useStateContext();

  const { shuffle } = useShuffle();

  const newGame = () => {
    setStartGame(false);
    setGameIsOver(false);
    setMoves(0);
    setTheme("numbers");
    setNumberOfPlayers(1);
    SetGridSize("4x4");
    setTime(0);
    setFirstChoice(null);
    setTurn(1);
    shuffle();
  };

  const restart = () => {
    setGameIsOver(false);
    setTime(0);
    setFirstChoice(null);
    setMoves(0);
    setTurn(1);
    shuffle();
  };
  const checkGameOver = useCallback(() => {
    const allMatched = items.every((item) => item.matched);
    if (allMatched) {
      setGameIsOver(true);
    }
  }, [items, setGameIsOver]);

  useEffect(() => {
    checkGameOver();
  }, [checkGameOver]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      {gameIsOver && (
        <div className="flex justify-center items-center z-10 absolute top-0 bottom-0 right-0 left-0 bg-[#00000080]">
          <div className="md:max-w-[30rem] flex flex-col items-center rounded-xl max-w-[20rem] w-full gap-[1rem] p-[2rem] bg-[#F2F2F2]">
            <div className="mb-[1.5rem] w-full flex flex-col items-center">
              <h1 className="md:text-[2rem] text-[1.5rem] leading-[1.9rem] font-[700] text-[#152938] mb-[0.5rem]">
                You did it!
              </h1>
              <span className="md:text-[1.15 rem] text-[0.9rem] leading-[1rem] font-[700] text-[#7191A5]">
                Game over! Here’s how you got on…
              </span>
            </div>
            <div className="px-[1.5rem] py-[1.1rem] flex justify-between items-center w-full rounded-lg bg-[#DFE7EC]">
              <h3 className="md:text-[1.15rem] text-[1rem] leading-[1.2rem] font-[700] text-[#7191A5]">
                Time Elapsed
              </h3>
              <span className="md:text-[2rem] text-[1.25rem] leading-[1.9rem] font-[700] text-[#304859]">
                {String(minutes).padStart(1, "0")}:
                {String(seconds).padStart(2, "0")}
              </span>
            </div>

            <div className="px-[1.5rem] py-[1.1rem] flex justify-between items-center w-full rounded-lg bg-[#DFE7EC] mb-[1rem]">
              <h3 className="md:text-[1.15rem] text-[1rem] leading-[1.2rem] font-[700] text-[#7191A5]">
                Moves Taken
              </h3>
              <span className="md:text-[2rem] text-[1.25rem] leading-[1.9rem] font-[700] text-[#304859]">
                {moves} Moves
              </span>
            </div>
            <div className="md:flex md:justify-between gap-[1rem] w-full">
              <button
                onClick={restart}
                className="md:text-[1.3rem] md:max-w-[16.5rem] md:mb-0 bg-[#FDA214] mb-[1rem] max-w-[17.45rem] w-full p-[0.65rem] text-[1.15rem] leading-[1.4rem] font-[700] text-[#FCFCFC] text-center rounded-full outline-none hover:bg-[#FFB84A] transition-all duration-300"
              >
                Restart
              </button>
              <button
                onClick={newGame}
                className="md:text-[1.3rem] md:max-w-[16.5rem] bg-[#DFE7EC] max-w-[17.45rem] w-full p-[0.65rem] text-[1.15rem] leading-[1.4rem] font-[700] text-[#304859] text-center rounded-full outline-none hover:bg-[#6395B8] transition-all duration-300"
              >
                Setup New Game
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameOver;
