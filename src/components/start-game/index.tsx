import clsx from "clsx";
import Logo from "/src/assets/logo.svg";
import { useStateContext } from "../../utils/use-state-context";
import { useShuffle } from "../../utils/useShuffle";

function StartGameMenu() {
  const {
    theme,
    setTheme,
    numberOfPlayers,
    setNumberOfPlayers,
    gridSize,
    SetGridSize,
    setStartGame,
  } = useStateContext();

  const { shuffle } = useShuffle();

  return (
    <div className="bg-[#152938] flex flex-col items-center justify-center h-[100vh] w-[100vw] px-[1rem]">
      <img className="md:mb-[5rem] mb-[3rem]" src={Logo} alt="Logo" />
      <div className="md:max-w-[40rem] md:p-[3.5rem] bg-commonColor5 rounded-xl p-[1.5rem] max-w-[20rem] w-full">
        <div className="mb-[1.5rem]">
          <h2 className="md:text-[1.3rem] md:leading-[1.5rem] text-[0.98rem] leading-[1.2rem] font-[700] text-commonColor3 mb-[0.8rem] w-max">
            Select Theme
          </h2>
          <div className="md:gap-[1.9rem] flex gap-[0.8rem]">
            <button
              onClick={() => {
                setTheme("numbers");
              }}
              className={clsx(
                theme === "numbers"
                  ? "bg-commonColor8"
                  : "bg-commonColor7 hover:bg-commonColor6",
                "md:text-[1.65rem] md:leading-[2rem] md:max-w-[16rem] max-w-[8.4rem] w-full p-[0.65rem] text-[1rem] leading-[1.2rem] font-[700] text-commonColor5 text-center rounded-full outline-none transition-all duration-300"
              )}
            >
              Numbers
            </button>
            <button
              onClick={() => {
                setTheme("icons");
              }}
              className={clsx(
                theme === "icons"
                  ? "bg-commonColor8"
                  : "bg-commonColor7 hover:bg-commonColor6",
                "md:text-[1.65rem] md:leading-[2rem] md:max-w-[16rem] max-w-[8.4rem] w-full p-[0.65rem] text-[1rem] leading-[1.2rem] font-[700] text-commonColor5 text-center rounded-full outline-none transition-all duration-300"
              )}
            >
              Icons
            </button>
          </div>
        </div>
        <div className="mb-[1.5rem]">
          <h2 className="md:text-[1.3rem] md:leading-[1.5rem] text-[0.98rem] leading-[1.2rem] font-[700] text-commonColor3 mb-[0.8rem] w-max">
            Numbers of Players
          </h2>
          <div className="md:gap-[1.4rem] flex gap-[0.8rem]">
            <button
              onClick={() => {
                setNumberOfPlayers(1);
              }}
              className={clsx(
                numberOfPlayers === 1
                  ? "bg-commonColor8"
                  : "bg-commonColor7 hover:bg-commonColor6",
                "md:text-[1.65rem] md:leading-[2rem] md:max-w-[7.6rem] max-w-[4rem] w-full p-[0.65rem] text-[1rem] leading-[1.2rem] font-[700] text-commonColor5 text-center rounded-full outline-none transition-all duration-300"
              )}
            >
              1
            </button>
            <button
              onClick={() => {
                setNumberOfPlayers(2);
              }}
              className={clsx(
                numberOfPlayers === 2
                  ? "bg-commonColor8"
                  : "bg-commonColor7 hover:bg-commonColor6",
                "md:text-[1.65rem] md:leading-[2rem] md:max-w-[7.6rem] max-w-[4rem] w-full p-[0.65rem] text-[1rem] leading-[1.2rem] font-[700] text-commonColor5 text-center rounded-full outline-none transition-all duration-300"
              )}
            >
              2
            </button>
            <button
              onClick={() => {
                setNumberOfPlayers(3);
              }}
              className={clsx(
                numberOfPlayers === 3
                  ? "bg-commonColor8"
                  : "bg-commonColor7 hover:bg-commonColor6",
                "md:text-[1.65rem] md:leading-[2rem] md:max-w-[7.6rem] max-w-[4rem] w-full p-[0.65rem] text-[1rem] leading-[1.2rem] font-[700] text-commonColor5 text-center rounded-full outline-none transition-all duration-300"
              )}
            >
              3
            </button>
            <button
              onClick={() => {
                setNumberOfPlayers(4);
              }}
              className={clsx(
                numberOfPlayers === 4
                  ? "bg-commonColor8"
                  : "bg-commonColor7 hover:bg-commonColor6",
                "md:text-[1.65rem] md:leading-[2rem] md:max-w-[7.6rem] max-w-[4rem] w-full p-[0.65rem] text-[1rem] leading-[1.2rem] font-[700] text-commonColor5 text-center rounded-full outline-none transition-all duration-300"
              )}
            >
              4
            </button>
          </div>
        </div>
        <div className="mb-[2rem]">
          <h2 className="md:text-[1.3rem] md:leading-[1.5rem] text-[0.98rem] leading-[1.2rem] font-[700] text-commonColor3 mb-[0.8rem] w-max">
            Grid Size
          </h2>
          <div className="md:gap-[1.9rem] flex gap-[0.8rem]">
            <button
              onClick={() => {
                SetGridSize("4x4");
              }}
              className={clsx(
                gridSize === "4x4"
                  ? "bg-commonColor8"
                  : "bg-commonColor7 hover:bg-commonColor6",
                "md:text-[1.65rem] md:leading-[2rem] md:max-w-[16rem] max-w-[8.4rem] w-full p-[0.65rem] text-[1rem] leading-[1.2rem] font-[700] text-commonColor5 text-center rounded-full outline-none transition-all duration-300"
              )}
            >
              4x4
            </button>
            <button
              onClick={() => {
                SetGridSize("6x6");
              }}
              className={clsx(
                gridSize === "6x6"
                  ? "bg-commonColor8"
                  : "bg-commonColor7 hover:bg-commonColor6",
                "md:text-[1.65rem] md:leading-[2rem] md:max-w-[16rem] max-w-[8.4rem] w-full p-[0.65rem] text-[1rem] leading-[1.2rem] font-[700] text-commonColor5 text-center rounded-full outline-none transition-all duration-300"
              )}
            >
              6x6
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            setStartGame(true);
            shuffle();
          }}
          className="md:text-[2rem] md:leading-[2.5rem] md:max-w-[33.81rem] bg-commonColor max-w-[17.45rem] w-full p-[0.65rem] text-[1.15rem] leading-[1.4rem] font-[700] text-commonColor5 text-center rounded-full outline-none hover:bg-[#FFB84A] transition-all duration-300"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default StartGameMenu;
