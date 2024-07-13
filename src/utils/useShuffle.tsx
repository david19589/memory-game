import { useStateContext, GameItem } from "./use-state-context";

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

export const useShuffle = () => {
  const { setItems, setTurn, theme } = useStateContext();

  const shuffle = () => {
    let items;
    if (theme === "icons") {
      items = [...gameImages, ...gameImages];
    } else {
      items = [...gameNumbers, ...gameNumbers];
    }
    const shuffledItems: GameItem[] = items
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({ ...item, id: index + 1 }));
    setItems(shuffledItems);
    setTurn(0);
  };
  return { shuffle };
};
