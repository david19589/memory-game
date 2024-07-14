import { useStateContext, GameItem } from "./use-state-context";

export const useShuffle = () => {
  const { setItems, setTurn, theme, gridSize } = useStateContext();

  const shuffle = () => {
    let items;
    if (theme === "icons") {
      items =
        gridSize === "6x6"
          ? [...gameImages6x6, ...gameImages6x6]
          : [...gameImages, ...gameImages];
    } else {
      items =
        gridSize === "6x6"
          ? [...gameNumbers6x6, ...gameNumbers6x6]
          : [...gameNumbers, ...gameNumbers];
    }
    const shuffledItems: GameItem[] = items
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({ ...item, id: index + 1 }));
    setItems(shuffledItems);
    setTurn(0);
  };
  return { shuffle };
};

const gameImages = [
  { src: "/src/assets/atom-solid.svg", matched: false },
  { src: "/src/assets/baseball-bat-ball-solid.svg", matched: false },
  { src: "/src/assets/bowling-ball-solid.svg", matched: false },
  { src: "/src/assets/droplet-solid.svg", matched: false },
  { src: "/src/assets/fan-solid.svg", matched: false },
  { src: "/src/assets/gear-solid.svg", matched: false },
  { src: "/src/assets/meteor-solid.svg", matched: false },
  { src: "/src/assets/moon-solid.svg", matched: false },
];

const gameImages6x6 = [
  { src: "/src/assets/atom-solid.svg", matched: false },
  { src: "/src/assets/baseball-bat-ball-solid.svg", matched: false },
  { src: "/src/assets/bowling-ball-solid.svg", matched: false },
  { src: "/src/assets/droplet-solid.svg", matched: false },
  { src: "/src/assets/fan-solid.svg", matched: false },
  { src: "/src/assets/gear-solid.svg", matched: false },
  { src: "/src/assets/meteor-solid.svg", matched: false },
  { src: "/src/assets/moon-solid.svg", matched: false },
  { src: "/src/assets/satellite-solid.svg", matched: false },
  { src: "/src/assets/seedling-solid.svg", matched: false },
  { src: "/src/assets/shield-solid.svg", matched: false },
  { src: "/src/assets/shuttle-space-solid.svg", matched: false },
  { src: "/src/assets/snowflake-solid.svg", matched: false },
  { src: "/src/assets/torii-gate-solid.svg", matched: false },
  { src: "/src/assets/umbrella-beach-solid.svg", matched: false },
  { src: "/src/assets/user-astronaut-solid.svg", matched: false },
  { src: "/src/assets/laptop-code-solid.svg", matched: false },
  { src: "/src/assets/volleyball-solid.svg", matched: false },
];

const gameNumbers = [
  { number: 1, matched: false },
  { number: 2, matched: false },
  { number: 3, matched: false },
  { number: 4, matched: false },
  { number: 5, matched: false },
  { number: 6, matched: false },
  { number: 7, matched: false },
  { number: 8, matched: false },
];

const gameNumbers6x6 = [
  { number: 1, matched: false },
  { number: 2, matched: false },
  { number: 3, matched: false },
  { number: 4, matched: false },
  { number: 5, matched: false },
  { number: 6, matched: false },
  { number: 7, matched: false },
  { number: 8, matched: false },
  { number: 9, matched: false },
  { number: 10, matched: false },
  { number: 11, matched: false },
  { number: 12, matched: false },
  { number: 13, matched: false },
  { number: 14, matched: false },
  { number: 15, matched: false },
  { number: 16, matched: false },
  { number: 17, matched: false },
  { number: 18, matched: false },
];
