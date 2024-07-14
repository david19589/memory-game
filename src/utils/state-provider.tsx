import { useState, ReactNode } from "react";
import StateContext from "./state-context";
import { GameItem } from "../utils/use-state-context";

export function StateProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("numbers");
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const [gridSize, SetGridSize] = useState("4x4");
  const [startGame, setStartGame] = useState(false);
  const [items, setItems] = useState<GameItem[]>([]);
  const [turn, setTurn] = useState(1);
  const [firstChoice, setFirstChoice] = useState<GameItem | null>(null);
  const [secondChoice, setSecondChoice] = useState<GameItem | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [time, setTime] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <StateContext.Provider
      value={{
        theme,
        setTheme,
        numberOfPlayers,
        setNumberOfPlayers,
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
        gameIsOver,
        setGameIsOver,
        moves,
        setMoves,
        showMenu,
        setShowMenu,
        score,
        setScore,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
