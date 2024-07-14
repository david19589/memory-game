import { useStateContext } from "../../utils/use-state-context";
import { useShuffle } from "../../utils/useShuffle";

function Menu() {
  const {
    setTheme,
    setNumberOfPlayers,
    SetGridSize,
    setStartGame,
    setTime,
    setFirstChoice,
    setMoves,
    showMenu,
    setShowMenu,
    setTurn,
  } = useStateContext();

  const { shuffle } = useShuffle();

  const newGame = () => {
    setShowMenu(false);
    setStartGame(false);
    setMoves(0);
    setTime(0);
    setFirstChoice(null);
    setTheme("numbers");
    setNumberOfPlayers(1);
    SetGridSize("4x4");
    setTurn(1);
    shuffle();
  };

  const restart = () => {
    setShowMenu(false);
    setTime(0);
    setFirstChoice(null);
    setMoves(0);
    setTurn(1);
    shuffle();
  };

  return (
    <div>
      <button
        onClick={() => setShowMenu(true)}
        className="md:hidden flex justify-center md:text-[1.65rem] md:leading-[2rem] md:max-w-[7.6rem] max-w-[4.9rem] w-full p-[0.65rem] text-[1rem] leading-[1.2rem] font-[700] text-[#FCFCFC] bg-[#FDA214] hover:bg-[#FFB84A] rounded-full outline-none transition-all duration-300"
      >
        Menu
      </button>
      <div className="max-w-[90rem] md:flex hidden items-center rounded-xl w-full gap-[1rem]">
        <button
          onClick={restart}
          className="bg-[#FDA214] px-[1.5rem] py-[0.8rem] text-[1.3rem] leading-[1.4rem] font-[700] text-[#FCFCFC] text-center rounded-full outline-none hover:bg-[#FFB84A] transition-all duration-300"
        >
          Restart
        </button>
        <button
          onClick={newGame}
          className="bg-[#DFE7EC] px-[1.5rem] py-[0.8rem] text-[1.3rem] leading-[1.4rem] font-[700] text-[#304859] text-center rounded-full outline-none hover:bg-[#6395B8] transition-all duration-300"
        >
          New Game
        </button>
      </div>
      {showMenu && (
        <div className="flex justify-center items-center z-10 absolute top-0 bottom-0 right-0 left-0 bg-[#00000080]">
          <div className="md:max-w-[30rem] flex flex-col items-center rounded-xl max-w-[20rem] w-full gap-[1rem] p-[1.5rem] bg-[#F2F2F2]">
            <button
              onClick={restart}
              className="bg-[#FDA214] max-w-[17.45rem] w-full p-[0.65rem] text-[1.15rem] leading-[1.4rem] font-[700] text-[#FCFCFC] text-center rounded-full outline-none hover:bg-[#FFB84A] transition-all duration-300"
            >
              Restart
            </button>
            <button
              onClick={newGame}
              className="bg-[#DFE7EC] max-w-[17.45rem] w-full p-[0.65rem] text-[1.15rem] leading-[1.4rem] font-[700] text-[#304859] text-center rounded-full outline-none hover:bg-[#6395B8] transition-all duration-300"
            >
              New Game
            </button>
            <button
              onClick={() => {
                setShowMenu(false);
              }}
              className="bg-[#DFE7EC] max-w-[17.45rem] w-full p-[0.65rem] text-[1.15rem] leading-[1.4rem] font-[700] text-[#304859] text-center rounded-full outline-none hover:bg-[#6395B8] transition-all duration-300"
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
