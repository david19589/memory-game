import { useState } from "react";
import { useStateContext } from "../../utils/use-state-context";
import { useShuffle } from "../../utils/useShuffle";

function Menu() {
  const {
    setTheme,
    setNumberOfPlayer,
    SetGridSize,
    setStartGame,
    setTime,
    setFirstChoice,
  } = useStateContext();
  const [showMenu, ShowMenu] = useState(false);
  const { shuffle } = useShuffle();

  const newGame = () => {
    setStartGame(false);
    setTheme("numbers");
    setNumberOfPlayer(1);
    SetGridSize("4x4");
  };

  const restart = () => {
    ShowMenu(false);
    setTime(0);
    setFirstChoice(null);
    shuffle();
  };

  return (
    <div>
      <button
        onClick={() => ShowMenu(true)}
        className="md:hidden flex justify-center md:text-[1.65rem] md:leading-[2rem] md:max-w-[7.6rem] max-w-[4.9rem] w-full p-[0.65rem] text-[1rem] leading-[1.2rem] font-[700] text-[#FCFCFC] bg-[#FDA214] hover:bg-[#FFB84A] rounded-full outline-none transition-all duration-300"
      >
        Menu
      </button>
      {showMenu && (
        <div className="flex justify-center items-center z-10 absolute top-0 bottom-0 right-0 left-0 bg-[#00000080]">
          <div className="md:max-w-[30rem] flex flex-col items-center rounded-xl max-w-[20rem] w-full gap-[1rem] p-[1.5rem] bg-[#F2F2F2]">
            <button
              onClick={restart}
              className="md:text-[2rem] md:leading-[2.5rem] md:max-w-[33.81rem] bg-[#FDA214] max-w-[17.45rem] w-full p-[0.65rem] text-[1.15rem] leading-[1.4rem] font-[700] text-[#FCFCFC] text-center rounded-full outline-none hover:bg-[#FFB84A] transition-all duration-300"
            >
              Restart
            </button>
            <button
              onClick={newGame}
              className="md:text-[2rem] md:leading-[2.5rem] md:max-w-[33.81rem] bg-[#DFE7EC] max-w-[17.45rem] w-full p-[0.65rem] text-[1.15rem] leading-[1.4rem] font-[700] text-[#304859] text-center rounded-full outline-none hover:bg-[#6395B8] transition-all duration-300"
            >
              New Game
            </button>
            <button
              onClick={() => {
                ShowMenu(false);
              }}
              className="md:text-[2rem] md:leading-[2.5rem] md:max-w-[33.81rem] bg-[#DFE7EC] max-w-[17.45rem] w-full p-[0.65rem] text-[1.15rem] leading-[1.4rem] font-[700] text-[#304859] text-center rounded-full outline-none hover:bg-[#6395B8] transition-all duration-300"
            >
              Resume Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
