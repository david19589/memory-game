import { useState, ReactNode } from "react";
import StateContext from "./state-context";
import { GameItem } from "../utils/use-state-context";

export function StateProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("numbers");
  const [numberOfPlayer, setNumberOfPlayer] = useState(1);
  const [gridSize, SetGridSize] = useState("4x4");
  const [startGame, setStartGame] = useState(false);
  const [items, setItems] = useState<GameItem[]>([]);
  const [turn, setTurn] = useState(0);
  const [firstChoice, setFirstChoice] = useState<GameItem | null>(null);
  const [secondChoice, setSecondChoice] = useState<GameItem | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [time, setTime] = useState(0);

  return (
    <StateContext.Provider
      value={{
        theme,
        setTheme,
        numberOfPlayer,
        setNumberOfPlayer,
        gridSize,
        SetGridSize,
        startGame,
        setStartGame,
        items,
        setItems,
        turn,
        setTurn,
        firstChoice,
        setFirstChoice,
        secondChoice,
        setSecondChoice,
        disabled,
        setDisabled,
        time,
        setTime,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
