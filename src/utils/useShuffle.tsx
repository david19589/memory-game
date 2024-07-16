import { useStateContext, GameItem } from "./use-state-context";
import images from "./img-data";

interface ImageItem {
  src: string;
  matched: boolean;
}

interface NumberItem {
  number: number;
  matched: boolean;
}

type itemType = ImageItem | NumberItem;

export const useShuffle = () => {
  const { setItems, setTurn, theme, gridSize, setScore } = useStateContext();

  const shuffle = () => {
    let items: itemType[];
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
    setTurn(1);
    setScore(Array(4).fill(0));
  };
  return { shuffle };
};

const gameImages = [
  { src: images.atom, matched: false },
  { src: images.baseball, matched: false },
  { src: images.bowling, matched: false },
  { src: images.droplet, matched: false },
  { src: images.fan, matched: false },
  { src: images.gear, matched: false },
  { src: images.meteor, matched: false },
  { src: images.moon, matched: false },
];

const gameImages6x6 = [
  { src: images.atom, matched: false },
  { src: images.baseball, matched: false },
  { src: images.bowling, matched: false },
  { src: images.droplet, matched: false },
  { src: images.fan, matched: false },
  { src: images.gear, matched: false },
  { src: images.meteor, matched: false },
  { src: images.moon, matched: false },
  { src: images.satellite, matched: false },
  { src: images.seedling, matched: false },
  { src: images.shield, matched: false },
  { src: images.shuttle, matched: false },
  { src: images.snowflake, matched: false },
  { src: images.torii, matched: false },
  { src: images.umbrella, matched: false },
  { src: images.astronaut, matched: false },
  { src: images.laptop, matched: false },
  { src: images.volleyball, matched: false },
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
