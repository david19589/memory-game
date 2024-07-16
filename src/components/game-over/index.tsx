import { useCallback, useEffect } from "react";
import { useStateContext } from "../../utils/use-state-context";
import { useShuffle } from "../../utils/useShuffle";
import clsx from "clsx";

function GameOver() {
  const {
    setTheme,
    numberOfPlayers,
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
    score,
    setScore,
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
    setScore(Array(4).fill(0));
    shuffle();
  };

  const restart = () => {
    setGameIsOver(false);
    setTime(0);
    setFirstChoice(null);
    setMoves(0);
    setTurn(1);
    setScore(Array(4).fill(0));
    shuffle();
  };

  const checkGameOver = useCallback(() => {
    const allMatched = items.every((item) => item.matched);
    if (allMatched) {
      setGameIsOver(true);
      setTurn(0);
    }
  }, [items, setGameIsOver, setTurn]);

  useEffect(() => {
    checkGameOver();
  }, [checkGameOver]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const playerScores = score.map((score, index) => ({
    player: index + 1,
    score,
  }));

  playerScores.sort((a, b) => b.score - a.score);

  const highestScore = playerScores[0]?.score;

  const topPlayers = playerScores.filter(
    (player) => player.score === highestScore
  );

  return (
    <div>
      {gameIsOver && (
        <div className="flex justify-center items-center z-10 absolute top-0 bottom-0 right-0 left-0 bg-[#00000080]">
          <div className="md:max-w-[30rem] flex flex-col items-center rounded-xl max-w-[20rem] w-full gap-[1rem] p-[2rem] bg-commonColor2">
            {numberOfPlayers === 1 && (
              <div className="w-full">
                <div className="mb-[1.5rem] w-full flex flex-col items-center">
                  <h1 className="md:text-[2rem] text-[1.5rem] leading-[1.9rem] font-[700] text-[#152938] mb-[0.5rem]">
                    You did it!
                  </h1>
                  <span className="md:text-[1.15 rem] text-[0.9rem] leading-[1rem] font-[700] text-commonColor3">
                    Game over! Here’s how you got on…
                  </span>
                </div>
                <div className="mb-[1rem] px-[1.5rem] py-[1.1rem] flex justify-between items-center w-full rounded-lg bg-commonColor4">
                  <h3 className="md:text-[1.15rem] text-[1rem] leading-[1.2rem] font-[700] text-commonColor3">
                    Time Elapsed
                  </h3>
                  <span className="md:text-[2rem] text-[1.25rem] leading-[1.9rem] font-[700] text-commonColor8">
                    {String(minutes).padStart(1, "0")}:
                    {String(seconds).padStart(2, "0")}
                  </span>
                </div>
                <div className="px-[1.5rem] py-[1.1rem] flex justify-between items-center w-full rounded-lg bg-commonColor4 mb-[1rem]">
                  <h3 className="md:text-[1.15rem] text-[1rem] leading-[1.2rem] font-[700] text-commonColor3">
                    Moves Taken
                  </h3>
                  <span className="md:text-[2rem] text-[1.25rem] leading-[1.9rem] font-[700] text-commonColor8">
                    {moves} Moves
                  </span>
                </div>
              </div>
            )}
            {numberOfPlayers !== 1 && (
              <div className="w-full">
                <div className="mb-[1.5rem] w-full flex flex-col items-center">
                  <h1 className="md:text-[2rem] text-[1.5rem] leading-[1.9rem] font-[700] text-[#152938] mb-[0.5rem]">
                    {topPlayers.length > 1
                      ? `It's a tie!`
                      : `Player ${topPlayers[0]?.player} Wins!`}
                  </h1>
                  <span className="md:text-[1.15rem] text-[0.9rem] leading-[1rem] font-[700] text-commonColor3">
                    Game over! Here are the results…
                  </span>
                </div>
                {playerScores
                  .slice(0, numberOfPlayers)
                  .map(({ player, score }, index) => (
                    <div
                      key={index}
                      className={clsx(
                        score === highestScore
                          ? "bg-[#152938]"
                          : "bg-commonColor4",
                        "px-[1.5rem] py-[1.1rem] flex justify-between items-center w-full rounded-lg mb-[1rem]"
                      )}
                    >
                      <h3
                        className={clsx(
                          score === highestScore
                            ? "text-commonColor5"
                            : "text-commonColor3",
                          "md:text-[1.15rem] text-[1rem] leading-[1.2rem] font-[700] "
                        )}
                      >
                        {`Player ${player}`}
                        {score === highestScore && " (Winner!)"}
                      </h3>
                      <span
                        className={clsx(
                          score === highestScore
                            ? "text-commonColor5"
                            : "text-commonColor8",
                          "md:text-[2rem] text-[1.25rem] leading-[1.9rem] font-[700] "
                        )}
                      >
                        {score} Pairs
                      </span>
                    </div>
                  ))}
              </div>
            )}
            <div className="md:flex md:justify-between gap-[1rem] w-full">
              <button
                onClick={restart}
                className="md:text-[1.2rem] md:max-w-[16.5rem] md:mb-0 bg-commonColor mb-[1rem] max-w-[17.45rem] w-full p-[0.65rem] text-[1.15rem] leading-[1.4rem] font-[700] text-commonColor5 text-center rounded-full outline-none hover:bg-[#FFB84A] transition-all duration-300"
              >
                Restart
              </button>
              <button
                onClick={newGame}
                className="md:text-[1.2rem] md:max-w-[16.5rem] bg-commonColor4 max-w-[17.45rem] w-full p-[0.65rem] text-[1.15rem] leading-[1.4rem] font-[700] text-commonColor8 text-center rounded-full outline-none hover:bg-commonColor6 transition-all duration-300"
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
