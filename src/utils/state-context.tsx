import { createContext, Dispatch, SetStateAction } from "react";
import { GameItem } from "../utils/use-state-context";

export interface StateContextProps {
  theme: string;
  setTheme: (status: string) => void;
  numberOfPlayers: number;
  setNumberOfPlayers: (status: number) => void;
  gridSize: string;
  SetGridSize: (status: string) => void;
  startGame: boolean;
  setStartGame: (status: boolean) => void;
  items: GameItem[];
  setItems: Dispatch<SetStateAction<GameItem[]>>;
  turn: number;
  setTurn: (status: number) => void;
  firstChoice: GameItem | null;
  setFirstChoice: (status: GameItem | null) => void;
  secondChoice: GameItem | null;
  setSecondChoice: (status: GameItem | null) => void;
  disabled: boolean;
  setDisabled: (status: boolean) => void;
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
  gameIsOver: boolean;
  setGameIsOver: (status: boolean) => void;
  moves: number;
  setMoves: Dispatch<SetStateAction<number>>;
  showMenu: boolean;
  setShowMenu: (status: boolean) => void;
  score: number[];
  setScore: Dispatch<SetStateAction<number[]>>;
}
const StateContext = createContext<StateContextProps | undefined>(undefined);

export default StateContext;
