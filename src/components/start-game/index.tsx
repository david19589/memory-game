import clsx from "clsx";
import Logo from "/src/assets/logo.svg";

function StartGame(props: {
  theme: boolean;
  setTheme: (status: boolean) => void;
  numberOfPlayer: number;
  setNumberOfPlayer: (status: number) => void;
  gridSize: boolean;
  SetGridSize: (status: boolean) => void;
}) {
  return (
    <div className="bg-[#152938] flex flex-col items-center justify-center h-[100vh] w-[100vw] px-[1rem]">
      <img className="md:mb-[5rem] mb-[3rem]" src={Logo} alt="Logo" />
      <div className="md:max-w-[40rem] md:p-[3.5rem] bg-[#FCFCFC] rounded-xl p-[1.5rem] max-w-[20rem] w-full">
        <div className="mb-[1.5rem]">
          <h2 className="md:text-[1.3rem] md:leading-[1.5rem] text-[0.98rem] leading-[1.2rem] font-[700] text-[#7191A5] mb-[0.8rem] w-max">
            Select Theme
          </h2>
          <div className="md:gap-[1.9rem] flex gap-[0.8rem]">
            <button
              onClick={() => {
                props.setTheme(false);
              }}
              className={clsx(
                props.theme
                  ? "bg-[#BCCED9] hover:bg-[#6395B8]"
                  : "bg-[#304859]",
                "md:text-[1.65rem] md:leading-[2rem] md:max-w-[16rem] max-w-[8.4rem] w-full p-[0.65rem] text-[1rem] leading-[1.2rem] font-[700] text-[#FCFCFC] text-center rounded-full outline-none transition-all duration-300"
              )}
            >
              Numbers
            </button>
            <button
              onClick={() => {
                props.setTheme(true);
              }}
              className={clsx(
                props.theme
                  ? "bg-[#304859]"
                  : "bg-[#BCCED9] hover:bg-[#6395B8]",
                "md:text-[1.65rem] md:leading-[2rem] md:max-w-[16rem] max-w-[8.4rem] w-full p-[0.65rem] text-[1rem] leading-[1.2rem] font-[700] text-[#FCFCFC] text-center rounded-full outline-none transition-all duration-300"
              )}
            >
              Icons
            </button>
          </div>
        </div>
        <div className="mb-[1.5rem]">
          <h2 className="md:text-[1.3rem] md:leading-[1.5rem] text-[0.98rem] leading-[1.2rem] font-[700] text-[#7191A5] mb-[0.8rem] w-max">
            Numbers of Players
          </h2>
          <div className="md:gap-[1.4rem] flex gap-[0.8rem]">
            <button
              onClick={() => {
                props.setNumberOfPlayer(1);
              }}
              className={clsx(
                props.numberOfPlayer === 1
                  ? "bg-[#304859]"
                  : "bg-[#BCCED9] hover:bg-[#6395B8]",
                "md:text-[1.65rem] md:leading-[2rem] md:max-w-[7.6rem] max-w-[4rem] w-full p-[0.65rem] text-[1rem] leading-[1.2rem] font-[700] text-[#FCFCFC] text-center rounded-full outline-none transition-all duration-300"
              )}
            >
              1
            </button>
            <button
              onClick={() => {
                props.setNumberOfPlayer(2);
              }}
              className={clsx(
                props.numberOfPlayer === 2
                  ? "bg-[#304859]"
                  : "bg-[#BCCED9] hover:bg-[#6395B8]",
                "md:text-[1.65rem] md:leading-[2rem] md:max-w-[7.6rem] max-w-[4rem] w-full p-[0.65rem] text-[1rem] leading-[1.2rem] font-[700] text-[#FCFCFC] text-center rounded-full outline-none transition-all duration-300"
              )}
            >
              2
            </button>
            <button
              onClick={() => {
                props.setNumberOfPlayer(3);
              }}
              className={clsx(
                props.numberOfPlayer === 3
                  ? "bg-[#304859]"
                  : "bg-[#BCCED9] hover:bg-[#6395B8]",
                "md:text-[1.65rem] md:leading-[2rem] md:max-w-[7.6rem] max-w-[4rem] w-full p-[0.65rem] text-[1rem] leading-[1.2rem] font-[700] text-[#FCFCFC] text-center rounded-full outline-none transition-all duration-300"
              )}
            >
              3
            </button>
            <button
              onClick={() => {
                props.setNumberOfPlayer(4);
              }}
              className={clsx(
                props.numberOfPlayer === 4
                  ? "bg-[#304859]"
                  : "bg-[#BCCED9] hover:bg-[#6395B8]",
                "md:text-[1.65rem] md:leading-[2rem] md:max-w-[7.6rem] max-w-[4rem] w-full p-[0.65rem] text-[1rem] leading-[1.2rem] font-[700] text-[#FCFCFC] text-center rounded-full outline-none transition-all duration-300"
              )}
            >
              4
            </button>
          </div>
        </div>
        <div className="mb-[2rem]">
          <h2 className="md:text-[1.3rem] md:leading-[1.5rem] text-[0.98rem] leading-[1.2rem] font-[700] text-[#7191A5] mb-[0.8rem] w-max">
            Grid Size
          </h2>
          <div className="md:gap-[1.9rem] flex gap-[0.8rem]">
            <button
              onClick={() => {
                props.SetGridSize(false);
              }}
              className={clsx(
                props.gridSize
                  ? "bg-[#BCCED9] hover:bg-[#6395B8]"
                  : "bg-[#304859]",
                "md:text-[1.65rem] md:leading-[2rem] md:max-w-[16rem] max-w-[8.4rem] w-full p-[0.65rem] text-[1rem] leading-[1.2rem] font-[700] text-[#FCFCFC] text-center rounded-full outline-none transition-all duration-300"
              )}
            >
              4x4
            </button>
            <button
              onClick={() => {
                props.SetGridSize(true);
              }}
              className={clsx(
                props.gridSize
                  ? "bg-[#304859]"
                  : "bg-[#BCCED9] hover:bg-[#6395B8]",
                "md:text-[1.65rem] md:leading-[2rem] md:max-w-[16rem] max-w-[8.4rem] w-full p-[0.65rem] text-[1rem] leading-[1.2rem] font-[700] text-[#FCFCFC] text-center rounded-full outline-none transition-all duration-300"
              )}
            >
              6x6
            </button>
          </div>
        </div>
        <button className="md:text-[2rem] md:leading-[2.5rem] md:max-w-[33.81rem] bg-[#FDA214] max-w-[17.45rem] w-full p-[0.65rem] text-[1.15rem] leading-[1.4rem] font-[700] text-[#FCFCFC] text-center rounded-full outline-none hover:bg-[#FFB84A] transition-all duration-300">
          Start Game
        </button>
      </div>
    </div>
  );
}

export default StartGame;
